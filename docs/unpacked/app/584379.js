var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkDeviceScreen = function (e) {
  let t;
  (0, o.useWAWebElectronDeprecationShouldShowLoggedOutExpiryNoticeScreen)();
  if (_.default) {
    t = p.default.createElement(_.default, null);
  }
  return p.default.createElement("div", {
    className: "landing-wrapper"
  }, p.default.createElement("div", {
    className: "landing-wrapper-before"
  }), p.default.createElement(s.default, null), p.default.createElement("div", {
    className: "landing-window"
  }, p.default.createElement("div", {
    className: "landing-main"
  }, p.default.createElement(m, e)), p.default.createElement(p.default.Fragment, null, t, null)));
};
var i = r(require("../vendor/348926.js"));
var a = require("./445729.js");
var o = require("./880148.js");
var s = r(require("./898755.js"));
var l = require("./61777.js");
var u = require("./461138.js");
var c = r(require("./266780.js"));
var d = require("./368170.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var f = require("./808446.js");
var _ = r(require("./860520.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m(e) {
  const t = d.UA.isOculusBroswer;
  const [n, r] = (0, p.useState)(t);
  const [o, s] = (0, p.useState)(t);
  const _ = function () {
    var e = (0, i.default)(function* (e) {
      yield (0, l.resetLinkDeviceState)({
        linkDeviceMethod: e ? l.LinkDeviceMethodType.ALT_DEVICE_LINKING : l.LinkDeviceMethodType.QR_CODE
      });
      s(e);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const [g, m] = (0, p.useState)(null);
  (0, f.useListener)(a.Conn, "change:ref", (0, i.default)(function* () {
    var e;
    if (n && o) {
      return void (0, l.resetLinkDeviceState)({
        linkDeviceMethod: l.LinkDeviceMethodType.ALT_DEVICE_LINKING
      }).then(() => r(false));
    }
    const t = yield (0, l.getIsAltLinkingEnabledByServer)();
    m({
      enabled: true,
      countryCode: (e = t.countryCode) !== null && e !== undefined ? e : ""
    });
  }), {
    once: true
  });
  const h = (g == null ? undefined : g.enabled) === true;
  if ((h || t) && o) {
    return p.default.createElement(u.LinkWithPhoneNumber, {
      apiCmd: e.apiCmd,
      initialCountryId: (g == null ? undefined : g.enabled) ? g.countryCode : null,
      isLinkingPageLoading: n,
      onClickLinkWithQr: function () {
        var e = (0, i.default)(function* (e) {
          if (!(e == null)) {
            e.preventDefault();
          }
          if (!(e == null)) {
            e.stopPropagation();
          }
          yield _(false);
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()
    });
  } else {
    return p.default.createElement(c.default, {
      apiCmd: e.apiCmd,
      showAlternateDeviceLinkingNux: h,
      onClickLinkWithPhoneNumber: function () {
        var e = (0, i.default)(function* (e) {
          if (!(e == null)) {
            e.preventDefault();
          }
          if (!(e == null)) {
            e.stopPropagation();
          }
          yield _(true);
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()
    });
  }
}