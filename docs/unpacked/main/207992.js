var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t
  } = e;
  const n = (0, o.getFormattedUser)(t.contact);
  return s.default.createElement(r.ConfirmPopup, {
    testid: "order-expansion-country-not-supported-popup-title",
    title: u.fbt._("Couldn't create order", null, {
      hk: "4BzlsK"
    }),
    onOK: () => {
      l.ModalManager.close();
    }
  }, s.default.createElement(i.WDSTextSectionTitle, {
    testid: "order-expansion-country-not-supported-popup-description"
  }, u.fbt._("Orders aren't available in {contact-name}'s location.", [u.fbt._param("contact-name", n)], {
    hk: "1FdNQI"
  })));
};
var r = require("../app/103440.js");
var o = require("../app/714574.js");
var l = require("../app/114850.js");
var i = require("../app/180519.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));