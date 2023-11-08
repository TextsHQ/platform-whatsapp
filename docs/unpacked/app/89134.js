var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./400721.js"));
var a = require("./956113.js");
var o = require("./180519.js");
var s = require("../vendor/548360.js");
var l = r(require("../vendor/667294.js"));
var u = () => l.default.createElement("div", {
  className: i.default.background
}, l.default.createElement("div", {
  className: i.default.mainWrapper
}, l.default.createElement(a.Spinner, {
  size: 50,
  stroke: 4,
  color: "highlight"
}), l.default.createElement(o.TextDiv, {
  className: i.default.logoutTitle,
  size: "32"
}, s.fbt._("Logging Out", null, {
  hk: "1YEOxc"
})), l.default.createElement(o.TextDiv, {
  theme: "muted"
}, s.fbt._("Do not close this window", null, {
  hk: "14ygD4"
}))));
exports.default = u;