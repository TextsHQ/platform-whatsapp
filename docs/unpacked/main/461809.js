var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionsPanelPicker = undefined;
var r = require("../app/287461.js");
var o = require("../app/780549.js");
var l = require("./928514.js");
var i = require("../app/664149.js");
var u = require("./637624.js");
var s = require("../app/690495.js");
var c = require("./460922.js");
var d = require("./770096.js");
var f = require("./29394.js");
var p = require("./833654.js");
var m = require("./242090.js");
var h = require("./785840.js");
var g = a(require("./987610.js"));
var E = require("../main-chunk/931109.js");
var v = require("../app/392632.js");
var _ = require("../app/676345.js");
var y = a(require("../app/625903.js"));
var C = require("../app/757453.js");
var b = a(require("../app/844453.js"));
var M = require("../vendor/548360.js");
var S = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
a(require("../app/156720.js"));
var T = require("../app/808446.js");
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = {
  button: {
    color: "n0kqff35"
  },
  activeButton: {
    color: "dw0rifxc"
  },
  tabsContainer: {
    borderTop: "s3bhbj7g",
    height: "m3o1wsh7"
  },
  tab: {
    width: "oimozejp",
    height: "f2o2jtpu"
  }
};
const P = (0, S.forwardRef)((e, t) => {
  let {
    onEmoji: n,
    onGif: a,
    onSticker: w,
    onToggleActive: P
  } = e;
  const [O, k] = (0, S.useState)(false);
  const [D, I] = (0, S.useState)(l.ComposeBoxPanel.EMOJI);
  const R = [l.ComposeBoxPanel.EMOJI, a ? l.ComposeBoxPanel.GIF : null, w ? l.ComposeBoxPanel.STICKER : null].filter(Boolean);
  const N = e => R.includes(e);
  const x = (0, S.useRef)(null);
  const L = (0, S.useRef)(null);
  const j = (0, S.useRef)(null);
  const [B, F] = (0, S.useState)("");
  const G = e => {
    k(e);
    if (!(P == null)) {
      P(e);
    }
  };
  const U = e => {
    F(e);
  };
  const W = () => {
    F("");
    G(false);
  };
  const H = [{
    icon: S.default.createElement(m.SmileyIcon, null),
    key: l.ComposeBoxPanel.EMOJI,
    testid: "compose-btn-emoji"
  }, {
    icon: S.default.createElement(c.GifIcon, null),
    key: l.ComposeBoxPanel.GIF,
    testid: "compose-btn-gif"
  }, N(l.ComposeBoxPanel.STICKER) ? {
    icon: S.default.createElement(h.StickerIcon, null),
    key: l.ComposeBoxPanel.STICKER,
    testid: "compose-btn-sticker"
  } : null].filter(Boolean);
  const V = R.map(e => e === l.ComposeBoxPanel.EMOJI ? {
    Icon: m.SmileyIcon,
    iconStyle: A.tab,
    ariaLabel: M.fbt._("Emojis selector", null, {
      hk: "3TL9SY"
    })
  } : e === l.ComposeBoxPanel.GIF ? {
    Icon: c.GifIcon,
    iconStyle: A.tab,
    ariaLabel: M.fbt._("Gifs selector", null, {
      hk: "iNjUi"
    })
  } : e === l.ComposeBoxPanel.STICKER ? N(l.ComposeBoxPanel.STICKER) ? {
    Icon: h.StickerIcon,
    iconStyle: A.tab,
    ariaLabel: M.fbt._("Stickers selector", null, {
      hk: "2cPpsT"
    })
  } : null : undefined).filter(Boolean);
  const q = () => I(R[(R.indexOf(D) - 1 + R.length) % R.length]);
  const Y = () => I(R[(R.indexOf(D) + 1) % R.length]);
  let z;
  switch (D) {
    case l.ComposeBoxPanel.EMOJI:
      z = S.default.createElement(u.EmojiPanel, {
        defaultSearchText: B,
        displayCache: x.current,
        displayLocation: p.DisplayLocation.ExpressionsPanel,
        onChange: U,
        onDisplayCache: e => {
          x.current = e;
        },
        onEmoji: n,
        onFocusPrev: q,
        onFocusNext: Y
      });
      break;
    case l.ComposeBoxPanel.GIF:
      z = S.default.createElement(d.GifPanel, {
        defaultSearchText: B,
        displayCache: L.current,
        displayLocation: p.DisplayLocation.ExpressionsPanel,
        onChange: U,
        onDisplayCache: e => {
          L.current = e;
        },
        onFocusPrev: q,
        onFocusNext: Y,
        onGif: (e, t) => {
          if (!(a == null)) {
            a(e, t);
          }
        }
      });
      break;
    case l.ComposeBoxPanel.STICKER:
      z = S.default.createElement(g.default, {
        defaultSearchText: B,
        displayCache: j.current,
        displayLocation: p.DisplayLocation.ExpressionsPanel,
        onChange: U,
        onDisplayCache: e => {
          j.current = e;
        },
        onFocusPrev: q,
        onFocusNext: Y,
        onSticker: (e, t) => {
          if (!(w == null)) {
            w(e, t);
          }
          if (!(0, r.getABPropConfigValue)("web_expression_panels_mitigations")) {
            W();
          }
        }
      });
  }
  (0, S.useImperativeHandle)(t, () => ({
    close: () => {
      W();
    }
  }));
  (0, T.useListener)(o.Cmd, "open_compose_box_panel", e => {
    if (!O) {
      I(e);
      G(true);
    }
  });
  (0, T.useListener)(o.Cmd, "close_expression_panels", W);
  return S.default.createElement(S.default.Fragment, null, S.default.createElement(y.default, {
    dataTab: E.TAB_ORDER.COMPOSE_BOX_ATTACH_BUTTON,
    xstyle: [A.button, O && A.activeButton],
    onClick: () => {
      if (O) {
        G(false);
      } else {
        const e = (0, C.getLastComposeBoxPanel)();
        I(N(e) ? e : l.ComposeBoxPanel.EMOJI);
        G(true);
      }
    }
  }, S.default.createElement(m.SmileyIcon, null)), S.default.createElement(b.default, {
    transitionName: "dropdown"
  }, O ? S.default.createElement(v.UIE, {
    displayName: "MenuBarMenuItem",
    escapable: true,
    popable: true,
    dismissOnWindowResize: true,
    requestDismiss: (e, t) => {
      if (!(t == null ? undefined : t.defaultPrevented)) {
        W();
      }
    }
  }, S.default.createElement(i.Dropdown, {
    type: i.MenuType.ExpressionsPanel,
    flipOnRTL: true,
    dirX: i.DirX.RIGHT,
    dirY: i.DirY.TOP,
    testid: "expressions-panel"
  }, z, S.default.createElement(s.FlexRow, {
    justify: "center",
    align: "center",
    xstyle: A.tabsContainer
  }, (0, r.getABPropConfigValue)("web_expression_panels_mitigations") ? S.default.createElement(f.IconTabs, {
    selectedIndex: R.indexOf(D),
    onSelect: e => {
      const t = R[e];
      if (t !== D) {
        I(t);
        (0, C.setLastComposeBoxPanel)(t);
      }
    },
    tabConfigs: V,
    theme: "expression-panels"
  }) : H.map(e => {
    let {
      icon: t,
      key: n,
      testid: a
    } = e;
    return S.default.createElement(y.default, {
      testid: a,
      key: n,
      onClick: () => {
        I(n);
      },
      xstyle: [_.uiMargin.horiz8, A.button, D === n && A.activeButton]
    }, t);
  })))) : undefined));
});
exports.ExpressionsPanelPicker = P;
P.displayName = "ExpressionsPanelPicker";