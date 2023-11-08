var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = exports.INFO_DRAWER_MAX_ROWS = exports.ChatInfoDrawerSection = exports.ChatInfoDrawerListSection = exports.ChatInfoDrawerButtonsSection = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("./969358.js"));
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
exports.INFO_DRAWER_MAX_ROWS = 10;
exports.INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST = 11;
const s = {
  title: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    marginBottom: "or9x5nie"
  },
  titleText: {
    fontSize: "bze30y65",
    lineHeight: "a4ywakfo"
  },
  container: {
    paddingTop: "i4pc7asj",
    paddingEnd: "bcymb0na",
    paddingBottom: "myel2vfb",
    paddingStart: "e8k79tju"
  },
  containerWithoutTitle: {
    paddingTop: "i5tg98hk",
    paddingEnd: "bcymb0na",
    paddingBottom: "przvwfww",
    paddingStart: "e8k79tju",
    marginBottom: "mpdn4nr2"
  }
};
const c = (0, l.forwardRef)((e, t) => l.default.createElement(o.default, (0, r.default)({}, e, {
  xstyle: [s.container, e.title == null && s.containerWithoutTitle, e.xstyle],
  titleXStyle: s.title,
  titleTextXStyle: s.titleText,
  theme: "chat-info",
  ref: t
}), e.children));
exports.ChatInfoDrawerSection = c;
c.displayName = "ChatInfoDrawerSection";
const d = {
  drawerSectionContainer: {
    paddingBottom: "przvwfww"
  },
  contentContainer: {
    marginTop: "tt8xd2xn",
    marginEnd: "dl6j7rsh",
    marginBottom: "mpdn4nr2",
    marginStart: "avk8rzj1"
  }
};
const f = (0, l.forwardRef)((e, t) => l.default.createElement(c, (0, r.default)({}, e, {
  xstyle: [d.drawerSectionContainer, e.xstyle],
  ref: t
}), l.default.createElement("div", {
  className: (0, i.default)(d.contentContainer)
}, e.children)));
exports.ChatInfoDrawerListSection = f;
f.displayName = "ChatInfoDrawerListSection";
const p = {
  drawerSectionContainer: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  }
};
const m = (0, l.forwardRef)((e, t) => l.default.createElement(c, (0, r.default)({}, e, {
  xstyle: [p.drawerSectionContainer, e.xstyle],
  ref: t
}), e.children));
exports.ChatInfoDrawerButtonsSection = m;
m.displayName = "ChatInfoDrawerButtonsSection";