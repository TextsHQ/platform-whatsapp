var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityAnnouncementsSection = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/738501.js");
var l = a(require("./306007.js"));
var i = require("./464659.js");
var u = a(require("./740681.js"));
var s = require("./998123.js");
var c = a(require("./969358.js"));
var d = a(require("./409558.js"));
var f = require("./71957.js");
var p = require("../app/753233.js");
var m = require("../app/258105.js");
var h = a(require("./299723.js"));
var g = a(require("./832897.js"));
var E = require("./111367.js");
var v = require("./474474.js");
var _ = a(require("../app/634152.js"));
var y = require("./407024.js");
var C = require("../app/163139.js");
var b = require("../app/220584.js");
var M = require("../app/180519.js");
var S = require("../app/676345.js");
var T = a(require("../app/571256.js"));
var w = require("../app/521394.js");
var A = require("../vendor/548360.js");
var P = a(require("../vendor/667294.js"));
exports.CommunityAnnouncementsSection = e => {
  let {
    chat: t,
    onMediaGalleryClick: n,
    onStarredMessagesClick: a,
    onEphemeralClick: O,
    onDeactivateCommunity: k
  } = e;
  const D = P.default.createElement(u.default, {
    onMediaGallery: n,
    chat: (0, C.unproxy)(t)
  });
  const I = t && (0, o.shouldShowEphemeralSetting)(t) ? P.default.createElement(f.EphemeralSettingRow, {
    onClick: O,
    chat: t,
    groupMetadata: (0, r.default)(t.groupMetadata, "chat.groupMetadata"),
    testid: "community-dm-row"
  }) : null;
  const R = P.default.createElement(l.default, {
    testid: "block-starred-messages",
    side: "chevron",
    icon: P.default.createElement(y.StarIcon, {
      color: b.SvgColorProp.SECONDARY,
      height: 20
    }),
    onClick: a,
    title: P.default.createElement(M.TextSpan, {
      theme: "title",
      size: "16"
    }, A.fbt._("Starred messages", null, {
      hk: "1rTNDD"
    })),
    spaced: true
  });
  const N = P.default.createElement(d.default, {
    highlightSurface: w.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
    onClick: () => (0, E.showEncryptionInfoPopup)(t),
    text: T.default.isGroupCallEnabled() ? A.fbt._("Messages and calls are end-to-end encrypted. Click to learn more.", null, {
      hk: "1L9biO"
    }) : A.fbt._("Messages are end-to-end encrypted. Click to learn more.", null, {
      hk: "3IUXPE"
    }),
    spaced: true
  });
  const x = t.mute.canMute() ? P.default.createElement(g.default, {
    chat: t,
    mute: t.mute,
    settings: _.default
  }) : null;
  const L = (0, v.isReactionsEnabledInCAG)(t) ? P.default.createElement(s.PhoneNumberVisibilityIndicatorCag, {
    chat: t
  }) : null;
  const j = P.default.createElement(h.default, {
    chat: t,
    showDeleteOrExit: false,
    onDeactivateCommunity: k
  });
  const B = P.default.createElement(c.default, {
    xstyle: [S.uiMargin.vert20, S.uiMargin.horiz30],
    theme: "transparent",
    shadow: false
  }, P.default.createElement(M.TextParagraph, {
    theme: "muted"
  }, A.fbt._("If you don't want to receive announcements, you must exit the community. {=m2}", [A.fbt._implicitParam("=m2", P.default.createElement(p.ExternalLink, {
    href: (0, m.getExitCommunityUrl)()
  }, A.fbt._("Learn more", null, {
    hk: "JeVHH"
  })))], {
    hk: "p0Y6j"
  })));
  return P.default.createElement(P.default.Fragment, null, D, P.default.createElement(i.ChatInfoDrawerSection, {
    xstyle: [S.uiPadding.horiz0, S.uiMargin.bottom10]
  }, R, x, I, N, L), j, B);
};