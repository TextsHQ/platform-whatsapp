var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageEditComposer = function (e) {
  var t;
  let {
    msg: n,
    initialLinkPreview: a,
    onInputChange: r,
    onLinkPreviewChange: o,
    onConfirm: l,
    disableConfirmButton: s
  } = e;
  const [d, f] = (0, D.useMsgValues)(n.id, [g.getText, y.getCaption]);
  const h = (0, g.getChat)(n.unsafe());
  const [b, S] = (0, O.useState)((t = d != null ? d : f) !== null && t !== undefined ? t : "");
  const [w, A] = (0, O.useState)();
  const P = () => {
    if (w) {
      w.focus();
    }
  };
  let I;
  const R = w == null ? undefined : w.editor;
  if (R != null) {
    const e = h.groupMetadata;
    I = O.default.createElement(O.default.Fragment, null, O.default.createElement(p.EmojiSuggestions, {
      kind: T.SuggestionsPanelKind.MessageEditModal,
      editor: R
    }), O.default.createElement(E.MentionSuggestions, {
      kind: T.SuggestionsPanelKind.MessageEditModal,
      editor: R,
      groupMetadata: e,
      elevatedPushNamesEnabled: (0, c.elevatedPushNamesM2Enabled)(h)
    }));
  }
  let B;
  if ((0, _.getMsgEditType)(n.type) === _.MsgEditType.TextEdit) {
    B = O.default.createElement(v.LinkPreviewPanel, {
      chat: h,
      text: b,
      onChange: o,
      initialLinkPreview: a
    });
  }
  const F = (0, i.getComposeBoxPlaceholderText)(h);
  return O.default.createElement("div", {
    className: (0, k.default)(N.container)
  }, B, I, O.default.createElement(m.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: N.composer
  }, O.default.createElement(m.FlexRow, {
    xstyle: N.inputContainer
  }, O.default.createElement(C.RichTextInput, {
    testid: "edit-message-composer",
    ref: A,
    initialText: j(n),
    groupMetadata: h.groupMetadata,
    xstyle: N.input,
    onChange: e => {
      S(e.text);
      r(e);
    },
    onEnter: l,
    placeholder: F,
    title: F,
    maxLength: u.default.MAX_TXT_MSG_SIZE,
    maxVisibleLines: 6,
    multiline: true,
    spellCheck: true,
    textFormatEnabled: true,
    focusOnMount: true,
    bulletPointsEnabled: (0, M.expandedTextFormattingPreviewEnabled)(),
    numberedListEnabled: (0, M.expandedTextFormattingPreviewEnabled)(),
    inlineCodeEnabled: (0, M.expandedTextFormattingPreviewEnabled)(),
    blockQuoteEnabled: (0, M.expandedTextFormattingPreviewEnabled)(),
    pasteFromHTML: (0, M.improvedMessageComposerEnabled)(),
    textFormatShortcutsEnabled: (0, M.improvedMessageComposerEnabled)()
  }), O.default.createElement(x, {
    xstyle: N.emojiButton,
    onEmoji: e => {
      if (w) {
        w.focus();
        w.replaceSelection(e);
      }
    },
    onFocusNext: P,
    onFocusPrev: P
  })), O.default.createElement(L, {
    onClick: l,
    disabled: s
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/103522.js"));
var l = require("./811462.js");
var i = require("./743839.js");
var u = a(require("../app/846870.js"));
var s = require("../app/664149.js");
var c = require("../app/235630.js");
var d = require("./328449.js");
var f = require("./637624.js");
var p = require("./934740.js");
var m = require("../app/690495.js");
var h = a(require("../app/469733.js"));
var g = require("../app/163755.js");
var E = require("./597820.js");
var v = require("./628534.js");
var _ = require("../app/591988.js");
var y = require("../app/787742.js");
var C = require("../main-chunk/150610.js");
var b = require("../app/472685.js");
var M = require("../app/858486.js");
var S = require("./435595.js");
var T = require("./204875.js");
var w = require("../app/392632.js");
var A = a(require("../app/37875.js"));
var P = require("../vendor/548360.js");
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
var D = require("./871210.js");
var I = a(require("../app/83233.js"));
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
const N = {
  container: {
    position: "g0rxnol2",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5"
  },
  composer: {
    position: "g0rxnol2",
    backgroundColor: "g6kkip0l",
    paddingTop: "tvsr5v2h",
    paddingEnd: "h1a80dm5",
    paddingBottom: "jd93c9cp",
    paddingStart: "sta02ykp"
  },
  inputContainer: {
    paddingTop: "qlb265nb",
    paddingEnd: "btzf6ewn",
    paddingBottom: "n0ziumnz",
    paddingStart: "nqtxkp62",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j",
    backgroundColor: "f6cvynhn",
    borderTopColor: "rsltai19",
    borderEndColor: "boshimb4",
    borderBottomColor: "lw07f11l",
    borderStartColor: "jy0rc3ak",
    marginEnd: "poiibwu2",
    flexGrow: "ggj6brxn"
  },
  input: {
    flexGrow: "ggj6brxn"
  },
  emojiButton: {
    marginStart: "fooq7fky",
    color: "cs9t9or5",
    cursor: "ajgl1lbb",
    alignSelf: "ex3gcxaf"
  }
};
function x(e) {
  let {
    xstyle: t,
    onEmoji: n,
    onFocusNext: a,
    onFocusPrev: o
  } = e;
  const [l, i] = (0, O.useState)(null);
  const u = () => {
    i(null);
  };
  const [c, p] = (0, I.default)(e => {
    e.preventDefault();
    e.stopPropagation();
    const t = O.default.createElement(f.EmojiPanel, {
      onEmoji: n,
      onFocusNext: a,
      onFocusPrev: o
    });
    i({
      menu: t,
      dirY: s.DirY.TOP,
      type: s.MenuType.EmojiPicker,
      anchor: e.target
    });
  });
  const m = O.default.createElement("div", (0, r.default)({
    ref: c,
    className: (0, k.default)(t),
    title: P.fbt._("Open emojis panel", null, {
      hk: "49Hz6k"
    })
  }, p), O.default.createElement(d.EmojiInputIcon, null));
  let h = null;
  if (l) {
    h = O.default.createElement(w.UIE, {
      displayName: "EmojiPicker",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: u
    }, O.default.createElement(A.default, {
      contextMenu: l
    }));
  }
  return O.default.createElement(O.default.Fragment, null, m, h);
}
function L(e) {
  let {
    disabled: t,
    onClick: n
  } = e;
  return O.default.createElement(h.default, {
    grow: 0,
    shrink: 0
  }, O.default.createElement("div", null, O.default.createElement(S.Round, {
    testid: "edit-message-confirm-button",
    medium: true,
    disabled: t,
    onClick: n,
    label: P.fbt._("Send edited message", null, {
      hk: "4fcjPa"
    }),
    title: P.fbt._("Send edited message", null, {
      hk: "2wFcA1"
    })
  }, O.default.createElement(l.CheckmarkMediumIcon, null))));
}
function j(e) {
  var t;
  var n;
  let a = (t = (n = (0, g.getText)(e)) !== null && n !== undefined ? n : (0, y.getCaption)(e)) !== null && t !== undefined ? t : "";
  const r = e.mentionMap();
  const l = e.groupMentionMap();
  if (r) {
    const e = new RegExp(Object.keys(r).map(e => (0, o.default)(e)).join("|"), "g");
    a = a.replace(e, e => {
      const t = r[e].id.toString();
      return `${b.ZWS}${t}${b.ZWS}`;
    });
  }
  if (l) {
    const e = new RegExp(Object.keys(l).map(e => (0, o.default)(e)).join("|"), "g");
    a = a.replace(e, e => `${b.ZWS}${e.slice(1)}${b.ZWS}`);
  }
  return a;
}