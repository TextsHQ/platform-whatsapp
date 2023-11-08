var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExternalLinkPopup = function (e) {
  const {
    url: t,
    merchantUrl: n,
    onOkClick: a
  } = e;
  const c = function (e) {
    if (e.length > 200) {
      return e.substr(0, 140) + "..." + e.substr(e.length - 60);
    }
    return e;
  }(n != null ? n : t);
  const d = s.default.createElement(i.WDSTextSmall, {
    testid: "popup-url-text"
  }, c);
  return s.default.createElement(r.ConfirmPopup, {
    testid: "external_link_popup",
    title: u.fbt._("Open this link?", null, {
      hk: "31yBmL"
    }),
    okText: u.fbt._("Yes, open", null, {
      hk: "2pPQpB"
    }),
    cancelText: u.fbt._("No, cancel", null, {
      hk: "3xqfGp"
    }),
    onOK: () => {
      (0, o.openExternalLink)(t);
      if (!(a == null)) {
        a();
      }
      l.ModalManager.close();
    },
    onCancel: () => {
      l.ModalManager.close();
    }
  }, d);
};
var r = require("../app/103440.js");
var o = require("../app/753233.js");
var l = require("../app/114850.js");
var i = require("../app/851488.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));