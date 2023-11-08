Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeRawV2Or3Or3DeprecatedMixinGroup = function (e, t) {
  if (t.isRawV2) {
    return (0, i.mergeRawV2Mixin)(e);
  }
  if (t.rawV3) {
    return (0, o.mergeRawV3Mixin)(e, t.rawV3);
  }
  if (t.rawV3Deprecated) {
    return (0, a.mergeRawV3DeprecatedMixin)(e, t.rawV3Deprecated);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./152107.js");
var a = require("./8723.js");
var o = require("./822570.js");