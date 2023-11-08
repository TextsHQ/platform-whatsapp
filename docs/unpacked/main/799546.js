var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const [n, a] = (0, C.useMsgValues)(e.msg.id, [u.getSubtype, u.getTemplateParams]);
  const o = s.default.get(e.msg.id.remote);
  const v = function (e) {
    let {
      subtype: t,
      templateParams: n,
      chat: a
    } = e;
    switch (t) {
      case "newsletter_privacy":
        {
          const [e] = n;
          const t = (0, f.isMembershipAdminOrOwner)(e == null ? undefined : e.toString()) ? _.default.createElement(m.NewsletterPublicChannelPrivacyNux, {
            chat: a
          }) : _.default.createElement(p.NewsletterPhoneNumberNux, null);
          return () => {
            i.ModalManager.open(t);
          };
        }
      default:
        return null;
    }
  }({
    subtype: n,
    templateParams: a,
    chat: o
  });
  const S = _.default.createElement("div", {
    className: (0, y.default)([b.channelsIcon, E.uiMargin.top3, E.uiMargin.end4])
  }, _.default.createElement(h.NewsletterSystemMessageIcon, {
    width: 14,
    height: 14
  }));
  const T = _.default.createElement("span", null, n === "newsletter_privacy" ? _.default.createElement(_.default.Fragment, null, S, _.default.createElement(l.EmojiText, {
    breakWord: true,
    text: M({
      subtype: n,
      templateParams: a
    })
  })) : _.default.createElement(l.EmojiText, {
    breakWord: true,
    inlineblock: true,
    text: M({
      subtype: n,
      templateParams: a
    })
  }));
  const w = v != null ? _.default.createElement(r.default, {
    onClick: v,
    xstyle: b.linkColor
  }, T) : T;
  const A = n === "newsletter_admin_context_card" && o != null && (0, c.isNewsletterAdminContextCardEnabled)((t = (0, g.unproxy)(o).newsletterMetadata) === null || t === undefined ? undefined : t.membershipType) ? _.default.createElement(d.default, {
    chat: o
  }) : null;
  return _.default.createElement("div", null, A != null ? A : w);
};
var r = a(require("../app/196554.js"));
var o = require("./949359.js");
var l = require("../app/305521.js");
var i = require("../app/114850.js");
var u = require("../app/787742.js");
var s = a(require("../app/358533.js"));
var c = require("../app/73225.js");
var d = a(require("./720038.js"));
var f = require("../app/14291.js");
var p = require("./620973.js");
var m = require("./617058.js");
var h = require("./465823.js");
var g = require("../app/163139.js");
var E = require("../app/676345.js");
var v = require("../vendor/548360.js");
var _ = a(require("../vendor/667294.js"));
var y = a(require("../app/156720.js"));
var C = require("./871210.js");
const b = {
  linkColor: {
    color: "e7al1772"
  },
  channelsIcon: {
    display: "l7jjieqr",
    verticalAlign: "fewfhwl7"
  }
};
function M(e) {
  let {
    subtype: t,
    templateParams: n
  } = e;
  switch (t) {
    case "newsletter_created":
      {
        const [e, t] = n;
        if (t === "owner") {
          return (0, o.getYouCreatedChannelWithNameText)(String(e));
        } else {
          return v.fbt._("The channel \"{channel_name}\" was created", [v.fbt._param("channel_name", e)], {
            hk: "1P4NGZ"
          });
        }
      }
    case "newsletter_privacy":
      {
        const [e] = n;
        if ((0, f.isMembershipAdminOrOwner)(e == null ? undefined : e.toString())) {
          return v.fbt._("This channel is public and visible to anyone, including WhatsApp. There is added privacy for your profile and phone number. Click to learn more.", null, {
            hk: "4n0LRu"
          });
        } else {
          return v.fbt._("This channel has added privacy for your profile and phone number. Click to learn more.", null, {
            hk: "2FQoYx"
          });
        }
      }
    case "newsletter_deleted":
      {
        const [e] = n;
        return v.fbt._("The channel \"{newsletter_name}\" was deleted", [v.fbt._param("newsletter_name", e)], {
          hk: "Lton9"
        });
      }
  }
}