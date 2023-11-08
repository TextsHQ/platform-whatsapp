var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChatConversationOpenedWithNewMessage = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/632157.js");
var l = require("../app/188131.js");
var i = a(require("../app/528420.js"));
exports.handleChatConversationOpenedWithNewMessage = (e, t) => {
  i.default.add((0, r.default)((0, r.default)({}, t), {}, {
    id: e.id,
    timestamp: (0, o.unixTime)()
  }), {
    merge: true
  });
  (0, l.handleConsumerTransparencyForNewMsg)(e, t.conversionData, t.conversionSource);
};