var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    blob: t
  } = e;
  const [n, a] = (0, i.useState)(null);
  (0, i.useEffect)(() => {
    (0, r.blobToArrayBuffer)(t).then(l.default).then(e => {
      a(e);
    }).catch(e => {
      __LOG__(3)`AnimationCanvas error: ${e}`;
    });
  }, []);
  if (!n) {
    return e.renderPreview();
  }
  const {
    width: u,
    height: s,
    frames: c
  } = n;
  return i.default.createElement(o.default, {
    className: e.className,
    width: u,
    height: s,
    animationFrames: c,
    startAnimation: Boolean(e.loopAnimation || e.startAnimation),
    maxLoops: e.maxLoops,
    onClick: e.onClick
  });
};
var r = require("../app/698210.js");
var o = a(require("./395831.js"));
var l = a(require("./566518.js"));
var i = function (e, t) {
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