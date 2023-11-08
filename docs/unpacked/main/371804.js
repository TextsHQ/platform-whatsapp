var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/685639.js");
var o = a(require("../app/3046.js"));
var l = a(require("../app/786566.js"));
var i = require("../app/38878.js");
var u = require("./473080.js");
var s = require("./145752.js");
var c = require("./151618.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
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
var p = a(require("../app/637660.js"));
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
function h(e, t) {
  const [n, a] = (0, f.useState)(true);
  const m = (0, p.default)(() => new r.ShiftTimer(() => {
    a(true);
  }));
  (0, f.useEffect)(() => () => {
    m.current.cancel();
  }, []);
  let h;
  let g;
  if (n) {
    h = f.default.createElement(f.default.Fragment, null, d.fbt._("Make sure your computer has an active Internet connection.", null, {
      hk: "2j4Waz"
    }), f.default.createElement(o.default, {
      action: () => {
        new c.WebcButterbarEventWamEvent({
          webcButterbarType: s.WEBC_BUTTERBAR_BB_TYPE.OFFLINE,
          webcButterbarAction: u.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA
        }).commit();
        i.Socket.reconnect();
        a(false);
        m.current.onOrAfter(3000);
      }
    }, d.fbt._("Reconnect", null, {
      hk: "22glHp"
    })));
    g = d.fbt._("Computer not connected", null, {
      hk: "300jSy"
    });
  } else {
    h = null;
    g = d.fbt._("Connecting", null, {
      hk: "2rGWrV"
    });
  }
  return f.default.createElement(l.default, {
    ref: t,
    type: "computer",
    title: g,
    text: h,
    textTestid: "chat-butterbar-offline"
  });
}
var g = (0, f.forwardRef)(h);
exports.default = g;