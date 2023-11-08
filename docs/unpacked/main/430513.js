var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/898817.js");
var o = require("../app/122583.js");
var l = a(require("../app/670983.js"));
var i = a(require("./495164.js"));
var u = require("./590227.js");
var s = a(require("../app/235613.js"));
var c = require("./934740.js");
var d = require("../app/581354.js");
var f = require("../app/714574.js");
var p = require("../app/81644.js");
var m = require("../app/787742.js");
var h = a(require("./666413.js"));
var g = a(require("./929796.js"));
var E = require("../main-chunk/150610.js");
var v = require("../app/858486.js");
var _ = require("./848605.js");
var y = require("./941584.js");
var C = require("../app/498703.js");
var b = a(require("./586078.js"));
var M = require("./204875.js");
var S = require("../app/625786.js");
var T = require("../app/390737.js");
var w = require("../app/392632.js");
var A = a(require("../app/37875.js"));
var P = require("../app/676345.js");
var O = a(require("../app/844453.js"));
var k = require("./351917.js");
var D = require("./873225.js");
var I = require("../vendor/548360.js");
var R = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
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
var N = a(require("../app/156720.js"));
var x = a(require("../app/895851.js"));
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const j = {
  container: {
    position: "lhggkp7q",
    right: "grt5ktjy",
    bottom: "f7v6by6u",
    left: "tukmaf4q",
    zIndex: "nbczt5ty",
    width: "b1qcobdr",
    maxWidth: "ckq3dtew",
    marginEnd: "k1jo73ug",
    marginStart: "isfiuinm",
    paddingBottom: "aiput80m"
  },
  popupPanel: {
    zIndex: "thghmljt",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    marginEnd: "k1jo73ug",
    marginStart: "isfiuinm",
    willChange: "d6finlhe"
  },
  quotedMsgPanel: {
    width: "t9hu7tsx",
    maxWidth: "ckq3dtew",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j",
    paddingTop: "emrlamx0",
    right: "grt5ktjy",
    bottom: "jxacihee",
    left: "tukmaf4q"
  },
  reactionsPanel: {
    left: "l3hfgdr1",
    transform: "t9w6h8zt",
    position: "lhggkp7q",
    bottom: "pknvbjv8"
  },
  wrapper: {
    zIndex: "nbczt5ty",
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    paddingTop: "emrlamx0",
    paddingEnd: "itegkywt",
    paddingBottom: "aiput80m",
    paddingStart: "rppts313"
  },
  iconButton: {
    display: "l7jjieqr",
    alignSelf: "rwlvdxyg",
    marginTop: "opp68qpq",
    marginBottom: "rkip0xea",
    marginStart: "lhp4ctto",
    marginEnd: "ntr8esoy"
  },
  iconButtonColourFocused: {
    color: "svlsagor"
  },
  iconButtonColourOutOfFocus: {
    color: "lxozqee9"
  },
  square26Svg: {
    width: "ekdr8vow",
    height: "dhq51u3o"
  },
  lineWrapper: {
    position: "g0rxnol2",
    top: "qq0sjtgm",
    left: "tukmaf4q",
    display: "l7jjieqr",
    width: "crlpoz9d"
  },
  inputContainer: {
    boxSizing: "cm280p3y",
    width: "ln8gz9je",
    minHeight: "gc15jzxb",
    paddingTop: "eujn52yf",
    paddingEnd: "l9g3jx6n",
    paddingBottom: "ckm995li",
    paddingStart: "lyvj5e2u",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  containerInFocus: {
    backgroundColor: "rv6u8h8g",
    borderTopStartRadius: "llnowng2",
    borderTopEndRadius: "ap6veyk2",
    borderBottomEndRadius: "dc5qina8",
    borderBottomStartRadius: "kfr1vweg",
    transition: "iw1tz1w0"
  },
  containerInFocusStatusQuickReplies: {
    borderTopStartRadius: "g130k69c",
    borderTopEndRadius: "k1a7joe8",
    borderBottomEndRadius: "dc5qina8",
    borderBottomStartRadius: "kfr1vweg",
    zIndex: "nbczt5ty",
    position: "g0rxnol2"
  },
  inputInFocus: {
    backgroundColor: "f6cvynhn",
    borderTopColor: "rsltai19",
    borderEndColor: "boshimb4",
    borderBottomColor: "lw07f11l",
    borderStartColor: "jy0rc3ak",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54",
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu"
  },
  inputOutOfFocus: {
    backgroundColor: "kx1rlajt"
  },
  panelButtons: {
    paddingEnd: "mgssq8h7"
  },
  inputText: {
    fontSize: "fe5nidar"
  },
  suggestionsContainer: {
    position: "lhggkp7q",
    end: "citmgm7b",
    top: "odxhw97a",
    start: "cheugonp"
  }
};
function B(e, t) {
  const {
    isStatusQuickRepliesEnabled: n,
    onFocusChange: a
  } = e;
  const [L, B] = (0, R.useState)(false);
  const [F, G] = (0, R.useState)(undefined);
  const [U, W] = (0, R.useState)(undefined);
  const [H, V] = (0, R.useState)(null);
  const [q, Y] = (0, R.useState)(300);
  const [z, K] = (0, R.useState)("");
  const [Q, X] = (0, R.useState)(false);
  const Z = (0, R.useRef)(null);
  const [J, $] = (0, R.useState)(null);
  const ee = (0, R.useRef)(null);
  const te = (0, x.default)();
  (0, R.useEffect)(() => {
    const t = (0, l.default)((0, m.getSender)(e.msg), "getSender(props.msg)");
    (0, d.findChat)(t, "statusV3ComposeBox").then(e => {
      if (!te.aborted) {
        W(e);
      }
    });
  }, []);
  const ne = ((e, t, n) => Boolean(e) || t || Boolean(n))(F, L, H);
  (0, R.useEffect)(() => {
    if (ne) {
      e.pause();
    } else {
      e.play();
    }
  }, [ne]);
  const ae = () => ne;
  const re = () => {
    if (!(J == null)) {
      J.focus();
    }
  };
  const oe = () => {
    V(null);
    re();
  };
  const le = () => {
    G(undefined);
    V(null);
  };
  const ie = () => {
    if (U) {
      return Promise.resolve(U);
    }
    const t = (0, l.default)((0, m.getSender)(e.msg), "getSender(props.msg)");
    return (0, d.findChat)(t, "statusV3ComposeBox");
  };
  const ue = () => {
    (() => {
      const e = (0, S.genId)();
      T.ToastManager.open(R.default.createElement(S.Toast, {
        msg: I.fbt._("Sending reply…", null, {
          hk: "WYxWt"
        }),
        id: e
      }));
    })();
    le();
    if (!(J == null)) {
      J.reset();
    }
    e.dismissReply();
  };
  const se = (t, n) => {
    e.statusReplyMetric.statusReplyMessageType = n;
    const a = (0, S.genId)();
    t.then(() => {
      e.statusReplyMetric.statusReplyResult = D.STATUS_REPLY_RESULT.OK;
      e.onSend();
    }).catch((0, r.catchAbort)(() => {})).catch((0, o.filteredCatch)(s.default, () => {
      if (U) {
        T.ToastManager.open(R.default.createElement(S.Toast, {
          msg: I.fbt._("Can't send a message to blocked contact {contact}.", [I.fbt._param("contact", (0, f.getFormattedName)(U.contact))], {
            hk: "22uKoT"
          }),
          id: a
        }));
        e.statusReplyMetric.statusReplyResult = D.STATUS_REPLY_RESULT.ERROR_UNKNOWN;
      }
    }));
    if (n !== k.STATUS_REPLY_MESSAGE_TYPE.QUICK_REPLY) {
      ue();
    }
  };
  const ce = t => {
    if (!(t == null)) {
      t.stopPropagation();
    }
    if (!(t == null)) {
      t.preventDefault();
    }
    if (z.length) {
      ie().then(t => {
        const n = (0, C.sendTextMsgToChat)(t, z, {
          quotedMsg: e.msg
        });
        se(n, k.STATUS_REPLY_MESSAGE_TYPE.TEXT);
      });
    }
  };
  const de = e => {
    B(e);
    a(e);
  };
  const fe = () => L;
  const pe = () => {
    de(false);
    le();
    X(false);
  };
  const me = () => {
    var e;
    if (!((e = ee.current) === null || e === undefined)) {
      e.restoreFocus();
    }
  };
  const he = e => {
    if (e == null) {
      oe();
    } else {
      V(e);
      de(true);
    }
  };
  (0, R.useImperativeHandle)(t, () => ({
    isFocused: fe,
    isPaused: ae,
    restoreFocus: re,
    blur: pe
  }));
  const ge = fe() || H != null;
  const Ee = q != null && H != null ? R.default.createElement(g.default, {
    onResize: e => {
      Y(e.width);
    }
  }, R.default.createElement(i.default, {
    displayCache: Z.current,
    width: q,
    onDisplayCache: e => {
      Z.current = e;
    },
    onEmoji: e => {
      if (!(J == null)) {
        J.replaceSelection(e);
      }
    },
    onFocusRelease: () => {},
    onGif: () => {},
    onPanelChange: he,
    onSticker: (t, n) => {
      if (!t.isCreateButton) {
        ie().then(a => {
          const r = (0, y.sendStickerToChat)(a, t, {
            stickerSendOrigin: n,
            quotedMsg: e.msg
          });
          se(r, k.STATUS_REPLY_MESSAGE_TYPE.STICKER);
        });
      }
    },
    requestDismiss: oe,
    selectedPanelId: H,
    theme: u.PanelsTheme.StatusReplyComposeBox
  })) : null;
  const ve = F ? R.default.createElement(w.UIE, {
    displayName: "EmojiPicker",
    escapable: true,
    dismissOnWindowResize: true,
    requestFocus: me
  }, R.default.createElement("div", null, R.default.createElement(w.UIE, {
    displayName: "EmojiPicker",
    escapable: true,
    popable: true,
    dismissOnWindowResize: true,
    requestDismiss: () => {
      G(undefined);
      re();
    },
    requestFocus: me
  }, R.default.createElement(A.default, {
    contextMenu: F
  })))) : null;
  const _e = z.length === 0 ? R.default.createElement(b.default, {
    onClick: (t, n) => {
      t.stopPropagation();
      X(true);
      ie().then(t => {
        const a = (0, C.sendTextMsgToChat)(t, n, {
          quotedMsg: e.msg
        });
        se(a, k.STATUS_REPLY_MESSAGE_TYPE.QUICK_REPLY);
      });
    },
    onClickAnimateEnd: ue
  }) : null;
  const ye = n && L && H == null ? R.default.createElement(w.UIE, {
    displayName: "StatusV3QuickReply",
    escapable: true,
    requestDismiss: e.dismissReply
  }, R.default.createElement("div", {
    className: (0, N.default)(j.popupPanel, j.reactionsPanel)
  }, _e)) : null;
  const Ce = U && !n && (ge || L && !F) ? R.default.createElement(w.UIE, {
    displayName: "StatusV3Reply",
    escapable: true,
    requestDismiss: e.dismissReply
  }, R.default.createElement("div", {
    className: (0, N.default)(j.popupPanel, j.quotedMsgPanel)
  }, R.default.createElement(h.default, {
    msg: e.msg.safe(),
    theme: "statusV3",
    key: e.msg.id.toString(),
    chat: U
  }))) : null;
  const be = R.default.createElement("div", {
    className: (0, N.default)(j.panelButtons)
  }, R.default.createElement(u.ComposeBoxPanelsMenu, {
    chat: U,
    selectedPanelId: H,
    onChange: he,
    theme: u.PanelsTheme.StatusReplyComposeBox,
    buttonStyle: [ge ? j.iconButtonColourFocused : j.iconButtonColourOutOfFocus]
  }));
  const Me = J == null ? undefined : J.editor;
  const Se = R.default.createElement(R.default.Fragment, null, R.default.createElement("div", {
    className: (0, N.default)(j.suggestionsContainer)
  }, Me && R.default.createElement(c.EmojiSuggestions, {
    editor: Me,
    kind: M.SuggestionsPanelKind.Menu
  })), R.default.createElement(p.HotKeys, {
    className: (0, N.default)(j.inputContainer, P.uiPadding.vert3, ge ? j.inputInFocus : j.inputOutOfFocus),
    onClick: re
  }, R.default.createElement(E.RichTextInput, {
    xstyle: P.uiMargin.vert6,
    textXstyle: j.inputText,
    ref: $,
    placeholder: I.fbt._("Type a reply…", null, {
      hk: "2XsGdu"
    }),
    multiline: true,
    spellCheck: true,
    textFormatEnabled: true,
    bulletPointsEnabled: (0, v.expandedTextFormattingPreviewEnabled)(),
    numberedListEnabled: (0, v.expandedTextFormattingPreviewEnabled)(),
    inlineCodeEnabled: (0, v.expandedTextFormattingPreviewEnabled)(),
    blockQuoteEnabled: (0, v.expandedTextFormattingPreviewEnabled)(),
    pasteFromHTML: (0, v.improvedMessageComposerEnabled)(),
    textFormatShortcutsEnabled: (0, v.improvedMessageComposerEnabled)(),
    onChange: e => K(e.text),
    onFocus: () => {
      de(true);
    },
    onBlur: () => {
      document.activeElement;
      document.body;
    },
    onEnter: ce
  })));
  const Te = Q ? null : R.default.createElement("div", {
    className: (0, N.default)([ge && j.containerInFocus, n && j.containerInFocusStatusQuickReplies])
  }, R.default.createElement(O.default, {
    transitionName: "status-v3-panel",
    appear: true
  }, Ee), R.default.createElement(O.default, {
    transitionName: "status-v3-quoted-msg",
    appear: true
  }, Ce), R.default.createElement("div", {
    className: (0, N.default)(j.wrapper)
  }, be, R.default.createElement("div", {
    className: (0, N.default)(j.lineWrapper)
  }, Se), R.default.createElement("button", {
    className: (0, N.default)(j.iconButton, ge ? j.iconButtonColourFocused : j.iconButtonColourOutOfFocus),
    onClick: ce
  }, R.default.createElement(_.SendIcon, {
    directional: true,
    iconXstyle: j.square26Svg
  })), ve));
  return R.default.createElement("div", {
    className: (0, N.default)(j.container)
  }, R.default.createElement(O.default, {
    transitionName: "status-v3-quick-reply",
    appear: true
  }, ye), Te);
}
var F = (0, R.forwardRef)(B);
exports.default = F;