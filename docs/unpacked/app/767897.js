var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildAddOnMsgKey = function (e, t) {
  const n = !!e.fromMe;
  const r = (0, a.decodeJid)(e.remoteJid);
  let u;
  let c;
  if (n) {
    if (!(r == null || typeof r == "string" || r.isUser())) {
      u = t === true ? (0, s.getMaybeMeLidUser)() : (0, s.getMeUser)();
    }
  } else {
    u = (0, a.decodeJid)(e.participant);
  }
  if (typeof r == "string" || r == null) {
    return null;
  }
  c = u != null && typeof u != "string" ? new o.default({
    id: (0, i.default)(e.id, "key.id"),
    fromMe: n,
    remote: r,
    participant: u
  }) : new o.default({
    id: (0, i.default)(e.id, "key.id"),
    fromMe: n,
    remote: r
  });
  const d = (0, s.getMeUser)();
  const p = c.participant || c.remote;
  const f = (0, l.toUserWid)(n === true ? d : p);
  return {
    msgKey: c,
    sender: f
  };
};
var i = r(require("./670983.js"));
var a = require("./974637.js");
var o = r(require("./565754.js"));
var s = require("./459857.js");
var l = require("./669050.js");