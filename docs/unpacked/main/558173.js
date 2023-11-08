var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterChannelAlertsBanner = undefined;
exports.useNewsletterChannelAlertsBanner = function (e) {
  var t;
  var n;
  const a = (0, b.useModelValues)(e, ["id"]);
  const {
    id: r
  } = a;
  const o = (t = P(a)) !== null && t !== undefined ? t : [];
  const l = (n = O(a)) !== null && n !== undefined ? n : [];
  const i = (0, m.getNewsletterAlertsBannerNuxKey)(r.toString());
  const [u, s] = (0, M.default)(i);
  const c = o.length > 0 && (0, p.isNewsletterMessageDeliveryUpdatesEnabled)();
  const d = l.length > 0 && (0, p.isNewsletterGeosuspendAdminAlertsEnabled)();
  return [u && (c || d), s];
};
exports.useNewsletterGeosuspendedCountries = O;
exports.useNewsletterMessageDeliveryUpdates = P;
var r = a(require("../vendor/348926.js"));
var o = require("../app/927531.js");
var l = a(require("./222437.js"));
var i = require("../app/537469.js");
var u = require("../app/900316.js");
var s = require("../app/690495.js");
var c = a(require("../app/469733.js"));
var d = a(require("./720406.js"));
var f = require("./898297.js");
var p = require("../app/73225.js");
var m = require("../app/95589.js");
var h = require("../app/392632.js");
var g = require("../app/676345.js");
var E = require("../app/344575.js");
var v = require("../app/851488.js");
var _ = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var C = a(require("../app/524578.js"));
var b = require("../app/655241.js");
var M = a(require("./157558.js"));
var S = a(require("../app/321201.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  banner: {
    backgroundColor: "ihvf49ua"
  },
  icon: {
    color: "sbs3osm6"
  }
};
const A = (0, y.forwardRef)((e, t) => {
  var n;
  var a;
  const {
    onClose: r,
    newsletter: i
  } = e;
  const p = (0, S.default)();
  const m = (n = O(i)) !== null && n !== undefined ? n : [];
  const C = (a = P(i)) !== null && a !== undefined ? a : [];
  const b = (0, f.getNewsletterAlertScreenType)(C, m);
  return y.default.createElement(h.UIE, {
    displayName: "NewsletterChannelAlertsBanner",
    escapable: true
  }, y.default.createElement(l.default, {
    ref: t,
    xstyle: w.banner,
    onClick: () => {
      u.DrawerManager.openDrawerRight(y.default.createElement(d.default, {
        chat: i,
        entryPoint: o.AlertEntryPoint.ALERT_BANNER,
        onBack: () => u.DrawerManager.closeDrawerRight(),
        alertScreen: b
      }), {
        transition: "slide-left",
        uim: p
      });
      r();
    },
    onClose: r
  }, y.default.createElement(s.FlexRow, {
    align: "center"
  }, y.default.createElement(c.default, {
    xstyle: g.uiPadding.end20
  }, y.default.createElement(E.WarningIcon, {
    xstyle: w.icon,
    width: 20,
    height: 20
  })), y.default.createElement(c.default, null, y.default.createElement(v.WDSTextSectionTitle, null, _.fbt._("Channel Alerts", null, {
    hk: "2NTvKC"
  }))))));
});
function P(e) {
  const t = (0, b.useModelValues)(e, ["newsletterMetadata"]);
  const n = (0, b.useOptionalModelValues)(t.newsletterMetadata, ["messageDeliveryUpdates"]);
  const a = (0, C.default)(n == null ? undefined : n.messageDeliveryUpdates, ["add", "remove", "reset", "change"], () => n == null ? undefined : n.messageDeliveryUpdates.toArray());
  if ((0, p.isNewsletterMessageDeliveryUpdatesEnabled)()) {
    return a;
  } else {
    return null;
  }
}
function O(e) {
  const [t, n] = (0, y.useState)(null);
  const a = (0, b.useModelValues)(e, ["newsletterMetadata"]);
  const o = (0, b.useOptionalModelValues)(a.newsletterMetadata, ["geosuspendedCountries"]);
  const l = (0, C.default)(o == null ? undefined : o.geosuspendedCountries, ["add", "remove", "reset", "change"], () => o == null ? undefined : o.geosuspendedCountries.toArray());
  (0, y.useEffect)(() => {
    function e() {
      return (e = (0, r.default)(function* () {
        if (l == null) {
          return;
        }
        const e = yield Promise.all(l.map(function () {
          var e = (0, r.default)(function* (e) {
            var t;
            return {
              countryCode: e.id,
              countryName: (t = yield (0, i.getCountryName)(e.id)) !== null && t !== undefined ? t : ""
            };
          });
          return function () {
            return e.apply(this, arguments);
          };
        }()));
        n(e);
      })).apply(this, arguments);
    }
    !function () {
      e.apply(this, arguments);
    }();
  }, [l]);
  if ((0, p.isNewsletterGeosuspendAdminAlertsEnabled)()) {
    if (t == null) {
      return undefined;
    } else {
      return t.sort((e, t) => e.countryName < t.countryName ? -1 : 0);
    }
  } else {
    return null;
  }
}
exports.NewsletterChannelAlertsBanner = A;
A.displayName = "NewsletterChannelAlertsBanner";