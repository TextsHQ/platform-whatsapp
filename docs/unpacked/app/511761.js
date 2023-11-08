var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionHelloError = exports.CompanionFinishError = undefined;
exports.genDoesServerEnableAltDeviceLinking = function () {
  return d.apply(this, arguments);
};
exports.sendCompanionFinish = function () {
  return f.apply(this, arguments);
};
exports.sendCompanionHello = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./566378.js");
var o = require("./682885.js");
var s = require("./793570.js");
var l = r(require("./524173.js"));
class u extends Error {
  constructor(e, t) {
    super(e);
    this.name = "CompanionHelloError";
    this.type = t;
  }
}
exports.CompanionHelloError = u;
class c extends Error {
  constructor() {
    super(...arguments);
    this.name = "CompanionFinishError";
  }
}
function d() {
  return (d = (0, i.default)(function* () {
    try {
      const e = yield (0, s.sendGetCountryCodeRPC)();
      if (e.name === "GetCountryCodeResponseGetCountryCodeResponse") {
        return {
          enabled: true,
          countryCode: e.value.countryCodeIso
        };
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`alt device linking: sendGetCountryCodeRPC failed with error: ${e}`;
      SEND_LOGS("alt device linking: sendGetCountryCodeRPC failed");
    }
    return {
      enabled: false
    };
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t, r, i) {
    const a = yield (0, o.sendCompanionHelloRPC)({
      linkCodePairingNonceArgs: {
        linkCodePairingNonceElementValue: new Uint8Array(1)
      },
      iqTo: "s.whatsapp.net",
      linkCodeCompanionRegJid: e,
      linkCodePairingWrappedCompanionEphemeralPubElementValue: new Uint8Array(t),
      companionServerAuthKeyPubElementValue: new Uint8Array(r),
      companionPlatformIdElementValue: require("./842636.js").DEVICE_PLATFORM,
      companionPlatformDisplayElementValue: `${l.default.info().name} (${l.default.info().os})`,
      linkCodeCompanionRegShouldShowPushNotification: i ? "true" : "false"
    });
    if (a.name === "CompanionHelloResponseNotifyCompanion") {
      return a.value.linkCodeCompanionRegLinkCodePairingRefElementValue;
    }
    if (a.name === "CompanionHelloResponseError") {
      throw new u(`alt pairing: Got an error from alt paring: companion hello: ${a.value.errorIqMixinErrors.name}`, a.value.errorIqMixinErrors);
    }
    throw new u("alt pairing: Got an unknown error from alt paring: companion hello");
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t, n, r) {
    if ((yield (0, a.sendCompanionFinishRPC)({
      iqTo: "s.whatsapp.net",
      linkCodeCompanionRegJid: r,
      linkCodePairingWrappedKeyBundleElementValue: new Uint8Array(e),
      companionIdentityPublicElementValue: new Uint8Array(t),
      linkCodePairingRefElementValue: n
    })).name !== "CompanionFinishResponseSuccess") {
      throw new c("alt pairing: Got an error from alt paring: companion finish");
    }
  })).apply(this, arguments);
}
exports.CompanionFinishError = c;