var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaneToggle = function (e) {
  let {
    onClick: t,
    pointerDirection: n
  } = e;
  const [a, i] = (0, o.useState)(true);
  const s = (0, r.useIsDarkTheme)();
  if (!a) {
    return null;
  }
  return o.default.createElement("div", {
    className: (0, l.default)(u.wrapper, n === "right" ? u.pointerRight : u.pointerLeft, s && u.darkMode),
    onClick: () => {
      i(false);
      self.setTimeout(() => i(true), 500);
      t();
    },
    tabIndex: "0",
    role: "button",
    "aria-hidden": "true"
  });
};
var r = require("../app/667738.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
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
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = {
  wrapper: {
    position: "lhggkp7q",
    start: "tkdu00h0",
    top: "qq0sjtgm",
    height: "ppled2lx",
    cursor: "sdo006nr",
    opacity: "axi1ht8l",
    zIndex: "b9fczbqn",
    transition: "onkrk2ft",
    width: "sazkszsz",
    backgroundColor: "t6kzo9t1",
    borderStart: "rkx1utm6",
    ":hover": {
      transition: "e722dx1l",
      opacity: "k9vvdk9a"
    }
  },
  darkMode: {
    backgroundColor: "syca7q87",
    borderStart: "e4xiuwjv"
  },
  pointerRight: {
    cursor: "i9wwz5gb"
  },
  pointerLeft: {
    cursor: "sdo006nr"
  }
};