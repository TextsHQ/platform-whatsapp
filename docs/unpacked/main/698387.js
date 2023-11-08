var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/163755.js");
var o = a(require("../app/343087.js"));
var l = require("../app/860888.js");
var i = a(require("./654449.js"));
var u = require("../app/787742.js");
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
var c = require("./871210.js");
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
function f(e) {
  const {
    msg: t
  } = e;
  const [n, a, d, f] = (0, c.useMsgValues)(e.msg.id, [u.getT, u.getThumbnailHQ, r.getAsUrl, u.getIsSentByMe]);
  (0, s.useEffect)(() => {
    const e = d;
    if (!(!e || (0, l.hqLinkPreviewExpired)(n) || e.thumbnailHQ)) {
      (0, o.default)({
        chat: (0, r.getChat)(t),
        msg: e,
        isPreload: false
      });
    }
  }, [d, n, a, f, t]);
  return s.default.createElement(i.default, {
    msg: t.unsafe()
  });
}
var p = (0, s.memo)(f);
exports.default = p;