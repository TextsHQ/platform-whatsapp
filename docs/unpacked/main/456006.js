var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANIMATION_REMOVE_LENGTH = undefined;
exports.ReactionEmojiAnimated = function (e) {
  let {
    reaction: t,
    shouldAnimate: n,
    removeAnimation: a
  } = e;
  const u = (0, l.useRef)(null);
  (0, l.useEffect)(() => {
    if ((a == null ? undefined : a.shouldRemoveAnimation) === true && u.current != null) {
      (0, o.default)(u.current, {
        scale: [0, 1]
      }, {
        duration: 70,
        easing: [0.83, 0, 0.17, 1]
      }).then(() => {
        a.animationFinished();
      });
    }
  }, [a, u]);
  return l.default.createElement("div", {
    ref: u,
    className: (0, i.default)(n && (a == null ? undefined : a.shouldRemoveAnimation) !== true && s.animateReaction)
  }, l.default.createElement(r.ReactionEmoji, {
    reaction: t,
    scale: "bubble"
  }));
};
var r = require("./900894.js");
var o = a(require("../app/330619.js"));
var l = function (e, t) {
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
var i = a(require("../app/156720.js"));
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
exports.ANIMATION_REMOVE_LENGTH = 70;
const s = {
  animateReaction: {
    animationName: "jc2at2x4",
    animationDuration: "pext2d22",
    animationTimingFunction: "mjl5wphb",
    animationFillMode: "a21kwdn3",
    backfaceVisibility: "ou3430m0",
    willChange: "lia7vegv"
  }
};