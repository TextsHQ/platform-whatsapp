Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = exports.StyleXSheet = undefined;
var r;
var i = (r = require("../vendor/441143.js")) && r.__esModule ? r : {
  default: r
};
function a(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
const o = "__fb-light-mode";
const s = "__fb-dark-mode";
function l(e, t) {
  const n = [];
  n.push("".concat(e, " {"));
  for (const e in t) {
    const r = t[e];
    n.push("  --".concat(e, ": ").concat(r, ";"));
  }
  n.push("}");
  return n.join("\n");
}
const u = /var\(--(.*?)\)/g;
class c {
  constructor(e) {
    var t;
    a(this, "rootTheme", undefined);
    a(this, "rootDarkTheme", undefined);
    a(this, "supportsVariables", undefined);
    a(this, "rules", undefined);
    a(this, "injected", undefined);
    a(this, "tag", undefined);
    a(this, "ruleForPriority", undefined);
    this.tag = null;
    this.injected = false;
    this.ruleForPriority = new Map();
    this.rules = [];
    this.rootTheme = e.rootTheme;
    this.rootDarkTheme = e.rootDarkTheme;
    this.supportsVariables = (t = e.supportsVariables) !== null && t !== undefined ? t : require.g.CSS != null && require.g.CSS.supports != null && require.g.CSS.supports("--fake-var:0");
  }
  getVariableMatch() {
    return u;
  }
  isHeadless() {
    var e;
    var t;
    return this.tag == null || ((e = require.g) === null || e === undefined || (t = e.document) === null || t === undefined ? undefined : t.body) == null;
  }
  getTag() {
    const {
      tag: e
    } = this;
    (0, i.default)(e != null, "expected tag");
    return e;
  }
  getCSS() {
    return this.rules.join("\n");
  }
  getRulePosition(e) {
    return this.rules.indexOf(e);
  }
  getRuleCount() {
    return this.rules.length;
  }
  inject() {
    var e;
    if (!this.injected) {
      this.injected = true;
      if (((e = require.g.document) === null || e === undefined ? undefined : e.body) != null) {
        this.tag = function () {
          const e = document.createElement("style");
          e.setAttribute("type", "text/css");
          e.setAttribute("data-styled", "true");
          (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
          return e;
        }();
        this.injectTheme();
      } else {
        this.injectTheme();
      }
    }
  }
  injectTheme() {
    if (this.rootTheme != null) {
      this.insert(l(":root, .".concat(o), this.rootTheme), 0);
    }
    if (this.rootDarkTheme != null) {
      this.insert(l(".".concat(s, ":root, .").concat(s), this.rootDarkTheme), 0);
    }
  }
  __injectCustomThemeForTesting(e, t) {
    if (t != null) {
      this.insert(l(e, t), 0);
    }
  }
  delete(e) {
    const t = this.rules.indexOf(e);
    (0, i.default)(t >= 0, "Couldn't find the index for rule %s", e);
    this.rules.splice(t, 1);
    if (this.isHeadless()) {
      return;
    }
    const n = this.getTag().sheet;
    (0, i.default)(n, "expected sheet");
    n.deleteRule(t);
  }
  normalizeRule(e) {
    const {
      rootTheme: t
    } = this;
    if (this.supportsVariables || t == null) {
      return e;
    } else {
      return e.replace(u, (e, n) => t[n]);
    }
  }
  getInsertPositionForPriority(e) {
    const t = this.ruleForPriority.get(e);
    if (t != null) {
      return this.rules.indexOf(t) + 1;
    }
    const n = Array.from(this.ruleForPriority.keys()).sort((e, t) => t - e).filter(t => t > e ? 1 : 0);
    if (n.length === 0) {
      return this.getRuleCount();
    }
    const r = n.pop();
    return this.rules.indexOf(this.ruleForPriority.get(r));
  }
  insert(e, t, n) {
    if (this.injected === false) {
      this.inject();
    }
    if (n != null) {
      this.insert(d(e, "html:not([dir='rtl'])"), t);
      return void this.insert(d(n, "html[dir='rtl']"), t);
    }
    const r = e;
    if (this.rules.includes(r)) {
      return;
    }
    const i = this.normalizeRule(r);
    const a = this.getInsertPositionForPriority(t);
    this.rules.splice(a, 0, i);
    this.ruleForPriority.set(t, i);
    if (this.isHeadless()) {
      return;
    }
    const o = this.getTag().sheet;
    if (o != null) {
      try {
        o.insertRule(i, a);
      } catch (e) {}
    }
  }
}
function d(e, t) {
  if (!e.startsWith("@")) {
    return "".concat(t, " ").concat(e);
  }
  const n = e.indexOf("{");
  const r = e.slice(0, n + 1);
  const i = e.slice(n + 1);
  return "".concat(r).concat(t, " ").concat(i);
}
exports.StyleXSheet = c;
a(c, "LIGHT_MODE_CLASS_NAME", o);
a(c, "DARK_MODE_CLASS_NAME", s);
const p = new c({
  supportsVariables: true,
  rootTheme: {},
  rootDarkTheme: {}
});
exports.styleSheet = p;