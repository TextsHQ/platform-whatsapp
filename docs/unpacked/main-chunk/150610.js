var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextInput = undefined;
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("./14544.js");
var i = require("./838107.js");
var s = require("./808485.js");
var u = o(require("./284014.js"));
var d = require("./794694.js");
var c = require("./728684.js");
var f = require("./240997.js");
var m = require("./494443.js");
var p = require("../app/396574.js");
var h = require("./683602.js");
var E = require("../app/175448.js");
var g = require("../app/306703.js");
require("./768906.js");
var C = require("./616098.js");
var _ = require("./332361.js");
var T = require("./272332.js");
var S = require("./991086.js");
var N = require("./321245.js");
var v = require("./262337.js");
var b = require("./687112.js");
var y = require("./251922.js");
var M = require("./330007.js");
var O = require("./699306.js");
var A = require("./331853.js");
var x = require("./270916.js");
var R = require("./71881.js");
require("../app/191873.js");
var P = require("./91922.js");
var L = require("./996684.js");
var w = require("./347572.js");
var I = require("./654761.js");
var D = require("./862180.js");
var k = require("./125563.js");
var j = require("./381269.js");
var F = function (e, t) {
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
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var B = o(require("../app/156720.js"));
var H = require("./16188.js");
var Y = o(require("../app/305988.js"));
const $ = ["xstyle", "onEnter", "onChange", "onFiles", "onTextPaste", "onMaxPasteExceeded", "onBlur", "onFocus", "onKeyDown", "onClick", "initialText", "placeholder", "multiline", "maxLength", "maxCodeUnits", "children", "showDebugPanel", "groupMetadata", "textXstyle", "placeholderTestXstyle", "textFormatEnabled", "bulletPointsEnabled", "numberedListEnabled", "inlineCodeEnabled", "blockQuoteEnabled", "textFormatShortcutsEnabled", "botInvokeEnabled", "highlightedBotCommands", "selectOnMount", "pasteFromHTML", "emojiSize"];
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
const W = {
  position: "g0rxnol2",
  width: "ln8gz9je"
};
const z = {
  lineHeight: "iq0m558w",
  position: "g0rxnol2"
};
const G = {
  fontWeight: "nbipi2bn"
};
const K = {
  fontStyle: "h432zind"
};
const q = {
  textDecoration: "ozhy756y",
  textDecorationColor: "rowl85m6"
};
const V = {
  fontSize: "j97fhkih",
  fontFamily: "k13l3mcg"
};
const X = {
  paragraph: (0, p.classnamesConvertMeToStylexPlease)(g.SELECTABLE_CSS_CLASS, E.COPYABLE_CSS_CLASS, (0, B.default)(z)),
  text: {
    base: (0, p.classnamesConvertMeToStylexPlease)(g.SELECTABLE_CSS_CLASS, E.COPYABLE_CSS_CLASS),
    bold: (0, B.default)(G),
    italic: (0, B.default)(K),
    strikethrough: (0, B.default)(q),
    code: (0, B.default)(V)
  }
};
const Q = (0, F.forwardRef)((e, t) => {
  let {
    xstyle: n,
    onEnter: o,
    onChange: E,
    onFiles: g,
    onTextPaste: U,
    onMaxPasteExceeded: z,
    onBlur: G,
    onFocus: K,
    onKeyDown: q,
    onClick: V,
    initialText: Q,
    placeholder: J,
    multiline: Z = false,
    maxLength: ee,
    maxCodeUnits: te,
    children: ne,
    showDebugPanel: oe,
    groupMetadata: re,
    textXstyle: ae,
    placeholderTestXstyle: le,
    textFormatEnabled: ie = false,
    bulletPointsEnabled: se = false,
    numberedListEnabled: ue = false,
    inlineCodeEnabled: de = false,
    blockQuoteEnabled: ce = false,
    textFormatShortcutsEnabled: fe = false,
    botInvokeEnabled: me = false,
    highlightedBotCommands: pe,
    selectOnMount: he = false,
    pasteFromHTML: Ee,
    emojiSize: ge
  } = e;
  let Ce = (0, a.default)(e, $);
  const _e = (0, F.useMemo)(() => (0, d.createEmptyHistoryState)(), []);
  const [Te, Se] = (0, F.useState)();
  const [Ne, ve] = (0, Y.default)(ie);
  const be = (0, F.useRef)(null);
  const ye = (0, F.useRef)(null);
  (0, F.useImperativeHandle)(t, function () {
    return {
      focus() {
        if (!(Te == null)) {
          Te.focus();
        }
      },
      isFocused: () => (0, y.isFocused)(Te),
      blur() {
        if ((0, y.isFocused)(Te)) {
          if (!(Te == null)) {
            Te.blur();
          }
        }
      },
      selectAll() {
        if (Te) {
          (0, y.selectAll)(Te);
        }
      },
      replaceSelection(e, t) {
        if (!(Te == null)) {
          Te.update(() => (0, y.$insertText)(e, t));
        }
      },
      reset() {
        if (Te) {
          (0, y.setTextContent)(Te, "");
        }
      },
      paste(e) {
        const t = e.nativeEvent;
        if (t instanceof ClipboardEvent) {
          if (!(Te == null)) {
            Te.dispatchCommand(l.PASTE_COMMAND, t);
          }
        }
      },
      editor: Te,
      editorContent: () => ye.current,
      isCursorAtStart: () => !!Te && (0, y.isCursorAtStart)(Te),
      isCursorAtEnd: () => !!Te && (0, y.isCursorAtEnd)(Te),
      getTextContent: () => Te ? (0, y.getTextContent)(Te) : null,
      setTextContent(e) {
        if (Te && (0, y.getTextContent)(Te) !== e) {
          (0, y.setTextContent)(Te, e);
        }
      }
    };
  }, [Te]);
  (0, H.useLexicalCommandListener)(Te, l.FOCUS_COMMAND, () => false);
  const Me = (0, F.useMemo)(() => ({
    namespace: "WAWebRichTextInput",
    theme: X,
    nodes: [v.EmojiNode, A.MentionNode, M.ListBulletNode, O.ListNumberNode, w.QuoteLineNode, f.BidiParagraphNode, C.DelimiterNode, {
      replace: l.ParagraphNode,
      with: () => new f.BidiParagraphNode()
    }],
    onError: () => {}
  }), []);
  const Oe = F.default.createElement(I.Placeholder, {
    text: J,
    xstyle: [ae, le]
  });
  const Ae = (0, p.classnamesConvertMeToStylexPlease)((0, B.default)(W, n), "lexical-rich-text-input");
  return F.default.createElement("div", {
    className: Ae,
    onMouseUp: e => {
      e.preventDefault();
    }
  }, F.default.createElement(s.LexicalComposer, {
    initialConfig: Me
  }, F.default.createElement(c.PlainTextPlugin, {
    contentEditable: F.default.createElement(I.ContentEditable, (0, r.default)({}, Ce, {
      ref: be,
      xstyle: ae,
      focusOnMount: he !== true && Ce.focusOnMount,
      onClick: V
    })),
    ErrorBoundary: u.default,
    placeholder: Oe
  }), F.default.createElement(d.HistoryPlugin, {
    externalHistoryState: _e
  }), F.default.createElement(i.ClearEditorPlugin, null), false, F.default.createElement(R.MultilinePlugin, {
    multiline: Z
  }), F.default.createElement(S.EditorRefPlugin, {
    editorRef: Se
  }), F.default.createElement(h.ClipboardPlugin, {
    onFiles: g,
    onTextPaste: e => !!(U == null ? undefined : U(e)),
    ignoreLineBreakOnPaste: !Z,
    pasteFromHTML: Ee
  }), F.default.createElement(N.EditorStatePlugin, {
    onChange: (e, t, n) => {
      ye.current = e;
      if (!(n || E == null)) {
        E(e, t);
      }
    },
    onBlur: G,
    onFocus: K
  }), F.default.createElement(T.EditorInitialStatePlugin, {
    initialText: Q,
    willReceiveFocus: Boolean(Ce.focusOnMount) || he
  }), F.default.createElement(_.EditorInitialSelectionPlugin, {
    selectAll: he
  }), F.default.createElement(b.EmojisPlugin, {
    emojiSize: ge
  }), F.default.createElement(x.MentionsPlugin, {
    groupMetadata: re,
    botInvokeEnabled: me
  }), F.default.createElement(j.TextModifierPlugin, {
    autoToggleListBulletSymbol: se,
    autoToggleListNumberSymbol: ue
  }), Ne && F.default.createElement(D.TextFormatPreviewPlugin, {
    bulletPointsEnabled: se,
    numberedListEnabled: ue,
    inlineCodeEnabled: de,
    blockQuoteEnabled: ce,
    highlightedBotCommands: pe
  }), fe && F.default.createElement(k.TextFormatShortcutsPlugin, null), (ee != null || te != null) && F.default.createElement(m.CharacterLimitPlugin, {
    historyState: _e,
    maxLength: ee,
    maxCodeUnits: te,
    onMaxPasteExceeded: z
  }), q && F.default.createElement(L.OnKeyDownPlugin, {
    onKeyDown: q
  }), o && F.default.createElement(P.OnEnterPlugin, {
    onEnter: o
  }), ne));
});
exports.RichTextInput = Q;
Q.displayName = "RichTextInput";