var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemMessageWithSingleCTA = undefined;
var r = a(require("../vendor/667294.js"));
exports.SystemMessageWithSingleCTA = e => {
  const {
    bodyText: t,
    ctaText: n,
    icon: a,
    onClick: o,
    onclickRef: l,
    className: i,
    testid: u
  } = e;
  const s = r.default.createElement("span", null, r.default.createElement("span", null, a), r.default.createElement("span", null, t), n != null && ". ", r.default.createElement("span", null, n));
  return r.default.createElement("div", {
    role: o ? "button" : undefined,
    ref: l,
    className: i != null ? i : undefined,
    onClick: o
  }, s);
};