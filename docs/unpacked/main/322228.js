var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
a(require("../app/670983.js"));
var r = require("../app/685639.js");
var o = a(require("./599643.js"));
var l = require("../app/780549.js");
var i = require("../app/900316.js");
var u = a(require("./854254.js"));
var s = require("./858770.js");
var c = require("../app/114850.js");
var d = require("../app/971804.js");
var f = a(require("./323112.js"));
var p = a(require("./338847.js"));
var m = require("../app/955562.js");
var h = a(require("./330635.js"));
var g = require("../app/359484.js");
var E = require("../app/634919.js");
var v = a(require("./297925.js"));
var _ = require("../app/875234.js");
var y = require("../app/937001.js");
var C = require("../app/973981.js");
var b = require("../app/731344.js");
var M = require("../app/625786.js");
var S = require("../app/390737.js");
var T = require("./617671.js");
require("../app/757453.js");
var w = a(require("../app/844453.js"));
var A = require("./452704.js");
var P = require("../vendor/548360.js");
var O = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = x(t);
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
var k = a(require("../app/969651.js"));
var D = a(require("../app/637660.js"));
var I = require("../app/808446.js");
var R = require("../app/655241.js");
var N = a(require("../app/558532.js"));
function x(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (x = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function L(e) {
  var t;
  const {
    setShowButterBar: n
  } = e;
  const a = (0, k.default)();
  (0, R.useModelValues)(e.stream, ["displayInfo", "needsUpdate"]);
  (0, R.useModelValues)(e.notice, ["noticeId", "blocking", "banner", "shouldShowButterBar"]);
  const x = (0, R.useModelValues)(e.mute, ["isMuted"]);
  const [L, j] = (0, O.useState)((t = window.Notification) === null || t === undefined ? undefined : t.permission);
  const [B, F] = (0, O.useState)(false);
  const [G, U] = (0, O.useState)(false);
  const [W, H] = (0, O.useState)(() => {});
  const [V, q] = (0, O.useState)(() => false);
  const [Y, z] = (0, O.useState)(() => null);
  const K = (0, D.default)(() => new r.ShiftTimer(e => {
    F(e);
  }));
  const [Q, X] = (0, O.useState)(g.OfflineMessageHandler.getResumeUIProgressBarType() === E.ResumeUIProgressBarType.ButterBar);
  const Z = () => p.default.shouldShowButterBar && p.default.noticeId != null && p.default.banner != null && p.default.blocking === false;
  (0, O.useEffect)(() => {
    if (n) {
      n(B || G);
    }
  }, []);
  (0, N.default)(() => {
    K.current.cancel();
  });
  (0, I.useListener)(p.default, "change:noticeId", () => {
    U(false);
  });
  (0, I.useListener)(p.default, ["change:banner", "change:blocking"], () => {
    if (Z() && !G) {
      new T.UserNoticeWamEvent({
        userNoticeId: p.default.noticeId,
        userNoticeContentVersion: p.default.policyVersion,
        userNoticeEvent: A.USER_NOTICE_EVENT.BANNER_APPEAR
      }).commit();
      U(true);
    }
  });
  (0, I.useListener)(l.Cmd, "handle_fatal_error", () => {
    0;
  });
  (0, I.useListener)(l.Cmd, "handle_low_storage_butter_bar", () => {});
  (0, I.useListener)(l.Cmd, "on_notification_permission_change", () => {
    j(window.Notification.permission);
  });
  (0, I.useListener)(l.Cmd, ["offline_progress_update", "offline_delivery_end"], () => {
    X(g.OfflineMessageHandler.getResumeUIProgressBarType() === E.ResumeUIProgressBarType.ButterBar);
  });
  if (C.Stream.displayInfo === C.StreamInfo.RESUMING || C.Stream.displayInfo === C.StreamInfo.TIMEOUT) {
    return null;
  }
  return O.default.createElement(w.default, {
    transitionName: "butterbar",
    className: o.default.container,
    testid: "chat-butterbar"
  }, null, null, null, null, null, O.default.createElement(f.default, {
    shouldShow: Z(),
    banner: p.default.banner,
    onDismissNotice: y.ServerProps.greenAlertBannerDuration === 0 ? null : () => {
      p.default.dismissButterBarNotice();
    }
  }), O.default.createElement(v.default, {
    displayInfo: C.Stream.displayInfo,
    needsUpdate: C.Stream.needsUpdate,
    needsManualDownload: false,
    showResumeProgress: Q,
    showNotify: B,
    isMuted: x.isMuted,
    notifyPermission: L,
    onShowNotifyDelay: () => {
      K.current.onOrBefore(10000, true);
    },
    onRequestPermissions: () => {
      c.ModalManager.open(O.default.createElement(s.GuidePopup, {
        messaging: s.Messaging.NOTIFICATIONS,
        onConfirm: s.guideConfirm,
        onCancel: s.notificationGuideLearnMore,
        type: s.TYPE.GUIDE_ALLOW
      }));
      window.Notification.requestPermission(e => {
        c.ModalManager.close();
        j(e);
        if (e === m.PERMISSION_ALLOWED) {
          if (!d.MuteCollection.getGlobalNotifications()) {
            d.MuteCollection.setGlobalNotifications(true);
          }
          if ((0, _.canEnableOfflineNotifications)()) {
            if (!d.MuteCollection.getGlobalOfflineNotifications()) {
              (0, b.handleOfflineNotifications)(true);
              d.MuteCollection.setGlobalOfflineNotifications(true);
            }
          }
        }
      });
    },
    onEnableOfflineNotifications: () => {
      if (window.Notification && L === m.PERMISSION_ALLOWED) {
        d.MuteCollection.setGlobalOfflineNotifications(true);
        (0, b.handleOfflineNotifications)(true);
        a();
        const e = P.fbt._("Background sync on", null, {
          hk: "1EsTkq"
        });
        const t = P.fbt._("View", null, {
          hk: "2Qh86e"
        });
        S.ToastManager.open(O.default.createElement(M.Toast, {
          msg: e,
          duration: 6000,
          action: {
            actionText: t,
            onAction: () => {
              i.DrawerManager.openDrawerLeft(O.default.createElement(h.default, {
                onCancel: () => {
                  i.DrawerManager.closeDrawerLeft();
                }
              }));
            }
          }
        }), S.ToastPosition.RIGHT);
      } else if (window.Notification && L === m.PERMISSION_DEFAULT) {
        c.ModalManager.open(O.default.createElement(s.GuidePopup, {
          messaging: s.Messaging.BACKGROUND_SYNC,
          onConfirm: s.guideConfirm,
          onCancel: s.notificationGuideLearnMore,
          type: s.TYPE.GUIDE_ALLOW
        }));
        window.Notification.requestPermission(e => {
          c.ModalManager.close();
          j(e);
          if (e === m.PERMISSION_ALLOWED) {
            if (!d.MuteCollection.getGlobalOfflineNotifications()) {
              d.MuteCollection.setGlobalOfflineNotifications(true);
              (0, b.handleOfflineNotifications)(true);
            }
          }
        });
      } else {
        __LOG__(3)`Enable offline notifications failed: window.Notification unavailable or denied`;
      }
    }
  }), O.default.createElement(u.default, null));
}
exports.default = e => {
  let {
    setShowButterBar: t
  } = e;
  return O.default.createElement(L, {
    stream: C.Stream,
    notice: p.default,
    mute: d.MuteCollection.globalMute(),
    setShowButterBar: t
  });
};