var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    onClick: t
  } = e;
  const [n, a] = (0, f.default)(t);
  const p = t != null ? a : {};
  return d.default.createElement("div", (0, r.default)({
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [i.default.container]: true,
      [i.default.inactive]: t == null
    }),
    ref: n,
    "aria-label": c.fbt._("Cancel", null, {
      hk: "H0gNq"
    })
  }, p), d.default.createElement("div", {
    className: i.default.icon
  }, d.default.createElement(s.XSoftIcon, null)), d.default.createElement(l.FlexRow, {
    className: i.default.spinner,
    align: "center",
    justify: "center"
  }, d.default.createElement(u.Spinner, {
    color: "accent",
    size: 18,
    stroke: 5
  })));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = require("../app/690495.js");
var i = a(require("./241225.js"));
var u = require("../app/956113.js");
var s = require("./952990.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/83233.js"));