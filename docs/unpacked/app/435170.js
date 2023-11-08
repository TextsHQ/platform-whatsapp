var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBusinessNotification = P;
exports.handleBusinessNotificationJob = function (e) {
  const t = (0, u.getNonCriticalNotificationPriority)(Boolean(e.attrs.offline));
  return (0, T.createNonPersistedJob)("handleBusinessNotification", e => P(e.node), {
    priority: t
  }).waitUntilCompleted({
    node: e
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./583824.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./973776.js");
var c = require("./72696.js");
var d = r(require("./65230.js"));
var p = require("./762465.js");
var f = require("./107455.js");
var _ = require("./635912.js");
var g = require("./9671.js");
var m = require("./614466.js");
var h = require("./563905.js");
var y = require("./338835.js");
var E = require("./724652.js");
var S = require("./200275.js");
var v = require("./854379.js");
var T = require("./899137.js");
var M = require("./694630.js");
var A = require("./170428.js");
const b = new l.WapParser("businessNotificationParser", e => {
  e.assertTag("notification");
  const t = {
    stanzaId: e.attrString("id"),
    from: e.attrWapJid("from"),
    ts: e.attrTime("t")
  };
  let n;
  if (e.hasChild("remove")) {
    n = e.child("remove");
    if (n.hasAttr("jid")) {
      return (0, a.default)({
        type: "remove_jid",
        jid: (0, v.chatJidToChatWid)(n.attrChatJid("jid"))
      }, t);
    } else {
      return (0, a.default)({
        type: "remove_hash",
        hash: n.attrString("hash")
      }, t);
    }
  }
  if (e.hasChild("verified_name")) {
    n = e.child("verified_name");
    if (n.hasAttr("jid")) {
      return (0, a.default)({
        type: "verified_name_jid",
        jid: (0, v.chatJidToChatWid)(n.attrChatJid("jid")),
        verifiedName: (0, d.default)(n)
      }, t);
    } else {
      return (0, a.default)({
        type: "verified_name_hash",
        hash: n.attrString("hash")
      }, t);
    }
  }
  if (e.hasChild("profile")) {
    const n = e.child("profile").maybeAttrString("hash");
    if (n) {
      return (0, a.default)({
        type: "profile_hash",
        hash: n
      }, t);
    } else {
      return (0, a.default)({
        type: "profile"
      }, t);
    }
  }
  if (e.hasChild("product_catalog")) {
    const n = e.child("product_catalog");
    if (n.hasChild("product")) {
      const e = [];
      n.forEachChildWithTag("product", t => {
        const n = t.child("id").contentString();
        e.push(n);
      });
      return (0, a.default)({
        type: "product",
        productsIds: e
      }, t);
    }
    if (n.hasChild("collection")) {
      const e = [];
      const r = [];
      n.forEachChildWithTag("collection", t => {
        if (t.hasChild("status_info")) {
          var n;
          var i;
          var a;
          const o = {
            reviewStatus: (n = (0, M.asProductReviewType)(t.child("status_info").child("status").contentString())) !== null && n !== undefined ? n : "APPROVED",
            rejectReason: (i = t.child("status_info").maybeChild("reject_reason")) === null || i === undefined ? undefined : i.contentString(),
            commerceUrl: (a = t.child("status_info").maybeChild("commerce_url")) === null || a === undefined ? undefined : a.contentString()
          };
          e.push(t.attrString("id"));
          r.push(o);
        }
      });
      return (0, a.default)({
        type: "collection",
        collectionIds: e,
        reviewStatuses: r
      }, t);
    }
  } else {
    if (e.hasChild("subscriptions")) {
      const n = e.child("subscriptions");
      const r = [];
      n.forEachChildWithTag("subscription", e => {
        const t = e.attrString("status");
        const n = e.maybeAttrInt("subscription_end_time");
        const i = e.attrString("id");
        r.push({
          id: i,
          status: t,
          expirationDate: n
        });
      });
      return (0, a.default)({
        type: "subscriptions",
        subscriptions: r
      }, t);
    }
    if (e.hasChild("ctwa_suggestion")) {
      if ((0, c.adsActionBannersEnabled)()) {
        const n = (0, _.parseCTWASuggestion)(e);
        if (n != null) {
          return (0, a.default)({
            type: "ctwa_suggestion",
            suggestion: n
          }, t);
        }
      }
    } else if (e.hasChild("privacy")) {
      if ((0, c.smbDataSharingConsentEnabled)()) {
        const n = (0, f.parseCTWAPrivacy)(e);
        if (n != null) {
          return (0, a.default)({
            type: "privacy",
            privacy: n
          }, t);
        }
      }
    } else if (e.hasChild("wa_ad_account_nonce") && (0, c.adManagementEnabled)()) {
      const n = (0, o.receiveNonceNotificationRPC)(e.node());
      return (0, a.default)({
        type: "wa_ad_account_nonce",
        nonce: (0, p.castToNonce)(n.parsedRequest.waAdAccountNonceElementValue)
      }, t);
    }
  }
  return (0, a.default)({
    type: "unknown"
  }, t);
});
function C(e, t, n) {
  if (n) {
    return (0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(e),
      to: t,
      class: "notification",
      type: "business"
    }, (0, s.wap)("user", {
      side_list: "out"
    }));
  } else {
    return (0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(e),
      to: t,
      class: "notification",
      type: "business"
    });
  }
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e) {
    const t = b.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const n = t.success;
    switch (n.type) {
      case "verified_name_hash":
        {
          const e = yield (0, g.handleVerifiedBusinessNameNotificationHash)(n);
          return C(n.stanzaId, n.from, !e);
        }
      case "verified_name_jid":
        yield (0, g.handleVerifiedBusinessNameNotificationContact)(n);
        return C(n.stanzaId, n.from, false);
      case "remove_hash":
        {
          const e = yield (0, y.handleBusinessRemovalNotificationHash)(n);
          return C(n.stanzaId, n.from, !e);
        }
      case "remove_jid":
        yield (0, y.handleBusinessRemovalNotificationContact)(n);
        return C(n.stanzaId, n.from, false);
      case "profile":
        yield (0, h.handleBusinessProfile)(n);
        return C(n.stanzaId, n.from, false);
      case "profile_hash":
        {
          const e = yield (0, h.handleBusinessProfileHash)(n);
          return C(n.stanzaId, n.from, !e);
        }
      case "product":
        yield (0, m.handleProductNotification)(n.productsIds);
        return C(n.stanzaId, n.from, false);
      case "collection":
        yield (0, m.handleCollectionNotification)(n);
        return C(n.stanzaId, n.from, false);
      case "subscriptions":
        yield (0, A.applySubscriptions)(n.subscriptions);
        return C(n.stanzaId, n.from, false);
      case "ctwa_suggestion":
        yield (0, E.handleCTWASuggestion)(n.suggestion);
        return C(n.stanzaId, n.from, false);
      case "privacy":
        (0, S.handleSmbDataSharingSettingNotification)(n.privacy.smbDataSharingSetting);
        return C(n.stanzaId, n.from, false);
      case "wa_ad_account_nonce":
        (0, p.setNonceFromPushNotification)(n.nonce);
        return C(n.stanzaId, n.from, false);
      default:
        n.type;
        return C(n.stanzaId, n.from, false);
    }
  })).apply(this, arguments);
}