Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, l.useAggregatedView)(a.PinInChatCollection.byChatId, (0, o.toChatWid)(e.id));
  if (!(0, r.isPinnedMessagesM1ReceiverEnabled)()) {
    return [];
  }
  return t.filter(a.isPinValid);
};
var a = require("../app/722091.js");
var r = require("../app/591800.js");
var o = require("../app/669050.js");
var l = require("./165428.js");