var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FANOUT_TYPE = undefined;
exports.createFanoutMsgStanza = function () {
  return G.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./716358.js");
var o = require("./287461.js");
var s = require("./678002.js");
var l = require("./558763.js");
var u = require("./303754.js");
var c = require("./973776.js");
var d = require("./354458.js");
var p = require("./351053.js");
var f = require("./355813.js");
var _ = require("./177938.js");
var g = require("./588733.js");
var m = require("./21838.js");
var h = require("./974637.js");
var y = require("./309029.js");
var E = require("./116170.js");
var S = require("./917504.js");
var v = require("./787742.js");
var T = require("./596633.js");
var M = require("./311110.js");
var A = require("./608182.js");
var b = require("./76256.js");
var C = require("./459857.js");
var P = require("./718451.js");
var O = require("./86575.js");
var I = r(require("./342310.js"));
var R = require("./669050.js");
var N = require("./574819.js");
var D = r(require("./556869.js"));
const w = Object.freeze({
  CHAT: "chat",
  GROUP_DIRECT: "groupDirect"
});
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, i.default)(function* (e, t, n, r, o, s, l) {
    var p;
    var _;
    const S = (0, c.mediaTypeFromProtobuf)(r);
    const T = (0, c.nativeFlowNameTypeFromProtobuf)(r);
    const M = (0, d.isBotEnabled)() && ((p = e.invokedBotWid) === null || p === undefined ? undefined : p.isBot()) === true;
    const b = (0, d.isBotEnabled)() && (0, v.getIsBotFeedbackMessage)(e);
    const P = b && Boolean(e.bizBotType && ((_ = e.protocolMessageKey) === null || _ === undefined ? undefined : _.remote.equals(t)));
    const O = b && t.isBot() || P;
    const I = b && !t.isBot() && !P;
    const L = (0, v.getIsRevokeForMsgFromOrDeliveredToBot)(e);
    if (o.fanoutType === w.CHAT && n.length === 1 && (0, A.isPrimaryDevice)(n[0]) && !I) {
      const i = n[0];
      const o = (0, C.isMeAccount)(i) ? (0, g.wrapDeviceSentMessage)(r, t) : r;
      const {
        type: s,
        ciphertext: d
      } = yield (0, y.encryptMsgProtobuf)(i, 0, o, e, l);
      return {
        shouldHaveIdentity: s === u.CiphertextType.Pkmsg,
        body: (0, a.wap)("enc", {
          v: (0, a.CUSTOM_STRING)(c.CIPHERTEXT_VERSION.toString()),
          type: (0, a.CUSTOM_STRING)(s),
          mediatype: (0, c.encodeMaybeMediaType)(S),
          "decrypt-fail": (0, c.encodeMaybeDecryptFail)((0, h.decryptFailAttributeFromProtobuf)(r)),
          native_flow_name: (0, c.encodeMaybeNativeFlowName)(T)
        }, d),
        botBody: O ? (0, a.wap)("bot", {
          type: "feedback"
        }) : null
      };
    }
    let k = false;
    const G = n.map(function () {
      var n = (0, i.default)(function* (n) {
        const i = (0, C.isMeAccount)(n) ? (0, g.wrapDeviceSentMessage)(r, t) : r;
        const d = o.fanoutType === w.GROUP_DIRECT ? (0, R.toUserWid)(n) : (0, R.toUserWid)(t);
        yield (0, E.populateICDCMeta)(d, i);
        const p = s == null ? undefined : s.get((0, N.widToUserJid)(d));
        const _ = p != null ? (0, a.wap)("content_binding", null, p) : null;
        try {
          let t = i;
          const o = n.isBot() && (M || I || L);
          if (o) {
            t = (0, m.updateBotInvokeMsgProtoCopyForCapi)(i, e.botMessageSecret);
          }
          const {
            type: s,
            ciphertext: d
          } = yield (0, y.encryptMsgProtobuf)(n, 0, t, e, l);
          if (s === u.CiphertextType.Pkmsg) {
            k = true;
          }
          return {
            shouldFanoutToBot: o,
            node: (0, a.wap)("to", {
              jid: (0, f.DEVICE_JID)(n)
            }, (0, a.wap)("enc", {
              v: (0, a.CUSTOM_STRING)(c.CIPHERTEXT_VERSION.toString()),
              type: (0, a.CUSTOM_STRING)(s),
              mediatype: (0, c.encodeMaybeMediaType)(S),
              "decrypt-fail": (0, c.encodeMaybeDecryptFail)((0, h.decryptFailAttributeFromProtobuf)(r)),
              native_flow_name: (0, c.encodeMaybeNativeFlowName)(T)
            }, d), _)
          };
        } catch (e) {
          __LOG__(3)`encryptAndSendUserMsg: encryption fail for ${String(n)}: ${e}`;
          if ((0, A.isPrimaryDevice)(n)) {
            __LOG__(4, undefined, new Error(), true, ["messaging"])`encryptAndSendUserMsg: encryption fail for primary device ${String(n)}`;
            SEND_LOGS("encryption-fail-for-primary-device", 1, "messaging");
          }
          return null;
        }
      });
      return function () {
        return n.apply(this, arguments);
      };
    }());
    const U = yield Promise.all(G);
    const x = [];
    const B = [];
    U.forEach(e => {
      if ((e == null ? undefined : e.node) != null) {
        if (e == null ? undefined : e.shouldFanoutToBot) {
          B.push(e.node);
        } else {
          x.push(e.node);
        }
      }
    });
    if (x.length > 0 || B.length > 0) {
      return {
        body: x.length > 0 ? (0, a.wap)("participants", null, x) : null,
        botBody: B.length > 0 || O ? (0, a.wap)("bot", {
          type: b ? "feedback" : a.DROP_ATTR
        }, B) : null,
        shouldHaveIdentity: k
      };
    } else {
      return Promise.reject((0, D.default)("[messaging] encryptAndSendUserMsg: encryption fail for all devices"));
    }
  })).apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e, t, n, r, i, g, m) {
    var y;
    var E;
    var C;
    const {
      to: D,
      id: k,
      from: G,
      subtype: U
    } = t;
    const x = e.data;
    try {
      var B;
      var F;
      if (!((B = g.sendPerfReporter) === null || B === undefined)) {
        B.startPrekeysFetchStage();
      }
      const e = yield (0, S.ensureE2ESessions)(r);
      const t = e == null ? undefined : e.missedPrekeyCount;
      var j;
      if (t != null) {
        if (!((j = g.sendPerfReporter) === null || j === undefined)) {
          j.setFetchedPrekeyCount(t);
        }
      }
      if (!((F = g.sendPerfReporter) === null || F === undefined)) {
        F.postPrekeysFetchStage();
      }
      (0, M.maybePostPrekeysDepletionMetric)({
        count: e == null ? undefined : e.depletedPrekeyCount,
        prekeysFetchReason: O.PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
        messageType: i.fanoutType === w.GROUP_DIRECT ? P.MESSAGE_TYPE.GROUP : P.MESSAGE_TYPE.INDIVIDUAL,
        deviceSizeBucket: i.fanoutType === w.GROUP_DIRECT ? (0, I.default)(r.length) : null
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["messaging"])`ensureE2ESessions with error`;
    }
    const Y = (0, v.getIsBotFeedbackMessage)(x) && Boolean(x.bizBotType && ((y = x.protocolMessageKey) === null || y === undefined ? undefined : y.remote.equals(D)));
    const K = (0, d.isBotEnabled)() && (0, v.getIsBotFeedbackMessage)(x) && D.isBot() || Y;
    let W = r;
    if (i.isResendingMsg) {
      W = yield (0, A.filterDeviceWithChangedIdentity)(e, r);
    }
    const V = W.map(e => ({
      msgKey: k,
      receiverId: e
    }));
    yield (0, l.createOrMergeReceiptRecords)(V);
    if (!((E = g.sendPerfReporter) === null || E === undefined)) {
      E.startClientEncryptStage();
    }
    const H = yield (0, T.genContentBindingForMsg)(x, [G, D]);
    const $ = (0, v.getWamEditType)(x);
    const z = yield L(x, D, W, n, i, H, $);
    if (!((C = g.sendPerfReporter) === null || C === undefined)) {
      C.postClientEncryptStage();
    }
    let q = null;
    if (i.fanoutType === w.GROUP_DIRECT) {
      const e = (0, c.mediaTypeFromProtobuf)(n);
      q = (0, a.wap)("enc", {
        v: (0, a.CUSTOM_STRING)(c.CIPHERTEXT_VERSION.toString()),
        type: (0, a.CUSTOM_STRING)(u.CiphertextType.Skmsg),
        mediatype: (0, c.encodeMaybeMediaType)(e)
      });
    }
    let J = null;
    if (z.shouldHaveIdentity) {
      const e = yield (0, s.getADVEncodedIdentity)();
      J = (0, a.wap)("device-identity", null, e);
    }
    const Q = (0, h.getBizNativeFlowName)(n);
    let X;
    const Z = _.ContactCollection.get(D);
    const ee = p.ChatCollection.get(D);
    const te = Z == null ? undefined : Z.privacyMode;
    let ne;
    let re;
    if (te != null) {
      X = (0, a.wap)("biz", {
        host_storage: (0, a.INT)(te.hostStorage),
        actual_actors: (0, a.INT)(te.actualActors),
        privacy_mode_ts: (0, a.INT)(te.privacyModeTs),
        native_flow_name: (0, a.MAYBE_CUSTOM_STRING)(Q)
      });
    }
    if (D.isLid()) {
      if ((ee == null ? undefined : ee.lidOriginType) != null && (ee == null ? undefined : ee.lidOriginType) !== "ctwa" || (Z == null ? undefined : Z.shareOwnPn) === true || (Z == null ? undefined : Z.phoneNumber) == null) {
        if ((0, o.getABPropConfigValue)("lid_outgoing_msg_attach_meta_tag") && (ee == null ? undefined : ee.lidOriginType) === "username" && (Z == null ? undefined : Z.username) != null) {
          re = Z == null ? undefined : Z.username;
        }
      } else {
        ne = Z == null ? undefined : Z.phoneNumber;
      }
    }
    const ie = ee == null ? undefined : ee.lidOriginType;
    if (X == null && Q != null) {
      X = (0, a.wap)("biz", {
        native_flow_name: (0, a.CUSTOM_STRING)(Q)
      });
    }
    if (!i.isResendingMsg) {
      yield (0, A.updateIdentityRange)(e, W);
    }
    yield (0, b.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
    const ae = (0, h.pollTypeAttributeFromProtobuf)(n);
    let oe;
    if (D.isLid() && (0, o.getABPropConfigValue)("lid_outgoing_msg_attach_meta_tag") || ae != null) {
      let e;
      if (D.isLid() && (0, o.getABPropConfigValue)("lid_outgoing_msg_attach_meta_tag")) {
        e = ie === "username" ? u.LID_CANONICAL_TYPE.USERNAME : u.LID_CANONICAL_TYPE.CTWA;
      }
      oe = (0, a.wap)("meta", {
        origin: e != null ? (0, a.CUSTOM_STRING)(e) : a.DROP_ATTR,
        polltype: ae != null ? (0, a.CUSTOM_STRING)(ae) : a.DROP_ATTR
      });
    }
    const se = H == null ? undefined : H.get((0, N.widToUserJid)((0, R.toUserWid)(G)));
    const le = se != null ? (0, a.wap)("sender_content_binding", null, se) : null;
    let ue;
    if (x.subtype === "bot_request_welcome") {
      ue = (0, a.wap)("bot", {
        type: "request_welcome"
      });
    }
    return (0, a.wap)("message", {
      id: (0, a.CUSTOM_STRING)(k.id),
      to: (0, f.CHAT_JID)(D),
      type: (0, h.typeAttributeFromProtobuf)(n),
      edit: (0, A.editAttribute)(n, U),
      device_fanout: i.isResendingMsg === true || K ? (0, a.CUSTOM_STRING)("false") : a.DROP_ATTR,
      recipient_pn: ne ? (0, f.USER_JID)(ne) : a.DROP_ATTR,
      recipient_username: re != null ? (0, a.CUSTOM_STRING)(re) : a.DROP_ATTR,
      addressing_mode: m != null ? (0, a.CUSTOM_STRING)(m) : a.DROP_ATTR
    }, z.body, z.botBody, q, J, X, oe, le, ue);
  })).apply(this, arguments);
}
exports.FANOUT_TYPE = w;