Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/29797.js");
var r = require("../app/103440.js");
var o = require("../vendor/548360.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
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
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = (0, l.forwardRef)((e, t) => {
  const {
    msgList: n,
    onCancel: i,
    onRevoke: u,
    fromChannelAlerts: s
  } = e;
  const c = s === true ? o.fbt._({
    "*": "Followers will no longer be able to see these updates on your channel.",
    _1: "Followers will no longer be able to see this update on your channel."
  }, [o.fbt._plural(n.length)], {
    hk: "1ZBu5G"
  }) : o.fbt._({
    "*": "Delete updates?",
    _1: "Delete update?"
  }, [o.fbt._plural(n.length)], {
    hk: "1GlJpx"
  });
  const d = n.every(e => e.ack < a.ACK.SENT) ? o.fbt._("Delete for me", null, {
    hk: "3Mx3Ct"
  }) : o.fbt._("Delete for everyone", null, {
    hk: "OFucv"
  });
  return l.default.createElement(r.ConfirmPopup, {
    title: c,
    okText: d,
    onOK: u,
    onCancel: i,
    ref: t
  });
});
u.displayName = "DeleteNewsletterRevokeMsgPopup";
var s = u;
exports.default = s;