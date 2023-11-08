var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptAndSendSenderKeyMsg = function () {
  return H.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./632157.js");
var s = require("./716358.js");
var l = require("./287461.js");
var u = require("./678002.js");
var c = require("./558763.js");
var d = require("./827467.js");
var p = require("./303754.js");
var f = require("./973776.js");
var _ = require("./354458.js");
var g = require("./707065.js");
var m = require("./355813.js");
var h = require("./21838.js");
var y = require("./974637.js");
var E = require("./309029.js");
var S = require("./747350.js");
var v = require("./226430.js");
var T = require("./853441.js");
var M = require("./883310.js");
var A = require("./917504.js");
var b = require("./787742.js");
var C = require("./848624.js");
var P = require("./311110.js");
var O = require("./851698.js");
var I = require("./878395.js");
var R = require("./608182.js");
var N = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = j(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./138706.js"));
var D = require("./76256.js");
var w = require("./757453.js");
var L = require("./459857.js");
var k = require("./243703.js");
var G = require("./718451.js");
var U = require("./86575.js");
var x = require("./669050.js");
var B = require("./574819.js");
var F = r(require("./556869.js"));
function j(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (j = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, i.default)(function* (e, t, n) {
    var r;
    var i;
    var a;
    if (!((r = e.sendPerfReporter) === null || r === undefined)) {
      r.startPrekeysFetchStage();
    }
    if (!((i = e.sendPerfReporter) === null || i === undefined)) {
      i.setFetchedPrekeyCount(0);
    }
    if (t.length > 0) {
      try {
        var o;
        const r = yield (0, A.ensureE2ESessions)(t);
        if (!((o = e.sendPerfReporter) === null || o === undefined)) {
          o.setFetchedPrekeyCount(r == null ? undefined : r.missedPrekeyCount);
        }
        (0, P.maybePostPrekeysDepletionMetric)({
          count: r == null ? undefined : r.depletedPrekeyCount,
          prekeysFetchReason: U.PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
          messageType: G.MESSAGE_TYPE.GROUP,
          deviceSizeBucket: n.deviceSizeBucket
        });
      } catch (e) {
        __LOG__(4, undefined, new Error(), undefined, ["messaging"])`ensureE2ESessions: failed for ${t.length} devices: ${e}`;
      }
    }
    if (!((a = e.sendPerfReporter) === null || a === undefined)) {
      a.postPrekeysFetchStage();
    }
  })).apply(this, arguments);
}
function W() {
  return V.apply(this, arguments);
}
function V() {
  return (V = (0, i.default)(function* (e, t, n, r, i, a, o, l) {
    var c;
    var d;
    var g;
    if (!((c = o.sendPerfReporter) === null || c === undefined)) {
      c.startClientEncryptStage();
    }
    const h = (0, R.encodeAndPad)(i);
    const v = (0, f.mediaTypeFromProtobuf)(i);
    const T = (0, _.isBotEnabled)() && ((d = e.invokedBotWid) === null || d === undefined ? undefined : d.isBot()) === true;
    const M = (0, _.isBotEnabled)() && (0, b.getIsBotFeedbackMessage)(e);
    const A = (0, b.getIsRevokeForMsgFromOrDeliveredToBot)(e);
    const {
      ciphertext: C,
      senderKeyBytes: P
    } = yield (0, E.encryptMsgSenderKey)(e, t, h, a);
    let O;
    if (n.length > 0) {
      O = yield (0, S.getKeyDistributionMsg)(e, t, n, P, false);
    }
    if (!((g = o.sendPerfReporter) === null || g === undefined)) {
      g.postClientEncryptStage();
    }
    let I = null;
    let N = false;
    if (O && O.length > 0 && !M) {
      I = (0, s.wap)("participants", null, O.map(e => {
        let {
          type: t,
          ciphertext: n,
          participant: r
        } = e;
        if (t === p.CiphertextType.Pkmsg) {
          N = true;
        }
        const a = l == null ? undefined : l.get((0, B.widToUserJid)((0, x.toUserWid)(r)));
        const o = a != null ? (0, s.wap)("content_binding", null, a) : null;
        return (0, s.wap)("to", {
          jid: (0, m.DEVICE_JID)(r)
        }, (0, s.wap)("enc", {
          v: (0, s.CUSTOM_STRING)(f.CIPHERTEXT_VERSION.toString()),
          type: (0, s.CUSTOM_STRING)(t),
          "decrypt-fail": (0, f.encodeMaybeDecryptFail)((0, y.decryptFailAttributeFromProtobuf)(i))
        }, n), o);
      }));
    } else if (l != null) {
      I = (0, s.wap)("participants", null, r.map(e => {
        const t = l == null ? undefined : l.get((0, B.widToUserJid)((0, x.toUserWid)(e)));
        if (t != null) {
          return (0, s.wap)("to", {
            jid: (0, m.DEVICE_JID)(e)
          }, (0, s.wap)("content_binding", null, t));
        } else {
          return null;
        }
      }));
    }
    const D = M ? null : (0, s.wap)("enc", {
      v: (0, s.CUSTOM_STRING)(f.CIPHERTEXT_VERSION.toString()),
      type: (0, s.CUSTOM_STRING)(p.CiphertextType.Skmsg),
      mediatype: (0, f.encodeMaybeMediaType)(v),
      "decrypt-fail": (0, f.encodeMaybeDecryptFail)((0, y.decryptFailAttributeFromProtobuf)(i))
    }, C);
    let w = null;
    const [L, k] = T || M || A ? yield z(e, i) : [null, false];
    if (N || k) {
      const e = yield (0, u.getADVEncodedIdentity)();
      w = (0, s.wap)("device-identity", null, e);
    }
    return [I, D, w, L];
  })).apply(this, arguments);
}
function H() {
  return (H = (0, i.default)(function* (e, t, n, r, i, u, p) {
    var f;
    var _;
    var h;
    var E;
    var S;
    const {
      id: A,
      to: P
    } = t;
    const w = e.data;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendSenderKeyMsg: sending ${A}`;
    const {
      id: G
    } = A;
    const {
      skDistribList: U,
      skList: j,
      rotateKey: K
    } = r;
    $(P, u);
    if (!((f = u.sendPerfReporter) === null || f === undefined)) {
      f.setSenderKeyDistributionCount(U.length);
    }
    const V = j.concat(U);
    const H = (0, L.getMaybeMeLid)();
    const z = !(0, v.isCagAddon)(w, i) && (i == null ? undefined : i.isLidAddressingMode) !== true || H == null ? (0, L.assertGetMe)() : H;
    const q = yield (0, C.phashV2)([...V, z]);
    const J = (0, b.getIsBotFeedbackMessage)(w);
    yield (0, c.createOrMergeReceiptRecords)(V.map(e => ({
      msgKey: A,
      receiverId: e
    })));
    if (K) {
      yield N.Session.deleteGroupSenderKeyInfo(P, z);
    }
    yield Y(u, U, i);
    const [Q, X, Z, ee] = yield W(w, P, U, j, n, i, u, p);
    const te = (0, y.pollTypeAttributeFromProtobuf)(n);
    const {
      threadMsgId: ne,
      threadMsgSenderLid: re
    } = (0, y.extractCommentTargetIdAndSenderLid)(w);
    const ie = te != null || ne != null && re != null ? (0, s.wap)("meta", {
      polltype: te != null ? te : s.DROP_ATTR,
      thread_msg_id: ne != null ? (0, s.CUSTOM_STRING)(ne) : s.DROP_ATTR,
      thread_msg_sender_jid: re ? (0, m.USER_JID)(re) : s.DROP_ATTR
    }) : null;
    const ae = p == null ? undefined : p.get((0, B.widToUserJid)((0, x.toUserWid)(z)));
    const oe = ae != null ? (0, s.wap)("sender_content_binding", null, ae) : null;
    const se = i.isLidAddressingMode === true ? M.STANZA_MSG_ADDRESSING_MODE.lid : M.STANZA_MSG_ADDRESSING_MODE.pn;
    const le = (0, s.wap)("message", {
      id: (0, s.CUSTOM_STRING)(G),
      to: (0, m.CHAT_JID)(P),
      phash: J ? s.DROP_ATTR : (0, s.CUSTOM_STRING)(q),
      type: (0, y.typeAttributeFromProtobuf)(n),
      edit: (0, R.editAttribute)(n, w.subtype),
      addressing_mode: (0, l.getABPropConfigValue)("lid_groups_outgoing_explicit_address_mode") ? (0, s.CUSTOM_STRING)(se) : s.DROP_ATTR
    }, Q, X, Z, ie, ee, oe);
    yield (0, R.updateIdentityRange)(e, V);
    yield (0, D.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
    if (!((_ = u.sendPerfReporter) === null || _ === undefined)) {
      _.postReadyToSendStage();
    }
    if (!((h = u.sendPerfReporter) === null || h === undefined)) {
      h.startWrittenWireStage();
    }
    const ue = yield (0, a.deprecatedSendStanzaAndReturnAck)(le, (0, g.toCoreAckTemplate)({
      id: G,
      class: "message",
      from: P,
      participant: null
    }));
    var ce;
    if (Q) {
      if (!((ce = u.sendReporter) === null || ce === undefined)) {
        ce.setMessageDistributionType(k.MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE);
      }
    }
    if (!((E = u.sendPerfReporter) === null || E === undefined)) {
      E.postWrittenWireStage();
    }
    u.sendPerfReporter = null;
    if (!((S = u.sendReporter) === null || S === undefined)) {
      S.postSuccess();
    }
    u.sendReporter = null;
    const de = R.sendMsgAckSyncParser.parse(ue);
    if (de.error) {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`encryptAndSendSenderKeyMsg: invalid ack from server for ${w.id}`;
      return Promise.reject((0, F.default)("[messaging] encryptAndSendSenderKeyMsg: Invalid ack from server"));
    }
    yield (0, d.markHasSenderKey)(P, U);
    const {
      phash: pe,
      count: fe,
      addressingMode: _e
    } = de.success;
    if (pe && pe !== q) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendSenderKeyMsg: phash mismatch for ${w.id}, got server phash ${pe}`;
      (0, I.resendGroupMsg)({
        isDirect: false,
        msgRecord: e,
        baseMsgData: t,
        msgProtobuf: n,
        oldList: V,
        ackTime: (0, o.unixTime)(),
        groupData: i,
        metricReporter: u
      });
    } else if ((0, l.getABPropConfigValue)("lid_groups_handle_server_addressing_mode") && _e != null && _e !== se) {
      (0, T.sendQueryGroup)(P);
    }
    if (fe != null) {
      (0, O.getMessageTable)().merge(String(A), {
        count: fe
      });
    }
    return de.success;
  })).apply(this, arguments);
}
function $(e, t) {
  var n;
  var r;
  if ((0, w.markUserSentMessageToChat)(e)) {
    if (!((n = t.sendPerfReporter) === null || n === undefined)) {
      n.setMessageIsFirstUserMessage(true);
    }
    if (!((r = t.sendReporter) === null || r === undefined)) {
      r.setMessageIsFirstUserMessage(true);
    }
  }
}
function z() {
  return q.apply(this, arguments);
}
function q() {
  return (q = (0, i.default)(function* (e, t) {
    const n = (0, b.getIsBotFeedbackMessage)(e);
    let r = null;
    const i = (0, b.getIsRevokeForMsgFromOrDeliveredToBot)(e);
    var a;
    if (n) {
      r = (a = e.protocolMessageKey) === null || a === undefined ? undefined : a.participant;
    } else {
      r = i ? e.botRespOrInvocationRevokeBotWid : e.invokedBotWid;
    }
    if (!r || !r.isBot()) {
      return [null, false];
    }
    let o = false;
    yield (0, A.ensureE2ESessions)([r]);
    const l = (0, h.updateBotInvokeMsgProtoCopyForCapi)(t, e.botMessageSecret);
    const {
      type: u,
      ciphertext: c
    } = yield (0, E.encryptMsgProtobuf)(r, 0, l, e, 0);
    if (u === p.CiphertextType.Pkmsg) {
      o = true;
    }
    return [(0, s.wap)("bot", {
      type: n ? "feedback" : s.DROP_ATTR
    }, (0, s.wap)("to", {
      jid: (0, m.DEVICE_JID)(r)
    }, (0, s.wap)("enc", {
      v: (0, s.CUSTOM_STRING)(f.CIPHERTEXT_VERSION.toString()),
      type: (0, s.CUSTOM_STRING)(u)
    }, c))), o];
  })).apply(this, arguments);
}