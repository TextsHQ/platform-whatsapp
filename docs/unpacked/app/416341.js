Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION_TYPE = undefined;
exports.handleServerNotification = function (e) {
  const t = c.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  return function (e) {
    const t = (0, r.wap)("ack", {
      id: (0, r.CUSTOM_STRING)(e.stanzaId),
      class: "notification",
      type: "server",
      to: e.from
    });
    switch (e.type) {
      case u.LOG:
        o.upload({
          reason: o.SERVER_REQUESTED,
          immediate: true,
          isHighPri: true
        });
        return Promise.resolve(t);
      case u.PROPS:
        return (0, s.queryServerProps)().then(() => t);
      case u.ABPROPS:
        return (0, a.syncABPropsTask)(false).then(() => t);
      default:
        __LOG__(3)`Unsupported notification with type "server",
blindly ack-ing it and doing nothing`;
        return Promise.resolve(t);
    }
  }(t.success);
};
var r = require("./716358.js");
var i = require("./347387.js");
var a = require("./266485.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
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
}(require("./996588.js"));
var s = require("./460148.js");
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = Object.freeze({
  LOG: "log",
  PROPS: "props",
  ABPROPS: "abprops"
});
exports.NOTIFICATION_TYPE = u;
const c = new i.WapParser("incomingServerNotificationParser", e => {
  e.assertTag("notification");
  const t = e.attrString("id");
  const n = e.attrWapJid("from");
  if (e.hasChild(u.LOG)) {
    return {
      type: u.LOG,
      stanzaId: t,
      from: n
    };
  } else if (e.hasChild(u.PROPS)) {
    return {
      type: u.PROPS,
      stanzaId: t,
      from: n
    };
  } else if (e.hasChild(u.ABPROPS)) {
    return {
      type: u.ABPROPS,
      stanzaId: t,
      from: n
    };
  } else {
    return {
      type: null,
      stanzaId: t,
      from: n
    };
  }
});