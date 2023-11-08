var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectMenuItem = function (e) {
  const t = (0, p.useContext)(E);
  if (t == null) {
    throw (0, f.default)("[menu] `SelectMenuItem` must be used inside of a `SelectMenuItemGroup`");
  }
  const n = t.selection.has(e.optionId);
  let a;
  let o;
  if (t.isMultiselect) {
    a = "multi-select";
    o = n ? p.default.createElement(l.CheckboxRoundCheckedIcon, null) : p.default.createElement(i.CheckboxRoundUncheckedIcon, null);
  } else {
    a = "single-select";
    o = n ? p.default.createElement(u.CheckmarkIcon, {
      color: s.SvgColorProp.TEAL
    }) : null;
  }
  return p.default.createElement(d.WDSMenuItem, (0, r.default)({
    detailRight: o
  }, e, {
    type: a
  }));
};
exports.SelectMenuItemGroup = function (e) {
  const {
    multiselect: t,
    children: n,
    initialSelection: a
  } = e;
  const r = (0, c.useMenu)();
  const [l, {
    clear: i,
    toggle: u
  }] = (0, h.useSet)();
  const s = p.Children.map(n, e => e.props.optionId);
  const d = function () {
    var n = (0, o.default)(function* (n, a) {
      var r;
      let o;
      o = t === true ? yield u(n) : yield i([n]);
      if (!((r = e.onSelect) === null || r === undefined)) {
        r.call(e, n, a, o);
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  (0, m.useListener)(r.events, "select", function () {
    var e = (0, o.default)(function* (e, t) {
      if (s.includes(e)) {
        yield d(e, t);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  (0, p.useEffect)(() => {
    if (a != null) {
      const e = Array.isArray(a) ? a : [a];
      i(e);
    }
  }, []);
  return p.default.createElement(E.Provider, {
    value: {
      selection: l,
      isMultiselect: t === true
    }
  }, n);
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = require("./412938.js");
var i = require("./378762.js");
var u = require("../app/731971.js");
var s = require("../app/220584.js");
var c = require("./268541.js");
var d = require("./957533.js");
var f = a(require("../app/556869.js"));
var p = function (e, t) {
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
var m = require("../app/808446.js");
var h = require("./487655.js");
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
const E = (0, p.createContext)(null);