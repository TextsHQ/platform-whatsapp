var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneNumberVisibilityIndicator1On1 = function (e) {
  let {
    chat: t
  } = e;
  if (!(0, s.isCtwaConsumerUiEnabled)()) {
    return null;
  }
  const n = t.contact.shareOwnPn === true;
  return h.default.createElement(g, {
    phoneNumberIsShared: n,
    handleClick: () => {
      if (n) {
        i.ModalManager.open(h.default.createElement(c.PostSharePhoneNumberModal, {
          entryPoint: p.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY
        }));
      } else {
        i.ModalManager.open(h.default.createElement(c.SharePhoneNumberModal, {
          entryPoint: p.PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY
        }));
      }
    }
  });
};
exports.PhoneNumberVisibilityIndicatorCag = function (e) {
  var t;
  let {
    chat: n
  } = e;
  const a = Boolean((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin());
  return h.default.createElement(g, {
    phoneNumberIsShared: a,
    handleClick: () => {
      var e;
      const t = (e = n.groupMetadata) === null || e === undefined ? undefined : e.parentGroup;
      if (t) {
        (0, u.incrementPnhDailyCount)(t, u.PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_INFO_SCREEN);
      }
      i.ModalManager.open(a ? h.default.createElement(r.CagPhoneNumberSharedNux, null) : h.default.createElement(r.CagPhoneNumberHiddenNux, null));
    },
    spaced: true
  });
};
var r = require("./950784.js");
var o = a(require("./306007.js"));
var l = require("./841605.js");
var i = require("../app/114850.js");
var u = require("./974232.js");
var s = require("../app/525119.js");
var c = require("./775523.js");
var d = require("../app/220584.js");
var f = require("../app/180519.js");
var p = require("../app/126246.js");
var m = require("../vendor/548360.js");
var h = a(require("../vendor/667294.js"));
function g(e) {
  let {
    phoneNumberIsShared: t,
    handleClick: n,
    spaced: a
  } = e;
  const r = h.default.createElement(f.TextSpan, {
    theme: "title"
  }, m.fbt._("Phone number privacy", null, {
    hk: "GWHMO"
  }));
  const i = m.fbt._("Your phone number is shared in this chat. Click to learn more.", null, {
    hk: "QdO7Y"
  });
  const u = m.fbt._("This chat has added privacy for your phone number. Click to learn more.", null, {
    hk: "17m1TJ"
  });
  return h.default.createElement(o.default, {
    icon: h.default.createElement(l.DialpadIcon, {
      color: d.SvgColorProp.SECONDARY,
      height: 20
    }),
    title: r,
    testid: "phone_number_visibility_indicator",
    secondaryTitle: h.default.createElement(f.TextDiv, {
      theme: "muted"
    }, t ? i : u),
    onClick: n,
    spaced: a
  });
}