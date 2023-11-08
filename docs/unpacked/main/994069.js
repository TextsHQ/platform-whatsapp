var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    getZoomNode: t,
    zoomIn: n,
    onImgZoomIn: a,
    onExitAnimation: _,
    onBack: y
  } = e;
  const C = (0, E.useRef)(null);
  const b = (0, E.useRef)(false);
  const M = (0, E.useRef)(false);
  const S = (0, E.useRef)(false);
  const T = (0, E.useRef)(null);
  const w = (0, v.useModelValues)(e.mediaData, ["mediaStage", "renderableUrl", "isGif", "type"]);
  const A = (0, v.useModelValues)(e.product, ["description"]);
  const [P, O] = (0, E.useState)(false);
  const [k] = (0, E.useState)(() => w.mediaStage === d.MEDIA_DATA_STAGE.RESOLVED && n && t ? t() : null);
  const D = () => {
    var e;
    if (M.current) {
      return;
    }
    M.current = true;
    if ((0, o.isFunction)(_)) {
      _();
    }
    if (!t) {
      return y();
    }
    const n = t();
    if (!n) {
      return y();
    }
    const a = (0, r.default)((e = T.current) === null || e === undefined ? undefined : e.getInsideContainer(), "mediaImageRef.current?.getInsideContainer()");
    const l = a.getBoundingClientRect();
    const i = n.getBoundingClientRect();
    let u = i.top - l.top;
    let s = i.left - l.left;
    const c = n.clientWidth / a.clientWidth;
    u -= (a.clientHeight - n.clientHeight) / 2;
    s -= (a.clientWidth - n.clientWidth) / 2;
    (0, g.default)(a, {
      translateX: [s, 0],
      translateY: [u, 0],
      scale: [c, 1]
    }, {
      duration: 200,
      easing: [0.1, 0.82, 0.25, 1]
    }).then(() => {
      y();
    });
  };
  const I = E.default.createElement(c.default, {
    key: w.renderableUrl,
    mediaData: w,
    onLoad: e => {
      if (b.current) {
        return;
      }
      b.current = true;
      const t = k;
      const a = e.currentTarget;
      if (t && a && n && a instanceof HTMLElement) {
        ((e, t) => {
          const n = t.getBoundingClientRect();
          const a = e.getBoundingClientRect();
          let r = a.top - n.top;
          let o = a.left - n.left;
          const l = e.clientWidth / t.clientWidth;
          r -= (t.clientHeight - e.clientHeight) / 2;
          o -= (t.clientWidth - e.clientWidth) / 2;
          (0, g.default)(t, {
            opacity: [1, 0],
            translateX: [0, o],
            translateY: [0, r],
            scale: [1, l]
          }, {
            duration: f.ANIMATION_DURATION,
            easing: [0.1, 0.82, 0.25, 1]
          });
          if (C.current) {
            (0, g.default)(C.current, {
              opacity: [1, 0]
            }, {
              duration: f.ANIMATION_DURATION
            });
          }
        })(t, a);
      }
    },
    onImgZoomIn: e => {
      const t = T.current;
      if (e && t) {
        S.current = t.getHeightOverflow() > 0 || t.getWidthOverflow() > 0;
      }
      O(e);
      a(e);
    },
    ref: T
  });
  let R;
  if (A.description) {
    const t = e.zoomIn && (w.isGif || w.type === s.default.TYPE.IMAGE);
    R = E.default.createElement("span", {
      className: {
        [m.default.captionHidden]: t
      },
      ref: C
    }, E.default.createElement(u.EmojiText, {
      text: A.description,
      className: m.default.mediaCaption
    }));
  }
  const N = (0, i.classnamesConvertMeToStylexPlease)({
    [m.default.mediaWithCaption]: !!R,
    [m.default.media]: true
  });
  const x = t => {
    var n;
    if (!((n = e.onPrev) === null || n === undefined)) {
      n.call(e, t);
    }
  };
  const L = t => {
    var n;
    if (!((n = e.onNext) === null || n === undefined)) {
      n.call(e, t);
    }
  };
  const j = E.default.createElement("div", {
    className: m.default.btnMediaNext
  }, E.default.createElement(l.ChevronButton, {
    type: l.ButtonType.Next,
    onClick: L,
    onKeyDown: L,
    disabled: !e.onNext || P
  }));
  const B = E.default.createElement("div", {
    className: m.default.btnMediaPrev
  }, E.default.createElement(l.ChevronButton, {
    type: l.ButtonType.Prev,
    onClick: x,
    onKeyDown: x,
    disabled: !e.onPrev || P
  }));
  const F = (0, i.classnamesConvertMeToStylexPlease)({
    [m.default.mediaViewerAnimate]: e.zoomIn,
    [m.default.cursorZoomOut]: P,
    overlay: true,
    [m.default.mediaViewer]: true
  });
  const G = P ? null : e => {
    if (Math.abs(e.deltaY) > 7) {
      D();
    }
  };
  const U = P ? null : D;
  const W = P && S.current ? e => {
    ((e, t) => {
      const n = T.current;
      if (!n) {
        return;
      }
      const a = n.getInsideContainer();
      if (!(a && a instanceof HTMLElement)) {
        return;
      }
      const r = n.getOutsideContainer();
      if (!(r && r instanceof HTMLElement)) {
        return;
      }
      const {
        translateX: o,
        translateY: l
      } = n.getTranslatePosition(r, e, t);
      (0, g.default)(a, "stop");
      (0, g.default)(a, {
        translateX: o,
        translateY: l,
        scale: f.ZOOM_IN_FACTOR
      }, {
        duration: 0
      });
    })(e.pageX, e.pageY);
  } : null;
  const H = P ? e => {
    const t = T.current;
    if (t && P) {
      t.onClick(e);
    }
  } : null;
  return E.default.createElement(h.UIE, {
    displayName: "ProductViewer",
    escapable: true,
    requestDismiss: D
  }, E.default.createElement("div", {
    className: F,
    "data-animate-media-viewer": true,
    onClick: H,
    onMouseMove: W
  }, E.default.createElement(p.default, {
    mediaData: w,
    onClose: D,
    product: A
  }), E.default.createElement("div", {
    className: m.default.mediaContent,
    dir: "ltr",
    onWheel: G,
    onClick: U
  }, B, E.default.createElement("div", {
    className: N
  }, E.default.createElement("div", {
    className: m.default.media
  }, I), R), j)));
};
var r = a(require("../app/670983.js"));
var o = require("../app/724976.js");
var l = require("./305989.js");
var i = require("../app/396574.js");
var u = require("../app/305521.js");
var s = a(require("../app/116253.js"));
var c = a(require("./142958.js"));
var d = require("../app/172259.js");
var f = require("./69315.js");
var p = a(require("./404774.js"));
var m = a(require("./216572.js"));
var h = require("../app/392632.js");
var g = a(require("../app/330619.js"));
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var v = require("../app/655241.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}