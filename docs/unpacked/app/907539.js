var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRowFromMessage = function (e) {
  var t;
  const n = (0, i.default)({}, e);
  if (e.quotedMsg) {
    n.quotedMsg = (0, i.default)({}, e.quotedMsg);
  }
  if ((t = e.quotedMsg) === null || t === undefined ? undefined : t.paymentNoteMsg) {
    n.quotedMsg.paymentNoteMsg = (0, i.default)({}, e.quotedMsg.paymentNoteMsg);
  }
  if (e.paymentNoteMsg) {
    n.paymentNoteMsg = (0, i.default)({}, e.paymentNoteMsg);
  }
  if (e.from) {
    n.from = e.from.toString();
  }
  S.forEach(e => {
    if (n[e] != null) {
      n[e] = n[e].toString();
    }
  });
  delete n.notifyName;
  delete n.local;
  delete n.isNewMsg;
  delete n.clearMedia;
  delete n.multicast;
  delete n.urlNumber;
  delete n.urlText;
  delete n.linkPreview;
  delete n.star;
  delete n.forwardedFromWeb;
  T(n);
  return n;
};
exports.messageFromDbRow = function (e, t) {
  var n;
  var r;
  var a;
  const l = (0, i.default)({}, e);
  if (e.quotedMsg) {
    l.quotedMsg = (0, i.default)({}, e.quotedMsg);
  }
  if ((n = e.quotedMsg) === null || n === undefined ? undefined : n.paymentNoteMsg) {
    l.quotedMsg.paymentNoteMsg = (0, i.default)({}, e.quotedMsg.paymentNoteMsg);
  }
  if (e.paymentNoteMsg) {
    l.paymentNoteMsg = (0, i.default)({}, e.paymentNoteMsg);
  }
  if (e.paymentBackground) {
    l.paymentBackground = (0, i.default)({}, e.paymentBackground);
  }
  if (e.groupMentions) {
    l.groupMentions = e.groupMentions.map(e => ({
      groupSubject: e.groupSubject,
      groupJid: (0, _.createWidFromWidLike)(e.groupJid)
    }));
  }
  l.star = l.isStarred !== undefined;
  l.isMdHistoryMsg = l.rowId < 1000000000;
  if (!(l.internalId == null || ((r = l.to) === null || r === undefined ? undefined : r.server) !== "newsletter" && !((a = l.from) === null || a === undefined ? undefined : a.endsWith("@newsletter")))) {
    l.serverId = (0, s.getInChatMsgId)(l.internalId);
  }
  delete l.internalId;
  delete l.isStarred;
  delete l.count;
  delete l.hasLink;
  delete l.isMediaMsg;
  delete l.isDocMsg;
  delete l.expiredTimestamp;
  delete l.pendingReadReceipt;
  v(l);
  (0, o.hydrateWids)(l);
  S.forEach(e => {
    if (l[e] != null) {
      l[e] = u.default.from(l[e]);
    }
  });
  if (l.messageSecret != null) {
    l.messageSecret = new Uint8Array(l.messageSecret);
  }
  if (l.botMessageSecret != null) {
    l.botMessageSecret = new Uint8Array(l.botMessageSecret);
  }
  const [d, p, f] = function (e) {
    let {
      futureproofType: t,
      futureproofSubtype: n,
      subtype: r
    } = e;
    if (e.type === c.MSG_TYPE.UNKNOWN && e.futureproofType == null && e.subtype != null) {
      switch (e.subtype) {
        case "poll_update":
          t = c.MSG_TYPE.POLL_UPDATE;
          n = "poll_vote";
          break;
        case "message_edit":
          t = c.MSG_TYPE.PROTOCOL;
          n = "message_edit";
          break;
        case "phone":
        case "phone_only_feature":
          break;
        default:
          (0, y.default)(E.has(e.subtype), "WAWebDBMessageSerialization: Unsupported message subtype being set to futureproofType");
          t = e.subtype;
      }
      if (e.type === c.MSG_TYPE.UNKNOWN && t != null) {
        r = undefined;
      }
    }
    if (e.type === c.MSG_TYPE.POLL_UPDATE && r == null) {
      r = "poll_vote";
    }
    return [t, n, r];
  }(l);
  l.futureproofType = d;
  l.futureproofSubtype = p;
  l.subtype = f != null ? f : undefined;
  if (l.carouselCardsParsed != null) {
    l.carouselCardsParsed = l.carouselCardsParsed.map(e => (0, i.default)((0, i.default)({}, e), {}, {
      id: e.id instanceof u.default ? e.id : new u.default(e.id)
    }));
  }
  if (!(t == null)) {
    t(l);
  }
  return l;
};
exports.movEncFieldToOpaqueData = T;
exports.movFieldFromOpaqueDataBackToMsg = v;
var i = r(require("../vendor/81109.js"));
var a = require("./418987.js");
var o = require("./147793.js");
var s = require("./878685.js");
var l = require("./848755.js");
var u = r(require("./565754.js"));
var c = require("./373070.js");
var d = require("./426750.js");
var p = require("./412744.js");
var f = r(require("./124928.js"));
var _ = require("./669050.js");
var g = require("./574819.js");
var m = require("./394629.js");
var h = require("./385914.js");
var y = r(require("../vendor/441143.js"));
const E = new Set(Object.values(c.MSG_TYPE));
const S = ["id", "protocolMessageKey", "paymentRequestMessageKey", "keptMessageKey", "pollUpdateParentKey", "kicKey", "latestEditMsgKey", "targetMessageKey", "pinParentKey"];
function v(e) {
  const t = (0, m.decodeProtobuf)(p.MsgRowOpaqueDataSpec, e.msgRowOpaqueData);
  if (t.currentMsg) {
    var n;
    var r;
    var i;
    if (t.currentMsg.paymentNoteMsgBody && e.paymentNoteMsg) {
      e.paymentNoteMsg.body = (i = t.currentMsg) === null || i === undefined ? undefined : i.paymentNoteMsgBody;
    }
    l.MSG_OPAQUE_DATA_KEYS.forEach(n => {
      var r;
      e[n] = (r = t.currentMsg) === null || r === undefined ? undefined : r[(0, l.getKey)(e.type, n)];
    });
    e.pollOptions = (0, d.expandPollOptions)((n = t.currentMsg) === null || n === undefined ? undefined : n.pollOptions);
    const a = (r = t.currentMsg) === null || r === undefined ? undefined : r.originalSelfAuthor;
    if (a != null && f.default.isWid(a)) {
      e.originalSelfAuthor = (0, _.createWid)(a);
    }
  }
  var a;
  if (e.quotedMsg && t.quotedMsg) {
    if (t.quotedMsg.paymentNoteMsgBody) {
      e.quotedMsg.paymentNoteMsg.body = t.quotedMsg.paymentNoteMsgBody;
    }
    l.MSG_OPAQUE_DATA_KEYS.forEach(n => {
      var r;
      e.quotedMsg[n] = (r = t.quotedMsg) === null || r === undefined ? undefined : r[(0, l.getKey)(e.type, n)];
    });
    e.quotedMsg.pollOptions = (0, d.expandPollOptions)((a = t.quotedMsg) === null || a === undefined ? undefined : a.pollOptions);
  }
}
function T(e) {
  var t;
  var n;
  var r;
  const i = {
    currentMsg: {},
    quotedMsg: {}
  };
  var o;
  if ((t = e.paymentNoteMsg) === null || t === undefined ? undefined : t.body) {
    i.currentMsg.paymentNoteMsgBody = e.paymentNoteMsg.body;
    if (!((o = e.paymentNoteMsg) === null || o === undefined)) {
      delete o.body;
    }
  }
  if ((n = e.quotedMsg) === null || n === undefined || (r = n.paymentNoteMsg) === null || r === undefined ? undefined : r.body) {
    i.quotedMsg.paymentNoteMsgBody = e.quotedMsg.paymentNoteMsg.body;
    delete e.quotedMsg.paymentNoteMsg.body;
  }
  l.MSG_OPAQUE_DATA_KEYS.forEach(t => {
    i.currentMsg[(0, l.getKey)(e.type, t)] = e[t];
    delete e[t];
  });
  if (e.originalSelfAuthor) {
    i.currentMsg.originalSelfAuthor = (0, a.extractUserJid)((0, g.widToDeviceJid)(e.originalSelfAuthor));
    delete e.originalSelfAuthor;
  }
  i.currentMsg.pollOptions = (0, d.compressPollOptions)(e.pollOptions);
  delete e.pollOptions;
  if (e.quotedMsg) {
    l.MSG_OPAQUE_DATA_KEYS.forEach(t => {
      i.quotedMsg[t] = e.quotedMsg[t];
      delete e.quotedMsg[t];
    });
    i.quotedMsg.pollOptions = (0, d.compressPollOptions)(e.quotedMsg.pollOptions);
    delete e.quotedMsg.pollOptions;
  }
  const s = (0, h.encodeProtobuf)(p.MsgRowOpaqueDataSpec, i);
  e.msgRowOpaqueData = s.readBuffer();
}