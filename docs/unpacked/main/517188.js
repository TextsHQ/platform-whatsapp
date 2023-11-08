var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = require("../app/402994.js");
var i = a(require("../app/565754.js"));
var u = require("../app/918602.js");
var s = require("../app/693741.js");
var c = require("../app/459857.js");
var d = a(require("../app/556869.js"));
function f() {
  return (f = (0, r.default)(function* (e, t, n, a) {
    const r = yield p(e, t, n, a);
    try {
      const t = yield (0, u.addAndSendMsgToChat)(e, r)[1];
      if (!t || t.messageSendResult !== s.SendMsgResult.OK) {
        throw (0, d.default)("Location message SendMsgResult failure status");
      }
    } catch (e) {
      __LOG__(3)`Location message send to chat failure: ${e}`;
      throw e;
    }
  })).apply(this, arguments);
}
function p() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, r.default)(function* (e, t, n, a) {
    const r = (0, c.getMaybeMeUser)();
    return {
      type: "location",
      ack: l.ACK.CLOCK,
      from: r,
      id: new i.default({
        from: r,
        to: e.id,
        id: yield i.default.newId(),
        participant: undefined,
        selfDir: "out"
      }),
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, o.unixTime)(),
      to: e.id,
      lat: t,
      lng: n,
      loc: a
    };
  })).apply(this, arguments);
}