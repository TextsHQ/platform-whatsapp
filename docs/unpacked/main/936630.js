var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinnedMessagesBanner = undefined;
exports.useWAWebPinnedMessagesBanner = function (e) {
  const t = (0, O.default)(e);
  return (t == null ? undefined : t.length) > 0;
};
var r = require("../app/713105.js");
var o = require("../app/780549.js");
var l = a(require("./222437.js"));
var i = require("./908582.js");
var u = require("../app/675085.js");
var s = require("../app/690495.js");
var c = a(require("../app/469733.js"));
var d = require("../app/939716.js");
var f = require("../app/61113.js");
var p = require("../app/722091.js");
var m = require("./931394.js");
var h = require("./245474.js");
var g = require("./343899.js");
var E = require("../app/533494.js");
var v = require("./923743.js");
var _ = require("../app/392632.js");
var y = a(require("../app/37875.js"));
var C = require("../app/676345.js");
var b = a(require("../app/395967.js"));
var M = a(require("../app/844453.js"));
var S = require("../app/669050.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = D(t);
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
var A = a(require("../app/156720.js"));
var P = require("./667100.js");
var O = a(require("./37446.js"));
var k = a(require("../app/17533.js"));
function D(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (D = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const I = {
  banner: {
    backgroundColor: "ihvf49ua",
    minHeight: "nhwamvof",
    borderStart: "md7a7hbe",
    paddingTop: "td7kupoe",
    paddingBottom: "ebcetz3d",
    paddingStart: "nntdgyy8",
    cursor: "ajgl1lbb"
  },
  iconWrapper: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "tknnhhou",
    height: "sai7fuui",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j",
    backgroundColor: "svpeipy5"
  },
  icon: {
    display: "l7jjieqr",
    color: "sbs3osm6"
  },
  singleLine: {
    whiteSpace: "le5p0ye3",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    width: "ln8gz9je"
  },
  clearMinWidth: {
    minWidth: "gr1v25d2"
  },
  menuAnchor: {
    top: "fcxg0yzc",
    end: "en6yos0k"
  }
};
function R() {
  return w.default.createElement("div", {
    className: (0, A.default)(I.iconWrapper)
  }, w.default.createElement(h.Pinned3Icon, {
    xstyle: I.icon
  }));
}
const N = (0, w.forwardRef)((e, t) => {
  const {
    chat: n
  } = e;
  const [a, u] = (0, w.useState)(null);
  const [h, T] = (0, w.useState)(false);
  const D = (0, w.useRef)(null);
  const N = (0, w.useRef)(null);
  const L = (0, O.default)(n);
  const j = L[0];
  const {
    isKeyboardUser: B
  } = (0, b.default)();
  const F = "pop-fast";
  const G = (0, w.useMemo)(() => {
    if ((L == null ? undefined : L.length) > 0) {
      const e = j.parentMsgKey;
      if (e) {
        return f.MsgCollection.get(e);
      }
    }
  }, [L, j]);
  const U = () => {
    if (j != null) {
      const e = j.parentMsgKey;
      const t = (0, r.getSearchContext)(n, G || e, null);
      if (t) {
        t.slideToMsg = true;
      }
      o.Cmd.openChatAt(n, t);
    }
  };
  const W = () => {
    if (j != null) {
      const e = f.MsgCollection.get(j.parentMsgKey);
      if (e) {
        (0, v.sendPinInChatMsg)(e, E.Message$PinInChatMessage$Type.UNPIN_FOR_ALL).catch(e => {
          __LOG__(4, undefined, new Error())`Error while unpinning a message: ${e}`;
        });
      }
    }
  };
  const H = (0, k.default)(() => {
    u({
      anchor: D.current,
      autoFocus: B,
      menu: w.default.createElement(x, {
        actions: {
          goToMessage: U,
          unpinMessage: G != null && (0, d.canPinMsg)(G) ? W : null
        }
      })
    });
  });
  const V = w.default.createElement("div", {
    className: (0, A.default)(I.menuAnchor),
    ref: D,
    role: "button",
    onClick: H,
    tabIndex: -1,
    onKeyPress: e => {
      if (e.key === "Enter") {
        H();
      }
    }
  }, w.default.createElement(i.DownContextIcon, null));
  (0, P.useOnOutsideClick)(N, () => {
    T(false);
  });
  if (j == null) {
    return null;
  } else {
    return w.default.createElement("div", {
      ref: N
    }, w.default.createElement(_.UIE, {
      displayName: "PinnedMessagesBanner"
    }, w.default.createElement(l.default, {
      ref: t,
      xstyle: I.banner,
      onClick: e => {
        var t;
        e.preventDefault();
        if (e.target instanceof HTMLElement) {
          if ((t = D.current) === null || t === undefined ? undefined : t.contains(e.target)) {
            e.stopPropagation();
            return void H();
          }
          if (a != null) {
            e.stopPropagation();
            u(null);
            return void T(true);
          }
          U();
          (() => {
            const e = p.PinInChatCollection.byChatId((0, S.toChatWid)(n.id)).length;
            (0, m.logPinInChatTapOnBanner)(G, n, e);
          })();
        }
      },
      onMouseEnter: () => {
        T(true);
      },
      onMouseLeave: () => {
        if (a == null) {
          T(false);
        }
      }
    }, w.default.createElement(s.FlexRow, {
      align: "center",
      grow: 1
    }, w.default.createElement(c.default, {
      xstyle: I.clearMinWidth,
      align: "center",
      justify: "center"
    }, w.default.createElement(R, null)), w.default.createElement(c.default, {
      className: (0, A.default)(C.uiPadding.start12, I.singleLine)
    }, w.default.createElement(g.PinnedMessagesBannerBody, {
      pinInChat: j
    })), w.default.createElement(c.default, null, w.default.createElement(M.default, {
      transitionName: F
    }, h ? V : null), w.default.createElement(M.default, {
      transitionName: F
    }, a == null ? null : w.default.createElement(_.UIE, {
      displayName: "PinBannerContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: () => {
        u(null);
      }
    }, w.default.createElement(y.default, {
      contextMenu: a
    }))))))));
  }
});
exports.PinnedMessagesBanner = N;
N.displayName = "PinnedMessagesBanner";
const x = e => {
  const {
    actions: t
  } = e;
  const n = [];
  if (t.unpinMessage != null) {
    n.push(w.default.createElement(u.DropdownItem, {
      key: "unpin-from-menu",
      testid: "unpin-from-menu",
      action: t.unpinMessage
    }, T.fbt._("Unpin", null, {
      hk: "246LYT"
    })));
  }
  n.push(w.default.createElement(u.DropdownItem, {
    key: "go-to-msg-from-menu",
    testid: "go-to-msg-from-menu",
    action: t.goToMessage
  }, T.fbt._("Go to message", null, {
    hk: "LXMuI"
  })));
  return n;
};