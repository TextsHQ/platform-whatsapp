Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBeforeOrAfterMixinMixinGroup = function (e, t) {
  if (t.beforeMixin) {
    return (0, a.mergeBeforeMixinMixin)(e, t.beforeMixin);
  }
  if (t.afterMixin) {
    return (0, i.mergeAfterMixinMixin)(e, t.afterMixin);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./377188.js");
var a = require("./512052.js");