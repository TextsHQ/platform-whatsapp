var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/786566.js"));
var o = require("./633668.js");
var l = require("./414493.js");
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
function s(e, t) {
  let {
    title: n,
    subtitle: a,
    onDismiss: u,
    onClick: s,
    nuxManager: c,
    theme: d,
    actionText: f
  } = e;
  const [p, m] = (0, i.useState)(true);
  c.show();
  const h = i.default.createElement(o.NuxBannerText, {
    subtitle: a,
    actionText: f
  });
  return i.default.createElement(i.default.Fragment, null, p && i.default.createElement(r.default, {
    ref: t,
    type: d,
    title: n,
    text: h,
    onDismiss: e => {
      (0, l.stopEvent)(e);
      c.dismiss();
      if (!(u == null)) {
        u();
      }
      m(false);
    },
    action: () => {
      c.click();
      if (!(s == null)) {
        s();
      }
    }
  }));
}
var c = (0, i.forwardRef)(s);
exports.default = c;