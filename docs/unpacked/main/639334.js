Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddOnsBridgeApi = undefined;
var a = require("../app/31162.js");
var r = require("./363943.js");
var o = require("./111529.js");
var l = require("./743122.js");
var i = require("../app/344400.js");
var u = require("./730263.js");
var s = require("../app/669050.js");
const c = {
  updateAddOnCollectionAcks(e) {
    let {
      updatesByType: t
    } = e;
    (0, a.updateAddOnCollectionsSendStatesAction)(t);
  },
  upsertVotesModelCollection(e) {
    let {
      votes: t,
      restoredFromDb: n
    } = e;
    (0, u.upsertVotesModelCollection)(t, n);
  },
  markAddOnsAsReadUi(e) {
    let {
      updatedMsgKeys: t
    } = e;
    (0, o.markAddOnsAsReadUiAction)(t);
  },
  updatePinCollection(e) {
    let {
      chatId: t,
      msgs: n
    } = e;
    return (0, l.updatePinCollection)((0, s.toChatWid)(t), n);
  },
  updateCommentCollection(e) {
    let {
      comments: t
    } = e;
    return (0, r.updateCommentCollection)(t);
  },
  hasPollVotesInCollection(e) {
    let {
      msgKeys: t
    } = e;
    return t.map(e => Boolean(i.PollVoteCollection.getByMsgKey(e)));
  }
};
exports.AddOnsBridgeApi = c;