var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/330619.js"));
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
var l = a(require("../app/156720.js"));
var i = a(require("../app/17533.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = {
  wrapper: {
    position: "g0rxnol2",
    top: "qq0sjtgm",
    bottom: "jxacihee",
    display: "l7jjieqr",
    width: "egv1zj2i",
    height: "ppled2lx",
    marginStart: "gj5xqxfh",
    marginEnd: "om6y7gxh"
  },
  bg: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundColor: "mq8m0esj",
    borderTopStartRadius: "kciiizs6",
    borderTopEndRadius: "ljef3gak",
    borderBottomEndRadius: "ny9rbx4l",
    borderBottomStartRadius: "jchzwnh7"
  },
  mask: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    borderTopStartRadius: "kciiizs6",
    borderTopEndRadius: "ljef3gak",
    borderBottomEndRadius: "ny9rbx4l",
    borderBottomStartRadius: "jchzwnh7",
    transform: "cgi16xlc"
  },
  container: {
    position: "lhggkp7q",
    end: "ebjesfe0",
    start: "tkdu00h0",
    zIndex: "nbczt5ty",
    display: "p357zi0d",
    height: "bmhhosgr",
    marginTop: "c46o30wg",
    marginEnd: "k1jo73ug",
    marginStart: "isfiuinm",
    direction: "btzd6xh9",
    width: "hblzrxh7"
  },
  foreground: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundColor: "ss1fofi6"
  },
  filled: {
    transform: "lel4qhml"
  },
  empty: {
    transform: "mjomr7am"
  },
  active: {
    transform: "o7z9b2jg"
  }
};
function c(e, t) {
  const {
    onClick: n,
    current: a,
    total: u
  } = e;
  const c = (0, o.useRef)(null);
  const d = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    __LOG__(2)`Current index: ${a}, total count: ${u}`;
    if (!(a >= 0 && a < u)) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("bad current status v3 index");
    }
  }, []);
  const f = (0, i.default)(e => {
    if (!(n == null)) {
      n(e);
    }
  });
  const p = (e, t) => {
    if (c.current) {
      (0, r.default)(c.current, "stop");
      d.current = (0, r.default)(c.current, {
        translateX: ["0%", `-${e / t * 100}%`]
      }, {
        duration: e,
        easing: "linear"
      });
    }
  };
  const m = () => {
    if (c.current) {
      (0, r.default)(c.current, "stop");
    }
  };
  const h = () => {
    const e = d.current;
    return e || Promise.resolve();
  };
  (0, o.useImperativeHandle)(t, () => ({
    handleStart: p,
    handlePause: m,
    handleEnded: h
  }));
  const g = (0, o.useMemo)(() => new Array(u).fill(undefined).map((e, t) => o.default.createElement("div", {
    className: (0, l.default)(s.wrapper),
    style: {
      width: 100 / u + "%"
    },
    key: t,
    onClick: () => f(t)
  }, o.default.createElement("div", {
    className: (0, l.default)(s.bg)
  }), o.default.createElement("div", {
    className: (0, l.default)(s.mask)
  }, o.default.createElement("div", {
    className: (0, l.default)(s.foreground, t < a && s.filled, t > a && s.empty, t === a && s.active),
    ref: t === a ? c : () => {}
  })))), [a, u, f]);
  return o.default.createElement("div", {
    className: (0, l.default)(s.container)
  }, g);
}
var d = (0, o.forwardRef)(c);
exports.default = d;