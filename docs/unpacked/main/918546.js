var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    loader: t,
    loading: n
  } = e;
  const a = (0, l.default)({
    loader: t,
    loading: e => e.pastDelay ? n(e) : null,
    render(e, t) {
      let {
        forwardedRefDoNotUse: n
      } = t;
      let a = (0, o.default)(t, u);
      return i.default.createElement(e, (0, r.default)({
        ref: n
      }, a));
    }
  });
  return (0, i.forwardRef)((e, t) => i.default.createElement(a, (0, r.default)({
    forwardedRefDoNotUse: t
  }, e)));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = a(require("./114945.js"));
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
const u = ["forwardedRefDoNotUse"];
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}