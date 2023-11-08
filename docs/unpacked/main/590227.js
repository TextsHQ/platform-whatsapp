var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposeBoxPanelsMenu = function (e) {
  const t = (0, g.useRef)();
  const n = (0, g.useRef)();
  const a = (0, g.useRef)();
  const u = (0, g.useRef)();
  const y = (0, g.useRef)();
  const T = e.theme === b.StatusReplyComposeBox;
  const w = (0, _.useOptionalModelValues)(e.chat, ["isNewsletter", "id"]);
  const A = w != null && w.isNewsletter;
  const P = t => {
    e.onChange(t);
  };
  (0, v.useListener)(r.Cmd, "open_compose_box_panel", P);
  const {
    readOnly: O
  } = e;
  const k = Boolean(e.selectedPanelId);
  const D = !T && e.isMessageToBot !== true;
  const I = !A && e.isMessageToBot !== true;
  const R = [C.button, e.buttonStyle];
  return g.default.createElement("div", {
    "data-state": k ? "open" : "closed",
    ref: e => {
      y.current = e;
    },
    className: (0, E.default)(C.menu, f.uiMargin.horiz8, M(e.theme, k, I))
  }, g.default.createElement(o.PanelsMenuButton, {
    "aria-label": h.fbt._("Close panel", null, {
      hk: "3ofbOg"
    }),
    xstyle: [R, k ? C.visible : C.invisible],
    "data-tab": k && !O ? d.TAB_ORDER.COMPOSE_BOX_MENU_BUTTON : null,
    Icon: m.XIcon,
    testid: "emoji-picker-close-btn",
    onClick: () => {
      e.onChange(null);
    },
    ref: t,
    size: o.SIZES.SQUARE24
  }), g.default.createElement(o.PanelsMenuButton, {
    "aria-label": h.fbt._("Open emojis panel", null, {
      hk: "3IEMY6"
    }),
    xstyle: R,
    testid: "compose-btn-emoji",
    "data-tab": k || O ? null : d.TAB_ORDER.COMPOSE_BOX_MENU_BUTTON,
    Icon: s.SmileyIcon,
    isActive: e.selectedPanelId === l.ComposeBoxPanel.EMOJI,
    isMain: true,
    onClick: () => {
      if (Boolean(e.selectedPanelId) || T) {
        P(l.ComposeBoxPanel.EMOJI);
      } else {
        e.onChange(!A && (0, p.getLastComposeBoxPanel)() || l.ComposeBoxPanel.EMOJI);
      }
    },
    ref: n,
    size: o.SIZES.SQUARE26,
    style: S(l.ComposeBoxPanel.EMOJI, k, e.theme)
  }), D && g.default.createElement(o.PanelsMenuButton, {
    "aria-label": h.fbt._("Open gif panel", null, {
      hk: "NE5Dz"
    }),
    xstyle: [C.button, k ? C.visible : C.invisible],
    Icon: i.GifIcon,
    isActive: e.selectedPanelId === l.ComposeBoxPanel.GIF,
    onClick: () => P(l.ComposeBoxPanel.GIF),
    ref: a,
    size: o.SIZES.SQUARE26,
    style: S(l.ComposeBoxPanel.GIF, k, e.theme)
  }), I && g.default.createElement(o.PanelsMenuButton, {
    "aria-label": h.fbt._("Open sticker panel", null, {
      hk: "1MfILW"
    }),
    xstyle: [R, k || T ? C.visible : C.invisible],
    testid: "compose-btn-sticker",
    Icon: c.StickerIcon,
    isActive: e.selectedPanelId === l.ComposeBoxPanel.STICKER,
    onClick: () => P(l.ComposeBoxPanel.STICKER),
    ref: u,
    size: o.SIZES.SQUARE26,
    style: S(l.ComposeBoxPanel.STICKER, k, e.theme)
  }));
};
exports.PanelsTheme = undefined;
var r = require("../app/780549.js");
var o = require("./412752.js");
var l = require("./928514.js");
var i = require("./460922.js");
var u = a(require("../app/932325.js"));
var s = require("./242090.js");
var c = require("./785840.js");
var d = require("../main-chunk/931109.js");
var f = require("../app/676345.js");
var p = require("../app/757453.js");
var m = require("../app/561912.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
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
var E = a(require("../app/156720.js"));
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
const C = {
  menu: {
    position: "g0rxnol2",
    display: "p357zi0d",
    height: "d1pdhp1p",
    transition: "rj4tx0cq",
    ":hover": {
      willChange: "cx8fzybs"
    }
  },
  menuOpenStatusReply: {
    width: "cosm3z4q"
  },
  menuOpen: {
    width: "huo8y3a1"
  },
  menuFull: {
    width: "n73lgpzo"
  },
  menuClosedStatusReply: {
    width: "mu5rq31i"
  },
  menuClosed: {
    width: "fyy3ld6e"
  },
  button: {
    transition: "qizq0yyl",
    transform: "t1844p82"
  },
  visible: {
    opacity: "bs7a17vp"
  },
  invisible: {
    opacity: "axi1ht8l"
  }
};
const b = require("../vendor/76672.js").Mirrored(["ChatComposeBox", "StatusReplyComposeBox"]);
exports.PanelsTheme = b;
const M = (e, t, n) => {
  switch (e) {
    case b.ChatComposeBox:
      if (t) {
        if (n) {
          return C.menuFull;
        } else {
          return C.menuOpen;
        }
      } else {
        return C.menuClosed;
      }
    case b.StatusReplyComposeBox:
      if (t) {
        return C.menuOpenStatusReply;
      } else {
        return C.menuClosedStatusReply;
      }
  }
};
const S = (e, t, n) => {
  let a = 0;
  switch (e) {
    case l.ComposeBoxPanel.EMOJI:
      a = t ? 42 : 0;
      break;
    case l.ComposeBoxPanel.GIF:
      a = t ? 84 : 0;
      break;
    case l.ComposeBoxPanel.STICKER:
      switch (n) {
        case b.ChatComposeBox:
          a = t ? 126 : 0;
          break;
        case b.StatusReplyComposeBox:
          a = t ? 84 : 42;
      }
  }
  return {
    transform: "translateX(" + (u.default.isRTL() ? -1 : 1) * a + "px)"
  };
};