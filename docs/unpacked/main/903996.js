var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = e.checkUnsent && s.MsgCollection.hasUnsentMessages() ? p.fbt._("Some of your messages are still sending.", null, {
    hk: "pBe7O"
  }) : p.fbt._("Are you sure you want to log out?", null, {
    hk: "3901Ia"
  });
  const n = (0, f.getScreenLockEnabled)() ? null : p.fbt._("You can turn on {=m2} instead.", [p.fbt._implicitParam("=m2", m.default.createElement(r.default, {
    onClick: h
  }, p.fbt._("screen lock", null, {
    hk: "SLcGN"
  })))], {
    hk: "3DWYcV"
  });
  return m.default.createElement(o.ConfirmPopup, {
    title: p.fbt._("Log out?", null, {
      hk: "48Kq7L"
    }),
    onOK: () => d.Socket.logout(),
    okText: p.fbt._("Log out", null, {
      hk: "1qOHlo"
    }),
    onCancel: () => u.ModalManager.close(),
    cancelText: p.fbt._("Cancel", null, {
      hk: "H0gNq"
    })
  }, t, m.default.createElement("br", null), n);
};
var r = a(require("../app/196554.js"));
var o = require("../app/103440.js");
var l = require("../app/900316.js");
var i = require("../app/804334.js");
var u = require("../app/114850.js");
var s = require("../app/61113.js");
var c = a(require("./96771.js"));
var d = require("../app/38878.js");
var f = require("../app/499264.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
const h = () => {
  u.ModalManager.close();
  if ((0, f.getScreenLockEnabled)()) {
    (0, i.lockScreenAndTriggerUnlockFlow)();
  } else {
    l.DrawerManager.openDrawerLeft(m.default.createElement(c.default, {
      onCancel: () => l.DrawerManager.closeDrawerLeft()
    }));
  }
};