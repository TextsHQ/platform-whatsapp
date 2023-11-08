var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductThumb = undefined;
exports.ProductThumbPlaceholder = d;
var r = require("../app/672244.js");
var o = require("../app/396574.js");
var l = require("../app/172259.js");
var i = a(require("./860982.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var s = require("../app/655241.js");
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e) {
  let {
    onClick: t,
    className: n
  } = e;
  return u.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(n, i.default.mediaCanvas, i.default.placeholder, {
      [i.default.mediaCanvasClickable]: !!t
    }),
    onClick: t
  }, u.default.createElement(r.BusinessDescriptionIcon, null));
}
const f = (0, u.forwardRef)((e, t) => {
  const {
    theme: n,
    active: a,
    onClick: r,
    badge: c,
    overlayContent: f,
    imgRef: p
  } = e;
  const m = (0, u.useRef)(null);
  const h = (0, s.useModelValues)(e.mediaData, ["mediaStage", "mediaBlob", "renderableUrl", "preview"]);
  let g;
  let E;
  (0, u.useEffect)(() => {
    if (!(p == null)) {
      p(m.current);
    }
    return () => {
      if (!(p == null)) {
        p(null);
      }
    };
  }, []);
  if (h.mediaStage === l.MEDIA_DATA_STAGE.RESOLVED) {
    g = u.default.createElement("div", {
      className: (0, o.classnamesConvertMeToStylexPlease)(i.default.mediaCanvas, {
        [i.default.mediaCanvasClickable]: !!r
      }),
      style: {
        backgroundImage: `url(${h.renderableUrl})`
      },
      onClick: r,
      ref: m
    });
    if (f != null) {
      E = u.default.createElement("div", {
        className: i.default.overlay
      }, f);
    }
  } else {
    g = h.mediaStage === l.MEDIA_DATA_STAGE.PREPARING ? u.default.createElement(d, {
      className: e.className,
      onClick: e.onClick
    }) : h.mediaStage === l.MEDIA_DATA_STAGE.ERROR_MISSING ? null : u.default.createElement("div", {
      className: i.default.mediaCanvas
    });
  }
  const v = ["list", "cart-list"].includes(n);
  const _ = (0, o.classnamesConvertMeToStylexPlease)(e.className, {
    [i.default.canvasSecondRow]: n === "hideableSecondRow",
    [i.default.canvasComponent]: !v,
    [i.default.canvasComponentLargeGallerySpacing]: n === "largeGallerySpacing",
    [i.default.list]: n === "list",
    [i.default.cartList]: n === "cart-list",
    [i.default.viewerFlow]: n === "viewerFlow",
    [i.default.squareThumb]: n === "squareThumb",
    [i.default.orderSquareThumb]: n === "orderSquareThumb",
    [i.default.active]: a === true
  });
  if (e.large) {
    return u.default.createElement("div", {
      className: i.default.canvasComponentLarge
    }, g);
  }
  const y = u.default.createElement("div", {
    ref: t,
    className: _
  }, u.default.createElement("div", {
    className: i.default.canvasBody
  }), g, E, c);
  if (v) {
    const e = (0, o.classnamesConvertMeToStylexPlease)(i.default.listWrapper, {
      [i.default.cartListWrapper]: n === "cart-list"
    });
    return u.default.createElement("div", {
      className: e
    }, y);
  }
  return y;
});
exports.ProductThumb = f;
f.displayName = "ProductThumb";