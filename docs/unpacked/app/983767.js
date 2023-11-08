var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTcToken = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./459617.js");
var o = require("./328329.js");
var s = require("./206464.js");
var l = require("./61229.js");
function u() {
  return (u = (0, i.default)(function* (e, t, n) {
    if (n == null) {
      return;
    }
    if (!e.isUserNotPSA()) {
      return;
    }
    const r = yield (0, s.getExisting)(e);
    if (r == null) {
      return void (yield (0, o.createOrUpdateOrphanTcToken)(e.toString(), {
        tcToken: n,
        tcTokenTimestamp: t
      }));
    }
    if (r.tcToken != null && (0, a.arrayBuffersEqualUNSAFE)(r.tcToken, n) || r.tcTokenTimestamp != null && r.tcTokenTimestamp > t) {
      return;
    }
    const i = {
      tcToken: n,
      tcTokenTimestamp: t
    };
    r.set(i);
    yield (0, l.getChatTable)().merge(e.toString(), i);
  })).apply(this, arguments);
}