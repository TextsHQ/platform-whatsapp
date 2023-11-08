var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openNewsletterPreviewChat = function (e, t, n) {
  u.ModalManager.open(m.default.createElement(p.PDFNModal, {
    pdfnId: parseInt((0, c.getNewsletterConsumerTos)(), 10),
    verifyTosAccepted: f.hasAcceptedNewsletterTos,
    runIfTosAccepted: () => function () {
      return h.apply(this, arguments);
    }(e, t, n)
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/418987.js");
var l = require("../app/780549.js");
var i = require("./594250.js");
var u = require("../app/114850.js");
var s = require("./856536.js");
var c = require("../app/73225.js");
var d = require("./280206.js");
var f = require("./110113.js");
var p = require("./604475.js");
var m = a(require("../vendor/667294.js"));
function h() {
  return (h = (0, r.default)(function* (e, t, n) {
    u.ModalManager.open(m.default.createElement(i.LoadingNewsletterPreviewModal, {
      identifier: e,
      chatEntryPoint: t,
      onSuccess: e => {
        g(e, t, n);
      }
    }));
  })).apply(this, arguments);
}
function g() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, r.default)(function* (e, t, n) {
    if (n != null && (0, c.isNavigationToForwardedNewsletterMessageEnabled)()) {
      yield (0, d.openNewsletterAt)({
        newsletterJid: (0, o.toNewsletterJid)(e.id.toJid()),
        serverId: n,
        chatEntryPoint: t,
        onMessageDeleted: () => {
          u.ModalManager.open(m.default.createElement(s.NewsletterMessageDeletedPopup, null));
        }
      });
    } else {
      l.Cmd.openChatBottom(e, t);
    }
  })).apply(this, arguments);
}