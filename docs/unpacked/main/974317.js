var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    useShortName: t,
    isDisabled: n,
    onDelete: a,
    selections: d
  } = e;
  const m = (0, i.useRef)(null);
  const h = (0, s.default)();
  (0, c.useListener)(d, "all", (e, t) => {
    h();
    if (t && m.current instanceof HTMLDivElement) {
      m.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
  const g = e.selections.getSelected();
  return i.default.createElement(l.default, {
    transitionName: "slide-up-down-footer",
    className: (0, u.default)(f, o.uiPadding.top20, o.uiPadding.end25, o.uiPadding.bottom5, o.uiPadding.start24)
  }, g.map(e => i.default.createElement(r.Contact, {
    contact: e,
    useShortName: t != null && t,
    onDelete: (n == null ? undefined : n(e)) ? a : undefined,
    type: r.ContactCellType.SMALL,
    key: e.id.toString(),
    theme: "list-names",
    waitIdle: true
  })), i.default.createElement("div", {
    className: (0, u.default)(p),
    ref: m
  }));
};
var r = require("./822652.js");
var o = require("../app/676345.js");
var l = a(require("../app/844453.js"));
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var u = a(require("../app/156720.js"));
var s = a(require("../app/969651.js"));
var c = require("../app/808446.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  display: "p357zi0d",
  flexWrap: "lkhkxwyq",
  maxHeight: "ks55m9kc",
  overflowX: "i44ccddp",
  overflowY: "ag5g9lrv",
  backgroundColor: "ihvf49ua"
};
const p = {
  visibility: "kojwoqec"
};