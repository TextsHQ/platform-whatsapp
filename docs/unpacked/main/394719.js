var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = c.fbt._("Request review", null, {
    hk: "2XIONk"
  });
  const n = c.fbt._("Request review", null, {
    hk: "25iQP9"
  });
  const a = c.fbt._("WhatsApp Support will review your channel to check it goes against our {=m2}.", [c.fbt._implicitParam("=m2", d.default.createElement(o.ExternalLink, {
    href: (0, l.getNewsletterGuidelinesFaqUrl)()
  }, c.fbt._("Channel Guidelines", null, {
    hk: "3291hB"
  })))], {
    hk: "3ZHrjr"
  });
  return d.default.createElement(r.ConfirmPopup, {
    onOK: e.onSubmitAppeal,
    okText: t,
    onCancel: () => i.ModalManager.close(),
    title: n
  }, d.default.createElement(s.WDSTextSectionTitle, {
    xstyle: u.uiMargin.bottom12,
    color: "primary",
    testid: "request-review-confirmation-text"
  }, a));
};
var r = require("../app/103440.js");
var o = require("../app/753233.js");
var l = require("../app/258105.js");
var i = require("../app/114850.js");
var u = require("../app/676345.js");
var s = require("../app/851488.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));