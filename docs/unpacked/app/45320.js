Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetNewOrEmptyPictureMixinMixinGroup = function (e, t) {
  if (t.setNewPictureMixin) {
    return (0, a.mergeSetNewPictureMixinMixin)(e, t.setNewPictureMixin);
  }
  if (t.isSetEmptyPictureMixin) {
    return (0, i.mergeSetEmptyPictureMixinMixin)(e);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./539734.js");
var a = require("./374438.js");