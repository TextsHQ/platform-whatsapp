var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/690495.js");
var i = require("../app/163755.js");
var u = require("./617267.js");
var s = require("../app/317166.js");
var c = a(require("./83152.js"));
var d = a(require("./529727.js"));
var f = require("../app/676345.js");
var p = a(require("../app/79291.js"));
var m = function (e, t) {
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
var h = a(require("../app/156720.js"));
var g = a(require("../app/802145.js"));
var E = a(require("./105170.js"));
var v = require("../app/808446.js");
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
const y = {
  container: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno"
  },
  bubble: {
    zIndex: "ip45lo8e"
  },
  placeholderContainer: {
    position: "lhggkp7q",
    width: "l4c6ou8v",
    height: "r1ye6zju"
  }
};
const C = {
  svgContainer: {
    width: "gx6ezmxi",
    height: "j3dcch50",
    pointerEvents: "m62443ks",
    position: "lhggkp7q",
    zIndex: "thghmljt"
  },
  wrapper: {
    position: "g0rxnol2",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n"
  },
  lottieAnimatedEmojiContainer: {
    width: "l4c6ou8v",
    height: "r1ye6zju"
  }
};
var b = function (e) {
  var t;
  const n = (0, m.useRef)(null);
  const a = (0, m.useRef)(3);
  const _ = (0, m.useRef)(false);
  const {
    msg: b
  } = e;
  const M = (0, g.default)(() => {
    const e = (0, o.default)((0, i.getAssetIdForAnimatedEmoji)(b), "getAssetId(msg)");
    return function () {
      var t = (0, r.default)(function* () {
        const t = yield (0, s.getStaticMediaHostName)();
        return p.default.build(`${t}/wa/static/network_resource`, {
          cat: "nw_media",
          id: e,
          test: 1,
          _nc_cat: 1
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()().catch(e => {
      __LOG__(4, undefined, new Error())`static network resource: could not fetch. details: ${e}`;
    });
  }, [b]);
  const [S, {
    isIntersecting: T
  }] = (0, E.default)({
    root: null,
    rootMargin: "25px",
    threshold: 0.99
  });
  const w = () => a.current = 3;
  const A = () => {
    var e;
    var t;
    if (!((e = n.current) === null || e === undefined)) {
      e.stop();
    }
    if (!((t = n.current) === null || t === undefined)) {
      t.setLoop(false);
    }
    _.current = false;
  };
  const P = () => {
    var e;
    if (!((e = n.current) === null || e === undefined)) {
      e.removeOnLoopCompleteHandler();
    }
    A();
  };
  const O = () => {
    const e = a.current - 1;
    if (e === 0) {
      P();
      w();
    } else {
      a.current = e;
    }
  };
  const k = e => {
    var t;
    var a;
    var r;
    var o;
    var l;
    if (!((t = n.current) === null || t === undefined)) {
      t.removeOnLoopCompleteHandler();
    }
    if (e.withLoopCount) {
      if (!((o = n.current) === null || o === undefined)) {
        o.stop();
      }
      if (!((l = n.current) === null || l === undefined)) {
        l.addOnLoopCompleteHandler(O);
      }
    }
    _.current = true;
    if (!((a = n.current) === null || a === undefined)) {
      a.setLoop(true);
    }
    if (!((r = n.current) === null || r === undefined)) {
      r.play();
    }
  };
  (0, v.useListener)(document, "visibilitychange", () => {
    const e = document.visibilityState === "visible";
    var t;
    if (T && e) {
      k({
        withLoopCount: true
      });
    } else if (_.current) {
      if (!((t = n.current) === null || t === undefined)) {
        t.removeOnLoopCompleteHandler();
      }
      A();
      w();
    }
  });
  (0, m.useEffect)(() => {
    var e;
    var t;
    if (T) {
      k({
        withLoopCount: true
      });
    } else if (_.current) {
      if (!((e = n.current) === null || e === undefined)) {
        e.removeOnLoopCompleteHandler();
      }
      if (!((t = n.current) === null || t === undefined)) {
        t.addOnLoopCompleteHandler(P);
      }
      w();
    }
  }, [T]);
  const D = m.default.createElement("div", {
    className: (0, h.default)(y.container),
    onMouseEnter: k,
    onMouseLeave: () => {
      var e;
      if (!((e = n.current) === null || e === undefined)) {
        e.addOnLoopCompleteHandler(P);
      }
    },
    ref: S
  }, m.default.createElement(l.FlexColumn, {
    justify: "center",
    align: "center",
    xstyle: [f.uiMargin.bottom2, f.uiPadding.top20, f.uiPadding.bottom10, C.lottieAnimatedEmojiContainer],
    testid: "lottie-animated-emoji-container"
  }, m.default.createElement(u.LottieAnimation, {
    autoplay: true,
    loop: false,
    ref: n,
    xstyle: C.svgContainer,
    wrapperXstyle: C.wrapper,
    path: (t = M.value) !== null && t !== undefined ? t : "",
    fallback: m.default.createElement(d.default, {
      className: (0, h.default)(y.placeholderContainer)
    }),
    placeholder: m.default.createElement(d.default, {
      className: (0, h.default)(y.placeholderContainer)
    })
  })));
  return m.default.createElement(c.default, {
    displayAuthor: e.displayAuthor,
    msg: b,
    quotedMsg: e.quotedMsg,
    position: e.position,
    displayType: e.displayType,
    onDetailsPaneClosed: e.onDetailsPaneClosed,
    msgContent: D,
    ref: e.stickerLikeBubbleContainerRef,
    bubbleStyle: y.bubble
  });
};
exports.default = b;