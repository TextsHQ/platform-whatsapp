var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiPanel = undefined;
var r = require("../app/287461.js");
var o = require("../app/396574.js");
var l = require("../app/664149.js");
var i = a(require("./550457.js"));
var u = a(require("./672578.js"));
var s = require("./743840.js");
var c = a(require("./694269.js"));
var d = require("./833654.js");
var f = a(require("./536809.js"));
var p = require("../app/326425.js");
var m = require("../app/370308.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var g = a(require("../app/969651.js"));
var E = a(require("../app/637660.js"));
var v = a(require("./940630.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = (0, h.forwardRef)((e, t) => {
  var n;
  const {
    displayLocation: a = d.DisplayLocation.Dropdown
  } = e;
  const _ = (0, h.useRef)();
  const y = (0, h.useRef)();
  const C = (0, E.default)(() => {
    const e = a === d.DisplayLocation.Reactions;
    const t = [];
    if (!e && p.RecentEmojiCollection.length > 0) {
      t.push(s.SECTIONS.RECENT);
    }
    if (e && m.RecentReactionsCollection.length > 0) {
      t.push(s.SECTIONS.RECENT_REACTIONS);
    }
    return [...t, ...s.ORDERED_TAB_SECTION_IDS];
  });
  const b = (0, h.useRef)(C.current);
  const M = (0, E.default)(() => {
    var t;
    if ((t = e.displayCache) !== null && t !== undefined) {
      return t;
    } else {
      return {
        scrollTop: 0,
        sectionId: C.current[0],
        showSearchInput: true
      };
    }
  });
  const S = (0, h.useRef)();
  const [T, w] = (0, h.useState)(M.current.sectionId);
  const [A, P] = (0, h.useState)(-1);
  const O = (0, g.default)();
  const k = (0, h.useRef)(new Map());
  const D = e => {
    var t;
    if (!((t = y.current) === null || t === undefined)) {
      t.focusSearchInput(e);
    }
  };
  const I = e => {
    D(e);
  };
  const R = (0, v.default)();
  (0, h.useEffect)(() => {
    R(I);
  }, []);
  (0, h.useImperativeHandle)(t, () => ({
    getElement: () => S.current,
    restoreFocus: I
  }));
  const N = e => {
    if (T !== e) {
      w(e);
      (e => {
        if (!y.current) {
          return;
        }
        const t = y.current.scrollToSection(e);
        _.current = t;
        t.finally(() => {
          if (t === _.current) {
            _.current = null;
          }
        });
      })(e);
    }
  };
  const x = (t, n) => {
    var a;
    N(t);
    if (!((a = e.onChange) === null || a === undefined)) {
      a.call(e, "");
    }
    D();
    if (!(n == null)) {
      n.preventDefault();
    }
  };
  const L = (0, o.classnamesConvertMeToStylexPlease)({
    [i.default.panelDropdown]: a === d.DisplayLocation.Dropdown,
    [i.default.panelReactions]: a === d.DisplayLocation.Reactions,
    [i.default.expressionsPanel]: a === d.DisplayLocation.ExpressionsPanel,
    [i.default.expressionsPanelSmaller]: a === d.DisplayLocation.ExpressionsPanel && (0, r.getABPropConfigValue)("web_expression_panels_show_less_stickers"),
    [i.default.emojiPanel]: true
  });
  const {
    width: j = l.EMOJI_PICKER_WIDTH
  } = e;
  return h.default.createElement("div", {
    className: L,
    ref: S,
    role: "grid"
  }, h.default.createElement(f.default, {
    selectedSectionId: T,
    sectionIds: C.current,
    renderSectionTab: (e, t) => h.default.createElement(c.default, {
      key: e,
      onClick: x,
      sectionId: e,
      selected: t,
      showFocusIndicator: A !== -1,
      ref: t => {
        k.current.set(e, t);
      }
    }),
    showTabHighlight: !((n = e.defaultSearchText) === null || n === undefined ? undefined : n.trim()),
    onFocusPrev: () => {
      var e;
      const t = C.current;
      const n = (t.length + A - 1) % t.length;
      const a = t[n];
      if (!((e = k.current.get(a)) === null || e === undefined)) {
        e.focus();
      }
      P(n);
    },
    onFocusNext: () => {
      var e;
      const t = C.current;
      const n = (A + 1) % t.length;
      const a = t[n];
      if (!((e = k.current.get(a)) === null || e === undefined)) {
        e.focus();
      }
      P(n);
    },
    onFocusLeave: () => {
      P(-1);
      D();
    },
    onEnter: e => {
      if (!(e == null)) {
        e.preventDefault();
      }
      const t = C.current[A];
      P(-1);
      x(t);
    },
    displayLocation: a
  }), h.default.createElement(u.default, {
    displayCache: M.current,
    width: j,
    onDisplayCache: e.onDisplayCache,
    onFocusUp: () => {
      var e;
      if (!((e = k.current.get(T)) === null || e === undefined)) {
        e.focus();
      }
      P(C.current.indexOf(T));
    },
    onFocusPrev: e.onFocusPrev,
    onFocusNext: e.onFocusNext,
    onEmoji: t => {
      if (!(a === d.DisplayLocation.Reactions)) {
        p.RecentEmojiCollection.increment(t);
      }
      e.onEmoji(t);
    },
    onSection: e => {
      if (!_.current) {
        if (T !== e) {
          w(e);
        }
      }
    },
    ref: y,
    sectionIds: b.current,
    onChange: (t, n) => {
      var a;
      if (!((a = e.onChange) === null || a === undefined)) {
        a.call(e, t, n);
      }
      O();
    },
    defaultSearchText: e.defaultSearchText,
    displayLocation: a
  }));
});
exports.EmojiPanel = y;
y.displayName = "EmojiPanel";