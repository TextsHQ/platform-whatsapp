var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, d.default)();
  let n;
  let r;
  (0, f.useListener)(l.Stream, "change:displayInfo", t);
  const [g] = (0, p.default)(t, 1000);
  const [m] = (0, _.useTimeout)(g, 6000);
  const h = l.Stream.displayInfo;
  (0, c.useEffect)(() => {
    m();
    const e = document.getElementById("initial_startup");
    if (e == null ? undefined : e.parentNode) {
      e.parentNode.removeChild(e);
    }
  }, []);
  const y = () => {
    __LOG__(2)`Startup: user selected logout`;
    o.Socket.logout();
  };
  switch (h) {
    case l.StreamInfo.OPENING:
    case l.StreamInfo.PAIRING:
    case l.StreamInfo.TIMEOUT:
      n = u.fbt._("Connecting to WhatsApp", null, {
        hk: "1QBndQ"
      });
      r = u.fbt._("Make sure your computer has an active Internet connection.", null, {
        hk: "2j4Waz"
      });
      break;
    case l.StreamInfo.SYNCING:
    case l.StreamInfo.CONNECTING:
      return c.default.createElement(a.default, {
        initialLoadReady: e.initialLoadReady,
        onReady: e.onReady,
        onLogout: y
      });
    default:
      if (l.Stream.mode === l.StreamMode.MAIN) {
        return c.default.createElement(a.default, {
          initialLoadReady: e.initialLoadReady,
          onReady: e.onReady,
          onLogout: y
        });
      } else {
        return null;
      }
  }
  return c.default.createElement(i.ConfirmPopup, {
    cover: true,
    title: n,
    cancelText: u.fbt._("Log out", null, {
      hk: "1qOHlo"
    }),
    onCancel: y
  }, c.default.createElement("hr", {
    className: s.default.divider
  }), c.default.createElement("div", {
    className: s.default.textTip
  }, r));
};
var i = require("./103440.js");
var a = r(require("./703804.js"));
var o = require("./38878.js");
var s = r(require("./260915.js"));
var l = require("./973981.js");
var u = require("../vendor/548360.js");
var c = function (e, t) {
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
}(require("../vendor/667294.js"));
var d = r(require("./969651.js"));
var p = r(require("./10617.js"));
var f = require("./808446.js");
var _ = require("./441673.js");
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