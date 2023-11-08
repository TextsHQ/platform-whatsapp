var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigatableList = function (e) {
  const {
    children: t,
    items: n,
    onSelect: a,
    forceSelection: c = false,
    rotate: d = false,
    handlers: f,
    listControllerRef: p,
    initialActiveItem: m
  } = e;
  const h = (0, l.default)(e, s);
  (0, u.useEffect)(() => {
    if (m != null) {
      n.setVal(m);
    }
    if (c === true && n.index < 0) {
      n.setFirst(false);
    }
  }, [n, c, m]);
  const {
    down: g,
    up: E,
    enter: v
  } = f || {};
  const _ = () => {
    if (d && n.index === n.list.length - 1) {
      n.setFirst(false);
    } else {
      n.setNext(false);
    }
  };
  const y = () => {
    if (n.index === 0) {
      if (d) {
        return void n.setLast(false);
      }
      if (c) {
        return;
      }
    }
    n.setPrev(false);
  };
  const C = () => {
    const e = n.getVal();
    if (e != null && a != null && (e == null ? undefined : e.disabled) !== true) {
      a(e);
    }
  };
  const b = (0, o.default)((0, o.default)({}, f), {}, {
    down: e => {
      if ((g == null ? undefined : g(e)) !== false) {
        _();
      }
    },
    up: e => {
      if ((E == null ? undefined : E(e)) !== false) {
        y();
        e.preventDefault();
      }
    },
    enter: e => {
      if ((v == null ? undefined : v(e)) !== false) {
        C();
      }
    }
  });
  (0, u.useImperativeHandle)(p, () => ({
    goDown: _,
    goUp: y,
    selectItem: C
  }));
  return u.default.createElement(i.HotKeys, (0, r.default)({
    handlers: b
  }, h), t);
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../vendor/506479.js"));
var i = require("../app/81644.js");
var u = function (e, t) {
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
const s = ["children", "items", "onSelect", "forceSelection", "rotate", "handlers", "listControllerRef", "initialActiveItem"];
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