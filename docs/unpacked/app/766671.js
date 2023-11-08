var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./634951.js");
var o = require("./671953.js");
var s = require("./994879.js");
var l = require("./359987.js");
var u = require("./410322.js");
var c = require("./928563.js");
var d = require("./990356.js");
var p = require("./923544.js");
var f = require("./521109.js");
var _ = require("./696859.js");
var g;
var m;
var h;
var y = (0, o.createAddonMsgProcessor)({
  convert: {
    fromHistorySyncMsg: (h = (0, i.default)(function* (e) {
      return (0, p.parseWebMsgInfoPollUpdates)(e).then(e => e.map(f.voteDataToPollVoteMsgData));
    }), function () {
      return h.apply(this, arguments);
    })
  },
  parentKey: "pollUpdateParentKey",
  updateCollection: e => {
    (0, l.frontendSendAndReceive)("upsertVotesModelCollection", {
      votes: e.map(f.pollVoteMsgDataToVoteData),
      restoredFromDb: false
    });
  },
  beforeUpsert: (m = (0, i.default)(function* (e, t) {
    const n = [];
    const r = new Map();
    for (const i of e) {
      if (i.addonEncrypted) {
        const e = t.get(i.pollUpdateParentKey.toString());
        if (e == null) {
          throw new s.AddonInfraError(s.AddonInfraErrorCode.MissingParentMsg);
        }
        r.set(i, e);
      } else {
        n.push(i);
      }
    }
    if (r.size > 0) {
      const e = yield (0, d.extractVotes)(r);
      for (const t of e) {
        n.push((0, f.voteDataToPollVoteMsgData)(t));
      }
    }
    return Promise.resolve({
      result: n,
      upsert: n
    });
  }), function () {
    return m.apply(this, arguments);
  }),
  afterUpsert: (g = (0, i.default)(function* (e, t) {
    yield (0, l.frontendSendAndReceive)("upsertVotesModelCollection", {
      votes: e.map(f.pollVoteMsgDataToVoteData),
      restoredFromDb: false
    });
    const r = yield (0, _.filterChatsWithAddOnPreviewUpdates)(e.map(e => (0, c.lastAddOnPreviewCandidateFromVoteData)((0, f.pollVoteMsgDataToVoteData)(e), false)));
    if (r.size > 0) {
      yield (0, u.updateDatabaseForLastAddOnPreview)(r);
      (0, l.frontendFireAndForget)("updateChatLastAddOnPreview", {
        chatMap: r
      });
    }
    if (t.mode === a.AddonProcessMode.OnlineReceive) {
      const {
        markFutureproofMessagesReparsed: t
      } = require("./486193.js");
      yield t(e.map(e => e.id.toString()));
    }
  }), function () {
    return g.apply(this, arguments);
  })
});
exports.default = y;