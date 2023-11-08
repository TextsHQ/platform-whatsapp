var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleViewOnceOpenedIfNecessary = function () {
  return I.apply(this, arguments);
};
exports.processOrphanPeerReceipt = function (e) {
  return M.enqueue((0, i.default)(function* () {
    const t = yield (0, p.getOrphanReceipt)(String(e));
    if (t) {
      if (t[l.ACK_STRING.PLAYED] != null) {
        __LOG__(2)`processOrphanPeerReceipt: orphan played ack found for incoming ${e}`;
        yield (0, f.frontendSendAndReceive)("updateMsgPeerAcks", {
          msgKeys: [e],
          ack: l.ACK.PLAYED,
          t: t[l.ACK_STRING.PLAYED]
        });
      }
      if (t[l.ACK_STRING.READ] != null) {
        __LOG__(2)`processOrphanPeerReceipt: orphan read ack found for incoming ${e}`;
        C(e.remote, [e]);
      }
      yield (0, p.removeOrphanReceipt)(String(e));
    } else {
      __LOG__(2)`processOrphanPeerReceipt: no orphan ack found for incoming ${e}`;
    }
  }));
};
exports.processReactionOrphanPeerReceipt = function (e) {
  return M.enqueue((0, i.default)(function* () {
    const t = yield (0, p.getOrphanReceipt)(String(e));
    if (t) {
      if (t[l.ACK_STRING.READ] != null) {
        __LOG__(2)`processReactionOrphanPeerReceipt: orphan read ack found for incoming ${e}`;
        yield (0, h.markAddOnsAsReadJob)(new Map([[y.MessageAddOnType.Reaction, [E.default.fromString(t.msgKey)]]]));
      }
      yield (0, p.removeOrphanReceipt)(String(e));
    } else {
      __LOG__(2)`processReactionOrphanPeerReceipt: no orphan ack found for incoming ${e}`;
    }
  }));
};
exports.updateChatPeerRead = C;
exports.updateMsgViewed = function () {
  return O.apply(this, arguments);
};
exports.updateOrphanPeerReceipt = function (e, t, n) {
  M.enqueue(() => {
    __LOG__(2)`updateMsgAcks: store ${e.length} orphan acks`;
    let r = null;
    if (t === l.ACK.PLAYED) {
      r = l.ACK_STRING.PLAYED;
    } else if (t === l.ACK.READ) {
      r = l.ACK_STRING.READ;
    }
    if (r) {
      return (0, p.createOrUpdateOrphanReceipt)(r, n, e.map(String));
    }
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/385564.js"));
var o = require("./652204.js");
var s = require("./632157.js");
var l = require("./402994.js");
var u = require("./254665.js");
var c = require("./791381.js");
var d = require("./35234.js");
var p = require("./176573.js");
var f = require("./359987.js");
var _ = require("./698867.js");
var g = require("./907539.js");
var m = require("./878685.js");
var h = require("./269773.js");
var y = require("./803328.js");
var E = r(require("./565754.js"));
var S = require("./727615.js");
var v = require("./73225.js");
var T = require("./851698.js");
const M = new o.PromiseQueue();
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    const n = (yield (0, c.getActiveMessageRanges)(e)).filter(e => e.action === "markChatAsRead" && e.actionValue.read === false && e.actionValue.messageRange != null);
    if (n.length === 0) {
      return true;
    }
    const r = n[0];
    return t.some(e => !(0, u.rangeContainsMessage)(r.actionValue.messageRange, {
      id: E.default.fromString(e.id),
      t: e.t
    }));
  })).apply(this, arguments);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e, t) {
    const n = t.map(String);
    let r = null;
    const i = yield (0, T.getMessageTable)().bulkGet(n, false);
    const o = [];
    let s;
    i.forEach((e, t) => {
      if (e) {
        if (!(e.pendingReadReceipt == null)) {
          if (e.rowId != null && (r == null || e.rowId > r)) {
            r = e.rowId;
          }
        }
      } else {
        o.push(n[t]);
      }
    });
    if (o.length > 0) {
      __LOG__(2)`updateChatPeerRead: maybeOrphans ${o.length}`;
    }
    if (o.length === 0) {
      s = new Set();
    } else {
      const {
        updatedAddOns: e,
        updatedOrphans: t
      } = yield (0, h.markUnclassifiedAddOnsAsReadJob)(o.map(e => E.default.from(e)));
      s = new Set([...t, ...(0, a.default)(Array.from(e.values()))].map(String));
    }
    const u = o.filter(e => !s.has(e));
    M.enqueue(() => {
      __LOG__(2)`updateChatPeerRead: storing ${u.length} orphan acks`;
      return (0, p.createOrUpdateOrphanReceipt)(l.ACK_STRING.READ, 0, u);
    });
    yield (0, d.markMessageAndChatAsRead)(r, String(e), !(yield A(e.toString(), i.filter(Boolean))));
    if (e.isNewsletter()) {
      if ((0, v.isNewsletterEnabled)()) {
        yield (0, f.frontendSendAndReceive)("updateNewsletterUnreadMsgCount", {
          id: e
        });
      }
    } else {
      yield (0, f.frontendSendAndReceive)("updateChatUnreadMsgCountAndClearMentions", {
        remote: e
      });
    }
  })).apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t) {
    const n = e.map(e => (0, m.craftInternalId)(t.toJid(), e));
    const r = (yield (0, T.getMessageTable)().anyOf(["internalId"], n)).map(e => E.default.fromString(e.id));
    yield (0, S.updateMsgViewReceipt)(r);
    return (0, f.frontendFireAndForget)("updateMsgsViewed", {
      ids: r
    });
  })).apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e) {
    const t = e.map(String);
    const n = yield (0, T.getMessageTable)().bulkGet(t, false);
    (0, _.handleActivitiesForChatThreadLogging)(n.filter(Boolean).map(e => (0, g.messageFromDbRow)(e)).filter(e => e.isViewOnce).map(e => {
      var t;
      return {
        activityType: "viewOnceOpen",
        ts: (t = e.t) !== null && t !== undefined ? t : (0, s.unixTime)(),
        chatId: e.id.remote
      };
    }));
  })).apply(this, arguments);
}