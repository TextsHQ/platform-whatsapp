var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputCustomStyleThemes = exports.RichTextField = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/370257.js");
var l = require("../main-chunk/494443.js");
var i = require("../app/731971.js");
var u = require("../app/396574.js");
var s = require("../app/664149.js");
var c = require("./328449.js");
var d = require("./637624.js");
var f = require("./934740.js");
var p = require("../app/305521.js");
var m = a(require("../app/335540.js"));
var h = require("./975279.js");
var g = require("../app/81644.js");
var E = a(require("../app/932325.js"));
var v = require("./334672.js");
var _ = a(require("./190422.js"));
var y = require("../main-chunk/150610.js");
var C = require("../app/956113.js");
var b = require("./204875.js");
var M = require("../app/392632.js");
var S = a(require("../app/37875.js"));
var T = a(require("../app/625903.js"));
var w = a(require("../app/844453.js"));
var A = require("../vendor/548360.js");
var P = a(require("../app/599001.js"));
var O = function (e, t) {
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
var k = a(require("../app/156720.js"));
var D = a(require("../app/49710.js"));
var I = a(require("../app/17533.js"));
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
const N = (0, P.default)({
  groupInfoName: null,
  desaturated: null,
  noErrorInfo: null,
  chatInfoDefaultText: null,
  chatInfoLargeText: null,
  disabledLabel: null
});
exports.TextInputCustomStyleThemes = N;
const x = {
  iconMain: {
    position: "lhggkp7q",
    top: "jgz0asyo",
    color: "gtscxtjd",
    cursor: "ajgl1lbb",
    ":focus": {
      boxShadow: "esbo3we0"
    }
  },
  emojiBtn: {
    marginEnd: "kjemk6od",
    marginStart: "p3lsiedt",
    color: "gtscxtjd",
    cursor: "ajgl1lbb",
    ":focus": {
      boxShadow: "esbo3we0"
    }
  },
  dragIconContainer: {
    marginStart: "g9zvcdbd",
    cursor: "j8fxo1e4"
  },
  dragIcon: {
    marginTop: "g1eqewly",
    marginEnd: "q471nw87",
    color: "cs9t9or5"
  },
  textInputFontSize13: {
    fontSize: "ovllcyds"
  },
  textInputFontSize14: {
    fontSize: "f8jlpxt4"
  },
  textInputFontSize16: {
    fontSize: "enbbiyaj"
  },
  textInputFontSize17: {
    fontSize: "fe5nidar"
  },
  textInputFontSize24: {
    fontSize: "q9lllk4z"
  },
  placeholder: {
    color: "t35qvd06",
    flexShrink: "m0h2a7mj",
    flexGrow: "ggj6brxn"
  }
};
function L(e) {
  let {
    settings: t,
    textContent: n,
    testid: a
  } = e;
  if (!t || n == null || n === "") {
    return;
  }
  const {
    textLimit: r = 1 / 0,
    readMoreText: l,
    onReadMore: i,
    formatters: u,
    ellipsify: s,
    multiline: c,
    inferLinesDirection: d,
    direction: f
  } = t;
  return O.default.createElement("div", {
    className: _.default.emojiText
  }, O.default.createElement(p.EmojiText, {
    testid: `${a}-read-only`,
    text: n,
    ellipsify: s,
    multiline: c,
    selectable: true,
    emojiSize: p.EMOJI_SIZE.SMALL,
    textLimit: r,
    formatters: u,
    inferLinesDirection: d,
    direction: f
  }), i && l != null && (0, o.numCodepoints)(n == null ? undefined : n.toString()) > r && O.default.createElement(T.default, {
    onClick: i
  }, O.default.createElement("span", {
    className: _.default.more
  }, " ", l)));
}
function j(e, t) {
  var n;
  const {
    customStyleThemes: a = [],
    focusOnMount: p,
    selectOnMount: P,
    lockable: R,
    multiline: j,
    onBeginEdit: B,
    lowProfile: F,
    error: G,
    validate: U,
    onSave: W,
    onError: H,
    onCancel: V,
    emptyValuePlaceholder: q,
    editable: Y = true,
    pending: z,
    blockFocusOnLock: K,
    managed: Q,
    managedError: X,
    testid: Z = "text-input",
    inputPlaceholder: J,
    direction: $,
    maxCodeUnits: ee,
    setIsEditing: te
  } = e;
  const ne = (0, r.default)({
    multiline: j,
    ellipsify: false,
    direction: "auto",
    inferLinesDirection: true
  }, e.emojiTextSettingsInLockMode);
  const [ae, re] = (0, O.useState)(e.value);
  const oe = ae != null ? ae : e.value;
  const le = Boolean(!oe);
  (0, O.useEffect)(() => {
    re(e.value);
  }, [e.value]);
  const ie = (0, O.useRef)(null);
  const ue = (0, O.useRef)(null);
  const se = (0, O.useRef)(null);
  const ce = (0, O.useRef)(null);
  const [de, fe] = (0, O.useState)(e.startActive || false);
  const [pe, me] = (0, O.useState)(e.startActive !== true && !!R);
  const [he, ge] = (0, O.useState)(null);
  (0, O.useEffect)(() => {
    if (te != null && de !== te) {
      fe(te);
      me(!te);
      ye();
    }
  }, [te]);
  const Ee = (0, D.default)(pe);
  const ve = (0, D.default)(Y);
  const _e = (0, D.default)(z);
  const ye = () => {
    var e;
    if (!((e = ie.current) === null || e === undefined)) {
      e.focus();
    }
  };
  (0, O.useEffect)(() => {
    if (p === true) {
      ye();
    }
  }, []);
  const Ce = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const t = O.default.createElement(d.EmojiPanel, {
      onEmoji: e => {
        var t;
        if (!((t = ie.current) === null || t === undefined)) {
          t.replaceSelection(e);
        }
      },
      onFocusNext: ye,
      onFocusPrev: ye
    });
    ge({
      menu: t,
      dirY: s.DirY.TOP,
      type: s.MenuType.EmojiPicker,
      anchor: e.target
    });
    ye();
  };
  const be = () => {
    ge(null);
  };
  const Me = () => {
    var e;
    if (!((e = ue.current) === null || e === undefined)) {
      e.restoreFocus();
    }
  };
  const Se = () => {
    let e = !(F !== true && G);
    if (U && e) {
      e = U(oe);
    }
    if (e) {
      if (W) {
        W();
      }
      me(true);
      fe(false);
    } else if (H) {
      H();
    }
  };
  const Te = t => {
    var n;
    if (R === true) {
      Se();
    }
    if (j !== true) {
      if (t instanceof KeyboardEvent) {
        if (!((n = e.onEnter) === null || n === undefined)) {
          n.call(e, t);
        }
      }
    }
  };
  const we = t => {
    var n;
    fe(true);
    if (!((n = e.onFocus) === null || n === undefined)) {
      n.call(e, t);
    }
  };
  const Ae = t => {
    var n;
    fe(false);
    if (!((n = e.onBlur) === null || n === undefined)) {
      n.call(e, t);
    }
  };
  const Pe = () => {
    if (B) {
      B();
    }
    me(false);
  };
  const Oe = (0, I.default)(() => {
    if (V) {
      V();
    }
    me(true);
    fe(false);
    re(e.value);
  });
  const ke = (0, I.default)(() => Y && !pe);
  (0, O.useEffect)(() => {
    if (!(Ee === true || ve !== true || Y)) {
      Oe();
    }
    if (se.current && K !== true && (Ee !== true && pe || _e === true && !z)) {
      m.default.focus(se.current);
    }
    const e = ie.current;
    if (!(ke() && Q !== true || (e == null ? undefined : e.getTextContent()) === oe || e == null)) {
      e.setTextContent(oe || "");
    }
    if (X === true && G != null && pe) {
      me(false);
    }
  }, [K, Y, G, Oe, ke, pe, Q, X, z, ve, Ee, _e, oe]);
  const De = () => {
    var t;
    if (!((t = ne.onReadMore) === null || t === undefined)) {
      t.call(ne);
    }
    if (!Y && e.editRestrictionInfo) {
      e.editRestrictionInfo();
    } else if (Y && pe) {
      Pe();
    }
  };
  const Ie = () => {
    var e;
    if (!((e = ce.current) === null || e === undefined)) {
      e.focus();
    }
  };
  const Re = () => {
    var e;
    Ie();
    if (!((e = ie.current) === null || e === undefined)) {
      e.selectAll();
    }
  };
  (0, O.useImperativeHandle)(t, () => ({
    restoreFocus: ye,
    triggerSelect: De,
    triggerFocus: Ie,
    selectTextInput: Re
  }));
  const Ne = (n = e.maxLength) !== null && n !== undefined ? n : 25;
  const xe = ke() && e.error != null && e.error !== "" && !e.lowProfile;
  const Le = {
    container: (0, u.classnamesConvertMeToStylexPlease)(_.default.textInput, ...a.map(e => _.default[e]), {
      [_.default.noPlaceholder]: !e.placeholder,
      [_.default.invite]: e.theme === "v4-invite-caption",
      [_.default.requestReason]: e.theme === "request-reason",
      [_.default.active]: ke(),
      [_.default.small]: e.theme === "small",
      [_.default.inputLarge]: e.theme === "large",
      [_.default.editOnHover]: e.showEditOnHover,
      [_.default.highlightOnHover]: e.showHighlightOnHover,
      [_.default.focused]: Y && de,
      [_.default.editor]: Y && e.theme === "editor",
      [_.default.grayBackground]: e.theme === "gray-background",
      [_.default.chatInfoLargeText]: a.includes(N.chatInfoLargeText)
    }),
    label: (0, u.classnamesConvertMeToStylexPlease)(_.default.labelText, _.default.labelTextEllipsified, {
      [_.default.float]: !le || e.theme === "gray-background",
      [_.default.hideFloatingLabel]: !!e.hideFloatingLabel,
      [_.default.richTextInputLabelText]: e.theme !== "small",
      [_.default.labelWithEmojiIcon]: le && !!e.supportsEmoji
    }),
    inputWrapper: (0, u.classnamesConvertMeToStylexPlease)(_.default.wrapper, {
      [_.default.textError]: xe,
      [_.default.invite]: e.theme === "v4-invite-caption",
      [_.default.textActive]: de,
      [_.default.locked]: pe,
      [_.default.editing]: ke()
    }),
    infoWrapper: (0, u.classnamesConvertMeToStylexPlease)(_.default.infoStrip, {
      [_.default.textError]: xe,
      [_.default.textActive]: de
    })
  };
  let je;
  let Be;
  if (e.lockable === true) {
    if (e.pending === true) {
      Be = O.default.createElement("div", {
        className: (0, u.classnamesConvertMeToStylexPlease)(_.default.iconSpinner, _.default.iconMain),
        key: "spinner"
      }, O.default.createElement(C.Spinner, {
        size: 18,
        stroke: 6,
        color: "highlight"
      }));
    } else if (pe) {
      if (Y) {
        var Fe;
        Be = O.default.createElement(T.default, {
          testid: `${Z}-edit`,
          className: _.default.iconMain,
          onClick: Pe,
          key: "btn-edit",
          title: A.fbt._("Click to edit {fieldName}", [A.fbt._param("fieldName", (Fe = e.fieldName) !== null && Fe !== undefined ? Fe : "")], {
            hk: "Wjo4r"
          }),
          ref: se.current
        }, O.default.createElement(v.PencilIcon, {
          className: _.default.icon
        }));
      } else if (e.editRestrictionInfo && !Y) {
        Be = O.default.createElement(T.default, {
          className: _.default.iconMain,
          onClick: e.editRestrictionInfo,
          key: "btn-info"
        }, O.default.createElement(h.InfoIcon, {
          className: _.default.icon
        }));
      }
    } else {
      Be = O.default.createElement(T.default, {
        xstyle: x.iconMain,
        onClick: Se,
        disabled: e.disabled,
        key: "btn-done",
        title: A.fbt._("Click to save, ESC to cancel", null, {
          hk: "3Ka1pv"
        })
      }, O.default.createElement(i.CheckmarkIcon, {
        className: _.default.icon
      }));
    }
    if (e.lockable === true) {
      je = O.default.createElement(w.default, {
        exit: !e.showEditOnHover,
        enter: e.showEditOnHover !== true || !pe,
        className: _.default.iconMainContainer,
        transitionName: "pop"
      }, Be);
    }
  }
  const Ge = ke() && e.supportsEmoji === true ? O.default.createElement(g.HotKeys, {
    handlers: {
      enter: Ce,
      space: Ce
    }
  }, O.default.createElement(T.default, {
    xstyle: x.emojiBtn,
    onClick: Ce,
    key: "emoji-btn",
    onFocus: () => {
      if (he) {
        Me();
      }
    },
    title: A.fbt._("Open emojis panel", null, {
      hk: "3IEMY6"
    })
  }, O.default.createElement(c.EmojiInputIcon, {
    className: _.default.icon
  }))) : null;
  let Ue;
  if (e.showRemaining === true) {
    const e = (0, o.numCodepoints)(oe || "");
    const t = (ee != null ? ee : 1 / 0) - (0, l.numCodeUnits)(oe || "");
    const n = Math.min(t, Ne - e);
    Ue = n < 50 && ke() ? O.default.createElement("div", {
      className: (0, u.classnamesConvertMeToStylexPlease)(_.default.charCounter),
      key: "counter"
    }, E.default.n(n)) : null;
  }
  const We = e.supportsEmoji === true || e.showRemaining === true ? O.default.createElement(w.default, {
    className: _.default.iconsEditContainer,
    exit: !e.showEditOnHover,
    transitionName: "pop"
  }, Ue, Ge, ke() && e.onDragThumbMouseDown != null ? O.default.createElement("div", {
    onMouseDown: e.onDragThumbMouseDown,
    className: (0, k.default)(x.dragIconContainer)
  }, O.default.createElement("svg", {
    className: (0, k.default)(x.dragIcon),
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, O.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1 2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H17C17.55 0 18 0.45 18 1C18 1.55 17.55 2 17 2H1ZM1 6H17C17.55 6 18 5.55 18 5C18 4.45 17.55 4 17 4H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6ZM17 10H1C0.45 10 0 9.55 0 9C0 8.45 0.45 8 1 8H17C17.55 8 18 8.45 18 9C18 9.55 17.55 10 17 10ZM17 14H1C0.45 14 0 13.55 0 13C0 12.45 0.45 12 1 12H17C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z",
    fill: "currentColor"
  }))) : null) : null;
  const He = e.error != null && e.error !== "" ? O.default.createElement(O.default.Fragment, null, O.default.createElement("div", {
    className: _.default.errorText
  }, xe ? e.error : null), O.default.createElement("div", {
    className: _.default.visiblyHidden,
    role: "alert"
  }, A.fbt._("Error: {error}", [A.fbt._param("error", e.error)], {
    hk: "2Q7l44"
  }))) : null;
  const Ve = e.lowProfile !== true ? O.default.createElement("div", {
    className: Le.infoWrapper
  }, He) : null;
  let qe;
  let Ye;
  let ze;
  let Ke;
  let Qe;
  if (e.lockable !== true || pe) {
    if (e.lockable !== true && he) {
      qe = O.default.createElement(M.UIE, {
        displayName: "EmojiPicker",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: be,
        requestFocus: Me
      }, O.default.createElement(S.default, {
        contextMenu: he
      }));
    }
  } else {
    let e;
    if (he) {
      e = O.default.createElement(M.UIE, {
        displayName: "EmojiPicker",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: be,
        requestFocus: Me
      }, O.default.createElement(S.default, {
        contextMenu: he
      }));
    }
    qe = O.default.createElement(M.UIE, {
      displayName: "TextInput",
      escapable: true,
      dismissOnWindowResize: true,
      requestFocus: ye,
      requestDismiss: Oe
    }, O.default.createElement("div", null, e));
  }
  if (!Y || pe) {
    if (le) {
      if (J != null && J !== "") {
        Ye = O.default.createElement("div", {
          className: (0, k.default)(x.placeholder)
        }, O.default.createElement(L, {
          settings: ne,
          textContent: J,
          testid: Z
        }));
      }
    } else {
      Ye = O.default.createElement(L, {
        settings: ne,
        textContent: oe,
        testid: Z
      });
      if (e.showHighlightOnHover === true) {
        Ye = O.default.createElement("div", {
          className: (0, u.classnamesConvertMeToStylexPlease)(_.default.inputWrapper)
        }, Ye);
      }
    }
  } else {
    var Xe;
    let t;
    t = a.includes(N.chatInfoLargeText) ? x.textInputFontSize24 : a.includes(N.chatInfoDefaultText) ? x.textInputFontSize16 : e.theme === "editor" ? x.textInputFontSize14 : e.theme === "small" ? x.textInputFontSize13 : x.textInputFontSize17;
    Ye = O.default.createElement("div", {
      style: {
        paddingTop: 8,
        paddingBottom: 5
      },
      className: (0, u.classnamesConvertMeToStylexPlease)(_.default.inputWrapper, {
        [_.default.constrainedWidth]: e.constrainedWidth
      })
    }, O.default.createElement(y.RichTextInput, {
      title: e.title,
      testid: Z,
      ref: ie,
      initialText: e.value,
      multiline: e.multiline,
      focusOnMount: p,
      selectOnMount: P,
      pasteFromHTML: e.pasteFromHTML,
      onChange: (t, n) => {
        var a;
        re(t.text);
        if (!((a = e.onChange) === null || a === undefined)) {
          a.call(e, t, n);
        }
      },
      onFocus: we,
      onBlur: Ae,
      onEnter: Te,
      onKeyDown: e.onKeyDown,
      onFiles: e.onFiles,
      maxLength: e.maxLength,
      maxVisibleLines: e.maxVisibleLines,
      minVisibleLines: e.minVisibleLines,
      maxCodeUnits: ee,
      placeholder: J,
      textXstyle: t,
      textFormatEnabled: e.textFormatEnabled,
      bulletPointsEnabled: e.bulletPointsEnabled,
      textFormatShortcutsEnabled: e.textFormatShortcutsEnabled
    }));
    const n = (Xe = ie.current) === null || Xe === undefined ? undefined : Xe.editor;
    ze = n == null ? null : O.default.createElement(f.EmojiSuggestions, {
      kind: b.SuggestionsPanelKind.Menu,
      editor: n
    });
  }
  if (e.placeholder != null) {
    Ke = (le || e.hideFloatingLabel !== true) && O.default.createElement("span", {
      className: Le.label
    }, e.placeholder);
    Qe = O.default.createElement("div", {
      className: _.default.spacer
    });
  }
  const Ze = $ != null ? $ : E.default.isRTL() ? "rtl" : "ltr";
  return O.default.createElement(g.HotKeys, {
    className: Le.container,
    onFocus: e => {
      const t = ce.current;
      if (t != null && e.target instanceof HTMLElement) {
        t.contains(e.target);
      }
    }
  }, Ke, Qe, O.default.createElement("div", {
    ref: ce,
    className: Le.inputWrapper,
    dir: Ze
  }, ze, Ye, le && q && pe && O.default.createElement("div", {
    className: _.default.emptyValPlaceholder
  }, q), We, je), Ve, qe);
}
const B = (0, O.forwardRef)(j);
exports.RichTextField = B;
B.displayName = "RichTextField";