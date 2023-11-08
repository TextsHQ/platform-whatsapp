var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("./409623.js");
var i = require("../app/81644.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var u = o(require("../app/710629.js"));
const d = ["enabled", "setSearchText", "onEnter", "onDown", "onFocus", "searchType", "xstyle"];
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function f(e, t) {
  const {
    enabled: n = true,
    setSearchText: o,
    onEnter: c,
    onDown: f,
    onFocus: m,
    searchType: p,
    xstyle: h
  } = e;
  const E = (0, a.default)(e, d);
  const g = (0, u.default)(e => {
    o(e);
  }, 100);
  if (n) {
    return s.default.createElement(i.HotKeys, {
      handlers: {
        down: f
      },
      onFocus: m,
      xstyle: h
    }, s.default.createElement(l.ListSearch, (0, r.default)({
      ref: t,
      onSearch: g,
      onEnter: c,
      type: p
    }, E)));
  } else {
    return null;
  }
}
var m = (0, s.forwardRef)(f);
exports.default = m;