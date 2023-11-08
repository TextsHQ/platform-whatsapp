var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/116253.js"));
var l = a(require("../app/756680.js"));
var i = require("../app/172259.js");
var u = a(require("./674465.js"));
var s = a(require("../app/625903.js"));
var c = function (e, t) {
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
var d = a(require("../app/156720.js"));
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
const p = {
  blur: {
    filter: "hddtmpml"
  },
  mediaCanvas: {
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf",
    boxSizing: "cm280p3y",
    cursor: "ajgl1lbb",
    height: "ppled2lx",
    left: "tukmaf4q",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    transform: "p5jrpzbl",
    transition: "g6mp970w",
    width: "ln8gz9je",
    zIndex: "jnl3jror"
  },
  shade: {
    background: "d9ddx5tg",
    bottom: "jxacihee",
    height: "jdwybkuq",
    left: "tukmaf4q",
    pointerEvents: "m62443ks",
    position: "lhggkp7q",
    width: "ln8gz9je"
  }
};
const m = (0, c.forwardRef)((e, t) => {
  let {
    children: n,
    className: a,
    shade: r,
    tabIndex: o,
    url: l,
    onClick: i,
    onDragStart: u
  } = e;
  const f = r === true ? c.default.createElement("div", {
    className: (0, d.default)(p.shade)
  }) : null;
  const m = l != null && l !== "" ? {
    backgroundImage: `url(${l})`
  } : null;
  return c.default.createElement(s.default, {
    onClick: i,
    tabIndex: o != null ? o : 0
  }, c.default.createElement("div", {
    ref: t,
    style: m,
    className: a,
    onDragStart: u,
    draggable: u != null || null
  }, n, f));
});
m.displayName = "ImageNode";
const h = (0, c.forwardRef)((e, t) => {
  let {
    mediaData: n,
    onClick: a,
    tabIndex: r,
    onDragStart: o,
    shade: i,
    shouldApplyBlur: u,
    url: s
  } = e;
  return c.default.createElement(m, {
    ref: t,
    tabIndex: r != null ? r : 0,
    onClick: a,
    onDragStart: o,
    className: (0, d.default)(p.mediaCanvas, !!u && p.blur),
    shade: i,
    url: n.preview instanceof l.default ? n.preview.url() : null
  }, s != null ? c.default.createElement("div", {
    className: (0, d.default)(p.mediaCanvas),
    style: {
      backgroundImage: `url(${s})`
    }
  }) : null);
});
h.displayName = "ImageThumb";
const g = (0, c.forwardRef)((e, t) => {
  let {
    mediaData: n,
    onClick: a,
    onDragStart: r,
    shade: o,
    tabIndex: l
  } = e;
  if (n.preview != null) {
    return c.default.createElement(h, {
      tabIndex: l,
      ref: t,
      onClick: a,
      onDragStart: r,
      mediaData: n
    });
  } else {
    return c.default.createElement(m, {
      ref: t,
      tabIndex: l,
      onClick: a,
      onDragStart: r,
      className: (0, d.default)(p.mediaCanvas),
      shade: o
    });
  }
});
g.displayName = "Placeholder";
const E = (0, c.forwardRef)((e, t) => {
  let {
    downloadMedia: n,
    msg: a,
    onClick: s,
    onDragStart: f,
    preferPreview: E,
    tabIndex: v = -1
  } = e;
  const {
    mediaData: _
  } = a;
  const y = {
    onClick: s,
    onDragStart: f,
    ref: t,
    tabIndex: v
  };
  switch (_.type) {
    case o.default.TYPE.AUDIO:
      return c.default.createElement(m, (0, r.default)({}, y, {
        className: `${(0, d.default)(p.mediaCanvas)} attach-media-audio-thumb`
      }));
    case o.default.TYPE.VIDEO:
      {
        var C;
        const e = _.fullPreviewData == null;
        const t = (C = _.fullPreviewData) !== null && C !== undefined ? C : _.preview;
        const n = _.isGif && !_.preview;
        return c.default.createElement(m, (0, r.default)({}, y, {
          className: `${(0, d.default)(p.mediaCanvas, e && p.blur)} ${n ? "media-video-thumb" : ""}`,
          shade: true,
          url: t instanceof l.default ? t.url() : null
        }));
      }
    case o.default.TYPE.IMAGE:
      {
        const e = _.preview != null && _.mediaStage === i.MEDIA_DATA_STAGE.NEED_POKE;
        if (E === true) {
          return c.default.createElement(g, (0, r.default)({}, y, {
            mediaData: _,
            shade: a.star,
            shouldApplyBlur: e
          }));
        } else {
          return c.default.createElement("div", {
            className: (0, d.default)(p.mediaCanvas)
          }, c.default.createElement(u.default, {
            mediaData: _,
            placeholderRenderer: () => c.default.createElement(g, (0, r.default)({}, y, {
              mediaData: _,
              shade: a.star,
              shouldApplyBlur: e
            })),
            renderProgressively: true,
            downloadMedia: n
          }, t => c.default.createElement(h, (0, r.default)({}, y, {
            mediaData: _,
            shade: a.star,
            shouldApplyBlur: e,
            url: t
          }))));
        }
      }
    default:
      return c.default.createElement(m, (0, r.default)({}, y, {
        shade: a.star
      }));
  }
});
E.displayName = "MediaImageThumb";
var v = E;
exports.default = v;