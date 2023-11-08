Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageWithTypeMixin = function (e, t) {
  const n = function (e) {
    const {
      contentTypeTextOrMediaMixinGroupArgs: t
    } = e;
    return (0, a.mergeContentTypeTextOrMediaMixinGroup)((0, r.smax)("message", null), t);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./798634.js");