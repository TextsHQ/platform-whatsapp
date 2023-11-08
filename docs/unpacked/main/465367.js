var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/345260.js");
var o = require("./949359.js");
var l = a(require("./908081.js"));
var i = a(require("./324093.js"));
var u = require("./626194.js");
var s = require("../app/690495.js");
var c = require("./558173.js");
var d = require("../app/180519.js");
var f = require("../app/676345.js");
var p = require("../app/344575.js");
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var g = a(require("../app/156720.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = {
  row: {
    display: "p357zi0d",
    width: "ln8gz9je",
    cursor: "ajgl1lbb"
  },
  icon: {
    color: "as1tos1z"
  },
  secondIcon: {
    color: "l41nnex3"
  },
  iconColumn: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    width: "jswlwoyz",
    height: "fs6hn1up"
  },
  paragraph: {
    flexGrow: "ggj6brxn"
  },
  rowTitle: {
    lineHeight: "a4ywakfo"
  },
  body: {
    backgroundColor: "ihvf49ua",
    height: "ppled2lx"
  },
  divider: {
    width: "sh47nb68",
    borderTop: "lufur1ix"
  }
};
function _(e) {
  let {
    title: t,
    subtitle: n,
    onClick: a,
    icon: o
  } = e;
  return h.default.createElement(h.default.Fragment, null, h.default.createElement("div", {
    className: (0, g.default)([v.row, f.uiMargin.vert20, f.uiMargin.horiz28]),
    onClick: a
  }, h.default.createElement(s.FlexRow, {
    padding: 4
  }, h.default.createElement("div", {
    className: (0, g.default)(v.iconColumn)
  }, o), h.default.createElement("div", {
    className: (0, g.default)([v.paragraph, f.uiMargin.start24, f.uiPadding.end20])
  }, h.default.createElement(d.TextParagraph, {
    size: "20",
    color: "primary",
    weight: "normal",
    xstyle: [f.uiMargin.end20, v.rowTitle]
  }, t), h.default.createElement("div", {
    className: (0, g.default)([v.paragraph, f.uiPadding.end48, f.uiMargin.end40])
  }, h.default.createElement(d.TextParagraph, {
    theme: "muted",
    xstyle: f.uiMargin.top8,
    color: "secondary"
  }, n))), h.default.createElement("div", {
    className: (0, g.default)([v.iconColumn, f.uiMargin.end48])
  }, h.default.createElement(r.ArrowForwardIcon, {
    width: 24,
    height: 24,
    xstyle: v.secondIcon
  })))), h.default.createElement("div", {
    className: (0, g.default)([f.uiMargin.top0, f.uiMargin.start20, v.divider])
  }));
}
function y(e, t) {
  var n;
  var a;
  const {
    onClickGeoSuspendedCountry: r,
    onBack: s,
    onClickHiddenChannel: d,
    chat: f
  } = e;
  const E = (n = (0, c.useNewsletterMessageDeliveryUpdates)(f)) !== null && n !== undefined ? n : [];
  const y = (a = (0, c.useNewsletterGeosuspendedCountries)(f)) !== null && a !== undefined ? a : [];
  return h.default.createElement(l.default, {
    theme: "gallery",
    ref: t,
    testid: "newsletter-multiple-alerts-drawer"
  }, h.default.createElement(u.DrawerHeader, {
    title: (0, o.getNewsletterAlertsDrawerTitle)(),
    onBack: s,
    type: u.DRAWER_HEADER_TYPE.SMALL
  }), h.default.createElement(i.default, null, h.default.createElement("div", {
    className: (0, g.default)(v.body)
  }, E.length > 0 ? h.default.createElement(_, {
    title: m.fbt._("Your channel is closed to new followers.", null, {
      hk: "1yMTmw"
    }),
    subtitle: m.fbt._("Only current followers can see channel history and updates.", null, {
      hk: "3L1xCB"
    }),
    icon: h.default.createElement(p.WarningIcon, {
      width: 24,
      height: 24,
      xstyle: v.icon
    }),
    onClick: d
  }) : null, y.map(e => h.default.createElement(_, {
    key: e.countryCode,
    title: m.fbt._("Your channel is closed in {country}.", [m.fbt._param("country", e.countryName)], {
      hk: "3mt815"
    }),
    subtitle: m.fbt._("People with a {country} phone number can't see or follow your channel.", [m.fbt._param("country", e.countryName)], {
      hk: "3avacc"
    }),
    icon: h.default.createElement(p.WarningIcon, {
      width: 24,
      height: 24,
      xstyle: v.icon
    }),
    onClick: () => r(e)
  })))));
}
var C = (0, h.forwardRef)(y);
exports.default = C;