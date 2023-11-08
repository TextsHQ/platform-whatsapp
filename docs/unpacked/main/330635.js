var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./521093.js");
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = require("../app/971804.js");
var s = require("../app/454905.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
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
const p = (0, d.forwardRef)((e, t) => d.default.createElement(o.default, {
  ref: t
}, d.default.createElement(i.DrawerHeader, {
  testid: "drawer-title-notifications",
  title: c.fbt._("Notifications", null, {
    hk: "1zzxCb"
  }),
  onCancel: e.onCancel,
  onBack: e.onClose,
  type: (0, s.topMenuRedesignEnabled)() ? i.DRAWER_HEADER_TYPE.SMALL : i.DRAWER_HEADER_TYPE.LARGE,
  focusBackOrCancel: true
}), d.default.createElement(l.default, null, d.default.createElement(r.DoNotDisturbSettings, {
  key: "notifications",
  mute: u.MuteCollection.globalMute(),
  reactionsMute: u.MuteCollection.globalReactionsMute()
}))));
p.displayName = "NotificationsDrawer";
var m = p;
exports.default = m;