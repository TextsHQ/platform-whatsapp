var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDraftMessageChat = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./898817.js");
var o = require("./775593.js");
var s = require("./555789.js");
var l = require("./840089.js");
var u = require("./899137.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    let {
      chatId: t,
      draftMessage: n,
      abortSignal: r
    } = e;
    const i = (0, u.createNonPersistedJob)("updateDraftMessageChat", e => {
      if (e.abortSignal.aborted) {
        throw new a.AbortError();
      }
      return (0, l.updateChatTable)(e.chatId, (0, s.serializeChat)({
        draftMessage: e.draftMessage
      }));
    }, {
      priority: o.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted({
      chatId: t,
      draftMessage: n,
      abortSignal: r
    });
    yield i;
  })).apply(this, arguments);
}