var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./66985.js"));
var o = a(require("./49677.js"));
var l = a(require("../app/488922.js"));
var i = require("../app/172259.js");
var u = a(require("./674465.js"));
var s = a(require("./996513.js"));
var c = a(require("./708126.js"));
var d = a(require("./821384.js"));
var f = require("../app/885313.js");
var p = function (e, t) {
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
var m = a(require("../app/156720.js"));
var h = a(require("../app/38085.js"));
var g = require("../app/655241.js");
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
const v = {
  isDownloadPrevented: {
    pointerEvents: "m62443ks"
  }
};
function _(e) {
  let {
    mediaData: t
  } = e;
  return p.default.createElement(d.default, {
    type: "scaleDown",
    size: {
      width: t.fullWidth,
      height: t.fullHeight
    },
    position: "relative",
    objectPosition: "relative"
  }, p.default.createElement(o.default, {
    altText: "",
    mediaData: t
  }));
}
function y(e) {
  let {
    src: t,
    preventDownload: n = false,
    onImageClick: a,
    onLoad: r
  } = e;
  return p.default.createElement("div", null, p.default.createElement(l.default, {
    className: (0, m.default)(s.default.content, n && v.isDownloadPrevented),
    draggable: !n,
    onClick: a,
    disableContextMenu: n,
    src: t,
    onLoad: r
  }));
}
function C(e) {
  let {
    src: t,
    onImageClick: n,
    onLoad: a
  } = e;
  return p.default.createElement("figure", {
    className: (0, m.default)(s.default.content),
    draggable: "false",
    onClick: n,
    onContextMenu: e => e.preventDefault()
  }, p.default.createElement(y, {
    src: t,
    preventDownload: true,
    onImageClick: n,
    onLoad: a
  }));
}
const b = (e, t) => {
  const {
    msg: n,
    preventDownload: a,
    onLoad: o
  } = e;
  const l = (0, g.useModelValues)(e.mediaData, ["mediaStage", "fullWidth", "fullHeight", "renderableUrl", "progressiveStage"]);
  const s = (0, p.useRef)(null);
  const d = (0, h.default)(t, s);
  (0, p.useEffect)(() => {
    if (n) {
      n.downloadMedia({
        downloadEvenIfExpensive: true,
        rmrReason: f.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
        isUserInitiated: true
      });
      return () => {
        if (n.mediaObject) {
          n.cancelDownload();
        }
      };
    }
  }, [n]);
  const m = e => {
    var t;
    if (!((t = s.current) === null || t === undefined)) {
      t.onClick(e);
    }
  };
  switch (l.mediaStage) {
    case i.MEDIA_DATA_STAGE.DECRYPTING:
      if (l.progressiveStage == null) {
        return p.default.createElement(_, {
          mediaData: l
        });
      }
      break;
    case i.MEDIA_DATA_STAGE.RESOLVED:
    case i.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
      break;
    default:
      return p.default.createElement(_, {
        mediaData: l
      });
  }
  const E = a ? e => p.default.createElement(C, {
    src: e,
    onImageClick: m,
    onLoad: o
  }) : e => p.default.createElement(y, {
    src: e,
    onImageClick: m,
    onLoad: o
  });
  const v = n != null ? p.default.createElement(p.default.Fragment, null, p.default.createElement(u.default, {
    mediaData: l,
    placeholderRenderer: () => p.default.createElement(_, {
      mediaData: l
    }),
    downloadMedia: () => {
      if (n.mediaObject != null) {
        return n.downloadMedia({
          downloadEvenIfExpensive: true,
          rmrReason: f.WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
          isUserInitiated: true
        });
      }
    },
    renderProgressively: true
  }, E), n.interactiveAnnotations && n.interactiveAnnotations.length > 0 && p.default.createElement(r.default, {
    annotations: n.interactiveAnnotations,
    onTooltipDisplay: e.onAnnotationTooltipDisplay,
    onTooltipDismiss: e.onAnnotationTooltipDismiss
  })) : E(l.renderableUrl);
  return p.default.createElement(c.default, {
    role: "img",
    ref: d,
    width: l.fullWidth,
    height: l.fullHeight,
    onZoomIn: e.onImgZoomIn,
    msg: n
  }, v);
};
var M = (0, p.forwardRef)(b);
exports.default = M;