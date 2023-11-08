var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotificationBody = function (e) {
  const t = e.msgDir;
  const n = T.default.isRTL() ? "rtl" : "ltr";
  if (e.body && e.author == null && e.action == null) {
    return e.body;
  }
  let {
    body: r,
    author: a,
    action: o
  } = e;
  if (a == null) {
    a = "";
  }
  o = o == null ? "" : n === "ltr" ? T.default.isolateLTR(o) : T.default.isolateRTL(o);
  if (a) {
    const e = i.dir(a);
    if (n !== "ltr" || t && t !== "ltr" || e && e !== "ltr") {
      if (n !== "ltr" || t && t !== "ltr") {
        if (n !== "ltr" || e && e !== "ltr") {
          if (n === "ltr") {
            if (o) {
              return `‫${a}‏: ${o} ${r}‏`;
            } else {
              return `‫${a}‏: ${r}‏`;
            }
          } else if (t && t !== "rtl" || e && e !== "rtl") {
            if (t && t !== "rtl") {
              if (e && e !== "rtl") {
                if (o) {
                  return `‪${a}‎: ${o} ${r}‎`;
                } else {
                  return `‪${a}‎: ${r}‎$`;
                }
              } else if (o) {
                return `${a}‏: ${o}‏ ‪${r}‬‏`;
              } else {
                return `${a}‏: ‪${r}‬‏`;
              }
            } else if (o) {
              return `‏‪${a}‬: ${o}‏ ${r}‏`;
            } else {
              return `‏‪${a}‬: ${r}‏`;
            }
          } else if (o) {
            return `${a}‏: ${o}‏ ${r}‏`;
          } else {
            return `${a}‏: ${r}‏`;
          }
        } else if (o) {
          return `${a}‎: ${o}‎ ‫${r}‬‎`;
        } else {
          return `${a}‎: ‫${r}‬‎`;
        }
      } else if (o) {
        return `‎‫${a}‬: ${o}‎ ${r}‎`;
      } else {
        return `‎‫${a}‬: ${r}‎`;
      }
    } else if (o) {
      return `${a}‎: ${o}‎ ${r}‎`;
    } else {
      return `${a}‎: ${r}‎`;
    }
  }
  if (o) {
    return `${o} ${r}`;
  }
  return r;
};
exports.getNotificationMessageBody = function (e) {
  var t;
  var n;
  var r;
  var i;
  var T;
  const R = e.shouldShowNotificationPreview();
  const N = e.safe();
  let D = "";
  switch (N.type) {
    case "chat":
      if (R) {
        D = (0, b.default)(e, e.body);
      }
      break;
    case "image":
      {
        let t = "";
        if (A.UA.hasEmoji) {
          t = N.isViewOnce ? "1️⃣ " : "📷 ";
        }
        D = t + (R && (0, b.default)(e, e.caption) || O.default._("Photo", null, {
          hk: "4z2MZB"
        }).toString());
        break;
      }
    case "product":
      {
        const t = A.UA.hasEmoji ? "🛒 " : "";
        D = t + ((0, E.getText)(e) && (0, b.default)(e, (0, E.getText)(e)) || I.fbt._("Product", null, {
          hk: "1H4J4r"
        }).toString());
        break;
      }
    case "interactive":
      if (e.interactiveType === v.default.SHOPS_STOREFRONT) {
        var w;
        const t = A.UA.hasEmoji ? "🛍️  " : "";
        D = t + (0, b.default)(e, e.body != null ? e.body : (w = e.interactiveHeader) === null || w === undefined ? undefined : w.title) || "";
        break;
      }
      if (e.interactiveType === v.default.NATIVE_FLOW && e.nativeFlowName === S.default.ORDER_DETAILS) {
        var L;
        const t = A.UA.hasEmoji ? "📃  " : "";
        D = t + ((0, a.formatOrderDetailsMessagePreview)(e) || ((L = e.caption) !== null && L !== undefined ? L : ""));
        break;
      }
      if (e.interactiveType === v.default.NATIVE_FLOW && e.nativeFlowName === S.default.ORDER_STATUS) {
        var k;
        D = (0, a.formatOrderStatusMessage)(e) || ((k = e.caption) !== null && k !== undefined ? k : "");
        break;
      }
      __LOG__(3)`getNotificationBody: Unrecognized type ${e.type}`;
      return "";
    case "native_flow":
      if (e.nativeFlowName === S.default.ORDER_DETAILS) {
        var G;
        const t = A.UA.hasEmoji ? "📃  " : "";
        D = t + ((0, _.formatNFMTextPreview)(e) || ((G = e.caption) !== null && G !== undefined ? G : ""));
        break;
      }
      __LOG__(3)`getNotificationBody: Unrecognized type ${e.type}`;
      return "";
    case "sticker":
      {
        const e = A.UA.hasEmoji ? "💟 " : "";
        D = e + I.fbt._("Sticker", null, {
          hk: "3gWjqH"
        }).toString();
        break;
      }
    case "video":
      {
        let t;
        let n = "";
        if (e.isGif) {
          n = A.UA.hasEmoji ? "👾 " : "";
          t = R && (0, b.default)(e, e.caption) || "GIF";
        } else {
          if (A.UA.hasEmoji) {
            n = N.isViewOnce ? "1️⃣ " : "🎥 ";
          }
          t = R && (0, b.default)(e, e.caption) || O.default._("Video", null, {
            hk: "2Yr2Dx"
          }).toString();
          if (!N.isViewOnce) {
            t = `${t} (${o.Clock.durationStr(e.duration)})`;
          }
        }
        D = `${n}${t}`;
        break;
      }
    case "ptv":
      {
        const t = A.UA.hasEmoji ? "🎥 " : "";
        const n = `${(R && (0, b.default)(e, e.caption) || I.fbt._("Video Message", null, {
          hk: "bGl5O"
        })).toString()} (${o.Clock.durationStr(e.duration)})`;
        D = `${t}${n}`;
        break;
      }
    case "ptt":
      {
        const t = A.UA.hasEmoji ? "🎤 " : "";
        D = `${t} ${O.default._("Voice message", null, {
          hk: "2LTvOS"
        }).toString()} (${o.Clock.durationStr(e.duration)})`;
        break;
      }
    case "audio":
      {
        const t = A.UA.hasEmoji ? "🎵 " : "";
        D = `${t} ${O.default._("Audio", null, {
          hk: "4rI2uS"
        }).toString()} (${o.Clock.durationStr(e.duration)})`;
        break;
      }
    case "location":
      {
        const t = A.UA.hasEmoji ? "📍 " : "";
        let n;
        n = e.isLive ? R && (0, b.default)(e, e.comment) || I.fbt._("Live location", null, {
          hk: "4hn7as"
        }).toString() : R && e.loc || O.default._("Location", null, {
          hk: "3j6lTi"
        }).toString();
        D = `${t} ${n}`;
        break;
      }
    case "groups_v4_invite":
      D = I.fbt._("WhatsApp group invite", null, {
        hk: "Yox1t"
      });
      break;
    case "gp2":
      D = (0, f.default)(e, true);
      break;
    case "broadcast_notification":
      D = (0, c.default)(e);
      break;
    case "notification":
      D = (t = e.body) !== null && t !== undefined ? t : "";
      break;
    case "vcard":
      {
        const t = A.UA.hasEmoji ? "👤 " : "";
        D = t + (e.subtype || O.default._("Contact", null, {
          hk: "23Gpbk"
        }).toString());
        break;
      }
    case "multi_vcard":
      {
        const t = A.UA.hasEmoji ? "👥 " : "";
        D = t + (0, C.getNameString)(e.vcardList).toString();
        break;
      }
    case "document":
      {
        if (e.isVcardOverMmsDocument) {
          const t = A.UA.hasEmoji ? "👤 " : "";
          D = t + (e.filename || I.fbt._({
            "*": "{count} contacts",
            _1: "1 contact"
          }, [I.fbt._plural(e.pageCount, "count")], {
            hk: "13EUBn"
          }).toString());
          break;
        }
        const t = A.UA.hasEmoji ? "📄 " : "";
        let n = e.caption;
        if (!(e.caption != null && e.caption !== "")) {
          n = e.filename;
        }
        D = t + (R && (0, b.default)(e, n) || O.default._("Document", null, {
          hk: "p3EXI"
        }).toString());
        break;
      }
    case "e2e_notification":
      D = (0, p.default)(N);
      break;
    case "call_log":
      D = (0, d.default)(e, false);
      break;
    case "ciphertext":
      D = I.fbt._("Waiting for this message. This may take a while.", null, {
        hk: "16kp4Z"
      });
      break;
    case "revoked":
      D = (0, h.formatRevokedMsg)(N);
      break;
    case "payment":
      D = function (e) {
        if (e.subtype === "invite") {
          return (0, m.formatPaymentInviteMessageText)(e.id);
        }
        if (!e.paymentCurrency || !e.paymentAmount1000) {
          return I.fbt._("Payment message • Amount unavailable", null, {
            hk: "3SAp3h"
          });
        }
        if (e.subtype !== "send" && e.subtype !== "request") {
          return I.fbt._("Payment message. Open WhatsApp on your phone to view.", null, {
            hk: "3VcAwk"
          });
        }
        let t;
        const n = u.formatAmount1000(e.paymentCurrency, e.paymentAmount1000);
        const r = (0, P.default)((0, M.getSender)(e));
        const i = (0, P.default)(e.paymentMessageReceiverJid);
        const a = s.ContactCollection.get(e.paymentMessageReceiverJid);
        const o = a != null && (0, l.getIsMe)(a);
        const c = e.paymentAmount1000 / 1000;
        t = e.subtype === "send" ? (0, M.getIsGroupMsg)(e) ? o ? I.fbt._({
          "*": "{senderName} sent {amount} to You",
          _1: "{senderName} sent {amount} to You"
        }, [I.fbt._plural(c), I.fbt._param("senderName", r), I.fbt._param("amount", n)], {
          hk: "3PeSt5"
        }) : I.fbt._({
          "*": "{senderName} sent {amount} to {receiverName}",
          _1: "{senderName} sent {amount} to {receiverName}"
        }, [I.fbt._plural(c), I.fbt._param("senderName", r), I.fbt._param("amount", n), I.fbt._param("receiverName", i)], {
          hk: "4cq3sl"
        }) : I.fbt._({
          "*": "Sent {amount} to You",
          _1: "Sent {amount} to You"
        }, [I.fbt._plural(c), I.fbt._param("amount", n)], {
          hk: "15N7Hs"
        }) : (0, M.getIsGroupMsg)(e) ? o ? I.fbt._({
          "*": "{senderName} requested {amount} from You",
          _1: "{senderName} requested {amount} from You"
        }, [I.fbt._plural(c), I.fbt._param("senderName", r), I.fbt._param("amount", n)], {
          hk: "21x5Vs"
        }) : I.fbt._({
          "*": "{senderName} requested {amount} from {receiverName}",
          _1: "{senderName} requested {amount} from {receiverName}"
        }, [I.fbt._plural(c), I.fbt._param("senderName", r), I.fbt._param("amount", n), I.fbt._param("receiverName", i)], {
          hk: "3lzj1W"
        }) : I.fbt._({
          "*": "Requested {amount} from You",
          _1: "Requested {amount} from You"
        }, [I.fbt._plural(c), I.fbt._param("amount", n)], {
          hk: "1JiV7y"
        });
        return t;
      }(e);
      break;
    case "oversized":
      D = (0, g.formatOversizedMsgNotification)(e);
      break;
    case "unknown":
      D = (0, y.formatUnknownMsgNotification)(e);
      break;
    case "list":
      D = `${((n = e.list) === null || n === undefined ? undefined : n.title) || ""} ${((r = e.list) === null || r === undefined ? undefined : r.description) || ""}`;
      break;
    case "list_response":
      D = `${((i = e.listResponse) === null || i === undefined ? undefined : i.title) || ""} ${((T = e.listResponse) === null || T === undefined ? undefined : T.description) || ""}`;
      break;
    case "poll_creation":
      {
        const t = A.UA.hasEmoji ? "📊 " : "";
        D = `${t}${(0, b.default)(e, e.pollName)}`;
        break;
      }
    case "order":
      {
        const t = A.UA.hasEmoji ? "🛒 " : "";
        D = I.fbt._({
          "*": "{shoppingCartIcon}{count} items{message}",
          _1: "{shoppingCartIcon}1 item{message}"
        }, [I.fbt._plural(e.itemCount, "count"), I.fbt._param("shoppingCartIcon", t), I.fbt._param("message", e.message != null && e.message !== "" ? `\n${e.message}` : "")], {
          hk: "pCkf8"
        });
        break;
      }
    case "notification_template":
    case "protocol":
    case "hsm":
    case "template_button_reply":
    case "debug":
    case "interactive_response":
    case "keep_in_chat":
    case "request_phone_number":
      return "";
    default:
      N.type;
      __LOG__(3)`getNotificationBody: Unrecognized type ${e.type}`;
      return "";
  }
  return D.toString();
};
var i = N(require("./12132.js"));
var a = require("./468776.js");
var o = require("./63014.js");
var s = require("./177938.js");
var l = require("./660666.js");
var u = N(require("./27578.js"));
var c = r(require("./937876.js"));
var d = r(require("./466770.js"));
var p = r(require("./170856.js"));
var f = r(require("./553529.js"));
var _ = require("./720934.js");
var g = require("./984720.js");
var m = require("./498362.js");
var h = require("./386826.js");
var y = require("./824498.js");
var E = require("./163755.js");
var S = r(require("./753110.js"));
var v = r(require("./182394.js"));
var T = r(require("./932325.js"));
var M = require("./787742.js");
var A = require("./368170.js");
var b = r(require("./640391.js"));
var C = require("./105284.js");
var P = r(require("./151502.js"));
var O = r(require("./286816.js"));
var I = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function N(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
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
}