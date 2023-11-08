var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleOfflineNotifications = function (e) {
  if (e) {
    E();
  } else {
    v();
  }
};
exports.subscribePushManager = E;
exports.unsubscribePushManager = v;
exports.updatePushManager = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = r(require("./395767.js"));
var s = require("./546927.js");
var l = r(require("./932325.js"));
var u = require("./288057.js");
var c = require("./955562.js");
var d = require("./875234.js");
var p = require("./215995.js");
var f = require("./757453.js");
var _ = require("./117429.js");
var g = require("./499264.js");
var m = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
var h = r(require("./492102.js"));
function y() {
  return (y = (0, i.default)(function* () {
    if ((0, d.canSupportOfflineNotifications)() && "serviceWorker" in navigator) {
      var e;
      var t;
      var n;
      var r;
      let i = (0, _.getGlobalOfflineNotifications)();
      i = i;
      const a = (0, g.getScreenLockEnabled)();
      const o = i && ((e = window.Notification) === null || e === undefined ? undefined : e.permission) === c.PERMISSION_ALLOWED && (0, d.canEnableOfflineNotifications)() && !a;
      const s = yield (t = window.navigator.serviceWorker) === null || t === undefined ? undefined : t.ready;
      if (s == null) {
        return void __LOG__(3)`[push-notification] failed to check and update push manager due to no service worker registration`;
      }
      const u = s == null || (n = s.pushManager) === null || n === undefined || (r = n.getSubscription) === null || r === undefined ? undefined : r.call(n);
      if (u == null) {
        return void __LOG__(3)`[push-notification] failed to get push manager`;
      }
      if (s.scope !== window.location.origin + window.location.pathname) {
        return;
      }
      const p = (yield u) != null;
      if (o) {
        if (p) {
          M();
          l.default.on("locale_change", () => {
            M();
          });
        } else {
          E();
        }
      } else if (!o && p) {
        v();
      }
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    if ((0, d.canEnableOfflineNotifications)()) {
      try {
        var e;
        if (!("serviceWorker" in navigator)) {
          return;
        }
        const t = yield (e = window.navigator.serviceWorker) === null || e === undefined ? undefined : e.ready;
        if (t == null) {
          return;
        }
        if ((yield t.pushManager.getSubscription()) != null) {
          return;
        }
        const n = yield (0, s.getPushServerSettings)();
        if (n.errorCode != null) {
          return void __LOG__(3)`[push-notification] failed to subscribe push manager due to unable to get push server settings with error code ${n.errorCode}`;
        }
        const r = new Uint8Array((0, a.decodeB64UrlSafe)(String(n)));
        const i = yield t.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: r
        });
        const o = yield (0, p.setPushConfig)(i);
        if ((o == null ? undefined : o.errorCode) != null) {
          return void __LOG__(3)`[push-notification] failed to subscribe push manager due to send client push subscription data to server failure with error ${o.errorText}`;
        }
        yield h.default === null || h.default === undefined ? undefined : h.default.setWorkerLocalStorage();
        yield M();
      } catch (e) {
        __LOG__(3)`[push-notification] failed to subscribe push manager due to error: ${e}`;
      }
    }
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* () {
    if (!(0, d.canSupportOfflineNotifications)()) {
      return false;
    }
    try {
      var e;
      if (!("serviceWorker" in navigator)) {
        return false;
      }
      const t = yield (e = window.navigator.serviceWorker) === null || e === undefined ? undefined : e.ready;
      if (t == null) {
        return false;
      }
      const n = yield t.pushManager.getSubscription();
      if (n == null) {
        return false;
      }
      const r = yield n.unsubscribe();
      yield h.default === null || h.default === undefined ? undefined : h.default.clearWorkerLocalStorage().catch(e => {
        if (!(e instanceof u.DbOnLogoutAbort)) {
          throw e;
        }
      });
      return r;
    } catch (e) {
      __LOG__(3)`[push-notification] failed to unsubscribe push manager due to error: ${e}`;
      return false;
    }
  })).apply(this, arguments);
}
function M() {
  const e = (0, o.default)("WhatsApp");
  const t = m.fbt._("Syncing messages in the background.", null, {
    hk: "1XtyLP"
  });
  (0, f.setOfflineNotificationContent)({
    notificationTitle: e.toString(),
    notificationText: t.toString()
  });
}