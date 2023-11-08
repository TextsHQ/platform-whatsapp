var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  var n;
  var a;
  var l;
  const i = [];
  if (t !== true) {
    return i;
  }
  if (((n = e.interactivePayload) === null || n === undefined ? undefined : n.buttons) == null) {
    return i;
  }
  const u = (a = (l = e.interactivePayload) === null || l === undefined ? undefined : l.buttons) !== null && a !== undefined ? a : [];
  const s = [];
  for (let e = 0; e < u.length; e++) {
    const t = u[e];
    if (t == null) {
      continue;
    }
    const n = (0, o.nativeFlowButtonToCtaButton)(t, e);
    if (n != null) {
      s.push(n);
    }
  }
  return (0, r.default)(s, e);
};
var r = a(require("./460654.js"));
var o = require("../app/729605.js");