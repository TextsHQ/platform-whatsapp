var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditedMentionOfMe = undefined;
exports.generateMessageEdit = G;
exports.processEditProtocolMsgs = function () {
  return b.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/944908.js"));
var s = require("./29797.js");
var l = r(require("./670983.js"));
var u = require("./632157.js");
var c = r(require("./721698.js"));
var d = require("./35234.js");
var p = require("./359987.js");
var f = require("./354458.js");
var _ = require("./907539.js");
var g = require("./817690.js");
var m = require("./271368.js");
var h = require("./483460.js");
var y = require("./591988.js");
var E = require("./732011.js");
var S = require("./787742.js");
var v = require("./580046.js");
var T = require("./373070.js");
var M = require("./459857.js");
const A = require("../vendor/76672.js").Mirrored(["Added", "Removed"]);
function b() {
  return (b = (0, a.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (e.length === 0) {
      return [];
    }
    const r = yield P(e);
    const i = C(e, r);
    const a = [];
    const o = [];
    i.sort((e, t) => (0, l.default)(t.latestEditSenderTimestampMs, "b.latestEditSenderTimestampMs") - (0, l.default)(e.latestEditSenderTimestampMs, "a.latestEditSenderTimestampMs"));
    for (const e of i) {
      const t = e.protocolMessageKey && r.get(e.protocolMessageKey.toString());
      if (t && t.type !== T.MSG_TYPE.CIPHERTEXT) {
        o.push(G(t, e));
      } else {
        a.push(e);
      }
    }
    yield I(a);
    if (o.length) {
      yield N(o);
      w(o.filter(e => e.isLatest && !(0, S.getIsNewsletterMsg)(e.parentMsg)).map(e => e.parentMsg));
      yield U(o);
    }
    const s = o.filter(e => e.isLatest);
    if (s.length) {
      (0, p.frontendFireAndForget)("updateEditedMessagesAction", {
        messageEdits: s
      });
    }
    if (t) {
      const {
        markFutureproofMessagesReparsed: t
      } = require("./486193.js");
      yield t(e.map(e => e.id.toString()));
    }
    return s;
  })).apply(this, arguments);
}
function C(e, t) {
  return e.filter(e => {
    const n = e.protocolMessageKey;
    if (!n) {
      __LOG__(4, undefined, new Error())`[message-edit] protocol msg is missing original msg key`;
      return false;
    }
    const r = t.get(n.toString());
    if (r) {
      if (!((0, y.msgTypeSupportsEditing)(r.type) || r.type === T.MSG_TYPE.CIPHERTEXT)) {
        __LOG__(3)`[message-edit] original message type is ${r.type} which cannot be edited`;
        return false;
      }
      if (r.isForwarded === true) {
        __LOG__(4, undefined, new Error())`[message-edit] original message cannot be a forwarded message`;
        return false;
      }
      const t = (0, l.default)(r.t, "parentMsg.t");
      const n = (0, l.default)(e.t, "protocolMsg.t");
      if (!(0, y.isParentWithinEditProcessingWindow)({
        parentTsInSeconds: t,
        editTsInSeconds: n,
        msgKey: r.id
      })) {
        __LOG__(3)`[message-edit] protocol msg exceeds edit window, will be dropped`;
        return false;
      }
      const i = (0, S.getSender)(r);
      const a = (0, S.getSender)(e);
      if (!i || !a || !i.equals(a)) {
        __LOG__(4, undefined, new Error())`[message-edit] sender is not the parent msg sender`;
        return false;
      }
    }
    return e.latestEditSenderTimestampMs != null || (__LOG__(4, undefined, new Error())`[message-edit] protocol msg does not have a valid sender timestamp`, null);
  });
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* (e) {
    const t = e.map(e => e.protocolMessageKey).filter(Boolean).map(e => e.toString());
    const n = yield (0, g.getMsgsByMsgKey)(t);
    return new Map(n.map(e => [e.id.toString(), e]));
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, a.default)(function* (e) {
    if (!e.length) {
      return;
    }
    const {
      storeMessageOrphans: t
    } = require("./522794.js");
    yield t(e, e => e.protocolMessageKey);
  })).apply(this, arguments);
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e) {
    if (e.length) {
      yield (0, E.getStorage)().lock(["message", "chat"], function () {
        var t = (0, a.default)(function* (t) {
          let [n, r] = t;
          const a = [];
          const o = new Set();
          e.forEach(e => {
            const {
              parentMsg: t,
              editedMsgData: n,
              isLatest: r,
              protocolMsg: s
            } = e;
            if (r && (a.push((0, i.default)((0, i.default)({}, t), n)), !(0, S.getIsSentByMe)(s))) {
              const e = s.id.remote.toString();
              o.add(e);
            }
          });
          const s = [];
          if (a.length) {
            s.push(n.bulkCreateOrMerge(a.map(_.dbRowFromMessage)));
          }
          if (o.size) {
            const e = Array.from(o).map(e => ({
              id: e,
              unreadEditTimestampMs: (0, u.unixTimeMs)()
            }));
            s.push(r.bulkCreateOrMerge(e));
          }
          yield Promise.all(s);
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
    }
  })).apply(this, arguments);
}
function w(e) {
  if (!e.length) {
    return;
  }
  const t = (0, o.default)(e.map(e => String((0, l.default)(e.rowId, "msg.rowId"))));
  m.ftsLightClient.purge(t).catch(() => {});
  c.default.ignoreTransaction((0, a.default)(function* () {
    yield m.ftsLightClient.addToIndexingTable(t);
    m.ftsLightClient.index().catch(() => {});
  }));
}
function L(e, t) {
  if ((0, S.getIsSentByMe)(e)) {
    if (e.self === "out") {
      if ((0, S.getIsNewsletterMsg)(e) && !(0, M.isMeAccount)(t.from)) {
        return s.ACK.SENT;
      } else {
        return s.ACK.CLOCK;
      }
    } else if ((0, v.isNoteToSelf)(e.id)) {
      return s.ACK.READ;
    } else {
      return s.ACK.SENT;
    }
  }
}
exports.EditedMentionOfMe = A;
const k = new Map();
function G(e, t) {
  var n;
  var r;
  var a;
  const o = Boolean(t.matchedText) || Boolean(t.canonicalUrl) || Boolean(t.description) || Boolean(t.title);
  const s = {
    latestEditMsgKey: t.latestEditMsgKey,
    latestEditSenderTimestampMs: t.latestEditSenderTimestampMs,
    errorCode: t.errorCode,
    ack: L(e, t),
    pendingReadReceipt: (0, S.getIsSentByMe)(e) ? undefined : 2
  };
  const u = (0, l.default)((0, y.getMsgEditType)(e.type), "getMsgEditType(parentMsg.type)");
  let c;
  let d;
  var p;
  var _;
  var g;
  var m;
  var h;
  if (u === y.MsgEditType.TextEdit) {
    c = (0, i.default)((0, i.default)({}, s), {}, {
      subtype: o ? "url" : undefined,
      body: t.body,
      mentionedJidList: t.mentionedJidList,
      groupMentions: t.groupMentions,
      title: t.title,
      description: t.description,
      canonicalUrl: t.canonicalUrl,
      matchedText: t.matchedText,
      inviteGrpType: t.inviteGrpType,
      thumbnail: t.thumbnail,
      richPreviewType: t.richPreviewType,
      doNotPlayInline: t.doNotPlayInline,
      thumbnailDirectPath: (p = t.thumbnailDirectPath) !== null && p !== undefined ? p : undefined,
      thumbnailSha256: (_ = t.thumbnailSha256) !== null && _ !== undefined ? _ : undefined,
      thumbnailEncSha256: (g = t.thumbnailEncSha256) !== null && g !== undefined ? g : undefined,
      thumbnailHeight: (m = t.thumbnailHeight) !== null && m !== undefined ? m : undefined,
      thumbnailWidth: (h = t.thumbnailWidth) !== null && h !== undefined ? h : undefined,
      mediaKey: t.mediaKey,
      mediaKeyTimestamp: t.mediaKeyTimestamp,
      botPluginSearchUrl: t.botPluginSearchUrl,
      botPluginSearchProvider: t.botPluginSearchProvider,
      botPluginReferenceIndex: t.botPluginReferenceIndex,
      botPluginType: t.botPluginType
    });
  } else if (u === y.MsgEditType.CaptionEdit) {
    d = (0, i.default)((0, i.default)({}, s), {}, {
      caption: t.caption,
      mentionedJidList: t.mentionedJidList,
      groupMentions: t.groupMentions,
      isCaptionByUser: true
    });
  }
  const E = (0, l.default)((n = c) !== null && n !== undefined ? n : d, "editedTextMsgData ?? editedCaptionMsgData");
  if ((0, S.getIsSentByMe)(e) && e.self !== "out" && t.count != null) {
    E.count = t.count;
  }
  const v = (r = (a = k.get(e.id.toString())) !== null && a !== undefined ? a : e.latestEditSenderTimestampMs) !== null && r !== undefined ? r : 0;
  const T = (0, l.default)(t.latestEditSenderTimestampMs, "protocolMsg.latestEditSenderTimestampMs");
  const M = T > v;
  let b;
  if (M) {
    k.set(e.id.toString(), T);
  }
  if (!(0, S.getIsSentByMe)(e)) {
    const t = (0, S.getHasMentionOfMe)(e);
    const n = (0, S.getHasMentionOfMe)((0, i.default)((0, i.default)({}, e), E));
    if (t && !n) {
      b = A.Removed;
    } else if (!t && n) {
      b = A.Added;
    }
  }
  if ((0, f.isBotReceiveEnabled)() && ((0, S.getIsMetaBotResponse)(e) || e.botEditType != null)) {
    E.botEditType = t.botEditType;
    E.botEditTargetId = t.botEditTargetId;
  }
  return {
    parentMsg: e,
    protocolMsg: t,
    editedMsgData: E,
    isLatest: M,
    mentionOfMe: b
  };
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, a.default)(function* (e) {
    if (!(0, h.receiveCaptionEditEnabled)()) {
      return;
    }
    const t = new Map();
    const n = new Map();
    for (const r of e) {
      const {
        parentMsg: e,
        mentionOfMe: i
      } = r;
      const a = e.id.remote.toString();
      if (i) {
        switch (i) {
          case A.Removed:
            {
              const n = e.id.toString();
              let r = t.get(a);
              if (!r) {
                r = [];
                t.set(a, r);
              }
              r.push(n);
              break;
            }
          case A.Added:
            {
              let t = n.get(a);
              if (!t) {
                t = [];
                n.set(a, t);
              }
              const r = {
                id: e.id.toString(),
                timestamp: e.t
              };
              t.push(r);
            }
        }
      }
    }
    if (t.size) {
      yield (0, d.removeUnreadMentionChat)(t);
    }
    if (n.size) {
      yield (0, d.addUnreadMentionChat)(n);
    }
  })).apply(this, arguments);
}