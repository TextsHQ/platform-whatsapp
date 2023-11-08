var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareCtwaContextSend = function (e, t) {
  var n;
  var a;
  if (t != null) {
    return (0, r.default)({}, t);
  }
  const u = e == null ? undefined : e.sourceUrl;
  if (u == null || u === "") {
    return;
  }
  const s = (0, i.getMaybeMeUser)();
  if (s == null) {
    return;
  }
  const c = o.findLink(u, false, s);
  return {
    sourceUrl: u,
    sourceType: "",
    sourceId: "",
    mediaType: l.ContextInfo$ExternalAdReplyInfo$MediaType.NONE,
    isSuspiciousLink: !((n = c == null || (a = c.suspiciousCharacters) === null || a === undefined ? undefined : a.size) === null || n === undefined || !n)
  };
};
var r = a(require("../vendor/81109.js"));
var o = function (e, t) {
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
}(require("../app/446303.js"));
var l = require("../app/533494.js");
var i = require("../app/459857.js");
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