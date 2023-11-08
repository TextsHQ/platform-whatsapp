var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerPackStickersScrollGrid = undefined;
var r = require("./233355.js");
var o = a(require("./781171.js"));
var l = require("./209536.js");
var i = require("../app/441051.js");
var u = require("../vendor/548360.js");
var s = function (e, t) {
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
var c = a(require("../app/710629.js"));
var d = require("../app/808446.js");
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
const p = (0, s.forwardRef)((e, t) => {
  const {
    selectedTab: n
  } = e;
  const [a, f] = (0, s.useState)(() => i.StickerSearchCollection.toArray());
  const p = (0, c.default)(() => {
    f(i.StickerSearchCollection.toArray());
    e.resetScroll();
  }, 250);
  (0, d.useListener)(i.StickerSearchCollection, "add remove reset", p);
  (0, s.useEffect)(() => {
    if (n) {
      const e = (0, r.convertTabToMood)(n);
      if (e != null) {
        i.StickerSearchCollection.searchMood(e);
      }
      if (i.StickerSearchCollection.hasFetchedData()) {
        p();
      }
    }
  }, [n]);
  const m = (0, s.useRef)();
  (0, s.useImperativeHandle)(t, () => ({
    focus(e) {
      const t = m.current;
      if (t) {
        t.focus(e);
      }
    }
  }));
  if (e.searchText && i.StickerSearchCollection.isFetchingData() === false && i.StickerSearchCollection.length === 0) {
    return s.default.createElement(o.default, {
      text: u.fbt._("No results", null, {
        hk: "3hxq4S"
      })
    });
  } else {
    return s.default.createElement(l.StickersScrollGridPresentational, {
      ref: m,
      onFocusPrev: e.onFocusPrev,
      onScroll: e.onScroll,
      resetScroll: e.resetScroll,
      onStickerClick: e.onStickerClick,
      onStickerEnter: e.onStickerClick,
      stickers: a,
      theme: "searchable",
      displayLocation: e.displayLocation,
      loadOneRow: true
    });
  }
});
exports.StickerPackStickersScrollGrid = p;
p.displayName = "StickerPackStickersScrollGrid";