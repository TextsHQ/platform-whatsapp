var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkWithPhoneNumberEntryScreen = function (e) {
  const {
    initialCountryId: t,
    onSubmitPhoneNumber: n,
    onClickLinkWithQr: r,
    initialPhoneNumber: i,
    showUpdatePrimaryAppBanner: o,
    isLinkingPageLoading: s
  } = e;
  const [l, c] = (0, D.useState)(() => {
    if (i != null) {
      return (0, M.getCountryCodeIso)(i);
    }
    const e = t == null ? null : t.toUpperCase();
    if (e != null && a.default[e] != null) {
      return e;
    } else {
      return "US";
    }
  });
  const [d, p] = (0, D.useState)(() => i == null ? "" : (0, M.cleanPhoneNumberInputValue)(i).phoneNumberWithoutCountryCode);
  const f = (0, D.useRef)(null);
  const [_, g] = (0, D.useState)(false);
  const E = (0, D.useCallback)(() => {
    if (l != null && (0, M.isPhoneNumberValid)(a.default[l], d)) {
      const e = `${a.default[l]}${d}`;
      n(e);
    } else {
      var e;
      if (!((e = f.current) === null || e === undefined)) {
        e.focus();
      }
      g(true);
    }
  }, [n, d, l]);
  const S = (0, D.useCallback)((e, t) => {
    g(false);
    c(e);
    p(t);
  }, []);
  return D.default.createElement(D.default.Fragment, null, D.default.createElement($, {
    shouldShowUpdatePrimaryErrorBanner: o
  }), D.default.createElement(h.FlexColumn, {
    testid: "link-device-phone-number-entry-screen",
    className: "light",
    align: "center"
  }, D.default.createElement(y.default, {
    xstyle: O.uiMargin.bottom16
  }, D.default.createElement(P.Text, {
    as: "div",
    className: "landing-title",
    size: "28",
    weight: "light"
  }, R.fbt._("Enter phone number", null, {
    hk: "2h9ZyR"
  }))), D.default.createElement(y.default, {
    xstyle: O.uiMargin.bottom32
  }, D.default.createElement(P.Text, {
    as: "div",
    color: "secondary",
    size: "16"
  }, R.fbt._("Select a country and enter your WhatsApp phone number.", null, {
    hk: "2CXgDe"
  }))), D.default.createElement(j, {
    shouldDisplayError: _,
    phoneNumberWithoutCountryCode: d,
    selectedCountryId: l,
    onSubmit: E,
    onChangePhoneNumber: S,
    onChangeSelectedCountry: c,
    actionButtonText: (0, m.default)("Next"),
    isLinkingPageLoading: s
  }), _ ? D.default.createElement(y.default, {
    xstyle: [B.error, O.uiMargin.bottom32]
  }, D.default.createElement("span", {
    id: x
  }, R.fbt._("Valid phone number is required.", null, {
    hk: "2vcqcF"
  }))) : null, D.default.createElement(y.default, null, D.default.createElement(P.Text, {
    as: "div",
    size: "18",
    className: "landing-text-secondary"
  }, D.default.createElement(u.Clickable, {
    as: "span",
    onClick: r
  }, D.default.createElement(P.Text, {
    as: "span",
    color: "accent",
    size: "18"
  }, R.fbt._("Link with QR code", null, {
    hk: "4rNja8"
  })))))));
};
exports.PhoneNumberSection = undefined;
exports.PhoneNumberSectionImpl = F;
exports.genCountryDropdownItems = Y;
var i = r(require("../vendor/348926.js"));
var a = r(require("./144202.js"));
var o = require("./789379.js");
var s = r(require("./786566.js"));
var l = r(require("./692629.js"));
var u = require("./950987.js");
var c = r(require("./403977.js"));
var d = require("./537469.js");
var p = require("./70354.js");
var f = r(require("./225148.js"));
var _ = require("./413677.js");
var g = require("./708733.js");
var m = r(require("./395767.js"));
var h = require("./690495.js");
var y = r(require("./469733.js"));
var E = r(require("./97359.js"));
var S = r(require("./932325.js"));
var v = require("./65889.js");
var T = require("./642772.js");
var M = require("./936327.js");
var A = require("./94602.js");
var b = require("./430252.js");
var C = require("./956113.js");
var P = require("./180519.js");
var O = require("./676345.js");
var I = r(require("./286816.js"));
var R = require("../vendor/548360.js");
var N = r(require("../vendor/441143.js"));
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = U(t);
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
var w = r(require("./156720.js"));
var L = r(require("./802145.js"));
var k = r(require("./524578.js"));
var G = require("./822301.js");
function U(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (U = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const x = "link-device-phone-number-entry-screen-error";
const B = {
  spinnerContainer: {
    height: "d106ifjt"
  },
  spinnerContainerModal: {
    height: "eua9bca9"
  },
  newFeatureBanner: {
    marginTop: "obt84bhp"
  },
  phoneNumberCodeDropdownItem: {
    color: "pm5hny62"
  },
  flag: {
    fontSize: "p9fp32ui"
  },
  error: {
    color: "sbzbl9xs",
    fontSize: "ovllcyds"
  }
};
function F(e, t) {
  const {
    phoneNumberWithoutCountryCode: n,
    selectedCountryId: r,
    shouldDisplayError: i,
    onSubmit: a,
    onChangePhoneNumber: o,
    onChangeSelectedCountry: s,
    actionButtonText: u,
    isInsideModal: c = false,
    isLinkingPageLoading: d = false
  } = e;
  const p = (0, L.default)(W, []);
  const f = (0, k.default)(S.default, "locale_change", () => S.default.getLocale());
  const _ = (0, L.default)(Y, [f]);
  if (p.loading || p.error || _.loading || _.error || d === true) {
    if (p.error) {
      __LOG__(4, undefined, new Error(), true)`Alt Device Linking: Phone Number entry screen could not load SelectDropdown: ${p.error.message}`;
      SEND_LOGS("alt-device-linking load error", 0.1);
    } else if (_.error) {
      __LOG__(4, undefined, new Error(), true)`Alt Device Linking: Phone Number entry screen could not load country items: ${_.error.message}`;
      SEND_LOGS("alt-device-linking load error", 0.1);
    }
    return D.default.createElement(h.FlexColumn, {
      align: "center",
      justify: "around",
      className: (0, w.default)(c ? B.spinnerContainerModal : B.spinnerContainer)
    }, D.default.createElement(y.default, null, D.default.createElement(C.Spinner, null)));
  }
  const g = p.value;
  const m = _.value;
  const E = m.find(e => e.id === r);
  return D.default.createElement(h.FlexColumn, {
    align: "stretch"
  }, D.default.createElement(y.default, {
    xstyle: O.uiMargin.bottom12
  }, D.default.createElement(g, {
    testid: "link-device-phone-number-country-selector",
    items: m,
    selectedItemId: r,
    defaultLabel: R.fbt._("Select country", null, {
      hk: "1IrOlJ"
    }),
    ariaLabel: I.default._("Select a country", null, {
      hk: "1m1037"
    }),
    onChangeSelectedItem: s,
    showImageWithSelectedItem: true,
    showSearchFilter: true
  })), D.default.createElement(y.default, {
    xstyle: i ? O.uiMargin.bottom8 : O.uiMargin.bottom32
  }, D.default.createElement(T.WAWebLinkDevicePhoneNumberEntryInput, {
    ref: t,
    countryCodeIso: E == null ? undefined : E.id,
    phoneNumberWithoutCountryPrefix: n,
    a11yErrorMessage: {
      errorShown: i,
      errorMessageDOMId: x
    },
    onChange: o,
    onEnter: a
  })), u != null && D.default.createElement(y.default, {
    xstyle: O.uiMargin.bottom24,
    align: "center"
  }, D.default.createElement(l.default, {
    type: "primary",
    onClick: a,
    testid: "link-device-phone-number-entry-next-button"
  }, u)));
}
const j = (0, D.forwardRef)(F);
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, i.default)(function* () {
    yield V();
    return (yield (0, d.getCountries)({
      filter: d.COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION
    })).map(e => {
      let [t, n] = e;
      let r = null;
      if (c.default[t] != null && n !== c.default[t]) {
        r = c.default[t];
      }
      const i = t.toUpperCase().split("").map(e => String.fromCodePoint(127462 + e.charCodeAt(0) - "A".charCodeAt(0))).join("");
      const o = p.EmojiUtil.normalizeEmojiFromString(i);
      const s = a.default[t];
      (0, N.default)(s != null, `Phone number code should not be null for ISO code ${t}`);
      return {
        id: t,
        primary: n,
        secondary: r,
        ariaLabel: I.default._("Selected country: {country}. Click to select a different country.", [I.default._param("country", n)], {
          hk: "rmnRt"
        }),
        image: o != null ? D.default.createElement(f.default, {
          className: (0, w.default)(B.flag),
          selectable: false,
          emoji: o
        }) : D.default.createElement("span", null),
        detail: D.default.createElement("span", {
          className: (0, w.default)(B.phoneNumberCodeDropdownItem),
          dir: "ltr"
        }, "+", s),
        additionalSearchFilterMetadata: [t, s.toString(), i]
      };
    });
  })).apply(this, arguments);
}
function W() {
  return Promise.all([require.e(4700), require.e(1280)]).then(require.bind(require, 80301)).then(e => e.WAWebSelectDropdown);
}
function V() {
  return H.apply(this, arguments);
}
function H() {
  return (H = (0, i.default)(function* () {
    const [e, t, r] = yield Promise.all([(0, v.requireEmojiAssetMapCreator)(), (0, v.requireEmojiConfig)(), require.e(1280).then(require.bind(require, 797163))]);
    o.AssetLoader.setPlatform(A.PLATFORMS.ANDROID);
    o.AssetLoader.initEmojiAsset(e(t));
    _.emojiCompletionTracker.beginPreloadFallback();
    (0, E.default)(r)(g.EMOJI_TYPE.WHATSAPP);
  })).apply(this, arguments);
}
function $(e) {
  const t = (0, G.useQRScreenKillswitchValue)(b.Killswitch.DEVICE_LINKING_WITH_PHONE_NUMBER_NUX_NEW_FEATURE_BANNER);
  if (e.shouldShowUpdatePrimaryErrorBanner === true) {
    return D.default.createElement("div", {
      className: "light"
    }, D.default.createElement("div", {
      className: (0, w.default)(B.newFeatureBanner, O.uiMargin.bottom25)
    }, D.default.createElement(s.default, {
      type: "updateWarning",
      title: R.fbt._("Update WhatsApp on phone", null, {
        hk: "3DJZrE"
      }),
      text: R.fbt._("This feature is not available on the current version of WhatsApp on your phone. Please update the app and try again.", null, {
        hk: "1gS37K"
      })
    })));
  } else if (t === true) {
    return D.default.createElement("div", {
      className: "light"
    }, D.default.createElement("div", {
      className: (0, w.default)(B.newFeatureBanner, O.uiMargin.bottom25)
    }, D.default.createElement(s.default, {
      type: "generalAlert",
      title: R.fbt._("Limited availability", null, {
        hk: "368oh9"
      }),
      text: R.fbt._("This feature may not be available yet. Please enter your phone number to try if you have early access.", null, {
        hk: "2G3YQX"
      })
    })));
  } else {
    return null;
  }
}
exports.PhoneNumberSection = j;
j.displayName = "PhoneNumberSection";