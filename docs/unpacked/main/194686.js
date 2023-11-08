var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/685639.js");
var o = a(require("../app/3046.js"));
var l = a(require("../app/786566.js"));
var i = require("../app/38878.js");
var u = require("../app/973981.js");
var s = require("./473080.js");
var c = require("./145752.js");
var d = require("./151618.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/730381.js"));
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var h = a(require("../app/969651.js"));
var g = a(require("../app/637660.js"));
var E = require("../app/808446.js");
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function _(e, t) {
  const [n, a] = (0, m.useState)(false);
  const [v, _] = (0, m.useState)(false);
  const y = (0, h.default)();
  const C = (0, g.default)(() => new r.ShiftTimer(() => {
    a(true);
    _(true);
  }));
  const b = (0, g.default)(() => new r.ShiftTimer(() => {
    y();
  }));
  (0, m.useEffect)(() => {
    C.current.onOrBefore(3000);
    return () => {
      C.current.cancel();
      b.current.cancel();
    };
  }, []);
  const M = () => {
    b.current.cancel();
    C.current.onOrBefore(3000);
    a(false);
  };
  let S;
  let T;
  (0, E.useListener)(i.Socket, "change:state", M);
  if (u.Stream.displayInfo === u.StreamInfo.OPENING) {
    S = f.fbt._("Connecting to WhatsApp", null, {
      hk: "1QBndQ"
    });
  } else {
    if (u.Stream.displayInfo !== u.StreamInfo.CONNECTING) {
      return null;
    }
    S = f.fbt._("Connecting", null, {
      hk: "2rGWrV"
    });
  }
  if (n) {
    b.current.onOrAfter(1000);
    let e = i.Socket.retryTimestamp - Date.now();
    if (isNaN(e) || e < 1) {
      e = f.fbt._("Retrying…", null, {
        hk: "85iak"
      });
    } else if (e < 60000) {
      const t = Math.ceil(e / 1000);
      e = f.fbt._({
        "*": "Retrying in {number} seconds…",
        _1: "Retrying in 1 second…"
      }, [f.fbt._plural(t, "number")], {
        hk: "6jaHZ"
      });
    } else {
      e = f.fbt._("Retrying in {duration}…", [f.fbt._param("duration", p.default.duration(e).humanize())], {
        hk: "2xbfG0"
      });
    }
    T = m.default.createElement(m.default.Fragment, null, e, m.default.createElement(o.default, {
      action: () => {
        new d.WebcButterbarEventWamEvent({
          webcButterbarType: c.WEBC_BUTTERBAR_BB_TYPE.RESUME_CONNECTING,
          webcButterbarAction: s.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA
        }).commit();
        i.Socket.reconnect();
        M();
      }
    }, f.fbt._("Retry Now", null, {
      hk: "2yZ4YF"
    })));
  } else {
    T = v ? m.default.createElement("span", null, f.fbt._("Retrying…", null, {
      hk: "85iak"
    })) : null;
  }
  return m.default.createElement(l.default, {
    ref: t,
    type: "computer",
    title: S,
    text: T
  });
}
var y = (0, m.forwardRef)(_);
exports.default = y;