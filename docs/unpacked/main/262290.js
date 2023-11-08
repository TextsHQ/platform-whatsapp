var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var a;
  var k;
  var D;
  const {
    fromCommunity: R = false
  } = e;
  const N = (0, O.useModelValues)(e.chat, ["previewMessage", "pendingInitialLoading", "derivedLastAddOnPreview", "isGroup", "groupMetadata", "isNewsletter", "newsletterMetadata", "draftMessage", "hasDraftMessage", "active", "hasUnread"]);
  const [x, L] = (0, S.useState)();
  const j = (0, A.default)();
  (0, S.useEffect)(() => {
    let e = true;
    function t() {
      return (t = (0, r.default)(function* () {
        var t;
        L(null);
        if (((t = N.derivedLastAddOnPreview) === null || t === undefined ? undefined : t.parentMsgKey) != null) {
          const t = N.derivedLastAddOnPreview.parentMsgKey;
          let a = E.MsgCollection.get(t);
          if (!a) {
            var n;
            a = (n = (yield E.MsgCollection.getMessagesById([t])).messages[0]) !== null && n !== undefined ? n : null;
          }
          if (!e) {
            return;
          }
          L(a);
        }
      })).apply(this, arguments);
    }
    (function () {
      t.apply(this, arguments);
    })();
    return () => {
      e = false;
    };
  }, [(t = N.derivedLastAddOnPreview) === null || t === undefined ? undefined : t.parentMsgKey]);
  (0, P.useListener)(N.previewMessage, "change:msgKey", () => {
    j();
  });
  (0, O.useModelValues)(e.chat.presence.chatstate, ["id", "type"]);
  const B = (0, O.useModelValues)(e.chat.presence, ["hasData", "withholdDisplayStage"], {
    isStrong: false
  });
  const F = (0, w.default)(N.newsletterMetadata, ["change:suspended"], () => {
    var e;
    return N.isNewsletter && ((e = N.newsletterMetadata) === null || e === undefined ? undefined : e.suspended) === true;
  });
  const G = (0, w.default)(N.newsletterMetadata, ["change:geosuspended"], () => {
    var e;
    return N.isNewsletter && ((e = N.newsletterMetadata) === null || e === undefined ? undefined : e.geosuspended) === true;
  });
  const U = (0, w.default)(N.groupMetadata, ["change:suspended"], () => (0, i.isSuspendedGroup)(N) && !(0, i.isCommunityAnnouncementGroup)(N));
  if (F && (0, y.isNewsletterSuspendEnabled)()) {
    return S.default.createElement(C.default, {
      isGeosuspended: G && (0, y.isNewsletterGeosuspendEnabled)()
    });
  }
  if (U && (0, g.isGroupSuspendV2Enabled)()) {
    return S.default.createElement(l.default, null);
  }
  const W = (0, d.elevatedPushNamesM2Enabled)(N);
  if (!R && B.isActive()) {
    const {
      text: e,
      ariaLabel: t
    } = B.getFormattedString({
      elevatedPushNamesEnabled: W
    }) || {};
    if (e) {
      return S.default.createElement(f.EmojiText, {
        className: s.default.chatstateTyping,
        direction: "inherit",
        ellipsify: true,
        titlify: true,
        text: e,
        ariaLabel: t
      });
    }
  }
  const H = N.previewMessage;
  if ((H == null ? undefined : H.subtype) === "newsletter_admin_context_card") {
    return S.default.createElement(_.default, {
      chat: N
    });
  }
  const V = (n = N.draftMessage) === null || n === undefined ? undefined : n.text;
  const q = (0, c.draftMessageEnabled)() && N.hasDraftMessage === true && V != null && !N.active && !N.hasUnread && S.default.createElement(m.FlexRow, null, S.default.createElement(b.TextSpan, {
    className: (0, T.default)(I)
  }, M.fbt._("Draft", null, {
    hk: "1lgXCg"
  }), ": "), S.default.createElement(f.EmojiText, {
    text: (0, o.default)(V, true),
    formatters: h.LastMessage({
      isDraftMessage: true,
      mentions: {},
      groupMentions: {}
    }),
    ellipsify: true,
    inlineblock: true,
    key: "draft"
  }));
  if (H == null) {
    if (N.pendingInitialLoading) {
      return S.default.createElement(f.EmojiText, {
        className: s.default.loadingIndicator,
        direction: "inherit",
        titlify: true,
        ellipsify: true,
        text: M.fbt._("Loading…", null, {
          hk: "3Ljo9r"
        })
      });
    } else {
      return q || null;
    }
  }
  if (q) {
    return q;
  }
  const Y = x && N.derivedLastAddOnPreview != null ? S.default.createElement(u.default, {
    msg: x.safe(),
    msgType: "AddOnParentMsg",
    lastAddOnPreview: N.derivedLastAddOnPreview,
    elevatedPushNamesEnabled: W,
    fromCommunity: R
  }) : null;
  const z = H.type === v.MSG_TYPE.REVOKED ? (a = H.revokeTimestamp) !== null && a !== undefined ? a : 0 : H.t;
  const K = ((k = N.derivedLastAddOnPreview) === null || k === undefined ? undefined : k.timestamp) && ((D = N.derivedLastAddOnPreview) === null || D === undefined ? undefined : D.timestamp) / 1000;
  if (K != null && K > z) {
    return S.default.createElement(p.ErrorBoundary, {
      name: "chat-last-msg"
    }, Y);
  }
  return S.default.createElement(p.ErrorBoundary, {
    name: "chat-last-msg"
  }, S.default.createElement(u.default, {
    msg: H.safe(),
    msgType: "LastMessage",
    elevatedPushNamesEnabled: W,
    fromCommunity: R
  }));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/110404.js"));
var l = a(require("./379651.js"));
var i = require("../app/374660.js");
var u = a(require("./333072.js"));
var s = a(require("./280450.js"));
var c = require("../app/177594.js");
var d = require("../app/235630.js");
var f = require("../app/305521.js");
var p = require("../app/707529.js");
var m = require("../app/690495.js");
var h = D(require("../app/675886.js"));
var g = require("../app/97858.js");
var E = require("../app/61113.js");
var v = require("../app/373070.js");
var _ = a(require("./182228.js"));
var y = require("../app/73225.js");
var C = a(require("./30161.js"));
var b = require("../app/180519.js");
var M = require("../vendor/548360.js");
var S = D(require("../vendor/667294.js"));
var T = a(require("../app/156720.js"));
var w = a(require("../app/524578.js"));
var A = a(require("../app/969651.js"));
var P = require("../app/808446.js");
var O = require("../app/655241.js");
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function D(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
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
}
const I = {
  color: "bl6wu40l"
};