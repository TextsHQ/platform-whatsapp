var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./369463.js");
var s = require("./958396.js");
var l = require("./826664.js");
var u = r(require("../vendor/441143.js"));
var c = new class {
  constructor() {
    this._pending = new Map();
    this._handleResponseReceipt = e => {
      const t = (0, s.unwrapResponsePayload)(e.data);
      if (t != null) {
        const {
          invocationId: e,
          result: n
        } = t;
        if (this._pending.has(e)) {
          const {
            resolve: t
          } = (0, a.default)(this._pending.get(e), "this._pending.get(invocationId)");
          t(n);
          this._pending.delete(e);
        }
      }
    };
  }
  setConnectionManager(e) {
    this._conn = e;
    e.waitForConnection().then(() => {
      const t = (0, a.default)(e.getPort(), "Port obtained from ConnectionManager after connection");
      t.addEventListener("message", this._handleResponseReceipt);
      t.start();
    });
  }
  invoke(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      (0, u.default)(n._conn, "Connection has not been inited");
      yield n._conn.waitForConnection();
      (0, u.default)(n._conn, "Connection has not been inited");
      const r = (0, a.default)(n._conn.getPort(), "Port obtained from ConnectionManager after connection");
      const i = (0, l.genInvocationId)();
      r.postMessage((0, o.buildInvocationPayload)({
        invocationId: i,
        method: e,
        args: t
      }));
      return new Promise((e, t) => {
        n._pending.set(i, {
          resolve: e,
          reject: t
        });
      });
    })();
  }
}();
exports.default = c;