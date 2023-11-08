var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifPanel = undefined;
var r = a(require("../vendor/791747.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = O(require("../main-chunk/465113.js"));
var u = require("./233355.js");
var s = require("./355497.js");
var c = require("./951297.js");
var d = require("./355186.js");
var f = a(require("./472124.js"));
var p = require("../app/81644.js");
var m = require("./833654.js");
var h = require("./963604.js");
var g = a(require("./536809.js"));
var E = require("./834132.js");
var v = require("./414493.js");
var _ = require("./786316.js");
var y = require("../vendor/548360.js");
var C = O(require("../vendor/667294.js"));
var b = a(require("../app/156720.js"));
var M = a(require("../app/637660.js"));
var S = a(require("../app/558532.js"));
var T = a(require("../app/49710.js"));
var w = a(require("./286481.js"));
var A = a(require("./940630.js"));
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function O(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
}
const k = {
  bodyContainer: {
    position: "g0rxnol2",
    backgroundColor: "rv6u8h8g",
    borderStart: "av6w3u2w",
    height: "h0e2gdhh"
  },
  expressionsPanelBodyContainer: {
    backgroundColor: "mew9gn57"
  },
  gifExpressionsPanel: {
    height: "b255526i",
    maxHeight: "b6p0u2gn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  gifExpressionsPanelSmaller: {
    height: "h9dih3xm"
  },
  gifPanel: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    transform: "cgi16xlc",
    transformOrigin: "q1two4ic",
    height: "el4lc5wh"
  },
  panelBody: {
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    height: "harx0jyk",
    paddingTop: "i5tg98hk",
    paddingEnd: "q1grbcst",
    paddingStart: "msfhdwy0",
    overflowY: "rpvcun8f"
  },
  expressionsPanelBody: {
    height: "nn5ro1se"
  }
};
const D = (0, C.forwardRef)((e, t) => {
  var n;
  const a = (0, C.useRef)();
  const P = (0, C.useRef)();
  const O = (0, C.useRef)();
  const D = (0, C.useRef)();
  const I = (0, C.useRef)(0);
  const R = (0, C.useRef)(false);
  const N = (0, C.useRef)(0);
  const x = (0, C.useRef)();
  const L = (0, C.useRef)(0);
  const j = (0, M.default)(() => d.ORDERED_TAB_SECTION_IDS.filter(e => e !== d.SECTIONS.FAVORITES));
  const B = (0, r.default)(e.displayCache || {}, {
    scrollTop: 0,
    showSearchInput: true
  });
  const [F, G] = (0, C.useState)(!B.scrollTop);
  const [U, W] = (0, C.useState)(e.defaultSearchText || null);
  const H = (0, T.default)(U);
  const [V, q] = (0, C.useState)(B.showSearchInput);
  const [Y, z] = (0, C.useState)(B.scrollTop === 0);
  const [K, Q] = (0, C.useState)(B.selectedSectionId || d.SECTIONS.TRENDING);
  const [X, Z] = (0, C.useState)(false);
  const [J, $] = (0, C.useState)(-1);
  const [ee, te] = (0, C.useState)(false);
  const ne = (0, C.useRef)(new Map());
  if (H !== U && D.current) {
    if (U) {
      D.current.scrollTop = 0;
    } else if (x.current != null && x.current !== 0) {
      D.current.scrollTop = x.current;
    }
  }
  const ae = e => {
    if (O.current) {
      O.current.focus(e);
    } else {
      R.current = true;
      q(true);
    }
  };
  (0, C.useImperativeHandle)(t, () => ({
    getElement: () => a.current,
    focusSearchInput(e) {
      ae(e);
    },
    restoreFocus(e) {
      ae(e);
    }
  }));
  const re = (0, A.default)();
  (0, C.useEffect)(() => {
    var t;
    L.current = Date.now();
    const n = (t = e.displayCache) === null || t === undefined ? undefined : t.scrollTop;
    const a = D.current;
    if (a && n != null && n !== 0) {
      a.scrollTop = n;
    }
    re(() => {
      ae();
      new _.WebcEmojiOpenWamEvent({
        webcEmojiOpenTab: "GIF"
      }).commit();
      G(false);
    });
  }, []);
  const oe = (0, w.default)(() => {
    var e;
    const t = D.current;
    if (K == null && U && t && P.current) {
      return void P.current.animateOnScroll(t);
    }
    if (Date.now() - L.current < u.SCROLL_CLICK_TIME_GAP) {
      return;
    }
    if (F) {
      G(false);
    }
    if (!t) {
      return;
    }
    const n = t.scrollTop;
    z(n <= 0);
    const a = I.current - n;
    const r = Math.abs(a) > u.INPUT_BAR_SCROLL_SENSITIVITY;
    R.current = Math.abs(a) > u.INPUT_BAR_SCROLL_FAST;
    if (a < 0) {
      if (V && (n > u.INPUT_HIDE_POINT && r || I.current < u.INPUT_HIDE_POINT && n >= u.INPUT_HIDE_POINT)) {
        q(false);
      }
    } else if (!V) {
      if (r || n < u.INPUT_SHOW_POINT) {
        q(true);
      }
    }
    if (!((e = P.current) === null || e === undefined)) {
      e.animateOnScroll(t);
    }
    I.current = n;
  }, u.SCROLL_THROTTLE_TIME);
  (0, S.default)(() => {
    var t;
    const n = D.current;
    e.onDisplayCache({
      scrollTop: (t = n == null ? undefined : n.scrollTop) !== null && t !== undefined ? t : 0,
      showSearchInput: V,
      selectedSectionId: K
    });
  });
  const le = t => {
    var n;
    var a;
    q(true);
    Q(t);
    W(t === d.SECTIONS.FAVORITES ? null : t);
    Z(true);
    if (!((n = e.onChange) === null || n === undefined)) {
      n.call(e, "");
    }
    if (!((a = O.current) === null || a === undefined)) {
      a.focus(false);
    }
  };
  const ie = e.displayLocation === m.DisplayLocation.ExpressionsPanel;
  return C.default.createElement(p.HotKeys, {
    ref: a,
    handlers: {
      tab: t => {
        (0, v.stopEvent)(t);
        if (O.current) {
          if (O.current.hasFocus()) {
            return void e.onFocusNext();
          } else {
            return ae();
          }
        }
      },
      "shift+tab": t => {
        (0, v.stopEvent)(t);
        if (O.current) {
          if (O.current.hasFocus()) {
            return void e.onFocusPrev();
          } else {
            return ae();
          }
        }
      },
      up: e => {
        const t = e == null ? undefined : e.nativeEvent.target;
        if (t instanceof HTMLElement && !!P.current && P.current.contains(t)) {
          ae();
          (0, v.stopEvent)(e);
        }
      },
      down: e => {
        var t;
        const n = e == null ? undefined : e.nativeEvent.target;
        var a;
        if (n instanceof Node && ((t = P.current) === null || t === undefined ? undefined : t.contains(n))) {
          if (!((a = P.current) === null || a === undefined)) {
            a.initSelection(false);
          }
          (0, v.stopEvent)(e);
        }
      }
    },
    className: (0, b.default)(ie && k.gifExpressionsPanel, ie && (0, l.getABPropConfigValue)("web_expression_panels_show_less_stickers") && k.gifExpressionsPanelSmaller)
  }, C.default.createElement(g.default, {
    selectedSectionId: K,
    sectionIds: j.current,
    renderSectionTab: (t, n) => C.default.createElement(f.default, {
      key: t,
      onClick: le,
      sectionId: t,
      selected: n,
      showFocusIndicator: J !== -1,
      displayLocation: e.displayLocation,
      ref: e => {
        ne.current.set(t, e);
      }
    }),
    displayLocation: e.displayLocation,
    showTabHighlight: !((n = e.defaultSearchText) === null || n === undefined ? undefined : n.trim()),
    onFocusPrev: () => {
      var e;
      const t = (j.current.length + J - 1) % j.current.length;
      const n = j.current[t];
      if (!((e = ne.current.get(n)) === null || e === undefined)) {
        e.focus();
      }
      $(t);
    },
    onFocusNext: () => {
      var e;
      const t = (J + 1) % j.current.length;
      const n = j.current[t];
      if (!((e = ne.current.get(n)) === null || e === undefined)) {
        e.focus();
      }
      $(t);
    },
    onEnter: () => {
      const e = j.current[J];
      $(-1);
      le(e);
    },
    onFocusLeave: () => {
      ae();
      $(-1);
    }
  }), C.default.createElement("div", {
    className: (0, b.default)(k.gifPanel)
  }, C.default.createElement(h.LoadingIndicator, {
    loading: ee
  }), C.default.createElement("div", {
    className: (0, b.default)(k.bodyContainer, ie && k.expressionsPanelBodyContainer),
    onMouseDown: e => {
      (0, v.stopEvent)(e);
      ae();
    }
  }, C.default.createElement(E.PanelSearchInput, {
    label: y.fbt._("Search GIFs via {service}", [y.fbt._param("service", s.BRAND_NAMES[(0, s.getGifProvider)()])], {
      hk: "3Hhs3b"
    }),
    onChange: (t, n) => {
      var a;
      var r;
      (0, v.stopEvent)(n);
      if (U == null) {
        x.current = (r = D.current) === null || r === undefined ? undefined : r.scrollTop;
      }
      if (!((a = e.onChange) === null || a === undefined)) {
        a.call(e, t, n);
      }
      W(t);
      Z(false);
    },
    onUpKey: () => {
      var e;
      const t = K != null ? K : j.current[0];
      if (!((e = ne.current.get(t)) === null || e === undefined)) {
        e.focus();
      }
      $(j.current.indexOf(K));
    },
    onDownKey: e => {
      var t;
      (0, v.stopEvent)(e);
      if (!((t = P.current) === null || t === undefined)) {
        t.initSelection();
      }
    },
    ref: O,
    shadow: !Y,
    tabFocused: X,
    value: U || "",
    theme: ie ? E.Theme.ExpressionsPanel : undefined
  }), C.default.createElement("div", {
    className: (0, b.default)(k.panelBody, ie && k.expressionsPanelBody),
    onScroll: oe,
    ref: D
  }, C.default.createElement(c.GifSearch, {
    displayLocation: e.displayLocation,
    ref: P,
    onGif: (0, o.default)(e.onGif, "props.onGif"),
    searchText: (U || "").replace(/^\s+/, ""),
    scrollGifIntoViewIfNeeded: e => {
      const t = D.current;
      if (t && e.offsetTop - t.scrollTop < u.INPUT_BAR_TOTAL_HEIGHT) {
        i.scrollIntoView(e, true, t);
      }
    },
    selectedSectionId: K,
    setIsFetching: e => {
      if (e) {
        const e = Date.now() - N.current;
        if (e < u.MINIMUM_LOADING_TIME) {
          self.setTimeout(() => te(false), u.MINIMUM_LOADING_TIME - e);
        } else {
          te(false);
        }
      } else {
        te(true);
        N.current = Date.now();
      }
    }
  })))));
});
exports.GifPanel = D;
D.displayName = "GifPanel";