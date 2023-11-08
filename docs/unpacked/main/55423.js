var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, a) {
  const {
    CartFlowLoadable: s
  } = require("./303449.js");
  if (t && t.id.toString() === e) {
    return u.default.createElement(s, {
      sellerJid: e,
      chat: t
    });
  }
  o.ModalManager.open(u.default.createElement(l.OpenChatFlow, {
    chatId: (0, i.createWid)(e),
    onSuccess: t => {
      self.setTimeout(() => {
        r.DrawerManager.openDrawerRight(u.default.createElement(s, {
          sellerJid: e,
          chat: t
        }), {
          transition: "slide-left",
          newDrawerContext: a
        });
      }, 100);
    },
    msgText: null
  }), {
    transition: "modal-flow"
  });
};
var r = require("../app/900316.js");
var o = require("../app/114850.js");
var l = require("../app/489891.js");
var i = require("../app/669050.js");
var u = a(require("../vendor/667294.js"));