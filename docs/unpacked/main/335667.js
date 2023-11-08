var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageComposer = undefined;
var r = a(require("./384927.js"));
var o = require("../app/763614.js");
var l = require("../app/354458.js");
var i = require("../app/396574.js");
var u = a(require("./575363.js"));
var s = require("./590227.js");
var c = a(require("./40503.js"));
var d = require("../app/660666.js");
var f = require("./461809.js");
var p = require("../app/81644.js");
var m = require("../app/73225.js");
var h = require("../app/163139.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = (0, g.forwardRef)((e, t) => {
  let {
    chat: n,
    pttComposerActive: a,
    isMessageToBot: f,
    selectedPanelId: E,
    handlePanelChange: v,
    getCurrentComposeContent: y,
    richTextInputRef: C,
    updateTextAfterMediaDrawerClose: b,
    inputHotkeyRef: M,
    handleTab: S,
    handleMetaUpDebounced: T,
    handleInputFocus: w,
    handleInputBlur: A,
    input: P,
    expressionsPanelWrapperRef: O,
    expressionsPanelPickerRef: k,
    replaceInputSelection: D,
    handlePanelsSticker: I,
    handlePanelsGif: R,
    hasTextState: N,
    handleSendText: x,
    recordingSession: L,
    startRecording: j,
    onExpressionPanelActive: B
  } = e;
  if (a) {
    return null;
  }
  const F = (!n.isNewsletter || (0, m.isNewsletterPTTSendingEnabled)()) && !(0, d.getIsCAPISupportAccount)(n.contact) && (!f || (0, l.isBotPttEnabled)());
  const G = {
    expressionsPanelWrapperRef: O,
    expressionsPanelPickerRef: k,
    replaceInputSelection: D,
    isStickerSendingDisabled: f || n.isNewsletter && !(0, m.isNewsletterStickerSendingEnabled)(),
    handlePanelsSticker: I,
    handlePanelsGif: R,
    isMessageToBot: f,
    onExpressionPanelActive: B
  };
  return g.default.createElement("div", {
    ref: t,
    className: u.default.textMessageComposerContainer
  }, g.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)(u.default.childPadding, u.default.boxPanelWrapper)
  }, (0, o.areExpressionPanelsEnabled)() ? undefined : g.default.createElement(s.ComposeBoxPanelsMenu, {
    chat: n,
    selectedPanelId: E,
    onChange: v,
    theme: s.PanelsTheme.ChatComposeBox,
    isMessageToBot: f
  }), (0, o.areExpressionPanelsEnabled)() && (0, o.shouldShowExpressionPanelsOutOfInput)() ? g.default.createElement(_, G) : undefined, f ? undefined : g.default.createElement("div", {
    className: u.default.attachButtonContainer
  }, g.default.createElement(r.default, {
    chat: (0, h.unproxy)(n),
    getComposeContents: y,
    getComposeBoxEditorRef: () => C,
    onMenuComplete: b
  }))), g.default.createElement("div", {
    className: u.default.textMessageComposerInputContainer
  }, g.default.createElement(p.HotKeys, {
    ref: M,
    className: u.default.inputContainer,
    handlers: {
      tab: S,
      "shift+tab": S,
      "meta+up": T
    },
    onClick: e => {
      e.preventDefault();
    },
    onFocus: w,
    onBlur: A
  }, (0, o.areExpressionPanelsEnabled)() && !(0, o.shouldShowExpressionPanelsOutOfInput)() ? g.default.createElement(_, G) : undefined, P), g.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)(u.default.childPadding, u.default.sendButtonContainer)
  }, g.default.createElement(c.default, {
    supportsPtt: F,
    hasText: N,
    onClickSend: x,
    recordingSession: L,
    onStartRecording: () => {
      j();
    }
  }))));
});
function _(e) {
  let {
    expressionsPanelWrapperRef: t,
    expressionsPanelPickerRef: n,
    replaceInputSelection: a,
    isStickerSendingDisabled: r,
    handlePanelsSticker: o,
    handlePanelsGif: l,
    isMessageToBot: s,
    onExpressionPanelActive: c
  } = e;
  return g.default.createElement("div", {
    ref: t,
    className: (0, i.classnamesConvertMeToStylexPlease)(u.default.expressionsPanelPickerWrapper)
  }, g.default.createElement(f.ExpressionsPanelPicker, {
    ref: n,
    onEmoji: a,
    onSticker: r ? undefined : o,
    onGif: s ? undefined : l,
    onToggleActive: e => {
      if (!(c == null)) {
        c(e);
      }
    }
  }));
}
exports.MessageComposer = v;
v.displayName = "MessageComposer";