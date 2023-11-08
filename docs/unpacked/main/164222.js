var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/418987.js");
var o = require("./949359.js");
var l = require("../app/23641.js");
var i = a(require("./908081.js"));
var u = a(require("./324093.js"));
var s = require("./626194.js");
var c = a(require("./969358.js"));
var d = require("../app/753233.js");
var f = require("../app/258105.js");
var p = require("../app/690495.js");
var m = require("./371853.js");
var h = require("./72655.js");
var g = require("./367234.js");
var E = require("../app/180519.js");
var v = require("./119721.js");
var _ = require("../app/676345.js");
var y = require("../app/344575.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
var M = a(require("../app/156720.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = {
  container: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "fhf7t426",
    flexGrow: "ggj6brxn"
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
function w(e) {
  let {
    icon: t,
    title: n,
    description: a
  } = e;
  return b.default.createElement("div", {
    className: (0, M.default)([T.row, _.uiMargin.vert15])
  }, b.default.createElement("div", {
    className: (0, M.default)(T.iconColumn)
  }, t), b.default.createElement("div", {
    className: (0, M.default)([T.paragraph, _.uiMargin.start24])
  }, b.default.createElement(E.TextParagraph, {
    size: "16",
    weight: "normal",
    color: "primary"
  }, n), b.default.createElement(E.TextParagraph, {
    theme: "muted",
    xstyle: _.uiMargin.top8,
    color: "secondary"
  }, a)));
}
function A(e) {
  let {
    chat: t,
    country: n
  } = e;
  const a = [{
    title: C.fbt._("What this means", null, {
      hk: "135o7n"
    }),
    description: C.fbt._("People with a {country} phone number can't see or follow your channel. Your channel is still open in other countries.", [C.fbt._param("country", n.countryName)], {
      hk: "3C2CXu"
    }),
    Icon: h.SettingsHelpIcon,
    iconSize: 30
  }, {
    title: C.fbt._("What you can do", null, {
      hk: "3vBTi2"
    }),
    description: C.fbt._("{=m0} about why this happened.", [C.fbt._implicitParam("=m0", b.default.createElement(d.ExternalLink, {
      href: (0, f.getNewsletterGeosuspendFaqUrl)()
    }, C.fbt._("Learn more", null, {
      hk: "1XH5y0"
    })))], {
      hk: "2fcui4"
    }),
    Icon: g.SettingsSecureIcon,
    iconSize: 24
  }];
  return b.default.createElement(c.default, {
    animation: false,
    xstyle: [T.container, _.uiPadding.vert36, _.uiPadding.horiz48, _.uiMargin.bottom0]
  }, b.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: _.uiMargin.start16
  }, b.default.createElement(l.DetailImage, {
    id: t.id,
    size: 104,
    quality: l.DetailImageQuality.High,
    shape: l.DetailImageShape.Circle
  }), b.default.createElement(v.TriangleBackgroundIcon, {
    width: 60,
    height: 60,
    xstyle: T.badgeBackground
  }), b.default.createElement(y.WarningIcon, {
    width: 52,
    height: 52,
    xstyle: T.badge
  })), b.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center"
  }, b.default.createElement(E.TextHeader, {
    xstyle: [T.header, _.uiPadding.vert16],
    size: "24",
    color: "dark",
    weight: "medium"
  }, C.fbt._("Your channel is closed in {country}.", [C.fbt._param("country", n.countryName)], {
    hk: "3BSOVC"
  }))), b.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: _.uiMargin.bottom16
  }, b.default.createElement(E.TextParagraph, {
    theme: "muted",
    xstyle: [T.header, _.uiMargin.top8],
    color: "secondary"
  }, C.fbt._("Local laws require your channel be closed in {country}. WhatsApp complied after conducting a legal and human rights assessment.", [C.fbt._param("country", n.countryName)], {
    hk: "zJDxI"
  }))), a.map(e => {
    const {
      Icon: t,
      iconSize: n,
      title: a,
      description: r
    } = e;
    return b.default.createElement(w, {
      key: a,
      icon: b.default.createElement(t, {
        width: n,
        height: n,
        xstyle: T.icon
      }),
      title: a,
      description: r
    });
  }), b.default.createElement(m.WAWebGeosuspensionAppealSection, {
    chatId: (0, r.toNewsletterJid)(t.id.toString()),
    country: n
  }));
}
function P(e, t) {
  const {
    country: n,
    onBack: a,
    chat: r
  } = e;
  return b.default.createElement(i.default, {
    theme: "gallery",
    ref: t,
    testid: "newsletter-geosuspended-detailed-drawer"
  }, b.default.createElement(s.DrawerHeader, {
    title: (0, o.getNewsletterAlertsDrawerTitle)(),
    onBack: a,
    type: s.DRAWER_HEADER_TYPE.SMALL
  }), b.default.createElement(u.default, null, b.default.createElement(A, {
    chat: r,
    country: n
  })));
}
var O = (0, b.forwardRef)(P);
exports.default = O;