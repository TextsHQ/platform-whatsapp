Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetNewsletterMetadataMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      setNameMixinMixinArgs: t,
      setDescriptionMixinMixinArgs: n,
      setPictureMixinMixinArgs: l
    } = e;
    return (0, i.optionalMerge)(s.mergeSetPictureMixinMixin, (0, i.optionalMerge)(a.mergeSetDescriptionMixinMixin, (0, i.optionalMerge)(o.mergeSetNameMixinMixin, (0, r.smax)("metadata", null), t), n), l);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./604191.js");
var o = require("./369279.js");
var s = require("./693490.js");