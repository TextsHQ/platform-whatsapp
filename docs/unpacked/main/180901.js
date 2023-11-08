var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    mainMsgWrapperRef: n
  } = e;
  const a = (0, E.useRef)(null);
  const [r, u] = (0, E.useState)(0);
  const [m, C] = (0, E.useState)(null);
  const S = (0, i.getChat)(t.unsafe());
  const [T] = (0, _.default)(S);
  const [w] = (0, y.useMsgValues)(t.id, [i.getCarouselCards]);
  const A = (0, E.useMemo)(() => w == null ? null : w.map(e => {
    const t = e.safe();
    (0, g.default)(t.type === f.MSG_TYPE.INTERACTIVE, "Carousel card must be of type interactive.");
    return {
      card: t,
      actions: M(t, T)
    };
  }), [w, T]);
  (0, E.useLayoutEffect)(() => {
    const e = a.current;
    if (e == null) {
      return;
    }
    const t = (0, l.findCopyableChildren)(e).reduce((e, t) => t.getBoundingClientRect().height > e ? t.getBoundingClientRect().height : e, Number.MIN_VALUE);
    u(t);
  }, [u, a, A]);
  const P = (0, E.useCallback)(e => {
    const t = getComputedStyle(e);
    C({
      left: parseFloat(t.paddingLeft),
      right: parseFloat(t.paddingRight)
    });
  }, [C]);
  (0, E.useLayoutEffect)(() => {
    var e;
    const t = (e = n == null ? undefined : n.current) !== null && e !== undefined ? e : null;
    if (t != null) {
      P(t);
      return (0, p.observe)(t, () => P(t));
    }
  }, [P, n, C]);
  if (A == null) {
    return null;
  }
  return E.default.createElement(o.default, {
    cardWidth: 330,
    spacing: 4,
    carouselMargins: m,
    isRTL: d.default.isRTL(),
    ref: a
  }, A.map((e, t) => E.default.createElement("div", {
    key: t,
    className: (0, v.default)(b, h.marginTop2)
  }, E.default.createElement(s.default, {
    msg: e.card,
    displayAuthor: false,
    displayFooter: false,
    header: E.default.createElement(c.default, {
      msg: e.card
    }),
    actions: e.actions,
    minTextHeight: r,
    hideMeta: true
  }))));
};
var r = a(require("../vendor/81109.js"));
var o = a(require("./11172.js"));
var l = require("../app/175448.js");
var i = require("../app/163755.js");
var u = a(require("./673717.js"));
var s = a(require("./346167.js"));
var c = a(require("./690294.js"));
var d = a(require("../app/932325.js"));
var f = require("../app/373070.js");
var p = require("./599456.js");
var m = a(require("./655210.js"));
var h = require("../app/676345.js");
var g = a(require("../vendor/441143.js"));
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var v = a(require("../app/156720.js"));
var _ = a(require("./144903.js"));
var y = require("./871210.js");
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = {
  backgroundColor: "jht8oeb6",
  borderTopStartRadius: "rq6dtfpq",
  borderTopEndRadius: "aokg6g0y",
  borderBottomEndRadius: "nqm9sais",
  borderBottomStartRadius: "lrpjbpgm"
};
function M(e, t) {
  return (0, u.default)(e, t).map(e => {
    var t;
    return (0, r.default)((0, r.default)({}, e), {}, {
      onClick: (t = e.onClick) !== null && t !== undefined ? t : () => (0, m.default)()
    });
  });
}