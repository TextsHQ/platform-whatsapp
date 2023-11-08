var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./233355.js");
var o = require("../app/788788.js");
var l = require("./118048.js");
var i = a(require("../app/358533.js"));
var u = require("./950190.js");
var s = a(require("./781171.js"));
var c = require("./209536.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var p = require("./662695.js");
var m = require("../app/808446.js");
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const g = (0, f.forwardRef)((e, t) => {
  const n = (0, f.useRef)();
  const a = function (e, t, n) {
    const a = i.default.getActive();
    const [r, s] = (0, f.useState)([]);
    const [c, d] = (0, f.useState)(0);
    const p = () => {
      const r = o.FavoriteStickerCollection.map(e => e.sticker);
      (0, l.handleStickerDownloadInStickerPanel)({
        stickersArr: r,
        setStickersDownloaded: s,
        stickerReuploadRetryCount: c,
        setStickerReuploadRetryCount: d,
        onChange: e,
        onDownloadStart: t,
        onDownloadEnd: n,
        filterStickers: a != null ? u.filterStickersForNewsletters : null
      });
    };
    (0, f.useEffect)(() => {
      p();
    }, []);
    (0, m.useListener)(o.FavoriteStickerCollection, "add remove change sort", p);
    return r;
  }(e.resetScroll, e.onDownloadStart, e.onDownloadEnd);
  (0, f.useImperativeHandle)(t, () => ({
    focus(e) {
      var t;
      if (!((t = n.current) === null || t === undefined)) {
        t.focus(e);
      }
    }
  }));
  if ((0, p.useIsReadyToShowStickers)(e.displayLocation)) {
    if (a.length === 0) {
      return f.default.createElement(s.default, {
        text: d.fbt._("You haven't favorited any stickers yet", null, {
          hk: "2a3vJg"
        })
      });
    } else {
      return f.default.createElement(c.StickersScrollGridPresentational, {
        ref: n,
        onFocusPrev: e.onFocusPrev,
        onScroll: e.onScroll,
        onStickerClick: e.onStickerClick,
        onStickerEnter: e.onStickerClick,
        selectedTab: r.StickerTabs.FAVORITES,
        stickers: a,
        displayLocation: e.displayLocation,
        theme: "searchable",
        loadOneRow: true
      });
    }
  } else {
    return null;
  }
});
g.displayName = "StickerPackStickersFavorite";
var E = g;
exports.default = E;