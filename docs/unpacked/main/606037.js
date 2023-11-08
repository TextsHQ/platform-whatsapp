var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const a = d.default.createElement(r.default, {
    href: t,
    onClick: e => {
      e.preventDefault();
      s.ModalManager.close("none");
      self.setTimeout(() => (0, l.openExternalLink)(t), 10);
    }
  }, n != null ? n : c.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }));
  const f = d.default.createElement(o.ConfirmPopup, {
    testid: "system-message-modal",
    onOK: () => s.ModalManager.close(),
    okText: (0, i.default)("OK"),
    type: u.ModalTheme.Multiline
  }, e, " ", a);
  s.ModalManager.open(f);
};
var r = a(require("../app/196554.js"));
var o = require("../app/103440.js");
var l = require("../app/753233.js");
var i = a(require("../app/395767.js"));
var u = require("../app/118612.js");
var s = require("../app/114850.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));