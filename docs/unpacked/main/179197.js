var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onBlock: t,
    onCancel: n
  } = e;
  const a = p.default.createElement(p.default.Fragment, null, f.fbt._("WhatsApp will not be able to send you messages about new features or tips from this account.", null, {
    hk: "3M9XuB"
  }), p.default.createElement("br", null), p.default.createElement("br", null), f.fbt._("You may still receive messages with important information about your account or WhatsApp services.", null, {
    hk: "FvTYr"
  }));
  const m = (0, i.getWAChatFaqUrl)();
  const h = p.default.createElement(r.default, {
    href: m,
    onClick: e => {
      e.preventDefault();
      d.ModalManager.close("none");
      self.setTimeout(() => (0, l.openExternalLink)(m), 10);
    }
  }, f.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }));
  return p.default.createElement(s.HotKeys, {
    handlers: {
      enter: e => {
        e.stopPropagation();
        e.preventDefault();
        t();
      },
      escape: e => {
        e.stopPropagation();
        e.preventDefault();
        n();
      }
    }
  }, p.default.createElement(o.ConfirmPopup, {
    onOK: t,
    okText: (0, u.default)("Block"),
    onCancel: n,
    type: c.ModalTheme.Multiline
  }, a, " ", h));
};
var r = a(require("../app/196554.js"));
var o = require("../app/103440.js");
var l = require("../app/753233.js");
var i = require("../app/258105.js");
var u = a(require("../app/395767.js"));
var s = require("../app/81644.js");
var c = require("../app/118612.js");
var d = require("../app/114850.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));