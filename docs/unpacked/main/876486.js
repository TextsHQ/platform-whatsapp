var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    error: t,
    text: n = i.fbt._("There was an unexpected error, please click to reload the application.", null, {
      hk: "3olAtj"
    }),
    retry: a = () => window.location.reload()
  } = e;
  return u.default.createElement("div", {
    className: o.default.container,
    onClick: t ? a : null
  }, t ? u.default.createElement(s, {
    text: n
  }) : u.default.createElement(r.Loading, null));
};
var r = require("./811720.js");
var o = a(require("./334971.js"));
var l = require("./129572.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
function s(e) {
  return u.default.createElement("div", null, u.default.createElement("div", {
    className: o.default.circle
  }, u.default.createElement(l.RefreshIcon, null)), u.default.createElement("div", {
    className: o.default.text
  }, e.text));
}