Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBeforeMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      messagesBefore: t
    } = e;
    return (0, r.smax)("messages", {
      before: (0, a.INT)(t)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");