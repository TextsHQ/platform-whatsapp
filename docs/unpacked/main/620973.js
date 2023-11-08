var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterPhoneNumberNux = function () {
  const e = h.fbt._("Added privacy for your profile and phone number", null, {
    hk: "4jGL0m"
  });
  const t = g.default.createElement(g.default.Fragment, null, g.default.createElement(c.NewsletterPrivacyRow, {
    icon: g.default.createElement(m.VisibilityOffIcon, {
      color: f.SvgColorProp.TEAL,
      height: 20
    }),
    title: h.fbt._("You're not visible to other followers", null, {
      hk: "4cFZO1"
    }),
    text: h.fbt._("Followers can't see when you follow or interact in a channel.", null, {
      hk: "4jPZT2"
    })
  }), g.default.createElement(c.NewsletterPrivacyRow, {
    icon: g.default.createElement(o.DialpadIcon, {
      color: f.SvgColorProp.TEAL,
      height: 20
    }),
    title: h.fbt._("Your phone number is protected", null, {
      hk: "3UCI3f"
    }),
    text: h.fbt._("Admins can't see your full phone number, unless they've saved you as a contact.", null, {
      hk: "1BsPrD"
    })
  }), g.default.createElement(c.NewsletterPrivacyRow, {
    icon: g.default.createElement(r.AccountCircleIcon, {
      color: f.SvgColorProp.TEAL,
      height: 20
    }),
    title: h.fbt._("Admins can see your profile name", null, {
      hk: "2vxITo"
    }),
    text: h.fbt._("Admins may also see your profile photo based on your privacy settings.", null, {
      hk: "24BP5a"
    })
  }));
  return g.default.createElement(d.PhoneNumberPrivacyNux, {
    testid: "phone_number_not_shared_newsletter",
    onOK: () => s.ModalManager.close(),
    okText: (0, u.default)("Ok"),
    onCancel: () => (0, l.openExternalLink)((0, i.getNewsletterPrivacyFaqUrl)()),
    cancelText: (0, u.default)("Learn more"),
    displayName: (0, p.getMeDisplayName)(),
    title: e,
    customContent: t
  });
};
var r = require("./281125.js");
var o = require("./841605.js");
var l = require("../app/753233.js");
var i = require("../app/258105.js");
var u = a(require("../app/395767.js"));
var s = require("../app/114850.js");
var c = require("./349372.js");
var d = require("./14509.js");
var f = require("../app/220584.js");
var p = require("../app/459857.js");
var m = require("../app/54052.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));