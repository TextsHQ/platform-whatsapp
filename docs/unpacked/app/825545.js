var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var a = r(require("./156720.js"));
var o = r(require("./49710.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const l = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  zIndex: "atxxqlz9",
  width: "ln8gz9je",
  height: "ppled2lx"
};
function u(e, t) {
  const {
    disableFromWithin: n,
    onDrop: r,
    onDragChange: s
  } = e;
  const [u, c] = (0, i.useState)(false);
  const [d, p] = (0, i.useState)(false);
  const [f, _] = (0, i.useState)(false);
  const g = (0, o.default)(d);
  const m = () => {
    if (n) {
      c(true);
    }
  };
  const h = () => {
    if (n) {
      c(false);
    }
  };
  const y = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!(d || u)) {
      p(true);
      _(false);
      (function (e) {
        if (e.dataTransfer) {
          try {
            if (!e.dataTransfer.dropEffect) {
              return;
            }
          } catch (e) {
            return;
          }
          if (e.dataTransfer.effectAllowed) {
            e.nativeEvent.dataTransfer.dropEffect = "copy";
          }
        }
      })(e);
    }
  };
  (0, i.useEffect)(() => {
    if (g != null && g !== d && s) {
      s(d, f);
    }
  }, [f, d, s, g]);
  (0, i.useImperativeHandle)(t, () => ({
    onDragStart: m,
    onDragEnd: h,
    onDragOver: y
  }));
  return i.default.createElement("div", {
    key: "mask",
    className: (0, a.default)(l),
    style: d ? {} : {
      display: "none"
    },
    onDragLeave: e => {
      e.preventDefault();
      e.stopPropagation();
      if (d) {
        p(false);
        _(false);
      }
    },
    onDrop: e => {
      e.preventDefault();
      e.stopPropagation();
      p(false);
      _(true);
      if (r && !u) {
        r(e);
      }
    }
  });
}
var c = (0, i.forwardRef)(u);
exports.default = c;