var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnknownNumber = f;
exports.widToFormattedUser = function (e) {
  if (e instanceof u.default) {
    if (e.isLid()) {
      __LOG__(3)`widToFormattedUser should not receive lid wid`;
      return f();
    } else {
      return p(e.user);
    }
  }
  if ((0, s.isString)(e)) {
    if (e.endsWith(a.LID_DOMAIN)) {
      __LOG__(3)`widToFormattedUser should not receive lid string`;
      return f();
    } else {
      return p(e.split("@")[0]);
    }
  }
  return "";
};
var i = r(require("../vendor/288306.js"));
var a = require("./418987.js");
var o = require("./986120.js");
var s = require("./724976.js");
var l = r(require("./932325.js"));
var u = r(require("./124928.js"));
var c = require("../vendor/548360.js");
const d = (0, i.default)(e => e === "Server" ? e : (0, o.formatPhone)(e));
function p(e) {
  if (l.default.isRTL()) {
    return l.default.isolateLTR(d(e));
  } else {
    return d(e);
  }
}
function f() {
  return c.fbt._("Unknown number", null, {
    hk: "RMqyA"
  }).toString();
}