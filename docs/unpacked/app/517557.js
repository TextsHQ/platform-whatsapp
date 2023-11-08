var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t = "",
    selectable: n
  } = e;
  return a.default.createElement(i.SelectableStrong, {
    selectable: n,
    appTextTemplate: "*${appText}*"
  }, t);
};
var i = require("./306703.js");
var a = r(require("../vendor/667294.js"));