Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageWithHsmTemplateMixin = function (e, t) {
  const n = function (e) {
    const {
      hsmTid: t
    } = e;
    return (0, r.smax)("message", null, (0, r.smax)("hsm", {
      tid: (0, a.CUSTOM_STRING)(t)
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");