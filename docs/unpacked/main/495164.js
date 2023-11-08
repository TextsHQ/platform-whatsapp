var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./590227.js");
var o = require("./928514.js");
var l = require("./637624.js");
var i = require("../app/707529.js");
var u = require("./770096.js");
var s = require("./833654.js");
var c = a(require("./987610.js"));
var d = require("../app/392632.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m(e, t) {
  const {
    displayCache: n,
    selectedPanelId: a,
    onPanelChange: p,
    onFocusRelease: m,
    onDisplayCache: h,
    theme: g
  } = e;
  const E = (0, f.useRef)(n == null ? undefined : n.emojiPanel);
  const v = (0, f.useRef)(n == null ? undefined : n.gifPanel);
  const _ = (0, f.useRef)(n == null ? undefined : n.stickerPanel);
  const y = (0, f.useRef)(g === r.PanelsTheme.StatusReplyComposeBox);
  const C = (0, f.useRef)(null);
  const b = (0, f.useRef)(null);
  const M = (0, f.useRef)(null);
  const [S, T] = (0, f.useState)("");
  const w = e => {
    switch (a) {
      case o.ComposeBoxPanel.STICKER:
        if (M.current) {
          M.current.restoreFocus();
        }
        break;
      case o.ComposeBoxPanel.GIF:
        if (b.current) {
          b.current.restoreFocus(e);
        }
        break;
      case o.ComposeBoxPanel.EMOJI:
      default:
        if (C.current) {
          C.current.restoreFocus(e);
        }
    }
  };
  const A = () => {
    h({
      emojiPanel: E.current,
      gifPanel: v.current,
      stickerPanel: _.current
    });
  };
  const P = e => {
    E.current = e;
    A();
  };
  const O = () => {
    const e = y.current ? o.ComposeBoxPanel.STICKER : o.ComposeBoxPanel.GIF;
    p(e);
  };
  const k = () => {
    m();
  };
  const D = e => {
    v.current = e;
    A();
  };
  const I = e => {
    T(e);
  };
  const R = () => {
    p(o.ComposeBoxPanel.STICKER);
  };
  const N = () => {
    p(o.ComposeBoxPanel.EMOJI);
  };
  const x = e => {
    _.current = e;
    A();
  };
  const L = () => {
    m();
  };
  const j = () => {
    const e = y.current ? o.ComposeBoxPanel.EMOJI : o.ComposeBoxPanel.GIF;
    p(e);
  };
  (0, f.useImperativeHandle)(t, () => ({
    restoreFocus: w
  }));
  let B = null;
  const F = y.current ? s.DisplayLocation.StatusV3ComposeBox : s.DisplayLocation.ComposeBox;
  switch (e.selectedPanelId) {
    case o.ComposeBoxPanel.STICKER:
      B = f.default.createElement(c.default, {
        ref: M,
        displayCache: _.current,
        displayLocation: F,
        onChange: I,
        defaultSearchText: S,
        onDisplayCache: x,
        onFocusPrev: j,
        onFocusNext: L,
        onSticker: e.onSticker
      });
      break;
    case o.ComposeBoxPanel.EMOJI:
    default:
      B = f.default.createElement(l.EmojiPanel, {
        ref: C,
        displayCache: E.current,
        width: e.width,
        displayLocation: F,
        onChange: I,
        defaultSearchText: S,
        onDisplayCache: P,
        onEmoji: e.onEmoji,
        onFocusPrev: k,
        onFocusNext: O
      });
      break;
    case o.ComposeBoxPanel.GIF:
      B = f.default.createElement(u.GifPanel, {
        ref: b,
        displayCache: v.current,
        onChange: I,
        defaultSearchText: S,
        onDisplayCache: D,
        onFocusNext: R,
        onFocusPrev: N,
        onGif: e.onGif
      });
  }
  return B && f.default.createElement(i.ErrorBoundary, {
    name: "compose-box-panels"
  }, f.default.createElement(d.UIE, {
    displayName: "ComposeBoxPanels",
    escapable: true,
    requestDismiss: e.requestDismiss,
    requestFocus: () => {
      w(false);
    }
  }, B));
}
var h = (0, f.forwardRef)(m);
exports.default = h;