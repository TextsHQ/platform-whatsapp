var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuggestionsPanelContainer = function (e) {
  let {
    editor: t,
    kind: n,
    children: a,
    onDismiss: r,
    onToggleVisibility: l,
    onHide: f
  } = e;
  const [g, E] = (0, u.useState)(true);
  const v = (0, d.default)(e => {
    if (e) {
      if ((l == null ? undefined : l(true)) === false) {
        return;
      }
      self.setTimeout(() => E(true));
    } else {
      if ((l == null ? undefined : l(false)) === false) {
        return;
      }
      E(false);
      if (!(f == null)) {
        f();
      }
    }
  });
  (0, c.useLexicalFocusStateListener)(t, v);
  const _ = (0, d.default)(() => {
    t.focus();
  });
  if (n === m.Menu) {
    return u.default.createElement(h, {
      requestDismiss: r,
      requestFocus: _
    }, a);
  }
  return u.default.createElement(i.default, {
    component: "div",
    className: (0, s.default)(p.container),
    transitionName: "slide-up"
  }, g && a != null ? u.default.createElement(o.UIE, {
    displayName: "RichTextInputSuggestions",
    escapable: true,
    requestDismiss: () => {
      r();
      if (!(f == null)) {
        f();
      }
    },
    requestFocus: _,
    requestRecentFocusOnUnmount: false
  }, u.default.createElement("div", {
    className: (0, s.default)(p.overlayContainer, n === m.MediaEditorCaption && p.containerMediaEditorCaption)
  }, a, u.default.createElement("div", {
    className: (0, s.default)(p.insetShadow)
  }))) : null);
};
exports.SuggestionsPanelKind = undefined;
var r = require("../app/664149.js");
var o = require("../app/392632.js");
var l = a(require("../app/37875.js"));
var i = a(require("../app/844453.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var s = a(require("../app/156720.js"));
var c = require("./924082.js");
var d = a(require("../app/17533.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  container: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je"
  },
  overlayContainer: {
    position: "lhggkp7q",
    bottom: "jxacihee",
    start: "tkdu00h0",
    boxSizing: "cm280p3y",
    width: "ln8gz9je",
    backgroundColor: "rv6u8h8g",
    borderStart: "av6w3u2w",
    boxShadow: "e9w3sbd1"
  },
  insetShadow: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    end: "ebjesfe0",
    bottom: "jxacihee",
    start: "tkdu00h0",
    zIndex: "b9fczbqn",
    pointerEvents: "m62443ks",
    content: "d3pjxk2u",
    boxShadow: "hxov8ih6"
  },
  containerMediaEditorCaption: {
    pointerEvents: "jv8uhy2r",
    borderTopStartRadius: "fe61fa5g",
    borderTopEndRadius: "qj4wrk6p",
    boxShadow: "o8gxb310"
  },
  positioningContainer: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    width: "ln8gz9je"
  }
};
const m = require("../vendor/76672.js").Mirrored(["ComposeBox", "MediaEditorCaption", "MessageEditModal", "Menu"]);
function h(e) {
  var t;
  let {
    children: n,
    requestDismiss: a,
    requestFocus: i
  } = e;
  const c = (0, u.useRef)();
  const [d, f] = (0, u.useState)(null);
  const m = d == null || n == null ? null : u.default.createElement(o.UIE, {
    displayName: "RichTextInputSuggestions",
    escapable: true,
    requestDismiss: a,
    requestFocus: i
  }, u.default.createElement(l.default, {
    contextMenu: {
      menu: u.default.createElement(g, {
        ref: c,
        initialChildren: n
      }),
      type: r.MenuType.Suggestions,
      anchor: d,
      dirY: r.DirY.TOP
    }
  }));
  if (!((t = c.current) === null || t === undefined)) {
    t.setChildren(n);
  }
  return u.default.createElement("div", {
    className: (0, s.default)(p.positioningContainer),
    ref: f
  }, m);
}
exports.SuggestionsPanelKind = m;
const g = (0, u.forwardRef)((e, t) => {
  let {
    initialChildren: n
  } = e;
  const [a, r] = (0, u.useState)(n);
  (0, u.useImperativeHandle)(t, () => ({
    setChildren(e) {
      if (e !== a) {
        r(e);
      }
    }
  }));
  return u.default.createElement(u.default.Fragment, null, a);
});
g.displayName = "MenuWrapper";