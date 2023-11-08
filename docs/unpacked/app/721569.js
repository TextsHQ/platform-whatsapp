var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromiseRetryLoop = undefined;
var i = r(require("./415227.js"));
var a = require("./504425.js");
var o = require("./8304.js");
var s = require("./950376.js");
exports.PromiseRetryLoop = class {
  constructor(e) {
    this._resolvable = new s.Resolvable();
    this._promise = null;
    this._resetTime = null;
    this._currentLoopIdentificator = 0;
    this.endWithValue = e => {
      this._currentLoopIdentificator++;
      this._resolvable.resolve(e);
    };
    this._options = e;
  }
  resetTimeoutAfter(e) {
    this._resetTime = Date.now() + e;
  }
  cancelReset() {
    this._resetTime = null;
  }
  reset() {
    if (!this._resolvable.resolveWasCalled()) {
      __LOG__(2)`PromiseRetryLoop: resetting ${this._options.name}`;
      this._currentLoopIdentificator++;
      this._runLoop();
    }
  }
  start() {
    if (!this._resolvable.resolveWasCalled()) {
      __LOG__(2)`PromiseRetryLoop: starting ${this._options.name}`;
      if (this._currentLoopIdentificator !== 0) {
        __LOG__(4, undefined, new Error())`PromiseRetryLoop was called several times. You may have race conditions`;
      }
      this._currentLoopIdentificator++;
      this._runLoop();
    }
  }
  _runLoop() {
    const e = this._options;
    const t = this._currentLoopIdentificator;
    let n = (0, a.createTimer)(this._options.timer);
    n();
    const r = () => {
      if (this._resolvable.resolveWasCalled()) {
        return;
      }
      if (t !== this._currentLoopIdentificator) {
        return;
      }
      const i = Date.now();
      this._promise = (0, e.code)(this.endWithValue).then(() => {
        if (this._resolvable.resolveWasCalled()) {
          return;
        }
        const {
          resetDelay: t
        } = e;
        if (t !== undefined && Date.now() >= i + t || this._resetTime != null && this._resetTime <= Date.now()) {
          __LOG__(2)`PromiseRetryLoop: resetting ${e.name}`;
          n = (0, a.createTimer)(this._options.timer);
        }
        this._resetTime = null;
        const s = n();
        __LOG__(2)`PromiseRetryLoop: retrying ${e.name} in ${s}ms`;
        return (0, o.delayMs)(s).then(r);
      });
      return this._promise;
    };
    this._promise = Promise.resolve().then(r);
  }
  promise() {
    if (this._resolvable.resolveWasCalled()) {
      return this._resolvable.promise;
    } else if (this._promise) {
      return Promise.race([this._resolvable.promise, this._promise.then(() => this._resolvable.promise)]);
    } else {
      return Promise.reject((0, i.default)(`PromiseRetryLoop ${this._options.name} had promise() called before start()`));
    }
  }
};