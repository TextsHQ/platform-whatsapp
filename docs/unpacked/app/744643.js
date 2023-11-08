var r = require("./530066.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDraftMessageChat = function (e, t) {
  if (!(0, i.draftMessageEnabled)()) {
    return Promise.resolve();
  }
  const {
    ChatCollection: o
  } = require("./351053.js");
  const s = o.get(e);
  const l = new r();
  const u = (0, a.updateDraftMessageChat)({
    chatId: e,
    draftMessage: t,
    abortSignal: l.signal
  });
  u.finally(() => {
    var e;
    if (s) {
      if ((s == null || (e = s.promises.updateDraftMessage) === null || e === undefined ? undefined : e.promise) === u) {
        s.promises.updateDraftMessage = null;
      }
    }
  });
  if (s) {
    const {
      promises: e
    } = s;
    if (e.updateDraftMessage != null) {
      e.updateDraftMessage.abortController.abort();
    }
    s.draftMessage = t;
    s.promises.updateDraftMessage = {
      promise: u,
      abortController: l
    };
  }
  return u;
};
var i = require("./177594.js");
var a = require("./176022.js");