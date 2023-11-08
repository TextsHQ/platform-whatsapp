var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    displayAuthor: n
  } = e;
  return o.default.createElement(r.default, {
    msg: t.safe(),
    displayAuthor: n,
    hideUpdateButton: true
  });
};
var r = a(require("./536706.js"));
var o = a(require("../vendor/667294.js"));