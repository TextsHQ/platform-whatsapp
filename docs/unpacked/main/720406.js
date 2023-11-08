var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/775593.js");
var o = require("../app/927531.js");
var l = a(require("./164222.js"));
var i = a(require("./465367.js"));
var u = require("./898297.js");
var s = require("./558173.js");
var c = require("../app/532583.js");
var d = a(require("./478733.js"));
var f = a(require("./30567.js"));
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var m = require("./839062.js");
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function g(e, t) {
  var n;
  const {
    chat: a,
    onBack: h,
    alertScreen: g,
    entryPoint: E
  } = e;
  const [v, _] = (0, s.useNewsletterChannelAlertsBanner)(a);
  const y = (n = (0, s.useNewsletterGeosuspendedCountries)(a)) !== null && n !== undefined ? n : [];
  (0, p.useEffect)(() => {
    (0, c.getMessageDeliveryUpdatesAction)(a.id, r.JOB_PRIORITY.UI_ACTION);
  }, []);
  (0, p.useEffect)(() => {
    if (v) {
      _();
    }
  }, [v, _]);
  const [C, b] = (0, m.useFlow)(g, {
    transitions: m.FlowTransitions.DrawerRight
  });
  const [M, S] = (0, p.useState)(null);
  let T;
  if (b.step == null) {
    return null;
  }
  const w = b.step == null && E === o.AlertEntryPoint.ALERT_BANNER ? h : () => b.pop();
  switch (b.step) {
    case u.AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN:
      T = p.default.createElement(i.default, {
        onClickGeoSuspendedCountry: e => {
          S(e);
          b.push(u.AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN);
        },
        onClickHiddenChannel: () => b.push(u.AlertScreen.VIOLATING_MESSAGES_SCREEN),
        chat: a,
        onBack: w
      });
      break;
    case u.AlertScreen.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN:
      T = M != null || y.length > 0 ? p.default.createElement(l.default, {
        country: M != null ? M : y[0],
        onBack: w,
        chat: a
      }) : null;
      break;
    case u.AlertScreen.VIOLATING_MESSAGES_SCREEN:
      T = p.default.createElement(f.default, {
        chat: a,
        onBack: w
      });
      break;
    case u.AlertScreen.NO_ALERTS_SCREEN:
      T = p.default.createElement(d.default, {
        chat: a,
        onBack: w
      });
  }
  return p.default.createElement(C, {
    flow: b,
    ref: t,
    displayName: "NewsletterAlertFlow"
  }, T);
}
var E = (0, p.forwardRef)(g);
exports.default = E;