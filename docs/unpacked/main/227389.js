var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/435161.js"));
var o = require("./822652.js");
var l = require("../app/81644.js");
var i = a(require("../app/932325.js"));
var u = a(require("../app/237889.js"));
var s = function (e, t) {
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
var c = a(require("../app/637660.js"));
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
const f = (0, o.ContactFactory)();
function p(e, t) {
  const {
    contacts: n,
    onFocusSearch: a,
    onDelete: d
  } = e;
  const p = (0, c.default)(() => new u.default(n, e => e.id.toString()));
  const m = () => {
    if (n == null ? undefined : n.length) {
      p.current.setLast(true);
    }
  };
  const h = e => {
    e.preventDefault();
    e.stopPropagation();
    if (p.current.prev() > -1) {
      p.current.setPrev(true);
    }
  };
  const g = e => {
    e.preventDefault();
    e.stopPropagation();
    const t = p.current.next();
    if (p.current.index === t) {
      p.current.unset();
      if (!(a == null)) {
        a(e);
      }
    } else {
      p.current.setNext(true);
    }
  };
  const E = e => {
    e.preventDefault();
    e.stopPropagation();
    const t = p.current.getVal();
    if (t) {
      const a = n.find(e => e === t);
      if (a && d) {
        d(e, a);
      }
    }
  };
  const v = (e, t) => {
    p.current.setVal(t);
  };
  (0, s.useEffect)(() => {
    p.current.init(n, true);
  }, [n, p]);
  (0, s.useImperativeHandle)(t, () => ({
    focusLast: m
  }));
  if (!n) {
    return null;
  }
  const _ = n.length ? (0, r.default)(n, t => s.default.createElement(f, {
    contact: t,
    active: p.current,
    onDelete: e.onDelete,
    onClick: v,
    type: o.ContactCellType.SMALL,
    key: t.id.toString(),
    theme: e.theme,
    waitIdle: true
  })) : null;
  const y = {
    up: h,
    down: g
  };
  if (e.onDelete) {
    y[i.default.LR("left", "right")] = h;
    y[i.default.LR("right", "left")] = g;
    y.backspace = E;
  }
  const C = s.default.createElement("ul", null, _);
  return s.default.createElement(l.HotKeys, {
    handlers: y
  }, C);
}
var m = (0, s.forwardRef)(p);
exports.default = m;