var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewsletterMessageLinkCopyClick = undefined;
var r = require("./985714.js");
var o = require("../app/163755.js");
var l = require("../app/625786.js");
var i = require("../app/390737.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
exports.handleNewsletterMessageLinkCopyClick = e => {
  const t = (0, o.getChat)(e);
  if (t.newsletterMetadata == null || e.serverId == null) {
    return;
  }
  const {
    inviteCode: n
  } = t.newsletterMetadata;
  const a = `https://whatsapp.com/channel/${n}/${e.serverId}`;
  if ((0, r.copyTextToClipboard)(a)) {
    i.ToastManager.open(s.default.createElement(l.Toast, {
      msg: u.fbt._("Link copied to clipboard", null, {
        hk: "3KXIQ0"
      })
    }));
  } else {
    i.ToastManager.open(s.default.createElement(l.Toast, {
      msg: u.fbt._("Couldn't copy to clipboard", null, {
        hk: "3Hhtzz"
      })
    }));
  }
};