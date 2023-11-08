var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    children: t,
    cancelText: n,
    onCancel: r,
    okText: o,
    onOK: s
  } = e;
  return a.default.createElement(i.ConfirmPopup, {
    cover: true,
    children: t,
    cancelText: n,
    onCancel: r,
    okText: o,
    onOK: s
  });
};
var i = require("./103440.js");
var a = r(require("../vendor/667294.js"));