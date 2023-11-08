var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/63014.js");
var o = require("../app/780549.js");
var l = require("../app/787742.js");
var i = a(require("../vendor/730381.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var s = a(require("../app/156720.js"));
var c = a(require("../app/969651.js"));
var d = require("../app/808446.js");
var f = require("../app/655241.js");
var p = require("./871210.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  textTransform: "aprpv14t"
};
function g(e) {
  const {
    t
  } = e;
  const n = (0, c.default)();
  const [a] = (0, p.useMsgValues)(e.msg.id, [l.getT]);
  (0, d.useListener)(r.Clock, r.HOUR24_FORMAT_CHANGE_EVENT, n);
  const f = (0, u.useCallback)(() => t != null ? t : a, [a, t]);
  const m = (0, u.useMemo)(() => {
    const e = (0, i.default)().startOf("day").subtract(7, "day");
    return f() >= e.unix();
  }, [f]);
  (0, d.useListener)(m ? o.Cmd : null, "midnight", n);
  return u.default.createElement("span", {
    className: (0, s.default)(h)
  }, r.Clock.relativeStr(f()));
}
const E = function (e) {
  const t = (0, f.useModelValues)(e.chat, ["previewMessage", "t"]);
  if (t.previewMessage) {
    return u.default.createElement(g, {
      msg: t.previewMessage,
      t: t.t
    });
  } else {
    return null;
  }
};
const v = g;
exports.default = e => {
  let {
    chat: t,
    msg: n
  } = e;
  if (t) {
    return u.default.createElement(E, {
      chat: t
    });
  } else if (n) {
    return u.default.createElement(v, {
      msg: n
    });
  } else {
    return null;
  }
};