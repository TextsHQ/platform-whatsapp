var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResumeProgress = undefined;
var r = require("../app/685639.js");
var o = a(require("../app/786566.js"));
var l = require("../app/780549.js");
var i = a(require("../app/932325.js"));
var u = require("../app/359484.js");
var s = require("../vendor/548360.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var d = require("../app/808446.js");
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = (0, c.forwardRef)((e, t) => {
  const [n, a] = (0, c.useState)(0);
  const [f, p] = (0, c.useState)(false);
  (0, d.useListener)(l.Cmd, "offline_progress_update", () => {
    a(u.OfflineMessageHandler.getOfflineDeliveryProgress());
  });
  new r.ShiftTimer(() => {
    p(true);
  }).onOrAfter(120000);
  const m = s.fbt._("Loading messages ({percentage}%)", [s.fbt._param("percentage", i.default.n(n))], {
    hk: "3eFdpv"
  });
  const h = f ? s.fbt._("Messages are still loading. You can continue to wait, or log out and relink with your phone.", null, {
    hk: "SKjEU"
  }) : "";
  return c.default.createElement(o.default, {
    ref: t,
    type: "resumeProgress",
    title: m,
    text: h
  });
});
exports.ResumeProgress = p;
p.displayName = "ResumeProgress";