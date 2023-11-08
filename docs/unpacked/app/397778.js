var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    Icon: t,
    disabled: n,
    onClick: r,
    type: c,
    title: d,
    "aria-label": p,
    dataTab: f,
    className: _,
    xstyle: g
  } = e;
  const m = (0, a.default)(e, l);
  return s.default.createElement(o.default, {
    xstyle: g,
    disabled: n,
    onClick: r,
    "aria-label": p,
    title: d,
    dataTab: f,
    className: _,
    type: c
  }, s.default.createElement(t, (0, i.default)({}, m, {
    xstyle: n === true && u.disabled
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("./625903.js"));
var s = r(require("../vendor/667294.js"));
r(require("./156720.js"));
const l = ["Icon", "disabled", "onClick", "type", "title", "aria-label", "dataTab", "className", "xstyle"];
const u = {
  disabled: {
    opacity: "aiwu9bi8"
  }
};