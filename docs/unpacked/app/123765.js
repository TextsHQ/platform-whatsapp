var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAddOnAcksForTable = function (e, t, n) {
  return (0, s.getStorage)().lock([e], function () {
    var e = (0, a.default)(function* (e) {
      let [r] = e;
      const a = [];
      const s = new Map();
      for (const e of t) {
        const t = e.msgKey.toString();
        a.push(t);
        s.set(e.msgKey.toString(), e);
      }
      const l = yield r.anyOf(["msgKey"], a, {
        shouldDecrypt: false
      });
      const u = [];
      const c = [];
      for (const e of l) {
        const t = (0, o.default)(s.get(e.msgKey), "updatesByMsgKey.get(row.msgKey)");
        if (!n(e, t)) {
          continue;
        }
        const r = (0, i.default)((0, i.default)({}, e), {}, {
          ack: t.ack
        });
        u.push(r);
        c.push(t);
      }
      yield r.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(u);
      return c;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./732011.js");