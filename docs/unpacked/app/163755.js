var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getText = exports.getSenderObj = exports.getSafeMsg = exports.getRtl = exports.getReplyButtons = exports.getPendingDeleteForMe = exports.getMsgSenderId = exports.getMediaData = exports.getMaybeChat = exports.getIsUrlMessage = exports.getIsUnsentMedia = exports.getIsTransparentMsg = exports.getIsRTL = exports.getIsQuickReply = exports.getIsMms = exports.getIsAnimatedEmoji = exports.getHasTemplateButtons = exports.getHasBodyOrFooter = exports.getEventType = exports.getDir = exports.getContainsEmoji = exports.getChatCollection = exports.getChat = exports.getCelebrationAnimationCandidate = exports.getCarouselCardsCollection = exports.getCarouselCards = exports.getButtons = exports.getBotPluginType = exports.getAssetIdForAnimatedEmoji = exports.getAsVisualMedia = exports.getAsViewOnce = exports.getAsVideo = exports.getAsUrl = exports.getAsRevoked = exports.getAsRequestPhoneNumber = exports.getAsPtv = exports.getAsPttLike = exports.getAsPtt = exports.getAsProductInquiry = exports.getAsProduct = exports.getAsPollUpdate = exports.getAsPollCreation = exports.getAsMms = exports.getAsImage = exports.getAsGroupedSticker = exports.getAsGroupNotification = exports.getAsDoc = exports.getAsChat = exports.getAsBroadcastNotification = exports.getAsBotPluginCarouselMsg = exports.getAsAutoDownloadableMedia = exports.getAsAudio = exports.getAsAlbumAsset = exports.getAllEmojis = exports.clearFrontendMsgGetterCacheFor = undefined;
var i = r(require("../vendor/339138.js"));
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
}(require("./12132.js"));
var o = require("./402994.js");
var s = require("./832547.js");
var l = require("./374660.js");
var u = require("./147980.js");
var c = require("./70354.js");
var d = require("./720934.js");
var p = r(require("./97359.js"));
var f = require("./272619.js");
var _ = require("./535979.js");
var g = r(require("./932325.js"));
var m = require("./767961.js");
var h = require("./787742.js");
var y = r(require("./565754.js"));
var E = require("./430231.js");
var S = require("./373070.js");
var v = require("./899841.js");
var T = require("./533494.js");
var M = require("./989199.js");
var A = require("./517286.js");
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const {
  field: C,
  computed: P,
  clearCacheFor: O
} = (0, f.createGetterFactories)({
  root: h.getMsgUnsafe,
  createCache: _.createFrontendMessagesCache
});
const I = O;
exports.clearFrontendMsgGetterCacheFor = I;
const R = Object.defineProperty(P(e => {
  let [t, n, r, i] = e;
  return (0, E.typeIsMms)({
    type: t,
    subtype: n,
    headerType: r,
    interactiveHeader: i
  });
}, [h.getType, h.getSubtype, h.getHeaderType, h.getInteractiveHeader]), "name", {
  value: "getIsMms"
});
exports.getIsMms = R;
const N = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  return t != null && t < o.ACK.SENT && n && r;
}, [h.getAck, R, h.getIsSentByMe]), "name", {
  value: "getIsUnsentMedia"
});
exports.getIsUnsentMedia = N;
const D = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  const i = (0, m.eventTypeFromMsgType)(t);
  if (r) {
    if (n) {
      if (i === u.EventType.IGNORE) {
        return u.EventType.IGNORE;
      } else {
        return u.EventType.NOTEWORTHY;
      }
    } else {
      return i;
    }
  } else {
    return u.EventType.IGNORE;
  }
}, [h.getMsgUnsafe, h.getInvis, h.getIsNewMsg]), "name", {
  value: "getEventType"
});
exports.getEventType = D;
const w = e => {
  switch (e.type) {
    case "interactive":
      if ((0, h.getNativeFlowName)(e) != null) {
        return (0, d.formatNFMText)(e);
      } else {
        return (0, h.getCaption)(e);
      }
    case "native_flow":
      return (0, d.formatNFMText)(e);
  }
  return null;
};
const L = Object.defineProperty(P(e => {
  let [t, n, r, a, o, s, l, u, c, d, p, f, _] = e;
  if (d || p) {
    if (n === S.MSG_TYPE.CHAT) {
      return a;
    } else {
      return o;
    }
  }
  switch (n) {
    case "chat":
    case "interactive_response":
      return a;
    case "image":
    case "video":
    case "ptv":
    case "document":
      return o;
    case "location":
      if (l) {
        return s;
      } else {
        return undefined;
      }
    case "payment":
      if (u == null) {
        return undefined;
      } else {
        return u.body;
      }
    case "groups_v4_invite":
      return s;
    case "list":
      if (f == null) {
        return undefined;
      } else {
        return f.description;
      }
    case "product":
      return (0, i.default)(r, {
        length: v.MAX_REPLY_PRODUCT_TITLE_LENGTH
      });
    case "hsm":
    case "template_button_reply":
      return a;
    case "interactive":
      if (_ != null) {
        return w(t);
      } else {
        return o;
      }
    case "native_flow":
      return w(t);
    case "poll_creation":
      return c;
    case "audio":
    case "biz-cover-photo":
    case "broadcast_notification":
    case "buttons_response":
    case "call_log":
    case "ciphertext":
    case "debug":
    case "e2e_notification":
    case "gp2":
    case "keep_in_chat":
    case "list_response":
    case "multi_vcard":
    case "notification":
    case "notification_template":
    case "order":
    case "oversized":
    case "poll_update":
    case "protocol":
    case "ptt":
    case "reaction":
    case "reaction_enc":
    case "request_phone_number":
    case "revoked":
    case "sticker":
    case "status_v3":
    case "unknown":
    case "pin_message":
    case "pinned_message":
    case "vcard":
    case "newsletter_notification":
    case "comment":
    case "history_bundle":
    default:
      return;
  }
}, [h.getMsgUnsafe, h.getType, h.getTitle, h.getBody, h.getCaption, h.getComment, h.getIsLive, h.getPaymentNoteMsg, h.getPollName, h.getIsFromTemplate, h.getIsDynamicReplyButtonsMsg, h.getList, h.getNativeFlowName]), "name", {
  value: "getText"
});
exports.getText = L;
const k = Object.defineProperty(P(e => {
  let [t, n, r, i] = e;
  if (t === S.MSG_TYPE.VCARD) {
    if (n) {
      return a.dir(n);
    } else {
      return undefined;
    }
  }
  if (r == null) {
    return;
  }
  const o = (i == null ? undefined : i.length) ? r.replace(/@\d+@g.us/, "") : r;
  return a.dir(o);
}, [h.getType, h.getSubtype, L, h.getGroupMentions]), "name", {
  value: "getDir"
});
exports.getDir = k;
const G = Object.defineProperty(P(e => {
  let [t] = e;
  return t === "rtl" || t === undefined && g.default.isRTL();
}, [k]), "name", {
  value: "getIsRTL"
});
exports.getIsRTL = G;
const U = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  if (t === S.MSG_TYPE.VCARD) {
    return !!n && a.dir(n) === "rtl";
  } else {
    return !!r && a.dir(r) === "rtl";
  }
}, [h.getType, h.getSubtype, L]), "name", {
  value: "getRtl"
});
exports.getRtl = U;
const x = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t != null || n != null;
}, [L, h.getFooter]), "name", {
  value: "getHasBodyOrFooter"
});
exports.getHasBodyOrFooter = x;
const B = Object.defineProperty(P(e => {
  let [t] = e;
  return t != null && t !== "" && c.EmojiUtil.containsEmoji(t);
}, [L]), "name", {
  value: "getContainsEmoji"
});
exports.getContainsEmoji = B;
const F = Object.defineProperty(P(e => {
  let [t] = e;
  if (t == null) {
    return null;
  } else {
    return c.EmojiUtil.extractAllEmojis(t);
  }
}, [L]), "name", {
  value: "getAllEmojis"
});
exports.getAllEmojis = F;
const j = e => (0, h.getIsNewsletterMsg)(e) ? (0, p.default)(require("./358533.js")) : require("./351053.js").ChatCollection;
exports.getChatCollection = j;
const Y = e => {
  const t = j(e).get(y.default.from(e.id).remote);
  if (t == null) {
    __LOG__(2)`getChat: msgKey = ${e.id.toString()}, type = ${e.type}`;
    __LOG__(4, undefined, new Error(), true)`getChat: unexpected null chat`;
    SEND_LOGS("get-chat-unexpected-null");
  }
  return t;
};
exports.getChat = Y;
exports.getMaybeChat = e => j(e).get(y.default.from(e.id).remote);
const K = Object.defineProperty(C("carouselCards"), "name", {
  value: "getCarouselCardsCollection"
});
exports.getCarouselCardsCollection = K;
const W = Object.defineProperty(P(e => {
  let [t] = e;
  if (t == null) {
    return null;
  } else {
    return t.slice();
  }
}, [K]), "name", {
  value: "getCarouselCards"
});
exports.getCarouselCards = W;
const V = Object.defineProperty(C("buttons"), "name", {
  value: "getButtons"
});
exports.getButtons = V;
const H = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t && n != null && n.length > 0;
}, [h.getIsFromTemplate, V]), "name", {
  value: "getHasTemplateButtons"
});
exports.getHasTemplateButtons = H;
const $ = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (!t) {
    return false;
  }
  if (n == null) {
    return false;
  }
  const r = n.at(0);
  return r != null && r.subtype === A.TEMPLATE_BUTTON_SUBTYPE.QUICK_REPLY;
}, [H, V]), "name", {
  value: "getIsQuickReply"
});
exports.getIsQuickReply = $;
const z = Object.defineProperty(P(e => {
  let [t] = e;
  return t;
}, [h.getMsgUnsafe]), "name", {
  value: "getSafeMsg"
});
exports.getSafeMsg = z;
const q = Object.defineProperty(P(e => {
  let [t] = e;
  if (t.type === S.MSG_TYPE.PRODUCT && t.id && t.id.id.startsWith(s.PRODUCT_INQUIRY_TYPE)) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType, h.getId]), "name", {
  value: "getAsProductInquiry"
});
exports.getAsProductInquiry = q;
const J = Object.defineProperty(P(e => {
  let [t] = e;
  switch (t.type) {
    case S.MSG_TYPE.GP2:
      return t;
    default:
      return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsGroupNotification"
});
exports.getAsGroupNotification = J;
const Q = Object.defineProperty(P(e => {
  let [t] = e;
  if (t.type === S.MSG_TYPE.BROADCAST_NOTIFICATION) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsBroadcastNotification"
});
exports.getAsBroadcastNotification = Q;
const X = Object.defineProperty(P(e => {
  let [t] = e;
  if (t.type === "product") {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsProduct"
});
exports.getAsProduct = X;
const Z = Object.defineProperty(P(e => {
  let [t] = e;
  if (t.type === S.MSG_TYPE.REVOKED) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsRevoked"
});
exports.getAsRevoked = Z;
const ee = Object.defineProperty(P(e => {
  let [t, n, r, i, a, o, s, l, u, c] = e;
  if (t.type !== S.MSG_TYPE.IMAGE && (t.type !== S.MSG_TYPE.VIDEO || t.isGif === true) || r || i || o || l || u || c) {
    return null;
  } else {
    return t;
  }
}, [z, h.getType, h.getIsNotification, h.getCaption, h.getIsForwarded, Z, h.getIsGif, h.getQuotedMsg, h.getCtwaContext, h.getIsViewOnce]), "name", {
  value: "getAsAlbumAsset"
});
exports.getAsAlbumAsset = ee;
const te = Object.defineProperty(P(e => {
  let [t, n] = e;
  return (0, E.typeIsUrl)({
    type: t,
    subtype: n
  });
}, [h.getType, h.getSubtype]), "name", {
  value: "getIsUrlMessage"
});
exports.getIsUrlMessage = te;
const ne = Object.defineProperty(P(e => {
  let [t, n, r, i] = e;
  if (r) {
    return null;
  }
  switch (t.type) {
    case S.MSG_TYPE.IMAGE:
    case S.MSG_TYPE.STICKER:
    case S.MSG_TYPE.AUDIO:
    case S.MSG_TYPE.PTT:
    case S.MSG_TYPE.VIDEO:
    case S.MSG_TYPE.PTV:
    case S.MSG_TYPE.DOCUMENT:
      return t;
  }
  if (i) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType, h.getIsViewOnce, te]), "name", {
  value: "getAsAutoDownloadableMedia"
});
exports.getAsAutoDownloadableMedia = ne;
const re = Object.defineProperty(P(e => {
  let [t, n, r, i, a, o, s] = e;
  const u = Y(t.unsafe());
  if (t.type !== S.MSG_TYPE.STICKER || r || i || a || o || s || (0, l.isCommunityAnnouncementGroup)(u)) {
    return null;
  } else {
    return t;
  }
}, [z, h.getType, h.getIsNotification, Z, h.getQuotedMsg, h.getCtwaContext, h.getIsNewsletterMsg]), "name", {
  value: "getAsGroupedSticker"
});
exports.getAsGroupedSticker = re;
const ie = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.DOCUMENT) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsDoc"
});
exports.getAsDoc = ie;
const ae = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.IMAGE) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsImage"
});
exports.getAsImage = ae;
const oe = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.VIDEO) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsVideo"
});
exports.getAsVideo = oe;
const se = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.AUDIO) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsAudio"
});
exports.getAsAudio = se;
const le = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.PTT) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsPtt"
});
exports.getAsPtt = le;
const ue = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.PTV) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsPtv"
});
exports.getAsPtv = ue;
const ce = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.POLL_CREATION) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsPollCreation"
});
exports.getAsPollCreation = ce;
const de = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.POLL_UPDATE) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsPollUpdate"
});
exports.getAsPollUpdate = de;
const pe = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.REQUEST_PHONE_NUMBER) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsRequestPhoneNumber"
});
exports.getAsRequestPhoneNumber = pe;
const fe = Object.defineProperty(P(e => {
  let [t, n] = e;
  if ((0, E.typeIsMms)(t)) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsMms"
});
exports.getAsMms = fe;
const _e = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  if ((0, E.typeIsUrl)(t)) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType, h.getSubtype]), "name", {
  value: "getAsUrl"
});
exports.getAsUrl = _e;
const ge = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.IMAGE || t.type === S.MSG_TYPE.VIDEO) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsVisualMedia"
});
exports.getAsVisualMedia = ge;
const me = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  if (n != null && r) {
    return n;
  } else {
    return null;
  }
}, [h.getType, ge, h.getIsViewOnce]), "name", {
  value: "getAsViewOnce"
});
exports.getAsViewOnce = me;
const he = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.type === S.MSG_TYPE.CHAT) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType]), "name", {
  value: "getAsChat"
});
exports.getAsChat = he;
const ye = Object.defineProperty(P(e => {
  let [t, n, r, i] = e;
  if (t.type === S.MSG_TYPE.PTT || t.type === S.MSG_TYPE.AUDIO && i && r != null) {
    return t;
  } else {
    return null;
  }
}, [z, h.getType, h.getWaveform, h.getIsOpus]), "name", {
  value: "getAsPttLike"
});
exports.getAsPttLike = ye;
const Ee = Object.defineProperty(C("senderObj"), "name", {
  value: "getSenderObj"
});
exports.getSenderObj = Ee;
const Se = Object.defineProperty(C("mediaData"), "name", {
  value: "getMediaData"
});
exports.getMediaData = Se;
const ve = Object.defineProperty(C("replyButtons"), "name", {
  value: "getReplyButtons"
});
exports.getReplyButtons = ve;
const Te = Object.defineProperty(C("pendingDeleteForMe", {
  default: false
}), "name", {
  value: "getPendingDeleteForMe"
});
exports.getPendingDeleteForMe = Te;
const Me = Object.defineProperty(C("botPluginType"), "name", {
  value: "getBotPluginType"
});
exports.getBotPluginType = Me;
const Ae = Object.defineProperty(P(e => {
  var t;
  let [n, r, i] = e;
  if ((i == null || (t = i.id) === null || t === undefined ? undefined : t.isBot()) && r === T.BotPluginMetadata$PluginType.SEARCH) {
    return n;
  } else {
    return null;
  }
}, [z, Me, Ee]), "name", {
  value: "getAsBotPluginCarouselMsg"
});
exports.getAsBotPluginCarouselMsg = Ae;
const be = Object.defineProperty(P(e => {
  let [t] = e;
  return (0, E.getCelebrationAnimationType)(t);
}, [L]), "name", {
  value: "getCelebrationAnimationCandidate"
});
exports.getCelebrationAnimationCandidate = be;
const Ce = Object.defineProperty(P(e => {
  let [t, n] = e;
  return (0, E.isAnimatedEmoji)(t, n);
}, [h.getBody, h.getType]), "name", {
  value: "getIsAnimatedEmoji"
});
exports.getIsAnimatedEmoji = Ce;
const Pe = Object.defineProperty(P(e => {
  let [t, n, r, i] = e;
  switch (t) {
    case S.MSG_TYPE.STICKER:
      return Boolean(!r && !n);
    case S.MSG_TYPE.CHAT:
      return !r && i;
    case S.MSG_TYPE.PTV:
      return (0, M.isPtvReceivingEnabled)();
    default:
      return false;
  }
}, [h.getType, h.getCtwaContext, h.getQuotedMsg, Ce]), "name", {
  value: "getIsTransparentMsg"
});
exports.getIsTransparentMsg = Pe;
const Oe = Object.defineProperty(P(e => {
  let [t] = e;
  if (t != null) {
    return c.EmojiUtil.getAssetIdForAnimatedEmoji(t);
  }
}, [h.getBody]), "name", {
  value: "getAssetIdForAnimatedEmoji"
});
exports.getAssetIdForAnimatedEmoji = Oe;
const Ie = Object.defineProperty(P(e => {
  var t;
  let n;
  let [r, i, a, o, s] = e;
  if (r) {
    n = i ? o.remote : a == null ? undefined : a.newsletterId;
  }
  if ((t = n) !== null && t !== undefined) {
    return t;
  } else {
    return s.id;
  }
}, [h.getHasOriginatedFromNewsletter, h.getIsNewsletterMsg, h.getForwardedNewsletterMessageInfo, h.getId, Ee]), "name", {
  value: "getMsgSenderId"
});
exports.getMsgSenderId = Ie;