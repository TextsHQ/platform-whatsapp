var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChat = function () {
  return D.apply(this, arguments);
};
exports.createChatObjectForStorage = w;
exports.createNewsletterObjectForStorage = function (e) {
  const t = w(e);
  return (0, o.default)(t, e => e != null);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/535937.js"));
var s = require("./287461.js");
require("./174662.js");
var l = require("./588613.js");
var u = require("./35234.js");
var c = require("./12643.js");
var d = require("./328329.js");
var p = require("./782049.js");
var f = require("./359987.js");
var _ = require("./37237.js");
var g = require("./469347.js");
var m = require("./389293.js");
var h = require("./656134.js");
var y = require("./448609.js");
var E = require("./392802.js");
var S = require("./885908.js");
var v = require("./800321.js");
var T = require("./257845.js");
var M = r(require("./140854.js"));
var A = require("./448628.js");
var b = require("./700846.js");
var C = require("./35109.js");
var P = require("./228733.js");
require("./412508.js");
var O = require("./459857.js");
var I = require("./604106.js");
var R = require("./283136.js");
var N = require("./766187.js");
function D() {
  return (D = (0, a.default)(function* (e, t, n, r) {
    const {
      forceUsync: a = false,
      firstIncomingMsg: o,
      nextPrivacyMode: l,
      createdOffline: h = false
    } = r != null ? r : {};
    let y = e;
    if (e.isLid()) {
      const n = t == null || !g.VALID_LID_ORIGINS.has(t);
      if (!(0, s.getABPropConfigValue)("pnh_1on1_lid_expected") || t == null && (0, s.getABPropConfigValue)("pnh_prevent_undefined_lid_chat_origin")) {
        __LOG__(2)`lid: ${e.toLogString()}`;
        __LOG__(4, undefined, new Error(), true)`createChat: ${t} trying to create new lid chat without abprop pnh_1on1_lid_expected`;
        SEND_LOGS("create-lid-chat-without-pnh-1on1-lid-expected");
        const n = (0, c.getPhoneNumber)(e);
        if (n != null) {
          y = n;
        }
      } else if (n) {
        __LOG__(2)`lid: ${e.toLogString()}`;
        __LOG__(4, undefined, new Error(), true)`createChat: ${t} unexpected lid chat created`;
        SEND_LOGS("unexpected-lid-chat");
      }
    }
    const A = y.isUser() && a ? yield (0, N.workerSafeSendAndReceive)("getOrQueryUsyncInfo", {
      wid: y
    }) : null;
    const P = A == null ? y : A.wid;
    if (!y.equals(P)) {
      if ((yield (0, u.getChatRecord)(P)) != null) {
        return;
      }
    }
    let O = false;
    let D = false;
    var G;
    var x;
    if ((A == null ? undefined : A.bizInfo) != null) {
      O = (G = A.bizInfo) === null || G === undefined ? undefined : G.verifiedName.isApi;
      D = (x = A.bizInfo) === null || x === undefined ? undefined : x.verifiedName.isSmb;
    } else if (A == null) {
      const e = yield (0, p.getVerifiedBusinessNameRecord)(P);
      if (e != null) {
        D = e.isSmb;
        O = e.isApi;
      }
    }
    const B = n != null ? (0, i.default)((0, i.default)({}, n), {}, {
      id: P
    }) : {
      id: P
    };
    const F = yield k(P, O, o);
    if (F != null) {
      __LOG__(2)`[DMResolve] DM settings found for new chat`;
      B.ephemeralDuration = F.duration;
      B.ephemeralSettingTimestamp = F.settingTimestamp;
      B.disappearingModeInitiator = F.initiator;
      if ((0, s.getABPropConfigValue)("dm_initiator_trigger")) {
        B.disappearingModeTrigger = F.disappearingModeTrigger;
        B.disappearingModeInitiatedByMe = F.initiatedByMe;
      }
    }
    const j = A ? (0, C.getPrivacyModeFromQueryExistResponse)(A) : null;
    const Y = (0, C.getLatestPrivacyMode)(l, j);
    let K;
    let W;
    (0, f.frontendFireAndForget)("updateBusinessInfo", {
      contactId: P,
      businessInfo: {
        privacyMode: Y
      }
    });
    if ((o == null ? undefined : o.subtype) !== "ephemeral_setting") {
      K = L(P, F == null ? undefined : F.duration, F == null ? undefined : F.initiator);
    }
    const V = (o == null ? undefined : o.ctwaContext) != null && (0, S.getCTWAEligibilityFromConversion)({
      conversionData: o.ctwaContext.conversionData,
      conversionSource: o.ctwaContext.conversionSource
    });
    const H = yield (0, m.genContactInfoCardMsg)(P, {
      isBiz: D || O,
      iAmStartingChat: o == null || o.id.fromMe,
      isWASupportStartingChat: o != null && P.isCAPISupportAccount(),
      isFromCTWA: V != null
    });
    let $;
    if (H != null) {
      new E.FmxActionWamEvent({
        fmxEntryPoint: I.FMX_ENTRY_POINT.FMX_CARD,
        fmxEvent: R.FMX_EVENT.FMX_CARD_INSERTED
      }).commit();
    }
    if (D || O) {
      $ = yield U(P);
    }
    const z = yield (0, M.default)(P, Y, $);
    if (z.some(e => e.subtype === "biz_bot_3p_disclosure")) {
      B.bizBotSystemMsgType = _.BizBotType.BIZ_3P;
    } else if (z.some(e => e.subtype === "biz_bot_1p_disclosure")) {
      B.bizBotSystemMsgType = _.BizBotType.BIZ_1P;
    }
    const q = yield (0, d.getOrphanTcToken)(P.toString());
    var J;
    var Q;
    if (q) {
      B.tcToken = (J = q.tcToken) !== null && J !== undefined ? J : null;
      B.tcTokenTimestamp = (Q = q.tcTokenTimestamp) !== null && Q !== undefined ? Q : null;
      yield (0, d.removeOrphanTcToken)(P.toString());
    }
    yield (0, f.frontendFireAndForget)("chatCollectionGadd", {
      chat: B
    });
    yield (0, u.createChatRecord)(P, w(B));
    const X = T.MessageOverwriteOption.NO_OVERWRITE;
    if (h) {
      const e = [H, ...z, K, W].filter(Boolean);
      (0, v.getMessageCache)().addMessages(e.map(e => ({
        msg: e
      })), false);
    } else {
      const e = [H, ...z, K, W].filter(Boolean);
      for (const t of e) {
        yield (0, b.handleSingleMsg)(t.from, t, "createChat", X, false);
      }
    }
  })).apply(this, arguments);
}
function w(e) {
  var t;
  var n;
  var r;
  var i;
  const a = {
    id: e.id.toString(),
    t: e.t,
    isAutoMuted: false,
    unreadCount: (t = e.unreadCount) !== null && t !== undefined ? t : 0,
    notSpam: e.notSpam,
    ephemeralDuration: e.ephemeralDuration,
    ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
    disappearingModeInitiator: (e.disappearingModeInitiator, e.disappearingModeInitiator),
    tcToken: (n = e.tcToken) !== null && n !== undefined ? n : undefined,
    tcTokenTimestamp: (r = e.tcTokenTimestamp) !== null && r !== undefined ? r : undefined,
    tcTokenSenderTimestamp: (i = e.tcTokenSenderTimestamp) !== null && i !== undefined ? i : undefined,
    bizBotSystemMsgType: e.bizBotSystemMsgType,
    lidOriginType: e.lidOriginType
  };
  var o;
  if ((0, s.getABPropConfigValue)("dm_initiator_trigger")) {
    a.disappearingModeTrigger = (e.disappearingModeTrigger, e.disappearingModeTrigger);
    a.disappearingModeInitiatedByMe = (o = e.disappearingModeInitiatedByMe) !== null && o !== undefined ? o : undefined;
  }
  if (e.name != null) {
    a.name = e.name;
  }
  if (e.isReadOnly != null) {
    a.isReadOnly = e.isReadOnly;
  }
  if (e.muteExpiration != null) {
    a.muteExpiration = e.muteExpiration;
  }
  return a;
}
function L(e, t, n) {
  let r = null;
  if (t != null) {
    r = n === y.DisappearingModeInitiator.ChangedInChat ? (0, m.genDisappearingModeUpdateSystemMsg)(e, t, null) : (0, m.genDefaultDisappearingModeSystemMsg)(e, t, n === y.DisappearingModeInitiator.InitiatedByMe);
  }
  return r;
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, a.default)(function* (e, t, n) {
    const [r, i] = yield Promise.all([(0, c.getContactRecord)((0, O.assertGetMeUser)()), (0, c.getContactRecord)(e)]);
    if (!t && e.isUser() && !e.isPSA()) {
      if (n == null || n.id.fromMe) {
        return (0, h.resolveNewChatDMSettings)(r, i);
      }
      const e = (0, h.getEphemeralDurationForUser)(r);
      return (0, h.resolveNewIncomingChatDMSettings)(n ? (0, A.getMsgEphemeralitySettings)(n) : null, e);
    }
  })).apply(this, arguments);
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, a.default)(function* (e) {
    var t;
    var n;
    const r = yield (0, l.getBusinessProfileRow)(e.toString());
    if (r) {
      return _.BizBotAutomatedType.cast(r.automatedType);
    }
    if ((t = (yield (0, P.queryBusinessProfile)([{
      wid: e
    }]))[0]) === null || t === undefined || (n = t.profile) === null || n === undefined) {
      return undefined;
    } else {
      return n.automated_type;
    }
  })).apply(this, arguments);
}