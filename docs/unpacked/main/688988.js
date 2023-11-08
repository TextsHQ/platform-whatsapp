Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = r(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, l, i);
      } else {
        a[l] = e[l];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function r(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (r = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function o(e, t) {
  const {
    mimes: n,
    onChange: r,
    multiple: o = true
  } = e;
  const l = (0, a.useRef)(null);
  const i = () => {
    if (l.current) {
      l.current.value = "";
      l.current.click();
    }
  };
  (0, a.useImperativeHandle)(t, () => ({
    open: i
  }));
  return a.default.createElement("input", {
    accept: n,
    ref: l,
    type: "file",
    multiple: o,
    style: {
      display: "none"
    },
    onClick: e => {
      e.stopPropagation();
    },
    onChange: e => {
      r(e);
    }
  });
}
var l = (0, a.forwardRef)(o);
exports.default = l;