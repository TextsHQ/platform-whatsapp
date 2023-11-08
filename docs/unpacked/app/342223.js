var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GROUP_MSG_TYPE = undefined;
exports.encryptAndSendGroupMsg = function (e, t, n, r) {
  var i;
  const o = e.data;
  const {
    id: s,
    to: l
  } = t;
  __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupMsg: queued ${s}`;
  if (!((i = r.sendPerfReporter) === null || i === undefined)) {
    i.startWaitingToEncryptStage();
  }
  return E.sendMsgQueueMap.enqueue(l.toString(), (0, a.default)(function* () {
    var i;
    var a;
    var u;
    var d;
    var m;
    var E;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupMsg: sending ${s}`;
    if (!((i = r.sendPerfReporter) === null || i === undefined)) {
      i.postWaitingToEncryptStage();
    }
    if (!((a = r.sendPerfReporter) === null || a === undefined)) {
      a.startReadyToSendStage();
    }
    const v = function (e) {
      const {
        protocolMessage: t
      } = e;
      let n = null;
      if ((t == null ? undefined : t.type) === g.Message$ProtocolMessage$Type.REVOKE && (t == null ? undefined : t.key)) {
        const {
          remoteJid: e,
          id: r,
          participant: i
        } = t.key;
        if (e && r && i) {
          n = new f.default({
            remote: (0, S.createWid)(e),
            fromMe: true,
            id: r,
            participant: (0, S.createWid)(i)
          });
        }
      }
      return n;
    }(n);
    const M = function (e) {
      var t;
      var n;
      const r = (t = e.editedMessage) === null || t === undefined || (n = t.message) === null || n === undefined ? undefined : n.protocolMessage;
      let i = null;
      if ((r == null ? undefined : r.type) === g.Message$ProtocolMessage$Type.MESSAGE_EDIT && (r == null ? undefined : r.key)) {
        const {
          remoteJid: e,
          id: t,
          participant: n
        } = r.key;
        if (e && t && n) {
          i = new f.default({
            remote: (0, S.createWid)(e),
            fromMe: true,
            id: t,
            participant: (0, S.createWid)(n)
          });
        }
      }
      return i;
    }(n);
    const A = function (e) {
      const {
        keepInChatMessage: t
      } = e;
      if (t == null ? undefined : t.key) {
        const {
          remoteJid: e,
          id: n,
          participant: r
        } = t.key;
        if (e != null && n != null && r != null) {
          return new f.default({
            remote: (0, S.createWid)(e),
            fromMe: true,
            id: n,
            participant: (0, S.createWid)(r)
          });
        }
      }
      return null;
    }(n);
    const C = yield (0, c.getParticipantRecord)(l.toString());
    const P = yield (0, c.getGroupData)(l.toString(), C, (0, p.getIsReaction)(o));
    if (!((u = r.sendReporter) === null || u === undefined)) {
      u.setGroupData(P);
    }
    if (!((d = r.sendPerfReporter) === null || d === undefined)) {
      d.setGroupData(P);
    }
    const I = (m = C == null ? undefined : C.participants.map(e => (0, S.createWid)(e))) !== null && m !== undefined ? m : [];
    const R = yield (0, _.genContentBindingForMsg)(o, I);
    let N;
    if (P.isCag === true && P.isIncognito === true) {
      const e = Boolean(P.amIAdmin);
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupMsg: Incognito CAG ${e ? "admin" : "non-admin"} `;
      N = yield b(l, v, A, M, o, e, C);
    } else {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendGroupMsg: ${P.isIncognito === true ? "incognito" : "nonIncognito"} ${P.isCag === true ? "cag" : "nonCag"}
isLidAddressingMode: ${P.isLidAddressingMode}`;
      const e = yield function () {
        return O.apply(this, arguments);
      }(l, C, v, M, Boolean(P.isLidAddressingMode));
      N = P.isLidAddressingMode === true ? e : k(e);
    }
    if (N.type === T.DIRECT) {
      var D;
      var w;
      const {
        deviceList: i
      } = N;
      if (!((D = r.sendReporter) === null || D === undefined)) {
        D.setDeviceCount(i.length);
      }
      if (!((w = r.sendPerfReporter) === null || w === undefined)) {
        w.setIsDirectedMessage(true);
      }
      return (0, h.encryptAndSendGroupDirectMsg)(e, t, n, i, P, r);
    }
    const {
      senderKeyList: L
    } = N;
    if (!((E = r.sendReporter) === null || E === undefined)) {
      E.setDeviceCount(L.skList.length + L.skDistribList.length);
    }
    return (0, y.encryptAndSendSenderKeyMsg)(e, t, n, L, P, r, R);
  }));
};
exports.getCagMessageSendList = b;
exports.getGroupSendListForRevoke = I;
exports.getGroupSendListForUnkeep = N;
exports.removeLidFromSendingList = k;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./287461.js");
var s = require("./12643.js");
var l = require("./827467.js");
var u = require("./83672.js");
var c = require("./226430.js");
var d = require("./66055.js");
var p = require("./787742.js");
var f = r(require("./565754.js"));
var _ = require("./596633.js");
var g = require("./533494.js");
var m = require("./53249.js");
var h = require("./878395.js");
var y = require("./627249.js");
var E = require("./739172.js");
var S = require("./669050.js");
var v = r(require("./556869.js"));
const T = Object.freeze({
  SKMSG: "skmsg",
  DIRECT: "direct"
});
function M(e) {
  return e.isLid();
}
function A(e) {
  return !e.isLid();
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* (e, t, n, r, i, a, s) {
    const {
      skDistribList: u,
      skList: c
    } = yield (0, l.getGroupSenderKeyListFromParticipantRecord)(e, s);
    const d = P(i, a) ? M : A;
    const p = {
      type: T.SKMSG,
      senderKeyList: {
        skList: c.filter(d),
        skDistribList: u.filter(d),
        rotateKey: false
      }
    };
    if (i.subtype === "sender_revoke") {
      const e = !a && (0, o.getABPropConfigValue)("send_cag_member_revokes_as_GDM");
      const n = t == null ? null : yield I(t, p.senderKeyList, {
        forceDirectMessage: e,
        normalizeAddressingModeFn: e => e
      });
      if (n != null) {
        return n;
      } else {
        return p;
      }
    }
    if (i.type === "keep_in_chat") {
      const e = !a && (0, o.getABPropConfigValue)("supports_keep_in_chat_in_cag");
      const t = n == null ? null : yield N(n, p.senderKeyList, e);
      if (t != null) {
        return t;
      } else {
        return p;
      }
    }
    if (r) {
      return w(r, p.senderKeyList);
    } else {
      return p;
    }
  })).apply(this, arguments);
}
function P(e, t) {
  const {
    type: n,
    subtype: r,
    keepType: i
  } = e;
  if (r === "sender_revoke") {
    return false;
  }
  if (i === g.KeepType.UNDO_KEEP_FOR_ALL) {
    return false;
  }
  switch (n) {
    case "reaction_enc":
    case "comment":
      return true;
    case "poll_update":
      if (r === "poll_vote") {
        return true;
      }
      break;
    case "notification":
    case "notification_template":
    case "gp2":
    case "broadcast_notification":
    case "e2e_notification":
    case "call_log":
    case "protocol":
    case "chat":
    case "location":
    case "payment":
    case "vcard":
    case "ciphertext":
    case "multi_vcard":
    case "revoked":
    case "oversized":
    case "groups_v4_invite":
    case "hsm":
    case "template_button_reply":
    case "debug":
    case "image":
    case "video":
    case "ptv":
    case "audio":
    case "ptt":
    case "sticker":
    case "status_v3":
    case "document":
    case "product":
    case "order":
    case "list":
    case "interactive":
    case "interactive_response":
    case "list_response":
    case "buttons_response":
    case "reaction":
    case "poll_creation":
    case "request_phone_number":
    case "native_flow":
    case "biz-cover-photo":
    case "keep_in_chat":
    case "pin_message":
    case "pinned_message":
    case "unknown":
    case "newsletter_notification":
    case "history_bundle":
      break;
    default:
      throw (0, v.default)(`CAG - Invalid type: ${n}`);
  }
  if (t) {
    return false;
  }
  throw (0, v.default)("CAG - non-admin trying to send a regular message");
}
function O() {
  return (O = (0, a.default)(function* (e, t, n, r, i) {
    const a = yield (0, l.getGroupSenderKeyListFromParticipantRecord)(e, t);
    const o = {
      senderKeyList: a,
      type: T.SKMSG
    };
    if (n) {
      const e = yield I(n, a, {
        forceDirectMessage: false,
        normalizeAddressingModeFn: e => (0, d.normalizeWidsToAddressingMode)(i, e)
      });
      if (e != null) {
        return e;
      } else {
        return o;
      }
    }
    if (r) {
      return w(r, a);
    } else {
      return o;
    }
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, a.default)(function* (e, t, n) {
    const r = (yield (0, m.getMessageInfoTable)().equals(["msgKey"], String(e))).map(e => (0, S.createWid)(e.receiverUserJid));
    if (r.length === 0) {
      return null;
    }
    const {
      skDistribList: i,
      skList: a
    } = t;
    const o = new Set([...i, ...a].map(S.toUserWid).map(String));
    const l = r.filter(e => {
      const t = (0, s.getAlternateWid)(e);
      return !(o.has(String(e)) || t != null && o.has(String(t)));
    });
    const c = n.normalizeAddressingModeFn(l).filter(Boolean);
    if (n.forceDirectMessage === false && c.length === 0) {
      return null;
    }
    const d = yield (0, u.getFanOutList)({
      wids: c
    });
    return {
      type: T.DIRECT,
      deviceList: [...d, ...a, ...i]
    };
  })).apply(this, arguments);
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e, t, n) {
    const r = yield (0, m.getMessageInfoTable)().equals(["msgKey"], String(e));
    if (r.length === 0) {
      return null;
    }
    const {
      skDistribList: i,
      skList: a
    } = t;
    const o = new Set(i.concat(a).map(e => String((0, S.toUserWid)(e))));
    const s = r.filter(e => !o.has(e.receiverUserJid)).map(e => (0, S.createWid)(e.receiverUserJid));
    if (s.length === 0 && n !== true) {
      return null;
    }
    const l = [...(yield (0, u.getFanOutList)({
      wids: s
    })), ...a, ...i];
    return {
      type: T.DIRECT,
      deviceList: l
    };
  })).apply(this, arguments);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, a.default)(function* (e, t) {
    const n = yield (0, m.getMessageInfoTable)().equals(["msgKey"], String(e));
    const {
      skDistribList: r,
      skList: i
    } = t;
    const a = new Set(r.concat(i).map(e => String((0, S.toUserWid)(e))));
    const o = n.filter(e => a.has(e.receiverUserJid)).map(e => (0, S.createWid)(e.receiverUserJid));
    const s = yield (0, u.getFanOutList)({
      wids: o
    });
    return {
      type: T.DIRECT,
      deviceList: [...s]
    };
  })).apply(this, arguments);
}
function k(e) {
  switch (e.type) {
    case T.DIRECT:
      {
        const t = e.deviceList.filter(A);
        if (t.length < e.deviceList.length) {
          __LOG__(4, undefined, new Error(), true)`removeLidFromSendingList: lids found in groupSendingList.deviceList`;
          SEND_LOGS("pnh-cag-lid-in-group-device-list");
        }
        return (0, i.default)((0, i.default)({}, e), {}, {
          deviceList: t
        });
      }
    case T.SKMSG:
      {
        const {
          skDistribList: t,
          skList: n
        } = e.senderKeyList;
        const r = t.filter(A);
        if (r.length < t.length) {
          __LOG__(4, undefined, new Error(), true)`removeLidFromSendingList: lids found in groupSendingList.senderKeyList.skDistribList`;
          SEND_LOGS("pnh-cag-lid-in-group-sk-distrib-list");
        }
        const a = n.filter(A);
        if (a.length < n.length) {
          __LOG__(4, undefined, new Error(), true)`removeLidFromSendingList: lids found in groupSendingList.senderKeyList.skList`;
          SEND_LOGS("pnh-cag-lid-in-group-sk-list");
        }
        return (0, i.default)((0, i.default)({}, e), {}, {
          senderKeyList: (0, i.default)((0, i.default)({}, e.senderKeyList), {}, {
            skDistribList: r,
            skList: a
          })
        });
      }
    default:
      e.type;
      throw (0, v.default)(`removeLidFromSendingList - Invalid type: ${e.type}`);
  }
}
exports.GROUP_MSG_TYPE = T;