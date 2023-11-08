var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./967318.js");
var o = require("./949359.js");
var l = require("../app/23641.js");
var i = a(require("./908081.js"));
var u = a(require("./324093.js"));
var s = require("./626194.js");
var c = a(require("./969358.js"));
var d = require("../app/753233.js");
var f = require("../app/258105.js");
var p = require("../app/690495.js");
var m = require("../app/180519.js");
var h = require("../app/676345.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
a(require("../app/156720.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  container: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "fhf7t426",
    height: "ppled2lx"
  },
  headerSection: {
    marginEnd: "nm6oi3cm"
  },
  badge: {
    zIndex: "nbczt5ty",
    bottom: "da1o61xg",
    end: "l5wf47vo",
    position: "g0rxnol2",
    marginEnd: "oeed82h7",
    color: "h6rxrygl"
  },
  header: {
    textAlign: "qfejxiq4",
    lineHeight: "a4ywakfo"
  }
};
function y(e) {
  let {
    chat: t
  } = e;
  return E.default.createElement(c.default, {
    animation: false,
    xstyle: [_.container, h.uiPadding.vert36, h.uiPadding.horiz48, h.uiMargin.bottom0]
  }, E.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: _.headerSection
  }, E.default.createElement(l.DetailImage, {
    id: t.id,
    size: 112,
    quality: l.DetailImageQuality.High,
    shape: l.DetailImageShape.Circle
  }), E.default.createElement(r.CircleCheckIcon, {
    width: 52,
    height: 52,
    xstyle: _.badge
  })), E.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(m.TextHeader, {
    xstyle: [_.header, h.uiPadding.vert16],
    size: "24",
    color: "dark",
    weight: "medium"
  }, g.fbt._("No current alerts", null, {
    hk: "2KhBKc"
  }))), E.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: h.uiMargin.bottom16
  }, E.default.createElement(m.TextParagraph, {
    theme: "muted",
    xstyle: [_.header, h.uiMargin.top8],
    color: "secondary"
  }, g.fbt._("Thank you for following our {=m1}.", [g.fbt._implicitParam("=m1", E.default.createElement(d.ExternalLink, {
    href: (0, f.getNewsletterGuidelinesFaqUrl)()
  }, g.fbt._("Channel Guidelines", null, {
    hk: "kBGaR"
  })))], {
    hk: "2LIFhO"
  }))));
}
function C(e, t) {
  const {
    chat: n,
    onBack: a
  } = e;
  return E.default.createElement(i.default, {
    theme: "gallery",
    ref: t,
    testid: "newsletter-no-alerts-drawer"
  }, E.default.createElement(s.DrawerHeader, {
    title: (0, o.getNewsletterAlertsDrawerTitle)(),
    onBack: a,
    type: s.DRAWER_HEADER_TYPE.SMALL
  }), E.default.createElement(u.default, null, E.default.createElement(y, {
    chat: n
  })));
}
var b = (0, E.forwardRef)(C);
exports.default = b;