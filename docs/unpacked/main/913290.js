var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSMenu = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = require("./268541.js");
var i = function (e, t) {
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
const s = (0, i.forwardRef)((e, t) => {
  const [n, a] = (0, i.useState)(new Map());
  const u = (0, l.useRegister)({
    onChange: (c = (0, o.default)(function* (e) {
      yield a(e);
    }), function () {
      return c.apply(this, arguments);
    }),
    onOrderChange: (s = (0, o.default)(function* (e) {
      yield a(e);
    }), function () {
      return s.apply(this, arguments);
    })
  });
  var s;
  var c;
  return i.default.createElement(l.Register, {
    registerRef: u
  }, i.default.createElement(l.WDSMenuController, (0, r.default)({
    data: n
  }, e, {
    ref: t
  })));
});
exports.WDSMenu = s;
s.displayName = "WDSMenu";