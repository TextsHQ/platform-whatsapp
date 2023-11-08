var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCTWASuggestion = function (e) {
  const {
    parsedRequest: t
  } = (0, i.receiveBannerSuggestionRPC)(e.node());
  const {
    ctwaSuggestionTargetEntityId: n,
    ctwaSuggestionBanner: r,
    t: l
  } = t;
  _ = n;
  const f = _.split("-")[1];
  var _;
  if (r == null) {
    p({
      bannerIdentifier: n,
      validNotification: false
    });
    __LOG__(4, undefined, new Error(), true)`parseCTWASuggestion: missing banner data (${f})`;
    return void SEND_LOGS(`parseCTWASuggestion-missing-banner-data-${f}`);
  }
  if (r.configRevoked === "true") {
    return {
      type: "revokedBanner",
      id: n
    };
  }
  const {
    contentLocale: g
  } = r;
  const m = u.default.getLocale();
  const h = e => {
    let {
      validNotification: t,
      validLocale: r
    } = e;
    p({
      bannerIdentifier: n,
      validNotification: t,
      clientLocale: m,
      bannerLocale: g,
      validLocale: r
    });
  };
  if (u.default.normalizeLocale(g) !== m) {
    h({
      validNotification: false,
      validLocale: false
    });
    return void __LOG__(3)`parseCTWASuggestion: locale mismatch (${f})`;
  }
  const {
    configExpiresAt: y,
    contentHeadingElementValue: E,
    contentBodyElementValue: S,
    contentHighlightElementValue: v,
    configDisplay: T,
    nativeAction: M
  } = r;
  const A = M.filter(e => e.platform === "web");
  if (A.length === 0) {
    h({
      validNotification: false,
      validLocale: true
    });
    return void (n.endsWith("recreate_ad") || n.includes("manage_ads") ? (__LOG__(4, undefined, new Error(), true)`${d} (${f})`, SEND_LOGS("parseCTWASuggestion-missing-action-link-${bannerType}")) : __LOG__(3)`${d} (${f})`);
  }
  if (A.length > 1) {
    h({
      validNotification: false,
      validLocale: true
    });
    __LOG__(4, undefined, new Error(), true)`parseCTWASuggestion: too many actions (${f})`;
    return void SEND_LOGS("parseCTWASuggestion-too-many-actions-${bannerType}");
  }
  const b = A[0];
  const {
    minAppVersion: C
  } = b;
  const P = new c.Version(C);
  if (new c.Version(c.SANITIZED_VERSION_STR).lt(P)) {
    return void __LOG__(3)`parseCTWASuggestion: app version too old (${f})`;
  }
  const {
    localLink: O
  } = b;
  const I = (0, o.parseAPICmd)(O);
  if (I.resultType === "INVALID") {
    if (!O.startsWith("https://")) {
      h({
        validNotification: false,
        validLocale: true
      });
      __LOG__(4, undefined, new Error(), true)`parseCTWASuggestion: invalid link (${f})`;
      return void SEND_LOGS("parseCTWASuggestion-invalid-link-${bannerType}");
    }
  } else {
    if (I.resultType !== "MANAGE_ADS") {
      I.resultType;
      h({
        validNotification: false,
        validLocale: true
      });
      __LOG__(4, undefined, new Error(), true)`parseCTWASuggestion: invalid deep link (${f}, ${I.resultType})`;
      return void SEND_LOGS("parseCTWASuggestion-invalid-deep-link-${bannerType}");
    }
    if (!(0, s.adsActionManageAdsBannerEnabled)()) {
      h({
        validNotification: false,
        validLocale: true
      });
      return void __LOG__(3)`parseCTWASuggestion: manage ads not enabled (${f})`;
    }
  }
  h({
    validNotification: true,
    validLocale: true
  });
  return {
    type: "banner",
    id: n,
    expiresAt: (0, a.castToUnixTime)(y),
    heading: E,
    body: S,
    highlight: v,
    actionLink: O,
    display: T,
    ts: (0, a.castToUnixTime)(l)
  };
};
var i = require("./771981.js");
var a = require("./632157.js");
var o = require("./127714.js");
var s = require("./72696.js");
var l = require("./68676.js");
var u = r(require("./932325.js"));
var c = require("./233895.js");
const d = "parseCTWASuggestion: missing action link";
function p(e) {
  if (!(0, s.adsActionBannersLoggingEnabled)()) {
    return;
  }
  const t = new l.CtwaActionBannerUnderstandWamEvent();
  t.bannerIdentifier = e.bannerIdentifier;
  t.validNotification = e.validNotification;
  if (e.clientLocale != null) {
    t.clientLocale = e.clientLocale;
  }
  if (e.bannerLocale != null) {
    t.bannerLocale = e.bannerLocale;
  }
  if (e.validLocale != null) {
    t.validLocale = e.validLocale;
  }
  t.commitAndWaitForFlush().catch(() => {
    __LOG__(4, undefined, new Error())`parseCTWASuggestion: metric failed`;
  });
}