var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./898817.js");
var o = require("./434517.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var l = require("./508718.js");
var u = i(require("./794938.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
exports.default = class {
  constructor(e, t, n, r) {
    this.src = e;
    this.crossOrigin = t;
    this.noXHR = n;
    this.hasPrivacyChecks = r;
    this.generation = 0;
    this.refCount = 0;
    this.inProgress = false;
  }
  key() {
    return `co:${this.crossOrigin ? "Y" : "N"},noXHR:${this.noXHR ? "Y" : "N"},src:${this.src}`;
  }
  sendXHR() {
    if (this.noXHR) {
      return Promise.resolve(true);
    }
    const e = this.src;
    this.inProgress = true;
    const t = new r();
    const n = (0, o.promiseTimeout)(u.default.get(e, undefined, undefined, t.signal), 30000, "ImgRetryTimeout");
    this._xhrRequest = {
      promise: n,
      controller: t
    };
    return this._xhrRequest.promise.then(t => {
      const {
        status: n
      } = t;
      if (n >= 200 && n < 400) {
        return true;
      }
      if (n >= 500) {
        __LOG__(2)`Img:Retry ${e} failed with error code ${n}. Retrying.`;
        new l.WebcImgErrorWamEvent({
          webcImgErrorCode: n
        }).commit();
        return false;
      }
      __LOG__(2)`Img:Retry ${e} failed with error code ${n}. Not retrying.`;
      new l.WebcImgErrorWamEvent({
        webcImgErrorCode: n
      }).commit();
      throw new s.ServerStatusError(null, e, n);
    }).catch(e => {
      if (e instanceof s.ServerStatusError) {
        throw e;
      }
      if (e.name === a.ABORT_ERROR) {
        throw e;
      }
      return false;
    }).finally(() => {
      this.inProgress = false;
    });
  }
  release() {
    this.refCount--;
    return this.refCount <= 0 && (this._xhrRequest && this._xhrRequest.controller.abort(), true);
  }
  shouldRetain() {
    return this.refCount > 0;
  }
};