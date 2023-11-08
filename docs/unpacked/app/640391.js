var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = t != null ? t : "";
  const r = e.mentionMap();
  const u = e.groupMentionMap();
  if (!r && !u) {
    return function (e) {
      return (0, i.default)(e, function () {
        if (!c) {
          c = a.Unformat({
            mentions: {}
          });
        }
        return c;
      }(), l.default);
    }(n);
  }
  if ((0, s.isDropLastNameEnabled)()) {
    const t = (0, o.getChat)(e).groupMetadata;
    if (t) {
      const e = a.FormattedGroupNotification({
        mentions: r,
        groupMentions: u,
        groupMetadata: t
      });
      return (0, i.default)(n, e, l.default);
    }
  }
  const d = a.FormattedNotification({
    mentions: r,
    groupMentions: u
  });
  return (0, i.default)(n, d, l.default);
};
var i = r(require("./146375.js"));
var a = function (e, t) {
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
}(require("./675886.js"));
var o = require("./163755.js");
var s = require("./97858.js");
var l = r(require("./860922.js"));
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
let c;