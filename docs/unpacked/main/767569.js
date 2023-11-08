var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = require("../app/396574.js");
var i = require("../app/780549.js");
var u = require("./931178.js");
var s = require("../app/675085.js");
var c = require("./233355.js");
var d = require("./225446.js");
var f = a(require("../app/335540.js"));
var p = require("../app/81644.js");
var m = require("../app/196127.js");
require("./118048.js");
var h = require("../app/97858.js");
var g = require("./876419.js");
var E = require("../app/163139.js");
var v = a(require("./799451.js"));
var _ = a(require("./903612.js"));
var y = require("../app/392632.js");
var C = a(require("../app/37875.js"));
var b = require("../vendor/548360.js");
var M = function (e, t) {
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
}(require("../vendor/667294.js"));
var S = a(require("../app/829686.js"));
var T = a(require("./105170.js"));
var w = a(require("../app/38085.js"));
var A = require("../app/655241.js");
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
const O = (0, M.forwardRef)((e, t) => {
  const {
    onDownload: n,
    theme: a = "stickerPanel",
    downloadErrorShouldThrow: P,
    selected: O
  } = e;
  const k = (0, A.useModelValues)(e.sticker, ["id", "filehash", "mediaData", "isPlaceholder", "isCreateButton"]);
  const D = (0, M.useRef)(null);
  const I = (0, S.default)((0, r.default)(function* () {
    yield k.downloadMedia(P);
    if (!(n == null)) {
      n(k.id);
    }
  }));
  const [R, N] = (0, M.useState)();
  const x = () => !!D.current && D.current === document.activeElement;
  const L = () => {
    if (D.current) {
      if (!x()) {
        f.default.focus(D.current);
      }
    }
  };
  const j = () => D.current ? D.current.offsetTop : 0;
  (0, M.useImperativeHandle)(t, () => ({
    hasFocus: x,
    focus: L,
    getOffsetTop: j
  }));
  const B = e.onClick ? t => {
    const n = e.onClick;
    if (n) {
      n((0, E.unproxy)(k), t);
    }
  } : undefined;
  const [F, {
    isIntersecting: G
  }] = (0, T.default)({
    root: null,
    rootMargin: "10px",
    threshold: 0
  });
  (0, M.useEffect)(() => {
    if (G) {
      I();
    }
  }, [G, I]);
  const U = (0, w.default)(D, F);
  let W;
  let H;
  if (a !== "stickerDetails") {
    W = t => {
      const n = [];
      if (k.isPlaceholder || k.isCreateButton) {
        return;
      }
      t.preventDefault();
      t.stopPropagation();
      if ((0, h.isFavoriteStickersEnabled)()) {
        if ((0, d.isStickerFilehashFavorited)(k.filehash) && e.selectedTab === c.StickerTabs.FAVORITES) {
          n.push(M.default.createElement(s.DropdownItem, {
            key: "remove-favorite-sticker",
            testid: "mi-remove-favorite-sticker",
            action: () => {
              (0, d.removeStickerFromFavorites)(e.sticker);
            }
          }, b.fbt._("Remove from favorites", null, {
            hk: "2tJgjX"
          })));
        } else if (!(0, d.isStickerFilehashFavorited)(k.filehash)) {
          n.push(M.default.createElement(s.DropdownItem, {
            key: "add-favorite-sticker",
            testid: "mi-add-favorite-sticker",
            action: () => {
              (0, d.addStickerToFavorites)(e.sticker);
            }
          }, b.fbt._("Add to favorites", null, {
            hk: "1iPksH"
          })));
        }
      }
      const a = m.InMemoryMediaBlobCache.get(e.sticker.filehash);
      if (a != null && (0, u.supportsCopyImageToClipboard)()) {
        n.push(M.default.createElement(s.DropdownItem, {
          key: "copy-favorite-sticker",
          testid: "mi-copy-favorite-sticker",
          action: () => {
            (0, u.copyImageToClipboard)(a);
          }
        }, b.fbt._("Copy sticker image", null, {
          hk: "4FVy4K"
        })));
      }
      if ((0, h.isRecentStickersMDEnabled)() && e.selectedTab === c.StickerTabs.RECENTS && (0, g.isStickerIdInRecent)(e.sticker)) {
        n.push(M.default.createElement(s.DropdownItem, {
          key: "remove-recent-sticker",
          testid: "mi-remove-recent-sticker",
          action: () => {
            (0, g.removeStickerFromRecent)(e.sticker);
          }
        }, b.fbt._("Remove from recents", null, {
          hk: "63p9L"
        })));
      }
      const {
        stickerPackId: r,
        isFirstParty: o
      } = k.mediaData;
      const {
        dontShowViewPack: l = false
      } = e;
      if (l === false && r && o === true) {
        n.push(M.default.createElement(s.DropdownItem, {
          key: "open-sticker-pack",
          testid: "mi-open-sticker-pack",
          action: () => i.Cmd.openStickerPack(r)
        }, b.fbt._("View pack", null, {
          hk: "1GGSoX"
        })));
      }
      N({
        menu: n,
        event: t
      });
    };
    if (R) {
      H = M.default.createElement(y.UIE, {
        displayName: "ChatContextMenu",
        escapable: true,
        popable: true,
        dismissOnWindowResize: true,
        requestDismiss: () => N(null)
      }, M.default.createElement(C.default, {
        contextMenu: R
      }));
    }
  }
  return M.default.createElement(p.HotKeys, {
    ref: U,
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [_.default.stickerPanel]: a === "stickerPanel",
      [_.default.stickerExpressionsPanel]: a === "stickerExpressionsPanel",
      [_.default.biggerSticker]: a === "stickerExpressionsPanel" && (0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers"),
      [_.default.container]: true,
      [_.default.selected]: O
    }),
    handlers: {
      enter: t => {
        const n = e.onEnter;
        if (n) {
          n((0, E.unproxy)(k), t);
        }
      }
    },
    onContextMenu: W
  }, M.default.createElement("div", {
    className: _.default.border
  }, G && M.default.createElement(v.default, {
    mediaData: k.mediaData,
    onClick: B,
    theme: a,
    loopAnimation: true,
    downloadMedia: I,
    isCreateButton: k.isCreateButton
  })), H);
});
O.displayName = "StickerItem";
var k = O;
exports.default = k;