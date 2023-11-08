var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessPopup = function (e) {
  let {
    title: t,
    description: n,
    extraContent: a,
    onOkClick: p,
    onOverlayClick: m
  } = e;
  return f.default.createElement(u.Modal, {
    type: u.ModalTheme.Small,
    onOverlayClick: m
  }, f.default.createElement(i.FlexColumn, null, f.default.createElement(i.FlexItem, {
    align: "center"
  }, f.default.createElement(l.FilledIcon, {
    Icon: r.CheckmarkMediumIcon
  })), f.default.createElement(i.FlexItem, null, f.default.createElement(d.WDSTextLarge, {
    paddingTop: 20,
    weight: "semibold"
  }, t)), f.default.createElement(d.WDSTextMuted, {
    paddingTop: 16
  }, n), a, f.default.createElement(i.FlexItem, {
    paddingTop: 20,
    align: "end"
  }, f.default.createElement(c.WDSButtonPrimary, {
    onClick: () => {
      if (!(p == null)) {
        p();
      }
      s.ModalManager.close();
    }
  }, (0, o.default)("Ok")))));
};
var r = require("./811462.js");
var o = a(require("../app/395767.js"));
var l = require("./780910.js");
var i = require("../app/690495.js");
var u = require("../app/118612.js");
var s = require("../app/114850.js");
var c = require("../app/617425.js");
var d = require("../app/851488.js");
var f = a(require("../vendor/667294.js"));