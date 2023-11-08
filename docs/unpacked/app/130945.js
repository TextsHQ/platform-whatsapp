Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateStatsAllIds = exports.Global = undefined;
var r = require("./901032.js");
var i = require("./181548.js");
var a = require("./524400.js");
var o = require("./300571.js");
var s = require("./519237.js");
var l = require("./97288.js");
const {
  BOOLEAN: u,
  INTEGER: c,
  STRING: d
} = r.TYPES;
const p = (0, r.defineGlobal)({
  abKey2: [4473, d, ["regular"]],
  appBuild: [1657, i.APP_BUILD_TYPE, ["regular", "private"]],
  appIsBetaRelease: [21, u, ["regular", "private"]],
  appVersion: [17, d, ["regular", "private"]],
  browser: [779, d, ["regular"]],
  browserVersion: [295, d, ["regular"]],
  datacenter: [2795, d, ["regular"]],
  deviceClassification: [14507, a.DEVICE_CLASSIFICATION, ["regular"]],
  deviceName: [13, d, ["regular", "private"]],
  deviceVersion: [4505, d, ["regular"]],
  expoKey: [5029, d, ["regular", "private"]],
  isWwwBuild: [16201, u, ["regular"]],
  mcc: [5, c, ["regular", "private"]],
  memClass: [655, c, ["regular", "private"]],
  mnc: [3, c, ["regular", "private"]],
  networkIsWifi: [23, u, ["regular"]],
  ocVersion: [6251, c, ["regular", "private"]],
  osVersion: [15, d, ["regular", "private"]],
  platform: [11, o.PLATFORM_TYPE, ["regular", "private"]],
  psCountryCode: [6833, d, ["private"]],
  psId: [6005, d, ["private"]],
  serviceImprovementOptOut: [13293, u, ["regular", "private"]],
  streamId: [3543, c, ["regular", "private"]],
  wametaLoggerTestFilter: [15881, d, ["regular", "private"]],
  webcBucket: [875, d, ["regular"]],
  webcEnv: [633, s.WEBC_ENV_CODE, ["regular"]],
  webcNativeAutolaunch: [1009, u, ["regular"]],
  webcNativeBetaUpdates: [1007, u, ["regular"]],
  webcPhoneAppVersion: [1005, d, ["regular"]],
  webcPhoneCharging: [783, u, ["regular"]],
  webcPhoneDeviceManufacturer: [829, d, ["regular"]],
  webcPhoneDeviceModel: [831, d, ["regular"]],
  webcPhoneOsBuildNumber: [833, d, ["regular"]],
  webcPhoneOsVersion: [835, d, ["regular"]],
  webcPhonePlatform: [707, o.PLATFORM_TYPE, ["regular"]],
  webcTabId: [3727, d, ["regular"]],
  webcWebArch: [6605, d, ["regular"]],
  webcWebDeviceManufacturer: [6599, d, ["regular"]],
  webcWebDeviceModel: [6601, d, ["regular"]],
  webcWebOsReleaseNumber: [6603, d, ["regular"]],
  webcWebPlatform: [899, l.WEBC_WEB_PLATFORM_TYPE, ["regular", "private"]],
  yearClass: [689, c, ["regular", "private"]],
  yearClass2016: [2617, c, ["regular", "private"]]
});
exports.Global = p;
exports.PrivateStatsAllIds = [{
  key: "DefaultPsId",
  keyHashInt: 113760892,
  rotationPeriodDays: -1
}, {
  key: "IdPreMetrics",
  keyHashInt: 56300709,
  rotationPeriodDays: -1
}, {
  key: "IdTtl90Days",
  keyHashInt: 37887164,
  rotationPeriodDays: 90
}, {
  key: "IdTtlDaily",
  keyHashInt: 248614979,
  rotationPeriodDays: 1
}, {
  key: "IdTtlMonthly",
  keyHashInt: 191000728,
  rotationPeriodDays: 30
}, {
  key: "IdTtlWeekly",
  keyHashInt: 42196056,
  rotationPeriodDays: 7
}];