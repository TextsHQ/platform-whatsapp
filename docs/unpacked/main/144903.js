var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, I.useBusinessProfile)(e.id, ["isBizBot3p"]);
  const [n, a] = (0, x.useState)(() => H(e));
  const [r, o] = (0, x.useState)(() => G(e, t));
  const l = () => {
    const n = H(e);
    a(n);
    if (!n) {
      o(G(e, t));
    }
  };
  (0, j.useListener)(e, "change:canSend", l);
  (0, j.useListener)(e.groupMetadata, ["change:suspended", "change:terminated", "change:participants"], l);
  (0, j.useListener)(e.newsletterMetadata, ["change:suspended", "change:terminated"], l);
  (function (e, t) {
    const n = (0, B.default)(() => {
      if ((0, O.shouldBlockByCountry)(e.contact)) {
        y.ModalManager.open(x.default.createElement(m.ConfirmPopup, {
          onOK: () => y.ModalManager.close(),
          okText: N.fbt._("OK, got it", null, {
            hk: "2hEWOg"
          })
        }, N.fbt._("This business can't chat with phone numbers with your country code.", null, {
          hk: "2s2ugo"
        })), {
          transition: "modal-flow"
        });
        const {
          previewMessage: t
        } = e;
        const n = t != null && (0, b.getIsSentByMe)(t);
        new g.GatedChatOpenedWamEvent({
          chatGatedReason: R.CHAT_GATED_REASON.COUNTRY,
          selfInitiated: n
        }).commit();
      } else if ((0, D.shouldBlockByTos)(e.contact)) {
        y.ModalManager.open(x.default.createElement(k.default, {
          contact: e.contact
        }), {
          transition: "modal-flow"
        });
        new g.GatedChatOpenedWamEvent({
          chatGatedReason: R.CHAT_GATED_REASON.TOS3,
          selfInitiated: true
        }).commit();
      }
    });
    (0, x.useEffect)(n, [n, t]);
  })(e, n);
  (0, x.useEffect)(l, [t == null ? undefined : t.isBizBot3p]);
  return [n, r];
};
var r = a(require("./627716.js"));
var o = require("../app/750997.js");
var l = require("../app/354458.js");
var i = require("../app/292167.js");
var u = require("../app/37237.js");
var s = require("../app/338042.js");
var c = require("../app/374660.js");
var d = a(require("../app/196554.js"));
var f = a(require("./420492.js"));
var p = require("../app/174834.js");
var m = require("../app/103440.js");
var h = require("../app/714574.js");
var g = require("./609139.js");
var E = require("../app/862159.js");
var v = a(require("./113975.js"));
var _ = require("../app/97858.js");
var y = require("../app/114850.js");
var C = a(require("./866174.js"));
var b = require("../app/787742.js");
var M = require("../app/751460.js");
var S = a(require("./917620.js"));
var T = a(require("./575837.js"));
var w = a(require("./809911.js"));
var A = a(require("./941872.js"));
var P = a(require("./755810.js"));
var O = require("../app/168661.js");
var k = a(require("./761546.js"));
var D = require("../app/227834.js");
var I = require("./508228.js");
var R = require("../app/214579.js");
var N = require("../vendor/548360.js");
var x = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = F(t);
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
var L = require("../app/379811.js");
var j = require("../app/808446.js");
var B = a(require("../app/17533.js"));
function F(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (F = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function G(e, t) {
  const {
    contact: n,
    mute: a,
    isGroup: o,
    isReadOnly: i,
    isAnnounceGrpRestrict: u,
    isPSA: s,
    isIAS: d,
    groupMetadata: m,
    isDeprecated: g
  } = e;
  if (!(0, l.isBotEnabled)() && e.id.isBot()) {
    return "";
  } else if (e.isNewsletter) {
    if (((y = e.newsletterMetadata) === null || y === undefined ? undefined : y.suspended) && (0, M.iAmOwner)(e.newsletterMetadata)) {
      return x.default.createElement(S.default, {
        chat: e
      });
    } else {
      return null;
    }
  } else if ((0, O.shouldBlockByCountry)(n)) {
    return N.fbt._("This business can't chat with phone numbers with your country code.", null, {
      hk: "sGN9n"
    });
  } else if ((0, D.shouldBlockByTos)(n)) {
    return N.fbt._("To chat with {contact}, review and accept WhatsApp's updated terms and privacy policy on your phone.", [N.fbt._param("contact", (0, h.getFormattedName)(n))], {
      hk: "zQpqk"
    });
  } else if ((0, c.isIntegritySuspendedDefaultSubgroup)(e)) {
    return x.default.createElement(A.default, null);
  } else if ((0, p.communitiesEnabled)() && (0, c.isDeactivatedCommunityAnnouncementGroup)(e) && m) {
    return x.default.createElement(C.default, {
      groupMetadata: m
    });
  } else if ((0, c.isTerminatedGroup)(e)) {
    if ((0, c.isSupportGroup)(e)) {
      return N.fbt._("This chat has been closed.", null, {
        hk: "4kSjyA"
      });
    } else if ((0, _.isGroupSuspendV2Enabled)()) {
      return x.default.createElement(w.default, {
        chat: e
      });
    } else {
      return x.default.createElement(P.default, null);
    }
  } else if (o && !(m == null ? undefined : m.participants.iAmMember())) {
    if ((m == null ? undefined : m.groupType) === E.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      return N.fbt._("You're no longer a participant.", null, {
        hk: "3zXAL2"
      });
    } else {
      return N.fbt._("You can't send messages to this group because you're no longer a participant.", null, {
        hk: "4n9VPE"
      });
    }
  } else if (g) {
    return x.default.createElement(v.default, {
      contact: n
    });
  } else if ((0, c.isSuspendedGroup)(e)) {
    if ((0, _.isGroupSuspendV2Enabled)()) {
      return x.default.createElement(w.default, {
        chat: e
      });
    } else {
      return x.default.createElement(T.default, {
        entityId: (0, c.shouldIncludeEntityIdInAppealRequest)() === true ? e.id.user.toString() : null
      });
    }
  } else if ((0, p.communitiesEnabled)() && o && m && (m == null ? undefined : m.groupType) === E.GroupType.LINKED_ANNOUNCEMENT_GROUP && !(m == null ? undefined : m.participants.iAmAdmin())) {
    return x.default.createElement(f.default, {
      groupMetadata: m
    });
  } else if (o && !i && u && m) {
    return x.default.createElement(r.default, {
      chat: e,
      groupMetadata: m,
      mute: a
    });
  } else if (o && (m == null ? undefined : m.support)) {
    return N.fbt._("You can't send messages to this group because you're no longer a participant.", null, {
      hk: "4n9VPE"
    });
  } else if (s) {
    return x.default.createElement(U, {
      contact: n
    });
  } else if (d) {
    return x.default.createElement(W, {
      contact: n
    });
  } else if ((t == null ? undefined : t.isBizBot3p) === true) {
    return x.default.createElement(V, {
      chat: e
    });
  } else {
    return N.fbt._("Can't send a message to blocked contact {contact}.", [N.fbt._param("contact", (0, h.getFormattedName)(n))], {
      hk: "22uKoT"
    });
  }
  var y;
}
function U(e) {
  const [t] = (0, L.useContactValues)(e.contact.id, [h.getIsContactBlocked]);
  if (t) {
    return N.fbt._("You have blocked WhatsApp", null, {
      hk: "2bXahd"
    });
  } else {
    return N.fbt._("Only WhatsApp can send messages", null, {
      hk: "2gtc1t"
    });
  }
}
function W(e) {
  const [t] = (0, L.useContactValues)(e.contact.id, [h.getIsContactBlocked]);
  if (t) {
    return N.fbt._("You have blocked WhatsApp Surveys", null, {
      hk: "dG42O"
    });
  } else {
    return N.fbt._("You can block this chat to opt out of receiving messages from WhatsApp Surveys", null, {
      hk: "2sN1Zb"
    });
  }
}
function H(e) {
  return e.canSend && !e.isSuspendedOrTerminated();
}
function V(e) {
  let {
    chat: t
  } = e;
  const [n] = (0, L.useContactValues)(t.contact.id, [h.getIsContactBlocked]);
  if (!(0, l.isBizBot3pEnabled)()) {
    return N.fbt._("To chat with this AI, update to the latest version of WhatsApp.", null, {
      hk: "4rpNT2"
    });
  }
  if (!(0, l.isBizBot3pAvailable)()) {
    return N.fbt._("This AI is not available in your region.", null, {
      hk: "4mWeJc"
    });
  }
  if (!(0, i.hasAcceptedBizBotTos)()) {
    const e = () => {
      var e;
      y.ModalManager.open(x.default.createElement(o.BizBotTos, {
        automatedType: u.BizBotAutomatedType.FULL_3P,
        chatEntryPoint: (e = t.chatEntryPoint) !== null && e !== undefined ? e : s.ChatEntryPoint.Unknown
      }), {
        blockClose: true
      });
    };
    const n = x.default.createElement(d.default, {
      onClick: () => e()
    }, N.fbt._("review and accept the terms", null, {
      hk: "35qc8U"
    }));
    return x.default.createElement("div", null, N.fbt._("To chat with this AI, {review-terms}.", [N.fbt._param("review-terms", n)], {
      hk: "3sTe1L"
    }));
  }
  if (n) {
    return x.default.createElement("div", null, N.fbt._("You have blocked this AI.", null, {
      hk: "2qXcfe"
    }));
  } else {
    return undefined;
  }
}