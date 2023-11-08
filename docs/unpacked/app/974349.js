Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetNewOrEmptyDescriptionMixinMixinGroup = function (e, t) {
  if (t.setNewDescriptionMixin) {
    return (0, a.mergeSetNewDescriptionMixinMixin)(e, t.setNewDescriptionMixin);
  }
  if (t.isSetEmptyDescriptionMixin) {
    return (0, i.mergeSetEmptyDescriptionMixinMixin)(e);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./491753.js");
var a = require("./857613.js");