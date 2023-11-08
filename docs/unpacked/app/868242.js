var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientPayloadForLogin = function () {
  return S.apply(this, arguments);
};
exports.getClientPayloadForRegistration = function () {
  return v.apply(this, arguments);
};
exports.getUserAgent = P;
exports.getWebSubPlatform = R;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./417405.js");
var s = require("./881841.js");
var l = r(require("./983254.js"));
var u = require("./508247.js");
var c = require("./107709.js");
var d = r(require("./524173.js"));
var p = require("./113259.js");
var f = require("./614806.js");
var _ = require("./366891.js");
var g = require("./142601.js");
var m = require("./65410.js");
var h = require("./459857.js");
var y = require("./350906.js");
var E = require("./385914.js");
function S() {
  return (S = (0, a.default)(function* (e) {
    const t = (0, h.assertGetMe)();
    const n = (0, i.default)((0, i.default)({}, yield T(e)), {}, {
      username: parseInt(t.user, 10),
      device: t.device != null ? t.device : 0
    });
    return (0, E.encodeProtobuf)(f.ClientPayloadSpec, n).readByteArray();
  })).apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t, n) {
    const r = A();
    const a = yield b();
    const o = (0, i.default)((0, i.default)({}, yield T(n)), {}, {
      devicePairingData: {
        buildHash: r,
        deviceProps: a,
        eRegid: (0, s.intToBytes)(4, e.registrationId),
        eKeytype: (0, s.intToBytes)(1, 5),
        eIdent: e.identityKeyPair.pubKey,
        eSkeyId: (0, s.intToBytes)(3, t.keyId),
        eSkeyVal: t.keyPair.pubKey,
        eSkeySig: t.signature
      }
    });
    return (0, E.encodeProtobuf)(f.ClientPayloadSpec, o).readByteArray();
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e) {
    var t;
    var n;
    return {
      passive: (t = e == null ? undefined : e.passive) !== null && t !== undefined && t,
      pull: (n = e == null ? undefined : e.pull) !== null && n !== undefined && n,
      connectType: f.ClientPayload$ConnectType.WIFI_UNKNOWN,
      connectReason: f.ClientPayload$ConnectReason.USER_ACTIVATED,
      userAgent: yield P(),
      webInfo: {
        webSubPlatform: R()
      }
    };
  })).apply(this, arguments);
}
function A() {
  const e = (0, o.decodeB64)((0, l.default)(u.VERSION_BASE));
  return new Uint8Array(e);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* () {
    const e = d.default.info();
    let t;
    if (e.version && e.version !== "") {
      const n = e.version.split(".");
      if (n.length > 0 && e.version && /^[0-9\.]+$/.test(e.version)) {
        t = {
          primary: parseInt(n[0], 10),
          secondary: n.length > 1 ? parseInt(n[1], 10) : undefined,
          tertiary: n.length > 2 ? parseInt(n[2], 10) : undefined
        };
      }
    }
    let n = {
      inlineInitialPayloadInE2EeMsg: (0, g.isHistorySyncWithoutMmsEnabled)(),
      supportBotUserAgentChatHistory: true,
      supportCagReactionsAndPolls: true
    };
    {
      const e = yield _.MdSyncFieldStatsMeta.getStorageEstimation();
      if (e.mdStorageQuotaBytes !== _.STORAGE_QUOTA_UNAVAILABLE) {
        n = (0, i.default)((0, i.default)({}, n), {}, {
          storageQuotaMb: Math.trunc(e.mdStorageQuotaBytes / 1024 / 1024)
        });
      }
    }
    const r = {
      os: e.os,
      version: t,
      platformType: I(e.name),
      requireFullSync: false,
      historySyncConfig: n
    };
    return (0, E.encodeProtobuf)(p.DevicePropsSpec, r).readByteArray();
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* () {
    const e = yield m.deviceInfo.get();
    return {
      appVersion: {
        primary: Number(u.VERSION_PRIMARY),
        secondary: Number(u.VERSION_SECONDARY),
        tertiary: Number(u.VERSION_TERTIARY)
      },
      platform: f.ClientPayload$UserAgent$Platform.WEB,
      releaseChannel: yield (0, c.getReleaseChannel)(),
      mcc: e.mcc,
      mnc: e.mnc,
      osVersion: e.osVersion,
      manufacturer: e.manufacturer,
      device: e.device,
      osBuildNumber: e.osBuild,
      localeLanguageIso6391: e.lg,
      localeCountryIso31661Alpha2: e.lc
    };
  })).apply(this, arguments);
}
function I(e) {
  switch (e) {
    case "Chrome":
      return p.DeviceProps$PlatformType.CHROME;
    case "Firefox":
      return p.DeviceProps$PlatformType.FIREFOX;
    case "IE":
      return p.DeviceProps$PlatformType.IE;
    case "Opera":
      return p.DeviceProps$PlatformType.OPERA;
    case "Safari":
      return p.DeviceProps$PlatformType.SAFARI;
    case "Edge":
      return p.DeviceProps$PlatformType.EDGE;
    case "electron":
    case "Desktop":
      return p.DeviceProps$PlatformType.DESKTOP;
    case "ipad":
    case "iPad":
      return p.DeviceProps$PlatformType.IPAD;
    case "tablet":
    case "Android tablet":
      return p.DeviceProps$PlatformType.ANDROID_TABLET;
    case "Ohana":
      return p.DeviceProps$PlatformType.OHANA;
    case "Aloha":
      return p.DeviceProps$PlatformType.ALOHA;
    case "Catalina":
      return p.DeviceProps$PlatformType.CATALINA;
    default:
      return p.DeviceProps$PlatformType.UNKNOWN;
  }
}
function R() {
  switch ((0, y.getWamPlatform)()) {
    case "WEB":
    case "PWA":
      return f.ClientPayload$WebInfo$WebSubPlatform.WEB_BROWSER;
    case "DARWIN":
    case "DARWIN_BETA":
      return f.ClientPayload$WebInfo$WebSubPlatform.DARWIN;
    case "WIN32":
    case "WIN32_BETA":
      return f.ClientPayload$WebInfo$WebSubPlatform.WIN32;
    case "MACSTORE":
      return f.ClientPayload$WebInfo$WebSubPlatform.APP_STORE;
    case "WINSTORE":
      return f.ClientPayload$WebInfo$WebSubPlatform.WIN_STORE;
    default:
      return;
  }
}