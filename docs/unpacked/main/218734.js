var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModal = d;
exports.openUnblockModal = function (e) {
  u.ModalManager.open(c.default.createElement(o.ConfirmPopup, {
    okText: (0, l.default)("Unblock"),
    onOK: () => {
      (0, r.unblockContact)(e).catch(() => {});
      u.ModalManager.close();
    },
    onCancel: () => {
      u.ModalManager.close();
    }
  }, s.fbt._("Unblock this contact to call them.", null, {
    hk: "4nqs4Z"
  })));
};
exports.soundPortErrorModal = function () {
  d(s.fbt._("WhatsApp didn't connect to a video or audio device. Try starting the call again. If the problem continues, you may have to restart WhatsApp or your computer.", null, {
    hk: "1Dz5p8"
  }), s.fbt._("Call could not be started", null, {
    hk: "4eKezM"
  }));
};
exports.videoPortErrorModal = function () {
  const e = (0, i.default)(require("./457226.js"));
  u.ModalManager.open(c.default.createElement(o.ConfirmPopup, {
    title: s.fbt._("WhatsApp doesn't work with your camera yet", null, {
      hk: "xrYuG"
    }),
    okText: s.fbt._("Contact us", null, {
      hk: "115X9P"
    }),
    onOK: () => {
      u.ModalManager.close();
      u.ModalManager.open(c.default.createElement(e, null));
    },
    cancelText: s.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    onCancel: () => {
      u.ModalManager.close();
    }
  }, c.default.createElement("div", null, s.fbt._("Please contact us with the make and model of your camera.", null, {
    hk: "4mBkEa"
  }))));
};
var r = require("../app/547979.js");
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = a(require("../app/97359.js"));
var u = require("../app/114850.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
function d(e, t) {
  u.ModalManager.open(c.default.createElement(o.ConfirmPopup, {
    title: t,
    okText: (0, l.default)("OK"),
    onOK: () => u.ModalManager.close()
  }, c.default.createElement("div", null, e)));
}