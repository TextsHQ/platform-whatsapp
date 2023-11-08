var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./508247.js");
var o = r(require("./556869.js"));
class s {
  constructor(e) {
    this._handleMessage = e => {
      if (!e.data || !e.data.action) {
        return;
      }
      const t = e.data;
      if (!e.ports || e.ports.length === 0) {
        return;
      }
      const n = e.ports;
      if (!s.isSW() && window.navigator.serviceWorker && e.source !== window.navigator.serviceWorker.controller) {
        return;
      }
      let r;
      r = typeof e.waitUntil == "function" ? t => e.waitUntil(t) : () => {};
      r(Promise.resolve(this.requestHandler(t)).then(e => {
        n[0].postMessage(e);
      }).catch(e => {
        n[0].postMessage({
          error: e && e.toString()
        });
      }));
    };
    this.requestHandler = e;
  }
  init() {
    const e = s.isSW() ? self : window.navigator.serviceWorker;
    try {
      if (!e) {
        return;
      }
      e.addEventListener("message", this._handleMessage);
    } catch (e) {}
  }
  static isSW() {
    return typeof window == "undefined";
  }
  static getRequestor(e) {
    if (s.isSW()) {
      if (typeof e == "string") {
        return self.clients.get(e);
      } else {
        return Promise.resolve(e);
      }
    } else if (window.navigator.serviceWorker) {
      return window.navigator.serviceWorker.ready.then(() => window.navigator.serviceWorker ? window.navigator.serviceWorker.controller : null);
    } else {
      return Promise.resolve(null);
    }
  }
  static broadcast(e, t) {
    return (0, i.default)(function* () {
      if (!s.isSW()) {
        throw (0, o.default)("Broadcast called from non-serviceworker.");
      }
      const n = yield self.clients.matchAll();
      if (n.length === 0) {
        return Promise.reject((0, o.default)("No clients available."));
      } else {
        return Promise.all(n.map(n => s.request(n, e, t)));
      }
    })();
  }
  static request(e, t, n) {
    const r = new MessageChannel();
    return new Promise((i, l) => {
      r.port1.onmessage = e => {
        var t;
        if ((t = e.data) === null || t === undefined ? undefined : t.error) {
          l(e.data.error);
        } else {
          i(e.data);
        }
      };
      return s.getRequestor(e).then(e => {
        if (!e) {
          return l((0, o.default)("No ServiceWorker controlling this client."));
        }
        e.postMessage({
          action: t,
          message: n,
          version: a.VERSION_STR
        }, [r.port2]);
      });
    });
  }
}
exports.default = s;