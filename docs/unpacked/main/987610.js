var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = require("../app/396574.js");
var l = require("../app/900316.js");
var i = require("./233355.js");
var u = require("../app/97858.js");
var s = require("./553432.js");
var c = require("./41278.js");
var d = require("./833654.js");
var f = a(require("./536809.js"));
var p = require("./468878.js");
var m = require("./545895.js");
var h = require("./326096.js");
var g = require("./867117.js");
var E = require("./436858.js");
var v = require("./787649.js");
var _ = require("./576746.js");
var y = require("../app/425192.js");
var C = a(require("./754626.js"));
var b = a(require("./369387.js"));
var M = require("./511826.js");
var S = a(require("./497327.js"));
var T = require("./414493.js");
var w = require("../vendor/548360.js");
var A = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
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
var P = a(require("../app/637660.js"));
var O = a(require("../app/558532.js"));
var k = a(require("./940630.js"));
var D = a(require("../app/321201.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const R = (0, A.forwardRef)((e, t) => {
  var n;
  var a;
  const {
    displayLocation: w = d.DisplayLocation.Dropdown
  } = e;
  const I = (0, D.default)();
  const R = w === d.DisplayLocation.ComposeBox || w === d.DisplayLocation.ExpressionsPanel;
  const N = (0, u.isFavoriteStickersEnabled)();
  const L = (0, A.useMemo)(() => {
    const e = [];
    e.push(i.StickerTabs.RECENTS);
    if (N) {
      e.push(i.StickerTabs.FAVORITES);
    }
    e.push(i.StickerTabs.LOVE, i.StickerTabs.GREETINGS, i.StickerTabs.HAPPY, i.StickerTabs.SAD, i.StickerTabs.ANGRY, i.StickerTabs.CELEBRATE);
    if (R) {
      e.push(i.StickerTabs.STORE);
    }
    return e;
  }, [R, N]);
  const j = (0, A.useRef)();
  const B = (0, A.useRef)();
  const F = (0, A.useRef)();
  const G = (0, P.default)(() => new Map());
  const [U, W] = (0, A.useState)(((n = e.displayCache) === null || n === undefined ? undefined : n.selectedTab) || i.StickerTabs.RECENTS);
  const [H, V] = (0, A.useState)(-1);
  (0, O.default)(() => {
    var t;
    if (!((t = e.onDisplayCache) === null || t === undefined)) {
      t.call(e, {
        scrollTop: B.current,
        selectedTab: U
      });
    }
  });
  const q = (0, k.default)();
  const Y = () => q(() => {
    const e = F.current;
    if (e) {
      e.focus();
    }
  });
  (0, A.useImperativeHandle)(t, () => ({
    restoreFocus: Y,
    getElement: () => j.current
  }));
  const z = (0, k.default)();
  const K = (t, n) => {
    var a;
    var r;
    var o;
    if (!(n == null)) {
      n.preventDefault();
    }
    if (t === i.StickerTabs.STORE) {
      l.DrawerManager.openDrawerRight(A.default.createElement(S.default.StickerStoreFlowLoadable, {
        onSticker: e.onSticker
      }), {
        transition: "slide-left",
        uim: I
      });
      return void z(() => {
        y.StickerPackCollectionMd.fetch();
      });
    }
    W(t);
    if (!((a = F.current) === null || a === undefined)) {
      a.clearSearchText();
    }
    if (!((r = e.onChange) === null || r === undefined)) {
      r.call(e, "");
    }
    if (!((o = F.current) === null || o === undefined)) {
      o.focus();
    }
  };
  (0, A.useEffect)(() => {
    Y();
  }, []);
  const Q = (0, o.classnamesConvertMeToStylexPlease)({
    [C.default.panelDropdown]: w === d.DisplayLocation.Dropdown || w === d.DisplayLocation.ExpressionsPanel,
    [C.default.panelContainer]: true,
    [C.default.expressionsPanelContainer]: w === d.DisplayLocation.ExpressionsPanel,
    [C.default.expressionsPanelContainerSmaller]: w === d.DisplayLocation.ExpressionsPanel && (0, r.getABPropConfigValue)("web_expression_panels_show_less_stickers")
  });
  return A.default.createElement("div", {
    className: Q,
    ref: j
  }, A.default.createElement(f.default, {
    selectedSectionId: U,
    sectionIds: L,
    renderSectionTab: (e, t) => {
      const n = x(e);
      const a = w === d.DisplayLocation.ExpressionsPanel ? function (e) {
        switch (e) {
          case i.StickerTabs.RECENTS:
            return A.default.createElement(c.PanelRecentIcon, null);
          case i.StickerTabs.FAVORITES:
            return A.default.createElement(m.PanelStarredIcon, null);
          case i.StickerTabs.LOVE:
            return A.default.createElement(_.StickerLoveIcon, null);
          case i.StickerTabs.GREETINGS:
            return A.default.createElement(E.StickerGreetingIcon, null);
          case i.StickerTabs.HAPPY:
            return A.default.createElement(v.StickerHappyIcon, null);
          case i.StickerTabs.SAD:
            return A.default.createElement(M.StickerSadIcon, null);
          case i.StickerTabs.ANGRY:
            return A.default.createElement(h.StickerAngryIcon, null);
          case i.StickerTabs.CELEBRATE:
            return A.default.createElement(g.StickerCelebrateIcon, null);
          case i.StickerTabs.STORE:
            return A.default.createElement(s.PanelAddIcon, null);
        }
      }(e) : function (e) {
        switch (e) {
          case i.StickerTabs.FAVORITES:
            return A.default.createElement(m.PanelStarredIcon, null);
          case i.StickerTabs.RECENTS:
            return A.default.createElement(c.PanelRecentIcon, null);
          case i.StickerTabs.STORE:
            return A.default.createElement(s.PanelAddIcon, null);
          default:
            return x(e);
        }
      }(e);
      const r = function (e) {
        switch (e) {
          case i.StickerTabs.STORE:
            return "sticker-store";
          default:
            return null;
        }
      }(e);
      return A.default.createElement(p.MenuTab, {
        onClick: K,
        sectionId: e,
        selected: t,
        showFocusIndicator: H !== -1,
        title: n,
        theme: p.THEMES.MENU,
        testid: r,
        key: n,
        onRef: t => {
          G.current.set(e, t);
        }
      }, A.default.createElement("span", {
        className: C.default.tabIconOrText
      }, a));
    },
    showTabHighlight: !((a = e.defaultSearchText) === null || a === undefined ? undefined : a.trim()),
    onFocusPrev: e => {
      var t;
      (0, T.stopEvent)(e);
      const n = (L.length + H - 1) % L.length;
      const a = L[n];
      if (!((t = G.current.get(a)) === null || t === undefined)) {
        t.focus();
      }
      V(n);
    },
    onFocusNext: e => {
      var t;
      (0, T.stopEvent)(e);
      const n = (H + 1) % L.length;
      const a = L[n];
      if (!((t = G.current.get(a)) === null || t === undefined)) {
        t.focus();
      }
      V(n);
    },
    onEnter: () => {
      V(-1);
      K(L[H]);
    },
    onFocusLeave: e => {
      (0, T.stopEvent)(e);
      Y();
      V(-1);
    },
    displayLocation: w
  }), A.default.createElement(b.default, {
    ref: F,
    onFocusUp: e => {
      var t;
      (0, T.stopEvent)(e);
      if (!((t = G.current.get(U)) === null || t === undefined)) {
        t.focus();
      }
      V(L.indexOf(U));
    },
    onFocusNext: t => {
      (0, T.stopEvent)(t);
      e.onFocusNext();
    },
    onFocusPrev: t => {
      (0, T.stopEvent)(t);
      e.onFocusPrev();
    },
    onScroll: e => {
      let {
        scrollTop: t
      } = e;
      B.current = t;
    },
    onChange: e.onChange,
    onSticker: e.onSticker,
    defaultSearchText: e.defaultSearchText,
    selectedTab: U,
    displayLocation: w
  }));
});
R.displayName = "StickerPanel";
var N = R;
function x(e) {
  switch (e) {
    case i.StickerTabs.FAVORITES:
      return w.fbt._("Favorite", null, {
        hk: "220ZUF"
      });
    case i.StickerTabs.RECENTS:
      return w.fbt._("Recent", null, {
        hk: "mC0w6"
      });
    case i.StickerTabs.LOVE:
      return w.fbt._("Love", null, {
        hk: "pEMWC"
      });
    case i.StickerTabs.GREETINGS:
      return w.fbt._("Greetings", null, {
        hk: "2lQ4uh"
      });
    case i.StickerTabs.HAPPY:
      return w.fbt._("Happy", null, {
        hk: "4dLwqt"
      });
    case i.StickerTabs.SAD:
      return w.fbt._("Sad", null, {
        hk: "4nYiDm"
      });
    case i.StickerTabs.ANGRY:
      return w.fbt._("Angry", null, {
        hk: "228rrU"
      });
    case i.StickerTabs.CELEBRATE:
      return w.fbt._("Celebrate", null, {
        hk: "2dAtNz"
      });
    case i.StickerTabs.STORE:
      return w.fbt._("WhatsApp Sticker Store", null, {
        hk: "1G3CwR"
      });
  }
}
exports.default = N;