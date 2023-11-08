Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, u.useRef)(null);
  const t = () => {
    let t;
    t = i.Stream.displayInfo === i.StreamInfo.OFFLINE || i.Stream.displayInfo === i.StreamInfo.TIMEOUT ? -1 : a.ChatCollection.getUnreadCount();
    if (e.current !== t) {
      e.current = t;
      (0, l.setTitleAndIcon)(t);
    }
  };
  (0, u.useEffect)(() => {
    t();
  }, []);
  (0, s.useListener)(r.Cmd, "alert_new_msg", e => o.showMsgNotification(e));
  (0, s.useListener)(r.Cmd, "alert_call", o.showCallNotification);
  (0, s.useListener)(r.Cmd, "cancel_call", o.cancelCallNotification);
  (0, s.useListener)(a.ChatCollection, "add remove reset change:showUnreadInTitle", t);
  (0, s.useListener)(a.ChatCollection, "change:hasUnread", o.closeNotifications);
  (0, s.useListener)(i.Stream, "change:displayInfo", t);
  return null;
};
var a = require("../app/351053.js");
var r = require("../app/780549.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
}(require("../app/409244.js"));
var l = require("../app/884127.js");
var i = require("../app/973981.js");
var u = require("../vendor/667294.js");
var s = require("../app/808446.js");
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}