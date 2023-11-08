var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processReactionMsgs = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./359987.js");
var s = require("./65013.js");
var l = require("./928563.js");
var u = require("./911600.js");
var c = require("./696859.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    if (e.length > 0) {
      const t = yield (0, u.createReactionsRowFromMsg)(e);
      const r = yield (0, s.createOrUpdateReactions)(t);
      (0, u.updateHasReactionFromParent)(r);
      const i = e.map(e => e.id.toString());
      const {
        markFutureproofMessagesReparsed: d
      } = require("./486193.js");
      yield d(i);
      const p = yield (0, c.filterChatsWithAddOnPreviewUpdates)(r.map(e => (0, l.lastAddOnPreviewCandidateFromReactionRowType)(e)));
      yield (0, a.bulkUpdateChatLastAddOnPreview)(p);
      (0, o.frontendFireAndForget)("updateChatLastAddOnPreview", {
        chatMap: p
      });
    }
  })).apply(this, arguments);
}