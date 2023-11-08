var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/618446.js"));
var o = a(require("../vendor/170735.js"));
var l = a(require("./349759.js"));
var i = require("../app/702206.js");
var u = a(require("../app/469733.js"));
var s = require("./456006.js");
var c = require("./474474.js");
var d = a(require("./879773.js"));
var f = function (e, t) {
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
a(require("../app/156720.js"));
var p = a(require("../app/710629.js"));
var m = a(require("../app/49710.js"));
var h = require("../app/441673.js");
var g = a(require("../app/895851.js"));
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
  reactionItem: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    textAlign: "qfejxiq4",
    fontSize: "enbbiyaj",
    lineHeight: "r5qsrrlp"
  }
};
function _(e, t) {
  return {
    added: (0, o.default)(t || [], e || [], e => e.reactionAggregate),
    removed: (0, o.default)(e || [], t || [], e => e.reactionAggregate)
  };
}
function y(e) {
  let {
    reactions: t,
    reactionsAggregateCount: n,
    isFirstData: a
  } = e;
  const o = (0, f.useRef)(null);
  const E = (0, f.useRef)(t);
  const y = (0, f.useRef)(true);
  const C = (0, m.default)(t);
  const [b, M] = (0, f.useState)([]);
  const [S, T] = (0, f.useState)([]);
  const w = (0, g.default)();
  const [A, P] = (0, f.useState)([]);
  const O = (0, f.useRef)(null);
  const k = (0, f.useRef)(false);
  if (o.current == null) {
    o.current = C != null ? C : null;
  }
  if (O.current == null) {
    O.current = n;
  }
  E.current = t;
  const [D, I] = (0, h.useTimeout)(() => {
    T(E.current);
  }, s.ANIMATION_REMOVE_LENGTH + 1);
  const R = (0, p.default)(() => {
    if (w.aborted) {
      return;
    }
    const {
      added: e,
      removed: t
    } = _(o.current, E.current);
    const l = O.current != null && O.current > n;
    O.current = null;
    if (!((0, r.default)(t, A) || a !== false)) {
      P(t);
    }
    let u = [];
    if (!(0, r.default)(e, b) && a === false && !l) {
      const t = function (e) {
        const t = {
          timestamp: 0,
          reactionAgg: ""
        };
        e.forEach(e => {
          e.reactionSenders.forEach(n => {
            if (t.timestamp < n.timestamp) {
              t.timestamp = n.timestamp;
              t.reactionAgg = e.reactionAggregate;
            }
          });
        });
        return t;
      }(E.current);
      e.forEach(e => {
        if (e.reactionAggregate === t.reactionAgg) {
          u.push(e);
        }
      });
    }
    if (!l) {
      E.current.forEach(e => {
        var t;
        const n = (t = o.current) === null || t === undefined ? undefined : t.find(t => t.reactionAggregate === e.reactionAggregate);
        if ((0, i.isFlattenedReactionsEnabled)()) {
          if (e.reactionByMe && n == null) {
            u = [e];
          }
        } else if (a === false && e.reactionByMe && n == null) {
          u = [e];
        }
      });
    }
    if (t.length === 0) {
      T(E.current);
    } else {
      D();
    }
    M(u);
    o.current = null;
    y.current = false;
  }, 100);
  if (!(0, r.default)(C, t)) {
    R();
  }
  (0, f.useEffect)(() => {
    if (a === true) {
      T(t);
    }
  }, []);
  const N = S.map(e => {
    const t = A.includes(e);
    const n = t ? {
      shouldRemoveAnimation: t,
      animationFinished: () => {
        I();
        T(E.current);
      }
    } : null;
    const a = (0, c.getReactionForDisplay)(e);
    const r = b.includes(e);
    return f.default.createElement(u.default, {
      key: a,
      xstyle: v.reactionItem,
      testid: "reaction-bubble-item"
    }, f.default.createElement(s.ReactionEmojiAnimated, {
      reaction: a,
      shouldAnimate: r,
      removeAnimation: n
    }));
  });
  const x = f.default.createElement(d.default, {
    counter: n,
    shouldAnimate: a === false,
    rollerCounterOptions: {
      showAggregateMax: true,
      showOneToTwoAnimation: true
    }
  });
  const {
    added: L
  } = _(o.current, E.current);
  const j = a === false && y.current && (L.length > 0 || k.current);
  k.current = j;
  return f.default.createElement(l.default, {
    shouldAnimateBubble: j,
    onAnimationEnd: () => {
      k.current = false;
    }
  }, N, x);
}
function C(e, t) {
  return (0, r.default)(e, t);
}
var b = (0, f.memo)(y, C);
exports.default = b;