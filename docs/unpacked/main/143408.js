var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/659177.js"));
var o = require("../app/396574.js");
var l = a(require("./320357.js"));
var i = a(require("./205409.js"));
var u = a(require("./360699.js"));
var s = require("./144737.js");
var c = a(require("./333832.js"));
var d = require("../app/707529.js");
var f = a(require("./974385.js"));
var p = require("../app/238669.js");
var m = require("../app/392632.js");
var h = require("../app/905225.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
var v = require("../app/808446.js");
var _ = require("../app/655241.js");
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C(e, t) {
  const {
    chat: n,
    chatEntryPoint: a,
    msgCollection: y,
    focusCtx: C,
    notifyChatRendered: b,
    updateOpenedChatInfo: M,
    showPreview: S
  } = e;
  const T = (0, E.useRef)(null);
  const w = (0, _.useModelValues)(e.chatPreference, ["wallpaperColor", "showDoodle"]);
  const [A, P] = (0, E.useState)(w.wallpaperColor);
  const [O, k] = (0, E.useState)(w.wallpaperColor);
  (0, v.useListener)(r.default, "wallpaper_color_preview", e => {
    P(e != null ? e : r.default.assertGet("defaultPreference").wallpaperColor);
  });
  const D = w.wallpaperColor;
  if (O !== D) {
    P(D);
    k(D);
  }
  const I = (e, t, n, a) => {
    var r;
    const o = (r = T.current) === null || r === undefined ? undefined : r.clientWidth;
    if (o == null || e === t) {
      return false;
    }
    let l = o / (e - t);
    if (a === true && n != null && n > 0) {
      l = o / (e - t - n);
    }
    return (0, s.animateConversationPanel)(T.current, l);
  };
  const R = e => !!T.current && T.current.contains(e);
  (0, E.useImperativeHandle)(t, () => ({
    animatePanel: I,
    containsDOMNode: R
  }));
  const N = {};
  let x;
  if (A !== h.DEFAULT_CHAT_WALLPAPER) {
    N.backgroundColor = A;
  }
  if (n && y) {
    x = E.default.createElement(i.default, {
      chat: n,
      chatEntryPoint: a,
      groupMetadata: n.groupMetadata,
      chatPreference: r.default.assertGet("defaultPreference"),
      focusCtx: C,
      msgCollection: y,
      notifyChatRendered: b,
      updateOpenedChatInfo: M,
      key: n.id.toString(),
      wallpaperColor: A
    });
  } else if (S) {
    x = E.default.createElement(E.default.Fragment, null, E.default.createElement("header", {
      className: (0, o.classnamesConvertMeToStylexPlease)(f.default.chatHeader, c.default.header)
    }, E.default.createElement("span", {
      className: (0, o.classnamesConvertMeToStylexPlease)(c.default.title, f.default.chatTitle)
    }, g.fbt._("Wallpaper Preview", null, {
      hk: "1n00VC"
    }))), E.default.createElement(l.default, {
      wallpaperColor: A,
      showDoodle: w.showDoodle
    }), E.default.createElement("footer", {
      className: u.default.footer
    }));
  }
  return E.default.createElement(d.ErrorBoundary, {
    name: "conversation-panel"
  }, E.default.createElement(m.UIE, {
    displayName: "ConversationPanel",
    uimState: p.UIMState.INACTIVE
  }, E.default.createElement("div", {
    id: "main",
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [c.default.previewPane]: e.showPreview,
      [c.default.pane]: true
    }),
    style: N,
    ref: T
  }, x)));
}
var b = (0, E.forwardRef)(C);
exports.default = b;