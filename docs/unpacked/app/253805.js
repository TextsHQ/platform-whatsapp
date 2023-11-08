Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageUpdatesBeforeOrAfterMixinMixinGroup = function (e, t) {
  if (t.messageUpdatesBeforeMixin) {
    return (0, a.mergeMessageUpdatesBeforeMixinMixin)(e, t.messageUpdatesBeforeMixin);
  }
  if (t.messageUpdatesAfterMixin) {
    return (0, i.mergeMessageUpdatesAfterMixinMixin)(e, t.messageUpdatesAfterMixin);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./836598.js");
var a = require("./75422.js");