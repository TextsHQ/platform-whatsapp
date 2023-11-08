Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeComposingMixin = function (e, t) {
  const n = function (e) {
    const {
      hasComposingMediaAudio: t
    } = e;
    return (0, i.smax)("chatstate", null, (0, i.smax)("composing", {
      media: (0, r.OPTIONAL_LITERAL)("audio", t)
    }));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");