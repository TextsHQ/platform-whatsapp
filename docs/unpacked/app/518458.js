Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeContentTypePollCreationContentTypePollCreationOrContentTypePollCreationDeprecatedMixinGroup = function (e, t) {
  if (t.isContentTypePollCreation) {
    return (0, a.mergeContentTypePollCreationMixin)(e);
  }
  if (t.isContentTypePollCreationDeprecated) {
    return (0, i.mergeContentTypePollCreationDeprecatedMixin)(e);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./712613.js");
var a = require("./258568.js");