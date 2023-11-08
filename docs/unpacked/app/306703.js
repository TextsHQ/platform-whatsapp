var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selectable = exports.SELECTABLE_INPUT_CSS_CLASS = exports.SELECTABLE_CSS_SELECTOR = exports.SELECTABLE_CSS_CLASS = undefined;
exports.SelectableBlockQuote = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableBlockQuote, t);
  } else {
    return d.default.createElement("blockquote", t);
  }
};
exports.SelectableCode = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableCode, t);
  } else {
    return d.default.createElement("code", t);
  }
};
exports.SelectableDel = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableDel, t);
  } else {
    return d.default.createElement("del", t);
  }
};
exports.SelectableDiv = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableDiv, t);
  } else {
    return d.default.createElement("div", t);
  }
};
exports.SelectableEm = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableEm, t);
  } else {
    return d.default.createElement("em", t);
  }
};
exports.SelectableImg = undefined;
exports.SelectableLink = function (e) {
  const t = O(e);
  const n = e.href;
  if (n && !c.default.hasValidUrlScheme(n)) {
    return d.default.createElement("span", null);
  }
  if (e.selectable) {
    return d.default.createElement(s.CopyableLink, t);
  } else {
    return d.default.createElement("a", t);
  }
};
exports.SelectableOl = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableOl, t);
  } else {
    return d.default.createElement("ol", t);
  }
};
exports.SelectableSpan = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableSpan, t);
  } else {
    return d.default.createElement("span", t);
  }
};
exports.SelectableStrong = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableStrong, t);
  } else {
    return d.default.createElement("strong", t);
  }
};
exports.SelectableUl = function (e) {
  const t = O(e);
  if (e.selectable) {
    return d.default.createElement(s.CopyableUl, t);
  } else {
    return d.default.createElement("ul", t);
  }
};
exports.createSelectableElement = function (e, t) {
  const n = document.createElement(e);
  n.setAttribute("class", h);
  if (t || t === "") {
    n.dataset[s.PLAIN_TEXT_DATA_ATTR] = t;
  }
  return n;
};
exports.findSelectAllParent = function (e) {
  if (!A(e)) {
    return null;
  }
  let t;
  let n = e;
  let r = 0;
  for (; n && r < 5;) {
    if (M(n) && n instanceof HTMLElement) {
      t = n;
      break;
    }
    n = n.parentElement;
    r++;
  }
  return t;
};
exports.findSelectableChildren = function (e, t) {
  if (!(e instanceof HTMLElement)) {
    return [];
  }
  if (t || T(e)) {
    return Array.from(e.childNodes);
  }
  const n = Array.from(e.querySelectorAll(y));
  return n.filter(e => !n.some(t => t !== e && t.contains(e)));
};
exports.hasSelectableChildren = function (e) {
  if (!(e instanceof HTMLElement)) {
    return false;
  }
  return !!e.querySelector(y);
};
exports.isSelectAll = M;
exports.isSelectable = T;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./396574.js");
var s = require("./175448.js");
var l = r(require("./109818.js"));
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
  var n = g(t);
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
const p = ["forwardedRef"];
const f = ["element"];
const _ = ["className", "plainText", "prePlainText", "appTextTemplate", "selectable", "selectAll"];
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = "selectable-text";
exports.SELECTABLE_CSS_CLASS = m;
const h = `${s.COPYABLE_CSS_CLASS} selectable-text`;
const y = ".selectable-text";
exports.SELECTABLE_CSS_SELECTOR = y;
const E = h;
exports.SELECTABLE_INPUT_CSS_CLASS = E;
const S = "select-all";
const v = ".select-all";
function T(e) {
  if (!e) {
    return false;
  }
  if (!(e instanceof HTMLElement)) {
    return T(e.parentElement);
  }
  return (0, u.default)(e, y) || (0, u.default)(e, ".selectable-text *");
}
function M(e) {
  return !!e && (e instanceof HTMLElement ? (0, u.default)(e, v) : M(e.parentElement));
}
function A(e) {
  return !!e && (e instanceof HTMLElement ? (0, u.default)(e, ".select-all *") : A(e.parentElement));
}
const b = (0, d.forwardRef)((e, t) => {
  var n;
  let {
    forwardedRef: r
  } = e;
  let o = (0, a.default)(e, p);
  const l = O(o);
  if (o.selectable) {
    return d.default.createElement(s.CopyableImg, (0, i.default)({
      forwardedRef: t
    }, l));
  } else {
    return d.default.createElement("img", (0, i.default)({
      ref: t
    }, l, {
      tabIndex: l.onClick ? 0 : -1,
      alt: (n = o.alt) !== null && n !== undefined ? n : ""
    }));
  }
});
function C(e, t) {
  let {
    element: n
  } = e;
  let r = (0, a.default)(e, f);
  const o = O(r);
  if (r.selectable) {
    return d.default.createElement(s.Copyable, (0, i.default)({
      element: n
    }, o, {
      ref: t
    }));
  } else {
    return d.default.createElement(n, (0, i.default)({}, o, {
      ref: t
    }));
  }
}
exports.SelectableImg = b;
b.displayName = "SelectableImg";
const P = (0, d.forwardRef)(C);
function O(e) {
  let {
    className: t,
    plainText: n,
    prePlainText: r,
    appTextTemplate: i,
    selectable: s,
    selectAll: u
  } = e;
  const c = (0, a.default)(e, _);
  if (s) {
    c.plainText = n;
    c.prePlainText = r;
    c.appTextTemplate = i;
  }
  c.className = (0, o.classnamesConvertMeToStylexPlease)(t, l.default.noop, {
    [m]: s,
    [S]: s && u
  });
  return c;
}
exports.Selectable = P;
P.displayName = "Selectable";