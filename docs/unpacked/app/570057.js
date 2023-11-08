var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMsgsAndAddOnsFromUpdates = function (e, t, n) {
  return e.reduce(function () {
    var e = (0, i.default)(function* (e, r) {
      const i = yield e;
      const a = yield (0, c.mapMsgAndAddOns)(r, t, n);
      if (a == null) {
        return i;
      }
      const {
        msgData: o,
        reactionData: s,
        id: l,
        viewCount: u,
        pollVoteData: d
      } = a;
      if (l != null) {
        i.ids.push(l);
      }
      if (o != null) {
        i.msgs.push(o);
      }
      if (u != null && l != null) {
        i.viewCounts.set(l.toString(), u);
      }
      if (s == null) {
        if (l != null) {
          i.reactionIdsToRemove.push(l.toString());
        }
      } else {
        i.reactions.push(s);
      }
      if (d != null) {
        i.pollVotes.push(d);
      }
      return i;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(), Promise.resolve({
    ids: [],
    reactions: [],
    reactionIdsToRemove: [],
    msgs: [],
    viewCounts: new Map(),
    pollVotes: []
  }));
};
exports.updateAddOnDbRecords = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./766693.js");
var o = require("./978925.js");
var s = require("./52045.js");
var l = require("./732011.js");
var u = require("./73225.js");
var c = require("./661464.js");
var d = require("./367499.js");
var p = require("./330434.js");
var f = require("./257741.js");
var _ = require("./851698.js");
function g() {
  return (g = (0, i.default)(function* (e) {
    let {
      msgs: t,
      reactions: n,
      reactionIdsToRemove: r,
      timestamp: c,
      ids: g,
      viewCounts: m,
      pollVotes: h
    } = e;
    if (n.length > 0) {
      yield (0, o.createOrUpdateNewsletterReactions)(n.map(f.mapReactionDataToDbRecord).filter(Boolean));
    }
    if (r.length > 0) {
      yield (0, o.bulkRemoveNewsletterReactionsForParentMsg)(r);
    }
    if (h.length > 0) {
      yield (0, a.bulkCreateOrUpdateVotes)(h.map(p.mapNewsletterVoteToDbRecord));
    }
    if ((0, u.isNewsletterBackwardsMessageEditingEnabled)() && t.length > 0) {
      const e = new Map(t.map(e => [e.id.toString(), e]));
      const n = [];
      (yield (0, _.getMessageTable)().bulkGet(t.map(e => e.id.toString()))).forEach(t => {
        if (t == null) {
          return;
        }
        const r = e.get(t.id);
        if ((r == null ? undefined : r.t) != null && r.t > t.t) {
          n.push(r);
        }
      });
      yield (0, s.processEditProtocolMsgs)(n.map(d.mapMsgToEditProtocolMsgLegacy));
    }
    if (g.length > 0) {
      yield (0, l.getStorage)().lock(["message"], function () {
        var e = (0, i.default)(function* (e) {
          let [t] = e;
          const n = (yield t.bulkGet(g.map(e => e.toString())).then(e => e.filter(Boolean))).map(e => {
            var t;
            let {
              id: n,
              viewCount: r
            } = e;
            return {
              id: n,
              lastUpdateFromServerTs: c,
              viewCount: (t = m == null ? undefined : m.get(n)) !== null && t !== undefined ? t : r
            };
          });
          return t.bulkCreateOrMerge(n);
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
    }
  })).apply(this, arguments);
}