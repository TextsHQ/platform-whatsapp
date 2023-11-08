var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageRangeEncloseType = undefined;
exports.compareMessageRanges = function (e, t) {
  const n = S(e, t);
  const r = S(t, e);
  if (n && r) {
    return E.RangesAreEqual;
  }
  if (n) {
    return E.RangeAEnclosesRangeB;
  }
  if (r) {
    return E.RangeBEnclosesRangeA;
  }
  return E.RangesNotEnclosing;
};
exports.constructForwardMovingMessageRange = function () {
  return P.apply(this, arguments);
};
exports.constructMessageRange = v;
exports.lockForMessageRangeSync = undefined;
exports.mergeMessageRanges = A;
exports.validateMessageRange = function (e) {
  if (e == null) {
    (0, f.uploadCriticalEventMetric)(g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_UNSET);
    return false;
  }
  for (const [t, n] of b) {
    if (n(e)) {
      (0, f.uploadCriticalEventMetric)(t);
      return false;
    }
  }
  for (const t of e.messages) {
    for (const [e, n] of C) {
      if (n(t)) {
        (0, f.uploadCriticalEventMetric)(e);
        return false;
      }
    }
  }
  return true;
};
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = require("./527796.js");
var s = require("./122393.js");
var l = require("./791381.js");
var u = require("./137460.js");
var c = require("./685907.js");
var d = require("./480313.js");
var p = require("./610876.js");
var f = require("./336897.js");
var _ = require("./374740.js");
var g = require("./304954.js");
var m = r(require("./124928.js"));
var h = require("./669050.js");
var y = require("./394629.js");
const E = require("../vendor/76672.js").Mirrored(["RangeAEnclosesRangeB", "RangeBEnclosesRangeA", "RangesAreEqual", "RangesNotEnclosing"]);
function S(e, t) {
  const n = new Set(e.messages.map(e => {
    var t;
    if ((t = e.key) === null || t === undefined) {
      return undefined;
    } else {
      return t.id;
    }
  }));
  for (let e = 0; e < t.messages.length; e++) {
    var r;
    if (t.messages[e].timestamp == null) {
      if (!n.has((r = t.messages[e].key) === null || r === undefined ? undefined : r.id)) {
        return false;
      }
    }
  }
  for (let r = 0; r < t.messages.length; r++) {
    var i;
    var o;
    var s;
    if (!n.has((i = t.messages[r].key) === null || i === undefined ? undefined : i.id) && (0, a.numberOrThrowIfTooLarge)((o = e.lastMessageTimestamp) !== null && o !== undefined ? o : 0) <= (0, a.numberOrThrowIfTooLarge)((s = t.messages[r].timestamp) !== null && s !== undefined ? s : 0)) {
      return false;
    }
  }
  return true;
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t, n) {
    let r = yield (0, u.getLastMessageTimestamp)(e);
    (0, u.logMaybeMillisecondTimestamp)(r, "getLastMessageTimestamp");
    const i = yield (0, u.getLastSystemMessageTimestamp)(e);
    (0, u.logMaybeMillisecondTimestamp)(i, "lastSystemMessageTimestamp");
    const {
      messages: o,
      newLastMessageTimestamp: s
    } = yield (0, u.getAdditionalMessages)(e, r, n);
    if (s != null) {
      r = s;
      (0, u.logMaybeMillisecondTimestamp)(s, "newLastMessageTimestamp");
    }
    if (r == null) {
      var l;
      r = (l = o.sort(u.timestampComparison)[o.length - 1]) === null || l === undefined ? undefined : l.timestamp;
      (0, u.logMaybeMillisecondTimestamp)(r, "sorting");
    }
    const c = {
      messages: o
    };
    if (r != null) {
      c.lastMessageTimestamp = r;
    }
    if (i != null && (r == null || i > (0, a.numberOrThrowIfTooLarge)(r))) {
      c.lastSystemMessageTimestamp = i;
      (0, u.logMaybeMillisecondTimestamp)(c.lastSystemMessageTimestamp, "lastSystemMessageTimestamp");
    }
    if (t && c.lastMessageTimestamp == null) {
      const t = yield (0, u.getFirstSystemMessageTimestamp)(e);
      if (t != null) {
        c.lastMessageTimestamp = t;
        (0, u.logMaybeMillisecondTimestamp)(c.lastMessageTimestamp, "firstSystemMessageTimestamp");
        if (t === i) {
          c.lastSystemMessageTimestamp = undefined;
        }
      }
    }
    return c;
  })).apply(this, arguments);
}
function M(e, t, n) {
  const r = new Map();
  e.concat(t).forEach(e => {
    var t;
    var i;
    var o;
    const s = (t = (i = e.key) === null || i === undefined ? undefined : i.id) !== null && t !== undefined ? t : "";
    if ((0, a.numberOrThrowIfTooLarge)((o = e.timestamp) !== null && o !== undefined ? o : 0) >= n) {
      const t = r.get(s);
      var l;
      var u;
      if (t) {
        r.set(s, (0, a.numberOrThrowIfTooLarge)((l = t.timestamp) !== null && l !== undefined ? l : 0) < (0, a.numberOrThrowIfTooLarge)((u = e.timestamp) !== null && u !== undefined ? u : 0) ? e : t);
      } else {
        r.set(s, e);
      }
    }
  });
  return Array.from(r.values());
}
function A(e, t) {
  var n;
  var r;
  const i = (0, a.numberOrThrowIfTooLarge)((n = e.lastMessageTimestamp) !== null && n !== undefined ? n : 0);
  const o = (0, a.numberOrThrowIfTooLarge)((r = t.lastMessageTimestamp) !== null && r !== undefined ? r : 0);
  const s = Math.max(i, o);
  const l = {
    messages: M(e.messages, t.messages, s)
  };
  if (s !== 0) {
    l.lastMessageTimestamp = s;
  }
  if (e.lastSystemMessageTimestamp != null || t.lastSystemMessageTimestamp != null) {
    var u;
    var c;
    const n = Math.max((0, a.numberOrThrowIfTooLarge)((u = e.lastSystemMessageTimestamp) !== null && u !== undefined ? u : 0), (0, a.numberOrThrowIfTooLarge)((c = t.lastSystemMessageTimestamp) !== null && c !== undefined ? c : 0));
    if (s == null || n > s) {
      l.lastSystemMessageTimestamp = n;
    }
  }
  return l;
}
exports.MessageRangeEncloseType = E;
const b = [[g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_LAST_SYSTEM_MESSAGE_TIMESTAMP_SET, e => {
  let {
    lastSystemMessageTimestamp: t,
    lastMessageTimestamp: n
  } = e;
  return t != null && n != null && (0, a.numberOrThrowIfTooLarge)(t) < (0, a.numberOrThrowIfTooLarge)(n);
}], [g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGES_CROSS_LIMIT, e => e.messages.filter(e => e.timestamp != null).length > 1000]];
const C = [[g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_UNSET, e => e.key == null], [g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_REMOTE_JID_UNSET, e => {
  var t;
  return ((t = e.key) === null || t === undefined ? undefined : t.remoteJid) == null;
}], [g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_FROM_ME_UNSET, e => {
  var t;
  return ((t = e.key) === null || t === undefined ? undefined : t.fromMe) == null;
}], [g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_STANZA_ID_UNSET, e => {
  var t;
  return ((t = e.key) === null || t === undefined ? undefined : t.id) == null;
}], [g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_REMOTE_JID_INVALID, e => {
  var t;
  return !(0, h.isWidlike)((t = e.key) === null || t === undefined ? undefined : t.remoteJid);
}], [g.MD_SYNCD_CRITICAL_EVENT_CODE.MESSAGE_RANGE_MESSAGE_KEY_PARTICIPANT_UNSET, e => {
  var t;
  var n;
  var r;
  return m.default.isGroup((t = e.key) === null || t === undefined ? undefined : t.remoteJid) && !((n = e.key) === null || n === undefined ? undefined : n.fromMe) && ((r = e.key) === null || r === undefined ? undefined : r.participant) == null;
}]];
function P() {
  return (P = (0, i.default)(function* (e, t) {
    var n;
    let r = yield v(e, true, t);
    (yield (0, l.getActiveMessageRanges)(e.toString())).forEach(e => {
      const t = e.actionValue.messageRange;
      if (t) {
        (0, u.logMaybeMillisecondTimestamp)(t.lastMessageTimestamp, "activeRanges");
        (0, u.logMaybeMillisecondTimestamp)(t.lastSystemMessageTimestamp, "activeRangesSystem");
      }
      switch (e.action) {
        case c.ActiveRangeAction.ClearChatDeleteStarredDeleteMedia:
        case c.ActiveRangeAction.ClearChatDeleteStarredKeepMedia:
        case c.ActiveRangeAction.ClearChatKeepStarredDeleteMedia:
        case c.ActiveRangeAction.ClearChatKeepStarredKeepMedia:
        case c.ActiveRangeAction.DeleteChatDeleteMedia:
        case c.ActiveRangeAction.DeleteChatKeepMedia:
          {
            const t = e.actionValue.messageRange;
            if (t) {
              r = A(r, t);
            }
            break;
          }
        case c.ActiveRangeAction.Archive:
        case c.ActiveRangeAction.MarkChatAsRead:
      }
    });
    (0, u.logMaybeMillisecondTimestamp)(r.lastMessageTimestamp, "intermediaForwardMovingRange");
    const i = yield O(e);
    r.messages = M(r.messages, i, (0, a.numberOrThrowIfTooLarge)((n = r.lastMessageTimestamp) !== null && n !== undefined ? n : 0));
    r = (0, u.fixMessageRange)(r);
    (0, u.logMaybeMillisecondTimestamp)(r.lastMessageTimestamp, "forwardMovingRange");
    return r;
  })).apply(this, arguments);
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e) {
    const t = [];
    const n = yield (0, p.getSyncActionsRows)(["action"], [s.Actions.DeleteMessageForMe]);
    __LOG__(2)`syncd: deleteForMeSyncActions length: ${n.length}`;
    n.forEach(n => {
      const r = e.toString({
        legacy: true
      });
      const i = JSON.parse(n.index);
      if (i.length !== 5) {
        __LOG__(2)`constructForwardMovingMessageRange: delete for me mutation index malformed ${n.index}`;
      } else if (r === i[1] && n.actionState === s.SyncActionState.Success) {
        var a;
        const e = (0, y.decodeProtobuf)(o.SyncActionDataSpec, n.binarySyncData).value;
        const r = e == null || (a = e.deleteMessageForMeAction) === null || a === undefined ? undefined : a.messageTimestamp;
        if (r == null) {
          __LOG__(2)`constructForwardMovingMessageRange: deleteMessageForMeAction malformed`;
        } else {
          const e = {
            remoteJid: i[1],
            id: i[2],
            fromMe: i[3] === "1",
            participant: i[4] !== "0" ? i[4] : undefined
          };
          t.push({
            key: e,
            timestamp: (0, _.maybeMillisecondsToSeconds)(r)
          });
        }
      }
    });
    return t;
  })).apply(this, arguments);
}
exports.lockForMessageRangeSync = (e, t, n) => (0, d.lockForSync)([...e, "message", "active-message-ranges"], t, n);