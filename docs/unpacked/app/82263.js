var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openSingleActionModal = function (e) {
  const {
    ModalComponentProvider: t = i.ConfirmPopup,
    shouldDismissWithoutButtonInteraction: n = true
  } = e;
  const r = () => {
    var t;
    if (!((t = e.onDismiss) === null || t === undefined)) {
      t.call(e);
    }
    a.ModalManager.off("close_modal", r);
    a.ModalManager.close();
  };
  a.ModalManager.open(o.default.createElement(t, {
    title: e.title,
    cover: e.cover,
    onOK: r,
    onOverlayClick: n ? r : () => {},
    okText: e.buttonText
  }, e.body), {
    blockClose: !n
  });
  if (n) {
    a.ModalManager.on("close_modal", r);
  }
};
var i = require("./103440.js");
var a = require("./114850.js");
var o = r(require("../vendor/667294.js"));