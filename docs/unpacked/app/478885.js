var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./434517.js");
var a = r(require("./395654.js"));
var o = require("./223713.js");
var s = r(require("./537152.js"));
var l = r(require("./647349.js"));
var u = require("./368170.js");
const c = ("Modernizr" in window);
const d = (0, o.getModernizr)();
class p extends a.default {
  constructor() {
    super();
    this.supported = c ? d.serviceworker : "serviceWorker" in navigator;
    this._checkAlive = () => {
      var e;
      const t = (e = navigator.serviceWorker) === null || e === undefined ? undefined : e.controller;
      return Boolean(t);
    };
    this._checkStreamingSupport = () => {
      var e;
      if (!this.supported || !this.alive || u.UA.isSafari) {
        return void (this._streamingSupported = false);
      }
      if (this._streamingSupportedPromise) {
        return this._streamingSupported;
      }
      const t = (e = navigator.serviceWorker) === null || e === undefined ? undefined : e.controller;
      if (t) {
        this._streamingSupportedPromise = (0, i.promiseTimeout)(s.default.request(t, l.default.STREAMING_SUPPORTED), 100).catch(() => false).then(e => {
          delete this._streamingSupportedPromise;
          this.streamingSupported = e;
          return e;
        });
      }
    };
    this._setSupported = e => {
      this.supported = e;
    };
    if (c) {
      d.on("serviceworker", this._setSupported);
    }
    const e = this;
    Object.defineProperty(this, "streamingSupported", {
      get: () => {
        e._checkStreamingSupport();
        return e._streamingSupported;
      },
      set(t) {
        if (t !== e._streamingSupported) {
          e.trigger("change:streamingSupported", t);
        }
        e._streamingSupported = t;
      }
    });
    Object.defineProperty(this, "alive", {
      get: () => e._checkAlive()
    });
  }
}
var f = new p();
exports.default = f;