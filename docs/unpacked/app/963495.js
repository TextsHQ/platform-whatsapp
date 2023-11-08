var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processPollUpdateMsgs = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./591253.js");
var s = require("./899581.js");
var l = require("./410322.js");
var u = require("./928563.js");
var c = require("./990356.js");
var d = require("./696859.js");
function p() {
  return (p = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return [];
    }
    const {
      pollUpdateMsgsToParentMsgs: t,
      orphans: r
    } = yield (0, o.getParentMessages)(e);
    for (const [e, n] of t.entries()) {
      if (n.pollInvalidated) {
        t.delete(e);
      }
    }
    const [, p] = yield Promise.all([(0, i.default)(function* () {
      if (r.length === 0) {
        return;
      }
      const {
        storeMessageOrphans: e
      } = require("./522794.js");
      yield e(r, e => e.pollUpdateParentKey);
      const t = r.map(e => e.id.toString());
      const {
        markFutureproofMessagesReparsed: i
      } = require("./486193.js");
      yield i(t);
    })(), (0, i.default)(function* () {
      if (t.size === 0) {
        return;
      }
      const e = yield (0, s.upsertVotesDb)(yield (0, c.extractVotes)(t));
      yield (0, a.frontendSendAndReceive)("upsertVotesModelCollection", {
        votes: e,
        restoredFromDb: false
      });
      const r = e.map(e => e.msgKey.toString());
      const {
        markFutureproofMessagesReparsed: i
      } = require("./486193.js");
      yield i(r);
      const o = yield (0, d.filterChatsWithAddOnPreviewUpdates)(e.map(e => (0, u.lastAddOnPreviewCandidateFromVoteData)(e, false)));
      if (o.size > 0) {
        yield (0, l.updateDatabaseForLastAddOnPreview)(o);
        (0, a.frontendFireAndForget)("updateChatLastAddOnPreview", {
          chatMap: o
        });
      }
      return e;
    })()]);
    if (p != null) {
      return p;
    } else {
      return [];
    }
  })).apply(this, arguments);
}