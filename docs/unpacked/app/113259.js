Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevicePropsSpec = exports.DeviceProps$PlatformType = exports.DeviceProps$HistorySyncConfigSpec = exports.DeviceProps$AppVersionSpec = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  UNKNOWN: 0,
  CHROME: 1,
  FIREFOX: 2,
  IE: 3,
  OPERA: 4,
  SAFARI: 5,
  EDGE: 6,
  DESKTOP: 7,
  IPAD: 8,
  ANDROID_TABLET: 9,
  OHANA: 10,
  ALOHA: 11,
  CATALINA: 12,
  TCL_TV: 13,
  IOS_PHONE: 14,
  IOS_CATALYST: 15,
  ANDROID_PHONE: 16,
  ANDROID_AMBIGUOUS: 17,
  WEAR_OS: 18,
  AR_WRIST: 19,
  AR_DEVICE: 20,
  UWP: 21,
  VR: 22
});
exports.DeviceProps$PlatformType = i;
const a = {};
exports.DevicePropsSpec = a;
const o = {};
exports.DeviceProps$HistorySyncConfigSpec = o;
const s = {};
exports.DeviceProps$AppVersionSpec = s;
a.internalSpec = {
  os: [1, r.TYPES.STRING],
  version: [2, r.TYPES.MESSAGE, s],
  platformType: [3, r.TYPES.ENUM, i],
  requireFullSync: [4, r.TYPES.BOOL],
  historySyncConfig: [5, r.TYPES.MESSAGE, o]
};
o.internalSpec = {
  fullSyncDaysLimit: [1, r.TYPES.UINT32],
  fullSyncSizeMbLimit: [2, r.TYPES.UINT32],
  storageQuotaMb: [3, r.TYPES.UINT32],
  inlineInitialPayloadInE2EeMsg: [4, r.TYPES.BOOL],
  recentSyncDaysLimit: [5, r.TYPES.UINT32],
  supportCallLogHistory: [6, r.TYPES.BOOL],
  supportBotUserAgentChatHistory: [7, r.TYPES.BOOL],
  supportCagReactionsAndPolls: [8, r.TYPES.BOOL]
};
s.internalSpec = {
  primary: [1, r.TYPES.UINT32],
  secondary: [2, r.TYPES.UINT32],
  tertiary: [3, r.TYPES.UINT32],
  quaternary: [4, r.TYPES.UINT32],
  quinary: [5, r.TYPES.UINT32]
};