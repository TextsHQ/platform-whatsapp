Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandshakeMessageSpec = exports.HandshakeMessage$ServerHelloSpec = exports.HandshakeMessage$ClientHelloSpec = exports.HandshakeMessage$ClientFinishSpec = exports.ClientPayloadSpec = exports.ClientPayload$WebInfoSpec = exports.ClientPayload$WebInfo$WebdPayloadSpec = exports.ClientPayload$WebInfo$WebSubPlatform = exports.ClientPayload$UserAgentSpec = exports.ClientPayload$UserAgent$ReleaseChannel = exports.ClientPayload$UserAgent$Platform = exports.ClientPayload$UserAgent$DeviceType = exports.ClientPayload$UserAgent$AppVersionSpec = exports.ClientPayload$Product = exports.ClientPayload$InteropDataSpec = exports.ClientPayload$IOSAppExtension = exports.ClientPayload$DevicePairingRegistrationDataSpec = exports.ClientPayload$DNSSourceSpec = exports.ClientPayload$DNSSource$DNSResolutionMethod = exports.ClientPayload$ConnectType = exports.ClientPayload$ConnectReason = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  WHATSAPP: 0,
  MESSENGER: 1,
  INTEROP: 2,
  INTEROP_MSGR: 3
});
exports.ClientPayload$Product = i;
const a = require("../vendor/76672.js")({
  SYSTEM: 0,
  GOOGLE: 1,
  HARDCODED: 2,
  OVERRIDE: 3,
  FALLBACK: 4
});
exports.ClientPayload$DNSSource$DNSResolutionMethod = a;
const o = require("../vendor/76672.js")({
  CELLULAR_UNKNOWN: 0,
  WIFI_UNKNOWN: 1,
  CELLULAR_EDGE: 100,
  CELLULAR_IDEN: 101,
  CELLULAR_UMTS: 102,
  CELLULAR_EVDO: 103,
  CELLULAR_GPRS: 104,
  CELLULAR_HSDPA: 105,
  CELLULAR_HSUPA: 106,
  CELLULAR_HSPA: 107,
  CELLULAR_CDMA: 108,
  CELLULAR_1XRTT: 109,
  CELLULAR_EHRPD: 110,
  CELLULAR_LTE: 111,
  CELLULAR_HSPAP: 112
});
exports.ClientPayload$ConnectType = o;
const s = require("../vendor/76672.js")({
  PUSH: 0,
  USER_ACTIVATED: 1,
  SCHEDULED: 2,
  ERROR_RECONNECT: 3,
  NETWORK_SWITCH: 4,
  PING_RECONNECT: 5,
  UNKNOWN: 6
});
exports.ClientPayload$ConnectReason = s;
const l = require("../vendor/76672.js")({
  SHARE_EXTENSION: 0,
  SERVICE_EXTENSION: 1,
  INTENTS_EXTENSION: 2
});
exports.ClientPayload$IOSAppExtension = l;
const u = require("../vendor/76672.js")({
  WEB_BROWSER: 0,
  APP_STORE: 1,
  WIN_STORE: 2,
  DARWIN: 3,
  WIN32: 4
});
exports.ClientPayload$WebInfo$WebSubPlatform = u;
const c = require("../vendor/76672.js")({
  PHONE: 0,
  TABLET: 1,
  DESKTOP: 2,
  WEARABLE: 3,
  VR: 4
});
exports.ClientPayload$UserAgent$DeviceType = c;
const d = require("../vendor/76672.js")({
  RELEASE: 0,
  BETA: 1,
  ALPHA: 2,
  DEBUG: 3
});
exports.ClientPayload$UserAgent$ReleaseChannel = d;
const p = require("../vendor/76672.js")({
  ANDROID: 0,
  IOS: 1,
  WINDOWS_PHONE: 2,
  BLACKBERRY: 3,
  BLACKBERRYX: 4,
  S40: 5,
  S60: 6,
  PYTHON_CLIENT: 7,
  TIZEN: 8,
  ENTERPRISE: 9,
  SMB_ANDROID: 10,
  KAIOS: 11,
  SMB_IOS: 12,
  WINDOWS: 13,
  WEB: 14,
  PORTAL: 15,
  GREEN_ANDROID: 16,
  GREEN_IPHONE: 17,
  BLUE_ANDROID: 18,
  BLUE_IPHONE: 19,
  FBLITE_ANDROID: 20,
  MLITE_ANDROID: 21,
  IGLITE_ANDROID: 22,
  PAGE: 23,
  MACOS: 24,
  OCULUS_MSG: 25,
  OCULUS_CALL: 26,
  MILAN: 27,
  CAPI: 28,
  WEAROS: 29,
  ARDEVICE: 30,
  VRDEVICE: 31,
  BLUE_WEB: 32,
  IPAD: 33,
  TEST: 34
});
exports.ClientPayload$UserAgent$Platform = p;
const f = {};
exports.HandshakeMessageSpec = f;
const _ = {};
exports.HandshakeMessage$ClientFinishSpec = _;
const g = {};
exports.HandshakeMessage$ServerHelloSpec = g;
const m = {};
exports.HandshakeMessage$ClientHelloSpec = m;
const h = {};
exports.ClientPayloadSpec = h;
const y = {};
exports.ClientPayload$InteropDataSpec = y;
const E = {};
exports.ClientPayload$DevicePairingRegistrationDataSpec = E;
const S = {};
exports.ClientPayload$DNSSourceSpec = S;
const v = {};
exports.ClientPayload$WebInfoSpec = v;
const T = {};
exports.ClientPayload$WebInfo$WebdPayloadSpec = T;
const M = {};
exports.ClientPayload$UserAgentSpec = M;
const A = {};
exports.ClientPayload$UserAgent$AppVersionSpec = A;
f.internalSpec = {
  clientHello: [2, r.TYPES.MESSAGE, m],
  serverHello: [3, r.TYPES.MESSAGE, g],
  clientFinish: [4, r.TYPES.MESSAGE, _]
};
_.internalSpec = {
  static: [1, r.TYPES.BYTES],
  payload: [2, r.TYPES.BYTES]
};
g.internalSpec = {
  ephemeral: [1, r.TYPES.BYTES],
  static: [2, r.TYPES.BYTES],
  payload: [3, r.TYPES.BYTES]
};
m.internalSpec = {
  ephemeral: [1, r.TYPES.BYTES],
  static: [2, r.TYPES.BYTES],
  payload: [3, r.TYPES.BYTES]
};
h.internalSpec = {
  username: [1, r.TYPES.UINT64],
  passive: [3, r.TYPES.BOOL],
  userAgent: [5, r.TYPES.MESSAGE, M],
  webInfo: [6, r.TYPES.MESSAGE, v],
  pushName: [7, r.TYPES.STRING],
  sessionId: [9, r.TYPES.SFIXED32],
  shortConnect: [10, r.TYPES.BOOL],
  connectType: [12, r.TYPES.ENUM, o],
  connectReason: [13, r.TYPES.ENUM, s],
  shards: [14, r.FLAGS.REPEATED | r.TYPES.INT32],
  dnsSource: [15, r.TYPES.MESSAGE, S],
  connectAttemptCount: [16, r.TYPES.UINT32],
  device: [18, r.TYPES.UINT32],
  devicePairingData: [19, r.TYPES.MESSAGE, E],
  product: [20, r.TYPES.ENUM, i],
  fbCat: [21, r.TYPES.BYTES],
  fbUserAgent: [22, r.TYPES.BYTES],
  oc: [23, r.TYPES.BOOL],
  lc: [24, r.TYPES.INT32],
  iosAppExtension: [30, r.TYPES.ENUM, l],
  fbAppId: [31, r.TYPES.UINT64],
  fbDeviceId: [32, r.TYPES.BYTES],
  pull: [33, r.TYPES.BOOL],
  paddingBytes: [34, r.TYPES.BYTES],
  yearClass: [36, r.TYPES.INT32],
  memClass: [37, r.TYPES.INT32],
  interopData: [38, r.TYPES.MESSAGE, y]
};
y.internalSpec = {
  accountId: [1, r.TYPES.UINT64],
  token: [2, r.TYPES.BYTES]
};
E.internalSpec = {
  eRegid: [1, r.TYPES.BYTES],
  eKeytype: [2, r.TYPES.BYTES],
  eIdent: [3, r.TYPES.BYTES],
  eSkeyId: [4, r.TYPES.BYTES],
  eSkeyVal: [5, r.TYPES.BYTES],
  eSkeySig: [6, r.TYPES.BYTES],
  buildHash: [7, r.TYPES.BYTES],
  deviceProps: [8, r.TYPES.BYTES]
};
S.internalSpec = {
  dnsMethod: [15, r.TYPES.ENUM, a],
  appCached: [16, r.TYPES.BOOL]
};
v.internalSpec = {
  refToken: [1, r.TYPES.STRING],
  version: [2, r.TYPES.STRING],
  webdPayload: [3, r.TYPES.MESSAGE, T],
  webSubPlatform: [4, r.TYPES.ENUM, u]
};
T.internalSpec = {
  usesParticipantInKey: [1, r.TYPES.BOOL],
  supportsStarredMessages: [2, r.TYPES.BOOL],
  supportsDocumentMessages: [3, r.TYPES.BOOL],
  supportsUrlMessages: [4, r.TYPES.BOOL],
  supportsMediaRetry: [5, r.TYPES.BOOL],
  supportsE2EImage: [6, r.TYPES.BOOL],
  supportsE2EVideo: [7, r.TYPES.BOOL],
  supportsE2EAudio: [8, r.TYPES.BOOL],
  supportsE2EDocument: [9, r.TYPES.BOOL],
  documentTypes: [10, r.TYPES.STRING],
  features: [11, r.TYPES.BYTES]
};
M.internalSpec = {
  platform: [1, r.TYPES.ENUM, p],
  appVersion: [2, r.TYPES.MESSAGE, A],
  mcc: [3, r.TYPES.STRING],
  mnc: [4, r.TYPES.STRING],
  osVersion: [5, r.TYPES.STRING],
  manufacturer: [6, r.TYPES.STRING],
  device: [7, r.TYPES.STRING],
  osBuildNumber: [8, r.TYPES.STRING],
  phoneId: [9, r.TYPES.STRING],
  releaseChannel: [10, r.TYPES.ENUM, d],
  localeLanguageIso6391: [11, r.TYPES.STRING],
  localeCountryIso31661Alpha2: [12, r.TYPES.STRING],
  deviceBoard: [13, r.TYPES.STRING],
  deviceExpId: [14, r.TYPES.STRING],
  deviceType: [15, r.TYPES.ENUM, c]
};
A.internalSpec = {
  primary: [1, r.TYPES.UINT32],
  secondary: [2, r.TYPES.UINT32],
  tertiary: [3, r.TYPES.UINT32],
  quaternary: [4, r.TYPES.UINT32],
  quinary: [5, r.TYPES.UINT32]
};