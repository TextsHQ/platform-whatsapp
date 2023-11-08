var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLink = u;
exports.findLinks = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const r = (0, a.findLinks)(e, t);
  return r.map(e => c(e, n));
};
exports.hasHttpLink = function (e) {
  return e.body != null && u(e.body, true) != null;
};
Object.defineProperty(exports, "validateEmail", {
  enumerable: true,
  get: function () {
    return a.validateEmail;
  }
});
var i = r(require("../vendor/81109.js"));
var a = require("./755688.js");
var o = require("./359350.js");
var s = require("./714443.js");
var l = require("./459857.js");
function u(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const r = (0, a.findLink)(e, t);
  if (r != null) {
    return c(r, n);
  }
}
function c(e, t) {
  var n;
  const r = (0, l.getMaybeMeUser)();
  let a = null;
  if (t && r) {
    const n = t.isLid() ? (0, s.toLidUserJid)(t.user) : (0, s.toPhoneUserJid)(t.user);
    a = (0, o.findSuspiciousCharacters)(e.domain, n, (0, s.toPhoneUserJid)(r.user), []);
  }
  return (0, i.default)((0, i.default)({}, e), {}, {
    suspiciousCharacters: (n = a) !== null && n !== undefined ? n : undefined
  });
}