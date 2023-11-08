Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMessageFrankingRaw = u;
exports.mergeMessageFrankingMixin = function (e, t) {
  const n = function (e) {
    const {
      rawArgs: t
    } = e;
    return (0, l.mergeServerFrankingTagMixin)((0, o.mergeClientFrankingTagMixin)((0, i.smax)("message", null, (0, r.OPTIONAL_CHILD)(u, t)), e), e);
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./842055.js");
var s = require("./875896.js");
var l = require("./916481.js");
function u(e) {
  const {
    rawV3RawV3OrRawV3DeprecatedMixinGroupArgs: t
  } = e;
  return (0, s.mergeRawV3RawV3OrRawV3DeprecatedMixinGroup)((0, i.smax)("raw", null), t);
}