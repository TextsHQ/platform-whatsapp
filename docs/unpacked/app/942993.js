Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeCreateRequestMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      setNameMixinMixinArgs: t,
      setNewDescriptionMixinMixinArgs: n,
      setNewPictureMixinMixinArgs: u,
      allNewsletterMetadataIQRequestPayloadMixinArgs: c
    } = e;
    return (0, r.smax)("create", null, (0, i.optionalMerge)(l.mergeSetNewPictureMixinMixin, (0, i.optionalMerge)(s.mergeSetNewDescriptionMixinMixin, (0, o.mergeSetNameMixinMixin)((0, r.smax)("metadata", null), t), n), u), (0, r.smax)("query", null, (0, a.mergeAllNewsletterMetadataIQRequestPayloadMixin)((0, r.smax)("metadata", null), c)));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./978694.js");
var o = require("./369279.js");
var s = require("./857613.js");
var l = require("./374438.js");