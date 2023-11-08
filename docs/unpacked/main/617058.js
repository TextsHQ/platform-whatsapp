var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterPublicChannelPrivacyNux = function (e) {
  var t;
  let {
    chat: n
  } = e;
  const a = g.fbt._("About this channel", null, {
    hk: "3Ig3Nc"
  });
  const y = E.default.createElement(o.SelectableLink, {
    className: (0, v.default)(_),
    id: "data-sharing-learn-more-link",
    selectable: true,
    onClick: () => (0, l.openExternalLink)((0, i.getNewsletterGuidelinesFaqUrl)())
  }, g.fbt._("guidelines", null, {
    hk: "vpHHG"
  }));
  const C = E.default.createElement(E.default.Fragment, null, E.default.createElement(c.NewsletterPrivacyRow, {
    icon: E.default.createElement(r.BusinessWebsiteIcon, {
      color: p.SvgColorProp.TEAL,
      height: 20
    }),
    title: g.fbt._("Anyone can discover your channel", null, {
      hk: "3Mv6pP"
    }),
    text: g.fbt._("Channels are public, so anyone can find them and see 30 days of history before following.", null, {
      hk: "32Y9Lt"
    })
  }), E.default.createElement(c.NewsletterPrivacyRow, {
    icon: E.default.createElement(h.VisibilityOffIcon, {
      color: p.SvgColorProp.TEAL,
      height: 20
    }),
    title: g.fbt._("People see your channel, not you", null, {
      hk: "LlDn3"
    }),
    text: g.fbt._("Your phone number, profile picture and name aren't shown to followers.", null, {
      hk: "21oJXn"
    })
  }), E.default.createElement(c.NewsletterPrivacyRow, {
    icon: E.default.createElement(f.SecurityShieldIcon, {
      color: p.SvgColorProp.TEAL,
      height: 20
    }),
    title: g.fbt._("You're responsible for your channel", null, {
      hk: "2daxA5"
    }),
    text: g.fbt._("Your channel needs to follow our {guidelines_link} and is reviewed against them.", [g.fbt._param("guidelines_link", y)], {
      hk: "1O1H5q"
    })
  }));
  return E.default.createElement(d.PhoneNumberPrivacyNux, {
    testid: "public_channel__newsletter",
    onOK: () => s.ModalManager.close(),
    okText: (0, u.default)("Ok"),
    onCancel: () => (0, l.openExternalLink)((0, i.getNewsletterPrivacyFaqUrl)()),
    cancelText: (0, u.default)("Learn more"),
    pictureWid: n == null ? undefined : n.id,
    displayName: (t = n == null ? undefined : n.name) !== null && t !== undefined ? t : (0, m.getMeDisplayName)(),
    title: a,
    customContent: C
  });
};
var r = require("./54509.js");
var o = require("../app/306703.js");
var l = require("../app/753233.js");
var i = require("../app/258105.js");
var u = a(require("../app/395767.js"));
var s = require("../app/114850.js");
var c = require("./349372.js");
var d = require("./14509.js");
var f = require("./808035.js");
var p = require("../app/220584.js");
var m = require("../app/459857.js");
var h = require("../app/54052.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
var v = a(require("../app/156720.js"));
const _ = {
  cursor: "ajgl1lbb"
};