var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendKeyDistributionMsg = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/667845.js"));
var l = a(require("../app/565754.js"));
var i = require("../app/459857.js");
var u = require("../app/669050.js");
var s = a(require("../app/556869.js"));
function c() {
  return (c = (0, r.default)(function* (e) {
    if (!e.isGroup()) {
      return Promise.reject((0, s.default)("[messaging] sendKeyDistributionMsg: only group chats are supported`"));
    }
    const t = (0, i.getMaybeMeUser)();
    const a = new l.default({
      from: t,
      to: e,
      id: yield l.default.newId(),
      participant: (0, u.toUserWid)(t),
      selfDir: "out"
    });
    yield o.default.find(e);
    const {
      encryptAndSendKeyDistributionMsg: r
    } = require("../app/919820.js");
    return r(a);
  })).apply(this, arguments);
}