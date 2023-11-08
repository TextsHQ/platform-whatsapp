var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = require("../app/396574.js");
var i = require("./233355.js");
var u = require("../app/81644.js");
var s = require("./833654.js");
var c = require("./963604.js");
var d = require("./834132.js");
var f = a(require("./517608.js"));
var p = a(require("./903612.js"));
var m = a(require("./551554.js"));
var h = require("./8085.js");
var g = require("./822735.js");
var E = require("../app/441051.js");
var v = require("./414493.js");
var _ = require("../app/843534.js");
var y = require("../vendor/548360.js");
var C = a(require("../app/731058.js"));
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var M = a(require("../app/710629.js"));
var S = require("./572263.js");
var T = require("../app/808446.js");
var w = a(require("./286481.js"));
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const P = (0, b.forwardRef)((e, t) => {
  if (e.searchText) {
    return b.default.createElement(g.StickerPackStickersScrollGrid, {
      ref: t,
      onFocusPrev: e.onFocusPrev,
      onStickerClick: e.onStickerClick,
      searchText: e.searchText,
      resetScroll: e.resetScroll,
      displayLocation: e.displayLocation
    });
  }
  if (e.selectedTab === i.StickerTabs.FAVORITES) {
    return b.default.createElement(m.default, {
      ref: t,
      onFocusPrev: e.onFocusPrev,
      onStickerClick: e.onStickerClick,
      resetScroll: e.resetScroll,
      displayLocation: e.displayLocation,
      onDownloadStart: () => {
        var t;
        if (!((t = e.onDownloadStart) === null || t === undefined)) {
          t.call(e, i.StickerTabs.FAVORITES);
        }
      },
      onDownloadEnd: () => {
        var t;
        if (!((t = e.onDownloadEnd) === null || t === undefined)) {
          t.call(e, i.StickerTabs.FAVORITES);
        }
      }
    });
  }
  if (e.selectedTab === i.StickerTabs.RECENTS) {
    return b.default.createElement(h.StickerPackStickersRecent, {
      ref: t,
      onFocusPrev: e.onFocusPrev,
      onStickerClick: e.onStickerClick,
      resetScroll: e.resetScroll,
      displayLocation: e.displayLocation,
      onDownloadStart: () => {
        var t;
        if (!((t = e.onDownloadStart) === null || t === undefined)) {
          t.call(e, i.StickerTabs.RECENTS);
        }
      },
      onDownloadEnd: () => {
        var t;
        if (!((t = e.onDownloadEnd) === null || t === undefined)) {
          t.call(e, i.StickerTabs.RECENTS);
        }
      }
    });
  }
  if ((0, i.convertTabToMood)(e.selectedTab) != null) {
    return b.default.createElement(g.StickerPackStickersScrollGrid, {
      ref: t,
      selectedTab: e.selectedTab,
      onFocusPrev: e.onFocusPrev,
      onStickerClick: e.onStickerClick,
      searchText: e.searchText,
      resetScroll: e.resetScroll,
      displayLocation: e.displayLocation
    });
  } else {
    __LOG__(4, undefined, new Error(), true)`_renderStickerScrollGrid attempted with an invalid selectedTab: ${e.selectedTab}`;
    SEND_LOGS("_renderStickerScrollGrid attempted with an invalid selectedTab");
    return null;
  }
});
P.displayName = "StickerScrollGrid";
const O = (0, b.forwardRef)((e, t) => {
  const {
    defaultSearchText: n,
    selectedTab: a
  } = e;
  const [m, h] = (0, b.useState)(false);
  const g = (0, b.useRef)(false);
  const A = (0, b.useRef)();
  const O = (0, b.useRef)(0);
  const k = (0, b.useRef)(0);
  const D = (0, b.useRef)();
  const [I, R] = (0, b.useState)(true);
  const N = () => {
    const e = A.current;
    if (e != null) {
      e.scrollTop = 0;
      k.current = 0;
      O.current = 0;
      R(true);
    }
  };
  const [x, L] = (0, b.useState)(n || "");
  const j = (0, b.useRef)(false);
  (0, b.useEffect)(() => {
    if (j.current) {
      L("");
    } else {
      j.current = true;
    }
  }, [a]);
  const B = function () {
    var e = (0, r.default)(function* (e) {
      N();
      try {
        yield E.StickerSearchCollection.search(e);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`Sticker search promise failed`;
        SEND_LOGS(e);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const F = (0, M.default)(B, 250);
  const G = () => {
    const e = D.current;
    if (!e) {
      g.current = true;
      return void R(true);
    }
    e.focus(false);
  };
  (0, b.useEffect)(() => {
    G();
    if (n) {
      B(n);
    }
  }, []);
  (0, b.useImperativeHandle)(t, () => ({
    focus() {
      var e;
      if (!((e = D.current) === null || e === undefined)) {
        e.focus();
      }
    },
    clearSearchText() {
      L("");
    }
  }));
  const [U, W] = (0, b.useState)(true);
  const H = (0, w.default)(() => {
    var t;
    const n = A.current;
    if (!n) {
      return;
    }
    if (!((t = e.onScroll) === null || t === undefined)) {
      t.call(e, n);
    }
    const {
      scrollTop: a
    } = n;
    const r = k.current - a;
    if (r === i.INPUT_BAR_TOTAL_HEIGHT) {
      O.current = r;
      return void (k.current = a);
    }
    const o = Math.abs(r) > i.INPUT_BAR_SCROLL_SENSITIVITY;
    g.current = Math.abs(r) > i.INPUT_BAR_SCROLL_FAST;
    if (r < 0) {
      if (I && (a > i.INPUT_HIDE_POINT && o || k.current < i.INPUT_HIDE_POINT && a >= i.INPUT_HIDE_POINT)) {
        R(false);
      }
    } else if (!I) {
      var l;
      if (!((l = document.activeElement) === null || l === undefined ? undefined : l.classList.contains(p.default.container)) && (o || a < i.INPUT_SHOW_POINT)) {
        R(true);
      }
    }
    k.current = a;
    O.current = r;
    W(a <= 0);
  }, i.SCROLL_THROTTLE_TIME);
  const V = (0, b.useRef)();
  const q = (0, l.classnamesConvertMeToStylexPlease)({
    [f.default.containerSearch]: true,
    [f.default.containerSearchExpressionsPanel]: e.displayLocation === s.DisplayLocation.ExpressionsPanel,
    [f.default.containerSearchExpressionsPanelSmaller]: e.displayLocation === s.DisplayLocation.ExpressionsPanel && (0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers")
  });
  (0, T.useListener)(E.StickerSearchCollection, "start_fetching", () => {
    h(true);
  });
  (0, T.useListener)(E.StickerSearchCollection, "stop_fetching", () => {
    h(false);
  });
  const Y = (0, b.useRef)(null);
  const z = (0, S.useDebouncedChanges)({
    value: m,
    debounceMs: i.MINIMUM_LOADING_TIME,
    shouldDebounce: m === false
  });
  return b.default.createElement(u.HotKeys, {
    className: q,
    handlers: (0, C.default)({
      "shift+tab": e.onFocusPrev,
      tab: e.onFocusNext
    }),
    onClick: e => {
      (0, v.stopEvent)(e);
      G();
    }
  }, b.default.createElement(c.LoadingIndicator, {
    loading: z
  }), b.default.createElement("div", {
    className: f.default.bodyContainer
  }, b.default.createElement(d.PanelSearchInput, {
    label: y.fbt._("Search via WhatsApp sticker store", null, {
      hk: "mIFa0"
    }),
    onChange: (t, n) => {
      var a;
      if (!((a = e.onChange) === null || a === undefined)) {
        a.call(e, t, n);
      }
      L(t);
      if (t !== "") {
        F(t);
      } else {
        F.cancel();
      }
    },
    value: x || "",
    shadow: !U,
    ref: D,
    onUpKey: e.onFocusUp,
    onDownKey: () => {
      var e;
      if (!((e = V.current) === null || e === undefined)) {
        e.focus();
      }
    },
    theme: e.displayLocation === s.DisplayLocation.ExpressionsPanel ? d.Theme.ExpressionsPanel : undefined
  }), b.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [f.default.contentContainer]: true,
      [f.default.contentContainerSmaller]: e.displayLocation === s.DisplayLocation.ExpressionsPanel && (0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers"),
      [f.default.contentContainerSearch]: true,
      [f.default.contentContainerSearchSmaller]: e.displayLocation === s.DisplayLocation.ExpressionsPanel && (0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers"),
      [f.default.contentContainerExpressionsPanel]: e.displayLocation === s.DisplayLocation.ExpressionsPanel,
      [f.default.contentContainerExpressionsPanelSmaller]: e.displayLocation === s.DisplayLocation.ExpressionsPanel && (0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers")
    }),
    onScroll: H,
    ref: A
  }, b.default.createElement(P, {
    ref: V,
    onFocusPrev: G,
    onStickerClick: t => {
      let n;
      var r;
      n = x ? _.STICKER_SEND_ORIGIN_TYPE.STICKER_SEARCH : a === i.StickerTabs.RECENTS ? _.STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_RECENTS : a === i.StickerTabs.FAVORITES ? _.STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_FAVORITES : _.STICKER_SEND_ORIGIN_TYPE.STICKER_PICKER_TAB_EMOTION;
      e.onSticker(t, n);
      if (x) {
        if (!((r = D.current) === null || r === undefined)) {
          r.focus();
        }
      }
    },
    searchText: x.trim(),
    selectedTab: e.selectedTab,
    resetScroll: N,
    displayLocation: e.displayLocation,
    onDownloadStart: e => {
      Y.current = e;
      h(true);
    },
    onDownloadEnd: e => {
      if (e === Y.current) {
        Y.current = null;
        h(false);
      }
    }
  }))));
});
O.displayName = "StickerPanelContent";
var k = O;
exports.default = k;