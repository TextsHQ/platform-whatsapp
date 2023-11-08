Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeCodeMixin = function (e, t) {
  const n = function (e) {
    const {
      addRequestCode: t
    } = e;
    return (0, r.smax)("add_request", {
      code: (0, a.CUSTOM_STRING)(t)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");