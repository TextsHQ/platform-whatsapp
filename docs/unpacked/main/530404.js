var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./821530.js"));
var l = a(require("./19805.js"));
var i = a(require("../vendor/667294.js"));
var u = e => {
  const {
    hasCaption: t,
    children: n,
    msg: a,
    theme: u,
    Icon: s
  } = e;
  const c = t ? n : i.default.createElement("div", {
    className: o.default.text
  }, i.default.createElement(l.default, {
    msg: a,
    theme: "placeholder"
  }, n));
  return i.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [o.default.containerSmallIcon]: u === "small-icon",
      [o.default.container]: true
    })
  }, s ? i.default.createElement("div", {
    className: o.default.icon
  }, i.default.createElement(s, null)) : null, c);
};
exports.default = u;