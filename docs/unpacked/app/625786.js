var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastDismissBtn = exports.ToastBody = exports.ToastActionBtn = exports.Toast = undefined;
exports.genId = g;
var i = r(require("../vendor/873955.js"));
var a = require("./390737.js");
var o = require("./676345.js");
var s = require("./813133.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var u = r(require("./156720.js"));
var c = r(require("./637660.js"));
var d = require("./441673.js");
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = 4000;
const _ = {
  btnSuccess: {
    color: "j5au4wul",
    fontWeight: "nbipi2bn"
  },
  button: {
    color: "dud78hvd",
    cursor: "ajgl1lbb",
    fontSize: "f8jlpxt4",
    lineHeight: "a4ywakfo",
    flexShrink: "oq44ahr5"
  },
  close: {
    color: "afo7vhit"
  },
  right: {
    right: "grt5ktjy"
  },
  toast: {
    alignItems: "gndfcl4n",
    backgroundColor: "cqvkqxai",
    borderTopStartRadius: "cynldqnp",
    borderTopEndRadius: "l5pmshjt",
    borderBottomEndRadius: "ecxr5yey",
    borderBottomStartRadius: "lysxvg3k",
    color: "k17s6i4e",
    display: "p357zi0d",
    fontSize: "f8jlpxt4",
    lineHeight: "a4ywakfo"
  }
};
function g(e) {
  return (0, i.default)(e || "toast");
}
const m = (0, l.forwardRef)((e, t) => {
  var n;
  const {
    msg: r,
    action: i,
    duration: o = f
  } = e;
  const s = (0, c.default)(() => g()).current;
  const u = (n = e.id) !== null && n !== undefined ? n : s;
  const [p] = (0, d.useTimeout)(() => {
    a.ToastManager.close(u);
  }, o, {
    immediate: true
  });
  const _ = () => {
    a.ToastManager.close(u);
  };
  let m;
  (0, l.useImperativeHandle)(t, () => ({
    restartDelay: p
  }));
  if (i) {
    m = (Array.isArray(i) ? i : [i]).map((e, t) => l.default.createElement(h, {
      buttonText: e.actionText,
      onClick: e.dismiss ? _ : e.onAction,
      theme: e.theme,
      key: e.actionText.toString() + t
    }));
  }
  return l.default.createElement(y, {
    actionText: r,
    actionButtons: m
  });
});
exports.Toast = m;
m.displayName = "Toast";
const h = e => {
  let {
    buttonText: t,
    onClick: n,
    theme: r
  } = e;
  return l.default.createElement("button", {
    className: (0, u.default)(_.button, o.uiMargin.start15, r === "success" && _.btnSuccess),
    onClick: n
  }, t);
};
exports.ToastActionBtn = h;
exports.ToastDismissBtn = e => {
  let {
    buttonText: t,
    onClick: n
  } = e;
  return l.default.createElement("button", {
    className: (0, u.default)(_.close, o.uiMargin.start15),
    onClick: n
  }, l.default.createElement(s.XAltIcon, null));
};
const y = e => {
  let {
    toastPosition: t,
    actionText: n,
    actionButtons: r,
    dismissButton: i
  } = e;
  return l.default.createElement("div", {
    className: (0, u.default)(_.toast, o.uiPadding.vert12, o.uiPadding.horiz16, t === "RIGHT" && _.right),
    "aria-live": "polite"
  }, l.default.createElement("span", null, n), r, i);
};
exports.ToastBody = y;