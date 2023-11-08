var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    className: t,
    children: n = "",
    href: r,
    selectable: o
  } = e;
  return a.default.createElement(i.SelectableLink, {
    className: t,
    href: r,
    title: r,
    target: "_blank",
    rel: "noopener noreferrer",
    selectable: o
  }, n);
};
var i = require("./306703.js");
var a = r(require("../vendor/667294.js"));