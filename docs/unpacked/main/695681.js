Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onCancel: t,
    onSend: n,
    supportTag: c,
    entityId: d
  } = e;
  const f = (0, s.useCallback)(e => {
    l.ModalManager.open(s.default.createElement(i.SendLogsPopupLoadable, {
      onCancel: t,
      onSend: n,
      description: e == null ? undefined : e.description,
      supportTag: c,
      entityId: d
    }));
  }, [t, n, c, d]);
  if ((0, o.isInAppSupportEnabled)()) {
    if ((0, a.getIsSagaMVPEnabled)()) {
      return s.default.createElement(u.StartSupportChatModalLoadable, {
        onEmail: f,
        onFailure: f,
        supportTag: c,
        entityId: d
      });
    } else {
      return s.default.createElement(r.ContactUsModalLoadable, {
        onEmail: f,
        onCancel: t,
        onFailure: f,
        supportTag: c,
        entityId: d
      });
    }
  }
  return s.default.createElement(i.SendLogsPopupLoadable, {
    onCancel: t,
    onSend: n,
    supportTag: c,
    entityId: d
  });
};
var a = require("../app/174662.js");
var r = require("./251744.js");
var o = require("../app/97858.js");
var l = require("../app/114850.js");
var i = require("./493075.js");
var u = require("./960767.js");
var s = function (e, t) {
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
}(require("../vendor/667294.js"));
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