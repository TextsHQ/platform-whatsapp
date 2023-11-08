Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageSenderOrRecipientMixinGroup = function (e, t) {
  if (t.messageSender) {
    return (0, a.mergeMessageSenderMixin)(e, t.messageSender);
  }
  if (t.messageRecipient) {
    return (0, i.mergeMessageRecipientMixin)(e, t.messageRecipient);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./819862.js");
var a = require("./728662.js");