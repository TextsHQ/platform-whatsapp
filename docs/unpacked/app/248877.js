Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCookies = function () {
  if ((0, o.isWorker)()) {
    return;
  }
  i.setCookie({
    name: "ref",
    expirationDate: 0,
    domain: r.COOKIE_DOMAIN,
    path: a.PP_REF
  });
  i.setCookie({
    name: "tok",
    expirationDate: 0,
    domain: r.COOKIE_DOMAIN,
    path: a.PP_TOK
  });
};
exports.setRefTokCookies = function (e, t) {
  if ((0, o.isWorker)()) {
    return;
  }
  i.setCookie({
    name: "ref",
    value: e,
    path: a.PP_REF,
    domain: r.COOKIE_DOMAIN,
    secure: true
  });
  i.setCookie({
    name: "tok",
    value: t,
    path: a.PP_TOK,
    domain: r.COOKIE_DOMAIN,
    secure: true
  });
};
var r = require("./247451.js");
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
}(require("./639899.js"));
var a = require("./476314.js");
var o = require("./755985.js");
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