var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = function (e) {
    switch (e) {
      case r.Action.CONTACT_US:
        return K;
      case r.Action.LICENSES:
        return Q;
      case r.Action.DELETE_OR_EXIT_CHAT:
        return q;
      case r.Action.GO_TO_NEXT_CHAT:
        return Y;
      case r.Action.GO_TO_PREV_CHAT:
        return z;
      case r.Action.CLOSE_CHAT:
        return j;
      case r.Action.LOGOUT:
        return B;
      case r.Action.OPEN_NEW_CHAT:
        return N;
      case r.Action.OPEN_NEW_GROUP:
        return x;
      case r.Action.OPEN_PROFILE:
        return L;
      case r.Action.OPEN_SETTINGS:
        return R;
      case r.Action.SEARCH:
        return F;
      case r.Action.SEARCH_IN_CHAT:
        return V;
      case r.Action.TOGGLE_ARCHIVE:
        return G;
      case r.Action.TOGGLE_MUTE:
        return U;
      case r.Action.TOGGLE_PIN:
        return W;
      case r.Action.TOGGLE_UNREAD:
        return H;
      case r.Action.ZOOM_IN:
        return X;
      case r.Action.ZOOM_OUT:
        return Z;
      case r.Action.ZOOM_RESET:
        return J;
      case r.Action.OPEN_EMOJI_PANEL:
        return $;
      case r.Action.OPEN_GIF_PANEL:
        return ee;
      case r.Action.OPEN_STICKER_PANEL:
        return te;
      case r.Action.TOGGLE_STICKER_MAKER:
        return ne;
      case r.Action.TOGGLE_COMMAND_PALETTE:
        return ae;
      case r.Action.LOCK_SCREEN:
        return re;
      case r.Action.INCREASE_PTT_SPEED:
      case r.Action.DECREASE_PTT_SPEED:
        return null;
    }
  }(e);
  if (!t) {
    return;
  }
  try {
    t();
    if (e !== r.Action.TOGGLE_COMMAND_PALETTE) {
      l.Cmd.closeCommandPalette();
    }
  } catch (t) {
    __LOG__(3)`keyboard:error occurred running action ${e}.`;
  }
};
var r = require("./861620.js");
var o = require("../app/351053.js");
var l = require("../app/780549.js");
var i = require("./636149.js");
var u = require("./928514.js");
var s = require("../app/103440.js");
var c = require("../app/445729.js");
var d = require("../app/177938.js");
var f = require("../app/900316.js");
var p = require("../app/299950.js");
var m = require("../app/804334.js");
var h = require("../app/97858.js");
var g = require("../app/114850.js");
var E = require("../app/61113.js");
var v = require("./494095.js");
var _ = require("./427181.js");
var y = a(require("../app/358533.js"));
var C = require("../app/73225.js");
var b = require("./937445.js");
var M = require("../app/446474.js");
var S = a(require("./96771.js"));
var T = require("./493075.js");
var w = require("./523233.js");
var A = require("../app/38878.js");
var P = require("../app/476473.js");
var O = require("../app/459857.js");
var k = require("../app/499264.js");
var D = require("../vendor/548360.js");
var I = a(require("../vendor/667294.js"));
function R() {
  f.DrawerManager.existsDrawerLeft(e => {
    if (e) {
      f.DrawerManager.closeDrawerLeft();
    }
    f.DrawerManager.openDrawerLeft(I.default.createElement(w.SettingsFlowLoadable, {
      onEnd: () => f.DrawerManager.closeDrawerLeft()
    }));
  });
}
function N() {
  f.DrawerManager.existsDrawerLeft(e => {
    if (e) {
      f.DrawerManager.closeDrawerLeft();
    }
    f.DrawerManager.openDrawerLeft(I.default.createElement(v.NewChatFlowLoadable, {
      onEnd: () => f.DrawerManager.closeDrawerLeft()
    }), {
      focusType: p.FocusType.TABBABLE
    });
  });
}
function x() {
  f.DrawerManager.existsDrawerLeft(e => {
    if (e) {
      f.DrawerManager.closeDrawerLeft();
    }
    f.DrawerManager.openDrawerLeft(I.default.createElement(_.NewGroupFlowLoadable, {
      onEnd: () => f.DrawerManager.closeDrawerLeft()
    }));
  });
}
function L() {
  f.DrawerManager.existsDrawerLeft(e => {
    if (e) {
      f.DrawerManager.closeDrawerLeft();
    }
    const t = (0, O.getMaybeMeUser)();
    const n = P.StatusCollection.assertGet(t);
    const a = M.ProfilePicThumbCollection.assertGet(t);
    const r = d.ContactCollection.assertGet(t);
    f.DrawerManager.openDrawerLeft(I.default.createElement(b.ProfileDrawerFlowLoadable, {
      status: n,
      profilePicThumb: a,
      contact: r,
      conn: c.Conn,
      onClose: () => f.DrawerManager.closeDrawerLeft()
    }));
  });
}
function j() {
  const e = o.ChatCollection.getActive();
  if (e) {
    l.Cmd.closeChat(e);
  } else if ((0, C.isNewsletterEnabled)()) {
    const e = y.default === null || y.default === undefined ? undefined : y.default.getActive();
    if (e) {
      l.Cmd.closeChat(e);
    }
  }
}
function B() {
  if (!E.MsgCollection.hasUnsentMessages()) {
    return A.Socket.logout();
  }
  g.ModalManager.open(I.default.createElement(s.ConfirmPopup, {
    title: D.fbt._("Log out?", null, {
      hk: "48Kq7L"
    }),
    onOK: () => {
      __LOG__(2)`Keyboard: user inputs logout`;
      A.Socket.logout();
    },
    okText: D.fbt._("Log out", null, {
      hk: "1qOHlo"
    }),
    onCancel: () => g.ModalManager.close(),
    cancelText: D.fbt._("Cancel", null, {
      hk: "H0gNq"
    })
  }, D.fbt._("Some of your messages are still sending.", null, {
    hk: "pBe7O"
  })));
}
function F() {
  l.Cmd.focusChatSearch();
}
function G() {
  const e = o.ChatCollection.getActive();
  if (e && e.canArchive()) {
    const t = e.archive;
    l.Cmd.archiveChat(e, !t);
  }
}
function U() {
  const e = o.ChatCollection.getActive();
  if (e && e.mute.canMute()) {
    const t = e.mute.isMuted;
    l.Cmd.muteChat(e, !t);
  }
}
function W() {
  const e = o.ChatCollection.getActive();
  if (e && (e.pin != null || o.ChatCollection.filter(e => e.pin).length < 3)) {
    const t = Boolean(e.pin);
    l.Cmd.pinChat(e, !t);
  }
}
function H() {
  const e = o.ChatCollection.getActive();
  if (e) {
    const t = e.markedUnread;
    l.Cmd.markChatUnread(e, !t);
  }
}
function V() {
  const e = o.ChatCollection.getActive();
  if (e) {
    l.Cmd.chatSearch(e);
  }
}
function q() {
  const e = o.ChatCollection.getActive();
  if (e) {
    l.Cmd.deleteOrExitChat(e);
  }
}
function Y() {
  l.Cmd.focusNextChat(true);
}
function z() {
  l.Cmd.focusPrevChat(true);
}
function K() {
  g.ModalManager.open(I.default.createElement(T.SendLogsPopupLoadable, null));
}
function Q() {}
function X() {}
function Z() {}
function J() {}
function $() {
  l.Cmd.openComposeBoxPanel(u.ComposeBoxPanel.EMOJI);
}
function ee() {
  l.Cmd.openComposeBoxPanel(u.ComposeBoxPanel.GIF);
}
function te() {
  l.Cmd.openComposeBoxPanel(u.ComposeBoxPanel.STICKER);
}
function ne() {
  l.Cmd.toggleStickerMaker();
}
function ae() {
  if ((0, i.isCommandPaletteOpen)()) {
    l.Cmd.closeCommandPalette();
  } else {
    l.Cmd.openCommandPalette();
  }
}
function re() {
  if ((0, h.screenLockFeatureSupported)()) {
    if ((0, k.getScreenLockEnabled)()) {
      (0, m.lockScreenAndTriggerUnlockFlow)();
    } else {
      f.DrawerManager.openDrawerLeft(I.default.createElement(S.default, {
        onCancel: () => f.DrawerManager.closeDrawerLeft()
      }));
    }
  }
}