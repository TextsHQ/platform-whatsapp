var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForwardedNewsletterMessageInfoHeader = function (e) {
  let {
    newsletterForwardedMessageInfo: t
  } = e;
  const {
    newsletterName: n,
    newsletterId: a,
    serverMessageId: c
  } = t;
  if (a == null) {
    return null;
  }
  const d = n != null ? n : u.fbt._("View Channel", null, {
    hk: "41hwgF"
  });
  return s.default.createElement(i.WDSClickableText, {
    onClick: () => {
      (0, l.execNewsletterApiCmd)({
        identifier: a.toString(),
        identifierType: o.NewsletterIdentifierType.Id,
        type: "view",
        chatEntryPoint: r.ChatEntryPoint.ForwardedNewsletterMessage,
        serverId: c
      });
    }
  }, s.default.createElement(i.WDSTextSmall, {
    weight: "semibold",
    color: "link"
  }, d));
};
var r = require("../app/338042.js");
var o = require("../app/783020.js");
var l = require("./491860.js");
var i = require("../app/851488.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));