var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNewsletterCreationFlow = function (e) {
  let {
    tosAcceptCallback: t
  } = e;
  const n = new o.NewsletterAdminFunnelLogger(s.ADMIN_FLOW_TYPE.CREATION);
  n.logEvent(c.CHANNEL_ADMIN_ACTION.CHANNEL_CREATION_TAP);
  r.ModalManager.open(d.default.createElement(u.PDFNModal, {
    pdfnId: (0, i.getNewsletterProducerDisclosureId)(),
    verifyTosAccepted: l.shouldHideProducerNewsletterDisclosure,
    runIfTosAccepted: () => {
      t(n);
    },
    onError: () => {
      n.logEvent(c.CHANNEL_ADMIN_ACTION.CHANNEL_CREATE_LAUNCH_ERROR);
    }
  }));
};
var r = require("../app/114850.js");
var o = require("./608637.js");
var l = require("../app/73225.js");
var i = require("./110113.js");
var u = require("./604475.js");
var s = require("./684259.js");
var c = require("./269430.js");
var d = a(require("../vendor/667294.js"));