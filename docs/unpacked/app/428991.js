var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openTerminatedCommunityModal = function () {
  s.ModalManager.open(u.default.createElement(i.ConfirmPopup, {
    onOK: () => {
      s.ModalManager.close();
    },
    onCancel: () => {
      s.ModalManager.close();
      (0, o.openExternalLink)((0, a.getCommunityNotAvailableFaqUrl)());
    },
    okText: l.fbt._("Dismiss", null, {
      hk: "3lsTqx"
    }),
    cancelText: l.fbt._("Learn More", null, {
      hk: "2bUy2n"
    }),
    title: l.fbt._("This community is no longer available.", null, {
      hk: "2KpRiy"
    })
  }), {
    transition: "modal-flow"
  });
};
var i = require("./103440.js");
var a = require("./74810.js");
var o = require("./753233.js");
var s = require("./114850.js");
var l = require("../vendor/548360.js");
var u = r(require("../vendor/667294.js"));