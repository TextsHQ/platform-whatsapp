Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeStageMixin = function (e, t) {
  const n = function (e) {
    const {
      noticeId: t,
      noticeStage: n
    } = e;
    return (0, r.smax)("notice", {
      id: (0, a.INT)(t),
      stage: (0, a.INT)(n)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");