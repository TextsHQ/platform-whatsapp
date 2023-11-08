var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoNotDisturbSettings = undefined;
require("../app/63014.js");
var r = require("../app/780549.js");
var o = require("./807078.js");
var l = a(require("./969358.js"));
var i = require("./858770.js");
var u = require("../app/114850.js");
var s = require("../app/971804.js");
var c = require("../app/955562.js");
var d = require("../app/875234.js");
var f = require("./177385.js");
var p = require("./603397.js");
var m = require("../app/163139.js");
var h = require("../app/731344.js");
var g = require("../app/180519.js");
var E = require("../app/117429.js");
var v = require("../vendor/548360.js");
var _ = a(require("../vendor/667294.js"));
var y = a(require("../app/156720.js"));
var C = require("../app/655241.js");
var b = a(require("../app/305988.js"));
const M = {
  drawerTitle: {
    paddingTop: "hc2u0oym",
    paddingEnd: "f9ovudaz",
    paddingBottom: "myel2vfb",
    paddingStart: "gx1rr48f"
  },
  bottomDivider: {
    borderBottom: "daad4uqs"
  }
};
exports.DoNotDisturbSettings = e => {
  const t = (0, C.useModelValues)(e.mute, ["isMuted", "expiration", "isCallMuted", "callExpiration"]);
  const n = (0, C.useModelValues)(e.reactionsMute, ["isMuted", "expiration", "isCallMuted", "callExpiration"]);
  const [a, S] = (0, b.default)(() => s.MuteCollection.getGlobalOfflineNotifications(), e => {
    var t;
    s.MuteCollection.setGlobalOfflineNotifications(e);
    if (e && ((t = window.Notification) === null || t === undefined ? undefined : t.permission) !== c.PERMISSION_ALLOWED) {
      u.ModalManager.open(_.default.createElement(i.GuidePopup, {
        messaging: i.Messaging.BACKGROUND_SYNC,
        onConfirm: i.guideConfirm,
        onCancel: i.notificationGuideLearnMore,
        type: i.TYPE.GUIDE_ALLOW
      }));
      window.Notification.requestPermission(t => {
        u.ModalManager.close();
        r.Cmd.onNotificationPermissionChange();
        if (t === c.PERMISSION_ALLOWED) {
          (0, h.handleOfflineNotifications)(e);
        } else {
          __LOG__(3)`[push-notification] failed to subscribe push manager due to permission not granted, current permission: ${t}`;
        }
      });
    } else {
      if (!e) {
        (0, E.setOfflineNotificationsBBStatus)({
          isDismissed: true
        });
        (0, E.setOfflineNotificationsInternalEnabledOnce)();
      }
      (0, h.handleOfflineNotifications)(e);
    }
  });
  const [T, w] = (0, b.default)(() => s.MuteCollection.getOutgoingMessageSound(), e => s.MuteCollection.setOutgoingMessageSound(e));
  const [A, P] = (0, b.default)(() => s.MuteCollection.getGlobalSounds(), e => s.MuteCollection.setGlobalSounds(e));
  const [O, k] = (0, b.default)(() => s.MuteCollection.getGlobalCallRingtone(), e => s.MuteCollection.setGlobalCallRingtone(e));
  const [D, I] = (0, b.default)(() => s.MuteCollection.getGlobalPreviews(), e => s.MuteCollection.setGlobalPreviews(e));
  const [R, N] = (0, b.default)(() => s.MuteCollection.getCollapseMuted(), e => s.MuteCollection.setCollapseMuted(e));
  const [x, L] = (0, b.default)(() => s.MuteCollection.getGlobalNotifications(), e => {
    var t;
    s.MuteCollection.setGlobalNotifications(e);
    if (e) {
      if (!D) {
        I();
      }
      if (n.isMuted) {
        r.Cmd.muteAll((0, m.unproxy)(n), false, true, true);
      }
    } else {
      (0, E.setWebNotificationsBBStatus)({
        isDismissed: true
      });
    }
    if (e && ((t = window.Notification) === null || t === undefined ? undefined : t.permission) !== c.PERMISSION_ALLOWED) {
      u.ModalManager.open(_.default.createElement(i.GuidePopup, {
        messaging: i.Messaging.NOTIFICATIONS,
        onConfirm: i.guideConfirm,
        onCancel: i.notificationGuideLearnMore,
        type: i.TYPE.GUIDE_ALLOW
      }));
      window.Notification.requestPermission(() => {
        u.ModalManager.close();
        r.Cmd.onNotificationPermissionChange();
      });
    }
  });
  const j = [];
  if (window.Notification) {
    j.push(_.default.createElement(f.SettingsCheckListItem, {
      key: 0,
      testid: "option-desktop-notifications",
      id: "desktop-notifications",
      checked: x,
      onChange: L
    }, (0, p.desktopAlertsTitle)()));
    j.push(_.default.createElement(f.SettingsCheckListItem, {
      key: 1,
      testid: "options-msg-previews",
      disabled: !x,
      id: "msg-previews",
      checked: D,
      onChange: I
    }, (0, p.messagePreviewsTitle)(), _.default.createElement(g.TextDiv, {
      theme: "muted"
    }, (0, p.messagePreviewsSubtitle)())));
  }
  const B = _.default.createElement(f.SettingsCheckListItem, {
    testid: "option-desktop-notifications",
    id: "desktop-notifications",
    checked: x,
    checkboxRightAligned: true,
    onChange: L
  }, (0, p.messageNotificationsTitle)(), _.default.createElement(g.TextDiv, {
    theme: "muted"
  }, (0, p.messageNotificationsSubtitle)()));
  const F = _.default.createElement(f.SettingsCheckListItem, {
    testid: "options-msg-previews",
    id: "msg-previews",
    checked: x && D,
    onChange: I,
    disabled: !x,
    checkboxRightAligned: true
  }, (0, p.showPreviewsTitle)());
  let G;
  if ((0, d.canEnableOfflineNotifications)() && window.Notification) {
    const e = v.fbt._("Background sync", null, {
      hk: "3PMoJj"
    });
    G = _.default.createElement(f.SettingsCheckListItem, {
      testid: "option-offline-notifications",
      id: "offline-notifications",
      checked: a,
      checkboxRightAligned: true,
      onChange: S
    }, e, _.default.createElement(g.TextDiv, {
      theme: "muted"
    }, (0, p.offlineSyncSubtitle)()));
  }
  const {
    callExpiration: U,
    isCallMuted: W
  } = t;
  const {
    isMuted: H
  } = n;
  const V = _.default.createElement(f.SettingsCheckListItem, {
    testid: "option-reactions-mute-desktop-notifications",
    id: "reactions-mute-desktop-notifications",
    checked: x && !H,
    checkboxRightAligned: true,
    disabled: !x,
    onChange: () => {
      r.Cmd.muteAll((0, m.unproxy)(n), !n.isMuted, true);
    }
  }, (0, p.showReactionsTitle)());
  const q = _.default.createElement(f.SettingsCheckListItem, {
    testid: "option-sounds",
    id: "sounds",
    checked: A,
    checkboxRightAligned: true,
    onChange: P
  }, (0, p.soundsTitle)(), _.default.createElement(g.TextDiv, {
    theme: "muted"
  }, (0, p.soundsSubtitle)()));
  const Y = v.fbt._("Messages", null, {
    hk: "3XKWVW"
  });
  o.DevOnlyBadge;
  v.fbt._("", null, {
    hk: "3Vchpm"
  });
  return _.default.createElement("div", null, _.default.createElement(l.default, {
    theme: "padding-no-vertical",
    title: Y,
    titleXStyle: M.drawerTitle
  }, _.default.createElement("div", {
    className: (0, y.default)(M.bottomDivider)
  }, B), F, V), _.default.createElement(l.default, {
    theme: "padding"
  }, G, q, null, null), null);
};