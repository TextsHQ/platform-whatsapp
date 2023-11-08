var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchMenuItem = function (e) {
  const {
    on: t,
    initialState: n = false,
    onSelect: a
  } = e;
  const c = (0, o.default)(e, s);
  const [d, f] = (0, u.useState)(n);
  (0, u.useEffect)(() => {
    if (t != null) {
      f(t);
    }
  }, [t]);
  return u.default.createElement(i.WDSMenuItem, (0, r.default)({}, c, {
    type: "switch",
    onSelect: () => {
      f(!d);
      if (!(a == null)) {
        a(!d);
      }
    },
    primaryRight: u.default.createElement(l.Switch, {
      checked: d,
      onChange: () => {},
      tabIndex: -1
    })
  }));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../main-chunk/137506.js");
var i = require("./957533.js");
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
const s = ["on", "initialState", "onSelect"];
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