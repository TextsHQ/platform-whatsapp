var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  const {
    chat: a,
    chatEntryPoint: U,
    msgCollection: W,
    focusCtx: H,
    groupMetadata: V
  } = e;
  const q = (0, S.useRef)(null);
  (0, G.default)(a);
  (0, x.default)(a);
  (0, w.default)(a);
  (0, D.default)(a);
  (0, v.useTsNavigation)({
    surface: a.isNewsletter && (0, h.isNewsletterTSLEnabled)() ? "channel-thread" : "chat",
    extras: {
      groupSize: a.isNewsletter && (0, h.isNewsletterTSLEnabled)() ? (t = a.newsletterMetadata) === null || t === undefined ? undefined : t.size : (n = a.groupMetadata) === null || n === undefined ? undefined : n.participants.length,
      channelWid: a.isNewsletter && (0, h.isNewsletterTSLEnabled)() ? a.id : undefined,
      typeOfGroup: a.groupMetadata == null ? undefined : (0, f.groupTypeToWamEnum)((0, f.getGroupTypeFromGroupMetadata)(a.groupMetadata))
    }
  });
  (0, N.default)(a, () => {
    var e;
    if ((e = q.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.getRenderedMessageCount();
    }
  });
  (0, B.useNewsletterOpenMetrics)(a, U);
  (0, T.useChatOpenMetrics)(a);
  (0, O.default)();
  (0, C.default)(a);
  (0, j.useModelValues)(a, ["isReadOnly", "isAnnounceGrpRestrict", "isDeprecated", "newsletterMetadata"]);
  const Y = (0, F.default)(a);
  const [z, K] = (0, P.default)(a);
  const {
    selectable: Q,
    selectedMessages: X,
    handleSelectMessages: Z,
    handleMessageSelect: J,
    handleCancelSelection: $
  } = (0, R.default)(a.msgs);
  const [ee, te] = (0, k.default)(a, {
    canCompose: z,
    onDragEnter: $
  });
  const {
    msgPanelRef: ne,
    filler: ae,
    handleComposeHeightChange: re
  } = (0, I.default)({
    canCompose: z,
    selectable: Q,
    setScrollBottom: e => {
      var t;
      if ((t = q.current) === null || t === undefined) {
        return undefined;
      } else {
        return t.setScrollBottom(e);
      }
    },
    getScrollBottom: () => {
      var e;
      if ((e = q.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.getScrollBottom();
      }
    },
    onComposeHeightChange: e => {
      var t;
      if ((t = q.current) === null || t === undefined) {
        return undefined;
      } else {
        return t.onComposeHeightChange(e);
      }
    }
  });
  (0, A.default)({
    onFocus: () => {
      var e;
      if (!((e = q.current) === null || e === undefined)) {
        e.focus();
      }
    }
  });
  (0, y.useBizBot3pTos)(a);
  (0, b.useMaybeRequestWelcomeMessage)(a);
  const oe = (0, L.default)(a.newsletterMetadata, ["change:suspended"], () => {
    var e;
    return a.isNewsletter && ((e = a.newsletterMetadata) === null || e === undefined ? undefined : e.suspended) === true;
  });
  const le = (0, L.default)(a.newsletterMetadata, ["change:geosuspended"], () => {
    var e;
    return a.isNewsletter && ((e = a.newsletterMetadata) === null || e === undefined ? undefined : e.geosuspended) === true;
  });
  const ie = e => {
    var t;
    if (!((t = q.current) === null || t === undefined)) {
      t.onPageUpDown(e);
    }
  };
  let ue;
  let se;
  let ce = null;
  if ((0, i.isCongratulationsAnimationsEnabled)()) {
    ce = S.default.createElement(l.CongratulationsAnimationConversation, {
      chat: a
    });
  }
  if (Q) {
    se = S.default.createElement(_.UIE, {
      displayName: "MultiSelect",
      escapable: true,
      requestDismiss: $
    }, S.default.createElement(m.MultiSelectBar, {
      chat: a,
      selectedMessages: X,
      noSortOnForward: false,
      onCancel: $,
      entryPoint: m.MultiSelectBarEntryPoint.CONVERSATION_PANEL
    }));
    ue = S.default.createElement("footer", {
      className: c.default.footer
    });
  } else if (z) {
    ue = S.default.createElement(o.ComposeBox, {
      chat: a,
      ref: ee,
      onComposeHeightChange: re,
      onPageUpDown: ie
    });
  } else {
    const e = K != null ? K : Y;
    ue = e != null && S.default.createElement("footer", {
      className: c.default.footer
    }, S.default.createElement("div", {
      className: c.default.footerMessage
    }, e));
  }
  const de = oe && (0, h.isNewsletterSuspendEnabled)() ? S.default.createElement(E.default, {
    isGeosuspended: le && (0, h.isNewsletterGeosuspendEnabled)(),
    isAdminOrOwner: (0, g.iAmOwner)(a.newsletterMetadata) || (0, g.iAmAdmin)(a.newsletterMetadata)
  }) : S.default.createElement(s.default, {
    ref: q,
    chat: a,
    selectable: Q,
    onMessageSelect: J,
    msgCollection: W,
    onSelectMessages: Z,
    focusCtx: H,
    selectedMessages: X,
    notifyChatRendered: e.notifyChatRendered,
    updateOpenedChatInfo: e.updateOpenedChatInfo
  });
  return S.default.createElement(S.default.Fragment, null, S.default.createElement(u.default, {
    wallpaperColor: e.wallpaperColor,
    showDoodle: e.chatPreference.showDoodle
  }), S.default.createElement(p.ConversationHeader, {
    chat: a,
    contact: a.contact,
    onSelectMessages: Z
  }), S.default.createElement(d.default, {
    chat: a,
    groupMetadata: V
  }), S.default.createElement("div", (0, r.default)({
    className: c.default.body,
    ref: ne
  }, te), ce, de), ae, ue, S.default.createElement(M.default, {
    transitionName: "slide-up"
  }, se));
};
var r = a(require("../vendor/967154.js"));
var o = require("./711963.js");
var l = require("./421166.js");
var i = require("../app/152342.js");
var u = a(require("./320357.js"));
var s = a(require("./712340.js"));
var c = a(require("./360699.js"));
var d = a(require("./197791.js"));
var f = require("../app/862159.js");
var p = require("./556530.js");
var m = require("./913257.js");
var h = require("../app/73225.js");
var g = require("../app/751460.js");
var E = a(require("./498563.js"));
var v = require("../app/717089.js");
var _ = require("../app/392632.js");
var y = require("./442518.js");
var C = a(require("./923416.js"));
var b = require("./283401.js");
var M = a(require("../app/844453.js"));
var S = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = U(t);
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
var T = require("./966880.js");
var w = a(require("./599888.js"));
var A = a(require("./885674.js"));
var P = a(require("./144903.js"));
var O = a(require("./973508.js"));
var k = a(require("./812423.js"));
var D = a(require("./183441.js"));
var I = a(require("./377236.js"));
var R = a(require("./814882.js"));
var N = a(require("./393435.js"));
var x = a(require("./31830.js"));
var L = a(require("../app/524578.js"));
var j = require("../app/655241.js");
var B = require("./849138.js");
var F = a(require("./291675.js"));
var G = a(require("./311930.js"));
function U(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (U = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}