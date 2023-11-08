var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/632157.js");
var o = a(require("../app/3046.js"));
var l = a(require("../app/786566.js"));
var i = require("./846191.js");
var u = require("../app/753233.js");
var s = require("../app/258105.js");
var c = require("../app/955562.js");
var d = a(require("./371804.js"));
var f = require("./440231.js");
var p = require("../app/875234.js");
var m = a(require("./194686.js"));
var h = require("./603397.js");
var g = require("../app/973981.js");
var E = require("../app/366320.js");
var v = require("../app/117429.js");
var _ = require("./473080.js");
var y = require("./145752.js");
var C = require("./151618.js");
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var S = a(require("../app/969651.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
let w = null;
function A(e, t) {
  let {
    displayInfo: n,
    needsUpdate: a,
    needsManualDownload: u,
    showResumeProgress: s,
    showNotify: C,
    isMuted: T,
    notifyPermission: A,
    onShowNotifyDelay: D,
    onRequestPermissions: I,
    onEnableOfflineNotifications: R
  } = e;
  let N = null;
  let x = null;
  const L = (0, S.default)();
  const [j, B] = (0, i.useShouldShowDesktopUpsellButterbar)();
  switch (n) {
    case g.StreamInfo.OFFLINE:
      x = y.WEBC_BUTTERBAR_BB_TYPE.OFFLINE;
      N = M.default.createElement(d.default, {
        ref: t,
        key: "bbar"
      });
      break;
    case g.StreamInfo.OPENING:
    case g.StreamInfo.CONNECTING:
      x = y.WEBC_BUTTERBAR_BB_TYPE.RESUME_CONNECTING;
      N = M.default.createElement(m.default, {
        ref: t,
        key: "bbar"
      });
      break;
    case g.StreamInfo.NORMAL:
      break;
    case g.StreamInfo.RESUMING:
    case g.StreamInfo.TIMEOUT:
      {
        const e = M.default.createElement(M.default.Fragment, null, b.fbt._("Make sure your phone has an active Internet connection.", null, {
          hk: "4u0X1o"
        }), M.default.createElement(o.default, {
          action: P
        }, b.fbt._("Learn more", null, {
          hk: "1rcCLt"
        })));
        x = null;
        N = M.default.createElement(l.default, {
          ref: t,
          type: "phone",
          key: "bbar",
          title: b.fbt._("Phone not connected", null, {
            hk: "3Whn0S"
          }),
          text: e
        });
        break;
      }
  }
  if (N == null && s) {
    x = y.WEBC_BUTTERBAR_BB_TYPE.RESUME_LOADING_MSGS_PROGRESS;
    N = M.default.createElement(f.ResumeProgress, {
      ref: t
    });
  }
  if (N == null && a) {
    x = y.WEBC_BUTTERBAR_BB_TYPE.UPDATE_DUE_TO_SOFT_MIN;
    const e = M.default.createElement(o.default, null, b.fbt._("Click to update WhatsApp", null, {
      hk: "2e9JEs"
    }));
    N = M.default.createElement(l.default, {
      ref: t,
      type: "update",
      key: "bbar",
      title: b.fbt._("Update available", null, {
        hk: "3XIG3f"
      }),
      text: e,
      action: () => {
        k(y.WEBC_BUTTERBAR_BB_TYPE.UPDATE_DUE_TO_SOFT_MIN, _.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA);
        E.Updater.restart();
      }
    });
  }
  if (N == null && j) {
    x = y.WEBC_BUTTERBAR_BB_TYPE.UWP_UPSELL;
    N = M.default.createElement(i.DesktopUpsellButterBar, {
      ref: t,
      onDismiss: () => {
        O(y.WEBC_BUTTERBAR_BB_TYPE.UWP_UPSELL);
        B();
      }
    });
  }
  if (N == null && window.Notification && A === c.PERMISSION_DEFAULT && !T && function () {
    const {
      isDismissed: e,
      firstSeenTime: t
    } = (0, v.getWebNotificationsBBStatus)();
    if (t == null) {
      (0, v.setWebNotificationsBBStatus)({
        isDismissed: false,
        firstSeenTime: (0, r.unixTime)()
      });
    } else if (e || (0, r.unixTime)() - t > r.WEEK_SECONDS * 4) {
      return false;
    }
    return true;
  }()) {
    if (C) {
      x = y.WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION;
      const e = M.default.createElement("div", null, b.fbt._("Get notified of new messages on your computer.", null, {
        hk: "1a4f0z"
      }), M.default.createElement(o.default, null, b.fbt._("Turn on desktop notifications", null, {
        hk: "1rEf8h"
      })));
      N = M.default.createElement(l.default, {
        ref: t,
        type: "notification",
        onDismiss: () => {
          O(y.WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION);
          (0, v.setWebNotificationsBBStatus)({
            isDismissed: true
          });
          L();
        },
        key: "bbar",
        title: b.fbt._("Turn on notifications", null, {
          hk: "NvraR"
        }),
        text: e,
        action: () => {
          k(y.WEBC_BUTTERBAR_BB_TYPE.NOTIFICATION, _.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA);
          I();
        }
      });
    } else {
      D();
    }
  } else if (!C && (0, p.canEnableOfflineNotifications)() && window.Notification && A !== c.PERMISSION_DENIED && N == null) {
    let {
      isDismissed: e = false,
      firstSeenTime: n
    } = (0, v.getOfflineNotificationsBBStatus)();
    const a = (0, v.getGlobalOfflineNotifications)();
    if (!(e || a && (!a || A !== c.PERMISSION_DEFAULT))) {
      if (n == null) {
        n = (0, r.unixTime)();
        (0, v.setOfflineNotificationsBBStatus)({
          isDismissed: false,
          firstSeenTime: n
        });
      }
      if ((0, r.unixTime)() - n <= r.DAY_SECONDS * 7) {
        x = y.WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION;
        N = M.default.createElement(l.default, {
          ref: t,
          type: "notification",
          onDismiss: () => {
            O(y.WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION);
            (0, v.setOfflineNotificationsBBStatus)({
              isDismissed: true
            });
            L();
          },
          key: "bbar",
          title: b.fbt._("Turn on background sync", null, {
            hk: "2iMy4i"
          }),
          text: (0, h.offlineSyncSubtitle)(),
          action: () => {
            k(y.WEBC_BUTTERBAR_BB_TYPE.OFFLINE_NOTIFICATION, _.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA);
            R();
          }
        });
      }
    }
  }
  if (N != null && x && w !== x) {
    if (w != null) {
      k(w, _.WEBC_BUTTERBAR_ACTION_TYPE.AUTO_DISMISS);
    }
    w = x;
    k(x, _.WEBC_BUTTERBAR_ACTION_TYPE.IMPRESSION);
  }
  return N;
}
function P() {
  (0, u.openExternalLink)((0, s.getCannotConnectFaqUrl)());
}
function O(e) {
  w = null;
  k(e, _.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_DISMISS);
}
function k(e, t) {
  new C.WebcButterbarEventWamEvent({
    webcButterbarType: e,
    webcButterbarAction: t
  }).commit();
}
var D = (0, M.forwardRef)(A);
exports.default = D;