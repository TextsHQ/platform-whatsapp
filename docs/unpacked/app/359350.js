Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSuspiciousCharacters = function (e, t, n, s) {
  const l = e.match(o);
  const u = l && l[1];
  if (u == null) {
    return null;
  }
  const c = (0, a.phoneCC)(n);
  let d;
  if (t === "whatsapp") {
    d = "";
  } else {
    const e = (0, i.interpretAndValidateJid)(t.toString());
    d = e.jidType !== "lidUser" ? (0, a.phoneCC)((0, i.toPhoneUserJid)(t)) : "ZZ";
  }
  const p = s.map(e => e.toLowerCase());
  return (0, r.findSuspiciousCharacters)(u, d, c, p);
};
var r = require("./22309.js");
var i = require("./418987.js");
var a = require("./986120.js");
const o = /^(?:https?:\/\/)?([^/?#]+)(?:[/?#]|$)/i;