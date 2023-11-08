var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePeerReceipts = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./402994.js");
var l = require("./359987.js");
var u = require("./269773.js");
var c = require("./732011.js");
var d = require("./787742.js");
var p = r(require("./565754.js"));
var f = require("./316348.js");
var _ = require("./555622.js");
var g = require("./851698.js");
var m = require("./499972.js");
function h() {
  return (h = (0, a.default)(function* () {
    _.QPL.markerPoint(f.QuickLogMarkerId.OFFLINE_RESUME, "UpdatePeerReceipts_start");
    const e = yield (0, m.getTable)().all();
    const t = [];
    const n = [];
    e.forEach(e => {
      if (e.ack === s.ACK.READ) {
        t.push(e);
      } else if (e.ack === s.ACK.PLAYED) {
        n.push(e);
      } else {
        __LOG__(3)`updatePeerReceipts: unknown ack type: ${e.ack}`;
      }
    });
    const {
      chatUpdates: r,
      ackUpdates: a
    } = yield y(t);
    const o = new Map(a.map(e => [e.id, e]));
    v(n).forEach(e => {
      const t = o.get(e.id);
      if (t == null) {
        o.set(e.id, e);
      } else {
        o.set(e.id, (0, i.default)((0, i.default)({}, t), {}, {
          ack: e.ack
        }));
      }
    });
    const d = Array.from(o.values());
    (0, l.frontendFireAndForget)("updateOfflinePeerReceipt", {
      chatUpdates: r.map(e => {
        var t;
        return {
          chatId: e.id,
          unreadCount: e.unreadCount,
          unreadMentionsOfMe: (t = e.unreadMentionsOfMe) !== null && t !== undefined ? t : []
        };
      }),
      ackUpdates: d.map(e => ({
        msgKey: e.id,
        ack: e.ack
      }))
    });
    yield Promise.all([(0, c.getStorage)().lock(["message", "chat"], e => {
      let [t, n] = e;
      return Promise.all([t.bulkCreateOrMerge(d), n.bulkCreateOrMerge(r)]);
    }).then(() => {}), (0, u.markUnclassifiedAddOnsAsReadJob)(Array.from(S(t)).map(e => p.default.from(e))).then(() => {})]);
    return (0, m.getTable)().clear().then(() => {
      _.QPL.markerPoint(f.QuickLogMarkerId.OFFLINE_RESUME, "UpdatePeerReceipts_end");
    });
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e) {
    const t = S(e);
    const n = new Map(e.flatMap(e => e.msgKeys).map(u).filter(e => e !== o.STATUS_JID).map(e => [e, {
      unreadCount: 0,
      lastUnreadMsgRowId: undefined,
      unreadMentionsOfMe: [],
      unreadMentionCount: 0
    }]));
    const r = Array.from(n.keys());
    const i = yield (0, g.getMessageTable)().anyOf(["from", "pendingReadReceipt"], r.map(e => [e, 1]), {
      shouldDecrypt: false
    });
    i.forEach(e => function (e, n) {
      const {
        rowId: r,
        id: i
      } = n;
      if (e == null || r == null) {
        return;
      }
      if (t.has(i) && (e.lastUnreadMsgRowId == null || r > e.lastUnreadMsgRowId)) {
        e.lastUnreadMsgRowId = r;
      }
    }(n.get(e.from), e));
    i.forEach(e => function (e, t) {
      const {
        rowId: n
      } = t;
      if (e == null || n == null || e.lastUnreadMsgRowId == null) {
        return;
      }
      if (n > e.lastUnreadMsgRowId && (e.unreadCount += 1, (0, d.getIsImportantMessage)(t))) {
        const n = {
          id: t.id,
          timestamp: t.t
        };
        e.unreadMentionsOfMe.push(n);
      }
    }(n.get(e.from), e));
    const a = i.flatMap(e => {
      const {
        rowId: t
      } = e;
      const r = n.get(e.from);
      if (r == null || t == null || r.lastUnreadMsgRowId == null) {
        return [];
      } else if (t <= r.lastUnreadMsgRowId) {
        return [{
          id: e.id,
          ack: s.ACK.READ,
          pendingReadReceipt: null
        }];
      } else {
        return [];
      }
    }).concat((l = t, Array.from(l).filter(e => u(e) === o.STATUS_JID).map(e => ({
      id: e,
      ack: s.ACK.READ
    }))));
    var l;
    return {
      chatUpdates: r.map(e => {
        const t = n.get(e);
        if (t != null && t.lastUnreadMsgRowId != null) {
          return {
            id: e,
            unreadCount: t.unreadCount,
            unreadMentionsOfMe: t.unreadMentionsOfMe
          };
        } else {
          return null;
        }
      }).filter(Boolean),
      ackUpdates: a
    };
    function u(e) {
      return p.default.fromString(e).remote.toString();
    }
  })).apply(this, arguments);
}
function S(e) {
  return new Set(e.flatMap(e => e.msgKeys));
}
function v(e) {
  const t = new Set();
  e.forEach(e => {
    if (e.ack === s.ACK.PLAYED) {
      e.msgKeys.forEach(e => t.add(e));
    }
  });
  return Array.from(t).map(e => ({
    id: e,
    ack: s.ACK.PLAYED,
    pendingReadReceipt: null
  }));
}