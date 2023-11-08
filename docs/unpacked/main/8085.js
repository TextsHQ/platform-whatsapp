var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerPackStickersRecent = undefined;
var r = require("./233355.js");
var o = require("./118048.js");
var l = a(require("../app/358533.js"));
var i = require("./950190.js");
var u = require("./833654.js");
var s = require("../app/951220.js");
var c = require("../app/164832.js");
var d = a(require("./781171.js"));
var f = require("./209536.js");
var p = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var h = require("./662695.js");
var g = require("../app/808446.js");
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = (0, m.forwardRef)((e, t) => {
  const n = (0, m.useRef)();
  const a = function (e, t, n) {
    const a = l.default.getActive();
    const [r, u] = (0, m.useState)([]);
    const [c, d] = (0, m.useState)(0);
    const f = () => {
      const r = s.RecentStickerCollectionMd.map(e => e.sticker);
      (0, o.handleStickerDownloadInStickerPanel)({
        stickersArr: r,
        setStickersDownloaded: u,
        stickerReuploadRetryCount: c,
        setStickerReuploadRetryCount: d,
        onChange: e,
        onDownloadStart: t,
        onDownloadEnd: n,
        filterStickers: a != null ? i.filterStickersForNewsletters : null
      });
    };
    (0, m.useEffect)(() => {
      f();
    }, []);
    (0, g.useListener)(s.RecentStickerCollectionMd, "add remove change sort", f);
    return r;
  }(e.resetScroll, e.onDownloadStart, e.onDownloadEnd);
  const E = e.displayLocation === u.DisplayLocation.ComposeBox || e.displayLocation === u.DisplayLocation.ExpressionsPanel ? [c.Sticker.getCreateButton(), ...a] : a;
  (0, m.useImperativeHandle)(t, () => ({
    focus(e) {
      var t;
      if (!((t = n.current) === null || t === undefined)) {
        t.focus(e);
      }
    }
  }));
  if ((0, h.useIsReadyToShowStickers)(e.displayLocation)) {
    if (E.length === 0) {
      return m.default.createElement(d.default, {
        text: p.fbt._("You haven't sent any stickers yet", null, {
          hk: "1o2MCj"
        })
      });
    } else {
      return m.default.createElement(f.StickersScrollGridPresentational, {
        ref: n,
        onFocusPrev: e.onFocusPrev,
        onScroll: e.onScroll,
        onStickerClick: e.onStickerClick,
        onStickerEnter: e.onStickerClick,
        selectedTab: r.StickerTabs.RECENTS,
        stickers: E,
        theme: "searchable",
        displayLocation: e.displayLocation
      });
    }
  } else {
    return null;
  }
});
v.displayName = "StickerPackStickersRecentImpl";
const _ = v;
exports.StickerPackStickersRecent = _;