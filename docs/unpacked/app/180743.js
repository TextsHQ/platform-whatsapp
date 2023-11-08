Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageWithPollMixin = function (e, t) {
  const n = function (e) {
    const {
      contentTypePollCreationContentTypePollCreationOrContentTypePollCreationDeprecatedMixinGroupArgs: t
    } = e;
    return (0, a.mergeContentTypePollCreationContentTypePollCreationOrContentTypePollCreationDeprecatedMixinGroup)((0, r.smax)("message", null), t);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./518458.js");