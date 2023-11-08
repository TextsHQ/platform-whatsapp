var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    product: t,
    productImageCollection: n,
    activeProductImage: a,
    sessionId: g
  } = e;
  const E = (0, p.useRef)(false);
  const v = (0, p.useRef)(null);
  const _ = (0, p.useRef)(null);
  const y = (0, p.useRef)(null);
  const [C, b] = (0, p.useState)(() => n.toArray().indexOf(a));
  const [M, S] = (0, p.useState)(false);
  const T = (0, h.default)(t);
  const w = (0, h.default)(g);
  const A = (0, h.default)(C);
  const P = e => {
    if (e !== C) {
      (0, l.logImageNavigate)({
        product: (0, c.unproxy)(t),
        catalogSessionId: g
      });
      (0, l.logImageListClick)({
        product: (0, c.unproxy)(t),
        catalogSessionId: g
      });
    }
    b(e);
  };
  const O = e => {
    if (e) {
      e.stopPropagation();
    }
    if (M) {
      return;
    }
    const t = n.length;
    P((C + 1) % t);
  };
  const k = e => {
    if (e) {
      e.stopPropagation();
    }
    if (M) {
      return;
    }
    const t = n.length;
    P(C - 1 < 0 ? t - 1 : (C - 1) % t);
  };
  (0, m.useListener)(window, "keydown", e => {
    if (e.keyCode === r.default.LEFT) {
      k(e);
    } else if (e.keyCode === r.default.RIGHT) {
      O(e);
    }
  });
  const D = function () {
    var e;
    let t = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const n = _.current;
    const a = (e = y.current) === null || e === undefined ? undefined : e.firstChild;
    const r = v.current;
    if (!n || !a || !r) {
      return;
    }
    let o = 0;
    if (r instanceof HTMLElement) {
      o = r.clientWidth / 2 - n.clientWidth / 2;
    }
    (0, d.default)(r, "stop");
    let l = 0;
    if (t) {
      l = 300;
    }
    (0, d.default)(r, "scroll", {
      duration: l,
      container: a,
      offset: o,
      axis: "x",
      easing: [0.1, 0.82, 0.25, 1]
    });
  };
  (0, p.useEffect)(() => {
    D();
    if (_.current) {
      (0, d.default)(_.current, {
        opacity: [1, 0],
        translateY: ["0%", "100%"]
      }, {
        duration: 300,
        delay: 100,
        easing: [0.1, 0.82, 0.25, 1]
      });
    }
    (0, l.logImageCarouselModalView)({
      product: (0, c.unproxy)(t),
      catalogSessionId: g
    });
  }, []);
  (0, p.useEffect)(() => {
    if (A !== C) {
      D(true);
      (0, l.logFullImageView)({
        product: (0, c.unproxy)(t),
        catalogSessionId: g
      });
    }
  }, [C, A, T, w, t, g]);
  const I = n.length;
  const R = C > 0 ? k : null;
  const N = C + 1 < I ? O : null;
  return p.default.createElement("div", {
    className: M ? "img-zoomed-in" : null
  }, p.default.createElement("div", {
    className: u.default.thumbsContainer,
    ref: _
  }, p.default.createElement("div", {
    ref: y,
    className: u.default.scrollContainer,
    dir: "ltr"
  }, p.default.createElement(f.default, {
    className: u.default.viewerThumbs,
    transitionName: "thumb-scale"
  }, p.default.createElement("div", {
    className: u.default.thumbPadding,
    key: "padding-left"
  }), n.toArray().map((e, t) => {
    const n = t === C;
    return p.default.createElement(s.ProductThumb, {
      theme: "viewerFlow",
      active: n,
      ref: n ? v : null,
      key: `product-image-${t}`,
      mediaData: e.mediaData,
      onClick: () => P(t)
    });
  }), p.default.createElement("div", {
    className: u.default.thumbPadding,
    key: "padding-right"
  })))), p.default.createElement(i.default, {
    mediaData: n.toArray()[C].mediaData,
    onBack: () => {
      o.ModalManager.closeMedia();
    },
    onExitAnimation: () => {
      if (_.current) {
        (0, d.default)(_.current, {
          opacity: [0, 1],
          translateY: ["100%", "0%"]
        }, {
          duration: 300,
          easing: [0.1, 0.82, 0.25, 1]
        });
      }
    },
    onNext: N,
    onPrev: R,
    onImgZoomIn: e => {
      S(e);
    },
    getZoomNode: e.getZoomNode,
    zoomIn: E.current,
    product: t,
    sessionId: e.sessionId
  }));
};
var r = a(require("../app/953268.js"));
var o = require("../app/114850.js");
var l = require("../app/77548.js");
var i = a(require("./994069.js"));
var u = a(require("./331806.js"));
var s = require("./493770.js");
var c = require("../app/163139.js");
var d = a(require("../app/330619.js"));
var f = a(require("../app/844453.js"));
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var m = require("../app/808446.js");
var h = a(require("../app/49710.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}