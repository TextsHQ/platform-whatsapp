var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNewsletterDirectory = function (e) {
  let {
    tosAcceptCallback: t
  } = e;
  r.ModalManager.open(u.default.createElement(i.PDFNModal, {
    pdfnId: parseInt((0, o.getNewsletterConsumerTos)(), 10),
    verifyTosAccepted: l.hasAcceptedNewsletterTos,
    runIfTosAccepted: () => {
      t();
    }
  }));
};
var r = require("../app/114850.js");
var o = require("../app/73225.js");
var l = require("./110113.js");
var i = require("./604475.js");
var u = a(require("../vendor/667294.js"));