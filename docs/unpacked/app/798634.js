Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeContentTypeTextOrMediaMixinGroup = function (e, t) {
  if (t.isContentTypeText) {
    return (0, a.mergeContentTypeTextMixin)(e);
  }
  if (t.isContentTypeMedia) {
    return (0, i.mergeContentTypeMediaMixin)(e);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./626153.js");
var a = require("./224363.js");