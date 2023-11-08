var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Copyable = exports.COPYABLE_CSS_SELECTOR = exports.COPYABLE_CSS_CLASS = exports.APP_TEXT_TEMPLATE_DATA_ATTR = undefined;
exports.CopyableBlockQuote = function (e) {
  return d.default.createElement("blockquote", O(e));
};
exports.CopyableCode = function (e) {
  return d.default.createElement("code", O(e));
};
exports.CopyableDel = function (e) {
  return d.default.createElement("del", O(e));
};
exports.CopyableDiv = function (e) {
  return d.default.createElement("div", O(e));
};
exports.CopyableEm = function (e) {
  return d.default.createElement("em", O(e));
};
exports.CopyableImg = undefined;
exports.CopyableLink = function (e) {
  const t = O(e);
  const n = t.href;
  if (n && !c.default.hasValidUrlScheme(n)) {
    return d.default.createElement("span", null);
  }
  return d.default.createElement("a", t);
};
exports.CopyableOl = function (e) {
  return d.default.createElement("ol", O(e));
};
exports.CopyableSpan = function (e) {
  return d.default.createElement("span", O(e));
};
exports.CopyableStrong = function (e) {
  return d.default.createElement("strong", O(e));
};
exports.CopyableUl = function (e) {
  return d.default.createElement("ul", O(e));
};
exports.PLAIN_TEXT_DATA_ATTR = undefined;
exports.findCopyableChildren = function (e) {
  const t = Array.from(e.querySelectorAll(y));
  return t.filter(e => !t.some(t => t !== e && t.contains(e)));
};
exports.getAppTextTemplateData = function (e) {
  return e.dataset[A];
};
exports.getPlainTextData = function (e) {
  return e.dataset[S];
};
exports.getPrePlainTextData = function (e) {
  return e.dataset[T];
};
exports.isCopyable = function (e) {
  return e instanceof HTMLElement && (0, u.default)(e, y);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/967154.js"));
var o = r(require("../vendor/506479.js"));
var s = require("./396574.js");
var l = r(require("./489376.js"));
var u = r(require("./216114.js"));
var c = r(require("./79291.js"));
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var p = r(require("./156720.js"));
const f = ["forwardedRef"];
const _ = ["element"];
const g = ["plainText", "prePlainText", "appTextTemplate", "xstyle"];
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = "copyable-text";
exports.COPYABLE_CSS_CLASS = h;
const y = ".copyable-text";
exports.COPYABLE_CSS_SELECTOR = y;
const E = "data-plain-text";
const S = (0, l.default)(E);
exports.PLAIN_TEXT_DATA_ATTR = S;
const v = "data-pre-plain-text";
const T = (0, l.default)(v);
const M = "data-app-text-template";
const A = (0, l.default)(M);
exports.APP_TEXT_TEMPLATE_DATA_ATTR = A;
const b = (0, d.forwardRef)((e, t) => {
  var n;
  let {
    forwardedRef: r
  } = e;
  const i = O((0, o.default)(e, f));
  return d.default.createElement("img", (0, a.default)({
    ref: r != null ? r : t
  }, i, {
    tabIndex: i.onClick ? 0 : -1,
    alt: (n = i.alt) !== null && n !== undefined ? n : ""
  }));
});
function C(e, t) {
  let {
    element: n
  } = e;
  let r = (0, o.default)(e, _);
  return d.default.createElement(n, (0, a.default)({}, O(r), {
    ref: t
  }));
}
exports.CopyableImg = b;
b.displayName = "CopyableImg";
const P = (0, d.forwardRef)(C);
function O(e) {
  let {
    plainText: t,
    prePlainText: n,
    appTextTemplate: r,
    xstyle: a
  } = e;
  let l = (0, o.default)(e, g);
  const u = (0, i.default)({}, l);
  u.className = (0, s.classnamesConvertMeToStylexPlease)(l.className, h);
  if (t != null) {
    u[E] = t;
  }
  if (n != null) {
    u[v] = n;
  }
  if (r != null) {
    u[M] = r;
  }
  if (a != null) {
    u.className = (0, s.classnamesConvertMeToStylexPlease)(u.className, (0, p.default)(a));
  }
  return u;
}
exports.Copyable = P;
P.displayName = "Copyable";