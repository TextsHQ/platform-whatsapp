Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./363111.js");
var i = require("./481173.js");
var a = require("./974922.js");
var o = require("./973981.js");
require("./729804.js");
exports.default = class {
  constructor(e, t, n, i) {
    let o = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    this.componentName = e;
    this.name = t;
    this._isStrong = i;
    this.keys = n;
    const s = a.ProxyStates[t];
    if (!s) {
      __LOG__(4, undefined, new Error(), true)`Unknown StateHOC concern type "${t}"`;
      SEND_LOGS("state-hoc-error");
    }
    this._proxyClass = s;
    this._limitedAccessProxyClass = function (e, t, n, i) {
      const a = {
        $ProxyState$ComponentName: {
          value: e
        },
        proxyBitMask: {
          value: (0, r.genBitMask)(t.prototype.mirrorMask, n)
        }
      };
      for (const t of n) {
        const n = {
          enumerable: true
        };
        n.get = function () {
          return this.$ProxyState$state.get(t);
        };
        n.set = function () {
          __LOG__(4, undefined, new Error())`READ ONLY: Cannot write to proxied property "${t}", created in <${e} />, it is not writable.`;
        };
        if (!i) {
          n.set = function (e) {
            this.$ProxyState$state.set(t, e);
          };
        }
        a[t] = n;
      }
      function o(e) {
        t.call(this, e);
      }
      o.prototype = Object.create(t.prototype, a);
      o.prototype.constructor = o;
      return o;
    }(e, s, n, o);
  }
  getModel(e) {
    if (e instanceof this._proxyClass) {
      return e.$ProxyState$state;
    } else {
      return e;
    }
  }
  getModelAndValidate(e) {
    const t = e instanceof this._proxyClass ? e.$ProxyState$state : e;
    if (t) {
      if (t instanceof i.BaseModel) {
        return t;
      } else {
        __LOG__(4, undefined, new Error(), true)`${this.componentName} given invalid object for ${this.name}: ${(n = t, typeof n == "string" ? n : n.toString ? n.toString() : "Invalid Object")}`;
        SEND_LOGS("state-hoc-error");
        return null;
      }
    } else {
      if (o.Stream.mode === o.StreamMode.MAIN) {
        __LOG__(4, undefined, new Error(), true)`${this.componentName} was not supplied the ${this.name} model with keys ${String(this.keys)}.`;
        SEND_LOGS("state-hoc-error");
      }
      return null;
    }
    var n;
  }
  createProxy(e) {
    return new this._limitedAccessProxyClass(e);
  }
  attachConcern(e, t, n) {
    e.incObservers(!this._isStrong);
    e.mirror.addListener(n, t, this);
  }
  detachConcern(e, t) {
    e.decObservers();
    e.mirror.removeListener(t);
  }
};