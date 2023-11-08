var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./924848.js"));
var o = a(require("./556088.js"));
var l = a(require("./702148.js"));
var i = a(require("./574413.js"));
var u = a(require("./495164.js"));
var s = require("./590227.js");
var c = a(require("./330383.js"));
var d = a(require("./470853.js"));
var f = a(require("../app/988410.js"));
var p = require("../app/163755.js");
var m = a(require("./428543.js"));
var h = require("../app/97858.js");
var g = a(require("./666413.js"));
var E = require("./615170.js");
var v = require("../app/163139.js");
var _ = require("../app/238669.js");
var y = require("../app/392632.js");
var C = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var b = a(require("../app/156720.js"));
var M = a(require("../app/969651.js"));
var S = require("../app/808446.js");
var T = a(require("./695841.js"));
var w = require("./636729.js");
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const P = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  width: "ln8gz9je"
};
const O = {
  position: "lhggkp7q",
  bottom: "jxacihee",
  start: "tkdu00h0",
  boxSizing: "cm280p3y",
  width: "ln8gz9je"
};
function k(e, t) {
  const {
    chat: n,
    linkPreviewData: a,
    ctwaContextLinkData: A,
    ctwaContextData: k,
    restoreFocus: D,
    selectedPanelId: I,
    getComposeBlockWidth: R,
    onComposeHeightChange: N,
    omitLinkPreview: x,
    omitCtwa: L,
    attachmentButtonHidden: j,
    onEmoji: B,
    onGif: F,
    onPanelChange: G,
    onSticker: U,
    onPanelClose: W,
    showSpamPanel: H,
    onClickNotSpam: V,
    canShowChatAutoMutedNux: q,
    onOpenChatAutoMuteNux: Y,
    onAcceptChatAutoMuteNux: z,
    onUnmuteChatAutoMuteNux: K
  } = e;
  const Q = (0, M.default)();
  let X;
  (0, S.useListener)(n.composeQuotedMsg, "change:latestEditMsgKey", Q);
  if (a) {
    const {
      title: e,
      canonicalUrl: t,
      description: n,
      thumbnail: r,
      inviteGrpType: l,
      isLoading: i
    } = a;
    X = C.default.createElement(o.default, null, C.default.createElement(y.UIE, {
      displayName: "ComposeBoxLinkPreview",
      escapable: true,
      requestDismiss: x
    }, C.default.createElement("div", null, C.default.createElement(c.default, {
      onOmit: x,
      bodyBackground: false,
      attachmentButtonHidden: j
    }, C.default.createElement(m.default, {
      title: e,
      compose: true,
      canonicalUrl: t,
      description: n,
      thumbnailJpeg: r,
      inviteGrpType: l,
      isLoading: i
    })))));
  }
  const Z = n.composeQuotedMsg;
  const J = n.quotedMsgAdminGroupJid;
  const $ = n.quotedMsgAdminGroupSubject;
  const ee = n.quotedMsgAdminParentGroupJid;
  const te = n.composeQuotedMsgRemoteJid;
  const ne = (0, w.useSetModelValue)(n, "composeQuotedMsg");
  const ae = (0, w.useSetModelValue)(n, "quotedMsgAdminGroupJid");
  let re;
  if (Z) {
    const e = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DismissReason.UIM_INTERACTION;
      if (e !== _.DismissReason.LIFECYCLE) {
        ne(null);
      }
    };
    re = C.default.createElement(o.default, null, C.default.createElement(y.UIE, {
      displayName: "ComposeBoxQuotedMsg",
      escapable: true,
      requestFocus: D,
      requestDismiss: e
    }, C.default.createElement(c.default, {
      onOmit: e,
      attachmentButtonHidden: j
    }, C.default.createElement(g.default, {
      msg: Z.safe(),
      composeQuotedMsgRemoteJid: te,
      theme: "composeBox",
      key: Z.id.toString(),
      chat: (0, p.getChat)(Z)
    }))));
  } else if (J) {
    const e = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DismissReason.UIM_INTERACTION;
      if (e !== _.DismissReason.LIFECYCLE) {
        ae(null);
      }
    };
    re = C.default.createElement(o.default, null, C.default.createElement(y.UIE, {
      displayName: "QuotedMsgAdminGroupName",
      escapable: true,
      requestFocus: D,
      requestDismiss: e
    }, C.default.createElement(c.default, {
      onOmit: e,
      attachmentButtonHidden: j
    }, C.default.createElement(E.QuotedMsgAdminGroupName, {
      isComposePreview: true,
      quotedGroupJid: J,
      quotedParentGroupJid: $ != null ? ee : undefined,
      quotedGroupSubject: $,
      key: J.toString()
    }))));
  }
  const oe = (0, v.unproxy)(n);
  let le = null;
  if (H && !oe.isPSA && oe.shouldAppearInList && oe.msgs && oe.msgs.length > 0) {
    le = C.default.createElement(o.default, null, C.default.createElement(d.default, {
      chat: oe,
      contact: oe.contact,
      onClickNotSpam: V
    }));
  }
  let ie = null;
  if ((0, h.isAutoMuteConfirmationDialogEnabled)() && le == null && oe.isGroup && oe.mute.isMuted && oe.mute.isAutoMuted && q) {
    ie = C.default.createElement(o.default, null, C.default.createElement(i.default, {
      onOpen: Y,
      onOK: z,
      onUnmute: K
    }));
  }
  const ue = (0, C.useRef)(null);
  const se = (0, C.useRef)();
  const ce = e => {
    se.current = e;
  };
  (0, C.useImperativeHandle)(t, () => ({
    restoreFocus(e) {
      var t;
      if (!((t = ue.current) === null || t === undefined)) {
        t.restoreFocus(e);
      }
    }
  }));
  const [de, fe] = (0, T.default)();
  const pe = fe.width > 0 ? fe.width : R();
  const me = () => {
    f.default.shouldIndicateFocus();
    D();
  };
  let he;
  let ge = null;
  if (I && pe != null) {
    ge = C.default.createElement(o.default, {
      ref: de
    }, C.default.createElement(u.default, {
      displayCache: se.current,
      width: pe,
      onDisplayCache: ce,
      onEmoji: B,
      onFocusRelease: me,
      onGif: F,
      onPanelChange: G,
      onSticker: U,
      requestDismiss: W,
      ref: ue,
      selectedPanelId: I,
      theme: s.PanelsTheme.ChatComposeBox
    }));
  }
  if (A) {
    he = C.default.createElement(o.default, null, C.default.createElement(y.UIE, {
      displayName: "ComposeBoxCtwaContextPreview",
      escapable: true,
      requestDismiss: L
    }, C.default.createElement(c.default, {
      onOmit: L,
      attachmentButtonHidden: j
    }, C.default.createElement(l.default, {
      context: k,
      sourceUrl: A.sourceUrl,
      compose: true
    }))));
  }
  return C.default.createElement("div", {
    className: (0, b.default)(P)
  }, C.default.createElement("div", {
    className: (0, b.default)(O)
  }, C.default.createElement(r.default, {
    onHeightChange: function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      N({
        overlay: e
      }, t);
    }
  }, ie, le, ge, re, X, he)));
}
var D = (0, C.forwardRef)(k);
exports.default = D;