var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    e2eSubtype: t,
    chatId: n,
    chat: a,
    msg: N,
    highlightSurface: x,
    jid: L
  } = e;
  (0, R.useEffect)(() => {
    const e = (0, w.assertGetMe)();
    const n = L ? [(0, O.createWid)(L.toString()), e] : [e];
    (0, M.getFanOutListJob)(n).then(e => {
      (0, v.ensureE2ESessions)(e);
    });
    if (["encrypt", "info_encrypted"].includes(t) && (0, _.isPrivacyNarrativeV1Enabled)() && x != null) {
      (0, b.incrementPrinaDailyCount)(x, d.PrinaDailyActionType.DIALOG_APPEAR);
    }
  }, []);
  const j = () => {
    if (!L) {
      return;
    }
    const e = L.equals((0, w.getMeUser)()) ? n : L;
    y.ModalManager.close();
    i.Cmd.verificationDrawer(e);
  };
  let B;
  let F;
  let G = null;
  let U = null;
  let W = null;
  let H = null;
  let V = D.fbt._("Learn more", null, {
    hk: "1rcCLt"
  });
  let q = null;
  W = () => y.ModalManager.close();
  H = (0, m.default)("OK");
  switch (t) {
    case "info_encrypted":
      F = (0, p.getE2EFaqUrl)();
      if (P.default.isGroup(n)) {
        if ((0, o.isSupportGroup)(a)) {
          B = (0, T.SupportChatSecurityModalText)();
          V = (0, T.SupportChatLearnMoreLinkText)();
          F = (0, p.getSupportChatSafetyFaqUrl)();
        } else {
          B = A.default.isGroupCallEnabled() ? D.fbt._("Messages and calls to this group are secured with end-to-end encryption, which means WhatsApp and third parties can't read or listen to them.", null, {
            hk: "o6dGe"
          }) : D.fbt._("Messages you send to this group are secured with end-to-end encryption, which means WhatsApp and third parties can't read them.", null, {
            hk: "2xYbHw"
          });
        }
      } else if (P.default.isBroadcast(n)) {
        B = D.fbt._("Messages you send to this broadcast list are secured with end-to-end encryption, which means WhatsApp and third parties can't read them.", null, {
          hk: "27mjFa"
        });
      }
      break;
    case "identity":
      {
        const t = L && s.ContactCollection.get(L);
        if (t != null && (0, c.getIsMe)(t)) {
          __LOG__(4, undefined, new Error(), true)`formatE2ENotification: receive identity notification of self`;
          SEND_LOGS("SelfIdentityNotificationError");
          if (P.default.isGroup(n)) {
            B = D.fbt._("Your security code with all participants changed because there was a registration on a new device of yours. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
              hk: "3CxdRh"
            });
          } else if (P.default.isBroadcast(n)) {
            B = D.fbt._("Your security code with all recipients changed because there was a registration on a new device of yours. To verify a contact's security code, open their Contact Info page and click \"Encryption\".", null, {
              hk: "3vKS62"
            });
          } else {
            const e = s.ContactCollection.get(n);
            const t = e ? (0, g.getFormattedName)(e) : (0, k.widToFormattedUser)(n);
            B = D.fbt._("Your security code with {name} changed because there was a registration on a new device of yours.", [D.fbt._param("name", t)], {
              hk: "4f9cuD"
            });
          }
        } else {
          const n = t ? (0, g.getFormattedName)(t) : (0, k.widToFormattedUser)(e.jid);
          B = D.fbt._("Your security code with {name} changed because they registered WhatsApp on their phone again.", [D.fbt._param("name", n)], {
            hk: "2mKHUg"
          });
        }
        G = W;
        U = H;
        W = j;
        H = D.fbt._("Verify", null, {
          hk: "2u9OID"
        });
        F = (0, p.getMDCodeChangeFaqUrl)();
        break;
      }
    case "chat_psa":
      F = (0, p.getWAChatFaqUrl)();
      q = D.fbt._("WhatsApp uses this secure, official chat to share tips and let you know about new features.", null, {
        hk: "1BZLze"
      });
      B = D.fbt._("We'll never ask you for your personal information.", null, {
        hk: "2nHzSm"
      });
      break;
    case "device":
      {
        (0, I.default)(N != null, "msg shouldn't be null");
        const e = (0, S.unproxy)(N);
        B = (0, h.default)(e, true);
        G = W;
        U = H;
        const t = e.body ? s.ContactCollection.get(e.body) : null;
        if (t != null && (0, c.getIsMe)(t) && (n.isGroup() || n.isBroadcast())) {
          W = undefined;
          H = undefined;
        } else {
          W = j;
          H = D.fbt._("Verify", null, {
            hk: "2u9OID"
          });
        }
        F = (0, p.getMDCodeChangeFaqUrl)();
        break;
      }
    case "encrypt":
    case "encrypt_now":
    default:
      {
        const e = s.ContactCollection.get(n);
        F = (0, C.securityUrl)();
        if (P.default.isGroup(n)) {
          if ((0, o.isSupportGroup)((0, E.getChat)(N))) {
            B = (0, T.SupportChatSecurityModalText)();
            V = (0, T.SupportChatLearnMoreLinkText)();
            F = (0, p.getSupportChatSafetyFaqUrl)();
          } else {
            B = A.default.isGroupCallEnabled() ? D.fbt._("WhatsApp secures your conversations with end-to-end encryption. This means your messages, calls and status updates stay between you and the people you choose. Not even WhatsApp can read or listen to them.", null, {
              hk: "1tJbs1"
            }) : D.fbt._("WhatsApp secures your conversations with end-to-end encryption. This means your messages and status updates stay between you and the people you choose. Not even WhatsApp can read or listen to them.", null, {
              hk: "4cGcGP"
            });
          }
        } else if ((0, r.default)(n.user)) {
          B = (0, T.SupportChatSecurityModalText)();
          V = (0, T.SupportChatLearnMoreLinkText)();
          F = (0, p.getSupportChatSafetyFaqUrl)();
        } else if (P.default.isBroadcast(n)) {
          B = D.fbt._("WhatsApp secures your conversations with end-to-end encryption. This means your messages and status updates stay between you and the people you choose. Not even WhatsApp can read or listen to them.", null, {
            hk: "4cGcGP"
          });
        } else {
          if (e == null || !(0, c.getIsMe)(e)) {
            const e = A.default.isVoiceCallEnabled() || A.default.isVideoCallEnabled();
            q = D.fbt._("WhatsApp secures your conversations with end-to-end encryption.", null, {
              hk: "1y1wzm"
            });
            B = e ? D.fbt._("Your messages and calls stay between you and the people and businesses you choose. Not even WhatsApp can read or listen to them.", null, {
              hk: "1QdXdG"
            }) : D.fbt._("Your messages stay between you and the people and businesses you choose. Not even WhatsApp can read or listen to them.", null, {
              hk: "4a0dhC"
            });
            break;
          }
          B = D.fbt._("End-to-end encryption keeps personal messages that you send to yourself private. Not even WhatsApp can read or listen to them.", null, {
            hk: "1sBicf"
          });
        }
      }
  }
  const Y = R.default.createElement(l.default, {
    onClick: () => {
      if (["encrypt", "info_encrypted"].includes(t) && (0, _.isPrivacyNarrativeV1Enabled)() && x != null) {
        (0, b.incrementPrinaDailyCount)(x, d.PrinaDailyActionType.DIALOG_SELECT);
      }
      (0, f.openExternalLink)(F);
    }
  }, V);
  const z = R.default.createElement(R.default.Fragment, null, B, " ", Y);
  return R.default.createElement(u.ConfirmPopup, {
    testid: "e2e_info_modal",
    title: q,
    onOK: W,
    okText: H,
    onCancel: G,
    cancelText: U
  }, z);
};
var r = a(require("../app/143589.js"));
var o = require("../app/374660.js");
var l = a(require("../app/196554.js"));
var i = require("../app/780549.js");
var u = require("../app/103440.js");
var s = require("../app/177938.js");
var c = require("../app/660666.js");
var d = require("../app/510337.js");
var f = require("../app/753233.js");
var p = require("../app/258105.js");
var m = a(require("../app/395767.js"));
var h = a(require("../app/36851.js"));
var g = require("../app/714574.js");
var E = require("../app/163755.js");
var v = require("../app/917504.js");
var _ = require("../app/97858.js");
var y = require("../app/114850.js");
var C = require("./111367.js");
var b = require("./24578.js");
var M = require("./10586.js");
var S = require("../app/163139.js");
var T = require("../app/666836.js");
var w = require("../app/459857.js");
var A = a(require("../app/571256.js"));
var P = a(require("../app/124928.js"));
var O = require("../app/669050.js");
var k = require("../app/931019.js");
var D = require("../vendor/548360.js");
var I = a(require("../vendor/441143.js"));
var R = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = N(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function N(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (N = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}