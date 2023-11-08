var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/418987.js");
var o = require("../app/338042.js");
var l = require("./949359.js");
var i = require("../app/23641.js");
var u = a(require("./908081.js"));
var s = a(require("./324093.js"));
var c = require("./626194.js");
var d = a(require("./969358.js"));
var f = require("../app/305521.js");
var p = require("../app/753233.js");
var m = require("../app/258105.js");
var h = require("../app/690495.js");
var g = require("./558173.js");
var E = a(require("./484465.js"));
var v = require("./280206.js");
var _ = require("./72655.js");
var y = require("./367234.js");
var C = require("../app/180519.js");
var b = require("./119721.js");
var M = require("../app/676345.js");
var S = require("../app/344575.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var A = a(require("../app/156720.js"));
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const O = {
  container: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "fhf7t426"
  },
  badgeBackground: {
    zIndex: "nbczt5ty",
    bottom: "da1o61xg",
    end: "l5wf47vo",
    position: "g0rxnol2",
    marginEnd: "oeed82h7",
    color: "h6rxrygl"
  },
  badge: {
    zIndex: "l355kaf8",
    color: "as1tos1z",
    position: "g0rxnol2",
    bottom: "da1o61xg"
  },
  newsletterInfoRow: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3",
    fontSize: "f8jlpxt4",
    color: "pm5hny62"
  },
  profilePic: {
    minWidth: "h3algdng"
  },
  header: {
    textAlign: "qfejxiq4",
    lineHeight: "a4ywakfo"
  },
  row: {
    display: "p357zi0d",
    width: "ln8gz9je"
  },
  icon: {
    color: "lb5lfgsh"
  },
  iconColumn: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    width: "jswlwoyz",
    height: "fs6hn1up"
  },
  paragraph: {
    flexGrow: "ggj6brxn"
  }
};
function k(e) {
  let {
    icon: t,
    title: n,
    description: a
  } = e;
  return w.default.createElement("div", {
    className: (0, A.default)([O.row, M.uiMargin.vert15])
  }, w.default.createElement("div", {
    className: (0, A.default)(O.iconColumn)
  }, t), w.default.createElement("div", {
    className: (0, A.default)([O.paragraph, M.uiMargin.start24])
  }, w.default.createElement(C.TextParagraph, {
    size: "16",
    weight: "normal",
    color: "primary"
  }, n), w.default.createElement(C.TextParagraph, {
    theme: "muted",
    xstyle: M.uiMargin.top8,
    color: "secondary"
  }, a)));
}
function D(e) {
  let {
    chat: t
  } = e;
  const n = [{
    title: T.fbt._("What this means", null, {
      hk: "135o7n"
    }),
    description: T.fbt._("The channel link is currently unavailable and channel content is only visible to existing followers.", null, {
      hk: "jKOXy"
    }),
    Icon: _.SettingsHelpIcon,
    iconSize: 30
  }, {
    title: T.fbt._("What you can do", null, {
      hk: "3m781a"
    }),
    description: T.fbt._("Delete updates shown below to reopen your channel.", null, {
      hk: "23MVqo"
    }),
    Icon: y.SettingsSecureIcon,
    iconSize: 24
  }];
  return w.default.createElement(d.default, {
    animation: false,
    xstyle: [O.container, M.uiPadding.vert36, M.uiPadding.horiz48, M.uiMargin.bottom0]
  }, w.default.createElement(h.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: M.uiMargin.start16
  }, w.default.createElement(i.DetailImage, {
    id: t.id,
    size: 104,
    quality: i.DetailImageQuality.High,
    shape: i.DetailImageShape.Circle
  }), w.default.createElement(b.TriangleBackgroundIcon, {
    width: 60,
    height: 60,
    xstyle: O.badgeBackground
  }), w.default.createElement(S.WarningIcon, {
    width: 52,
    height: 52,
    xstyle: O.badge
  })), w.default.createElement(h.FlexRow, {
    align: "center",
    justify: "center"
  }, w.default.createElement(C.TextHeader, {
    xstyle: [O.header, M.uiPadding.vert16],
    size: "24",
    color: "dark",
    weight: "medium"
  }, T.fbt._("Your channel is closed to new followers", null, {
    hk: "DaC9G"
  }))), w.default.createElement(h.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: M.uiMargin.bottom16
  }, w.default.createElement(C.TextParagraph, {
    theme: "muted",
    xstyle: [O.header, M.uiMargin.top8],
    color: "secondary"
  }, T.fbt._("Some updates shared by this channel do not follow our {=m1}.", [T.fbt._implicitParam("=m1", w.default.createElement(p.ExternalLink, {
    href: (0, m.getNewsletterGuidelinesFaqUrl)()
  }, T.fbt._("guidelines", null, {
    hk: "2QYlH3"
  })))], {
    hk: "4aghXh"
  }))), n.map(e => {
    const {
      Icon: t,
      iconSize: n,
      title: a,
      description: r
    } = e;
    return w.default.createElement(k, {
      key: a,
      icon: w.default.createElement(t, {
        width: n,
        height: n,
        xstyle: O.icon
      }),
      title: a,
      description: r
    });
  }));
}
function I(e, t) {
  var n;
  const {
    chat: a,
    onBack: d
  } = e;
  const p = (n = (0, g.useNewsletterMessageDeliveryUpdates)(a)) !== null && n !== undefined ? n : [];
  const m = e => {
    (0, v.openNewsletterAt)({
      newsletterJid: (0, r.toNewsletterJid)(a.id.toString()),
      serverId: e,
      chatEntryPoint: o.ChatEntryPoint.NewsletterIntegrity
    });
  };
  const _ = w.default.createElement(h.FlexRow, {
    xstyle: O.newsletterInfoRow,
    grow: 0,
    align: "center"
  }, w.default.createElement(i.DetailImage, {
    id: a.id,
    size: 26,
    xstyle: O.profilePic
  }), w.default.createElement(f.EmojiText, {
    text: a.formattedTitle,
    xstyle: M.uiMargin.horiz9,
    ellipsify: true
  }));
  return w.default.createElement(u.default, {
    theme: "gallery",
    ref: t,
    testid: "newsletter-violating-messages-drawer"
  }, w.default.createElement(c.DrawerHeader, {
    title: (0, l.getNewsletterAlertsDrawerTitle)(),
    onBack: d,
    type: c.DRAWER_HEADER_TYPE.SMALL
  }), w.default.createElement(s.default, null, w.default.createElement(D, {
    chat: a
  }), p.map(e => w.default.createElement(E.default, {
    key: e.id,
    serverId: e.serverId,
    msg: e.msgModel,
    title: _,
    onSelect: m
  }))));
}
var R = (0, w.forwardRef)(I);
exports.default = R;