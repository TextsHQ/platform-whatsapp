Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeRawV3RawV3OrRawV3DeprecatedMixinGroup = function (e, t) {
  if (t.rawV3) {
    return (0, a.mergeRawV3Mixin)(e, t.rawV3);
  }
  if (t.rawV3Deprecated) {
    return (0, i.mergeRawV3DeprecatedMixin)(e, t.rawV3Deprecated);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./8723.js");
var a = require("./822570.js");