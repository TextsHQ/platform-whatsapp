Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcPageLoadWamEvent = undefined;
var r = require("./901032.js");
var i = require("./456049.js");
var a = require("./781300.js");
const {
  BOOLEAN: o,
  NUMBER: s,
  STRING: l,
  TIMER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  WebcPageLoad: [642, {
    webcAppcacheStatus: [29, i.WEBC_APPCACHE_STATUS_CODE],
    webcCached: [30, o],
    webcConnectEnd: [10, u],
    webcConnectStart: [9, u],
    webcDomComplete: [19, u],
    webcDomContentLoadedEventEnd: [18, u],
    webcDomContentLoadedEventStart: [17, u],
    webcDomInteractive: [16, u],
    webcDomLoading: [15, u],
    webcDomainLookupEnd: [8, u],
    webcDomainLookupStart: [7, u],
    webcExeDone: [23, u],
    webcExeStart: [22, u],
    webcFetchStart: [6, u],
    webcInitialMountT: [38, u],
    webcInitialNavMountT: [39, u],
    webcInitialPanel: [42, l],
    webcInitialPanelMountStartT: [43, u],
    webcInitialPanelMountT: [40, u],
    webcInitialPanelRenderT: [46, u],
    webcJsLoadT: [37, u],
    webcLoadEventEnd: [21, u],
    webcLoadEventStart: [20, u],
    webcLoadInForeground: [53, o],
    webcMainScriptEnd: [45, u],
    webcMainScriptStart: [44, u],
    webcNativeLoadT: [36, u],
    webcNavigation: [32, a.WEBC_NAVIGATION_TYPE],
    webcPageLoadT: [34, u],
    webcParallellyFetched: [41, o],
    webcQrCode: [31, o],
    webcRedirectCount: [33, s],
    webcRedirectEnd: [5, u],
    webcRedirectStart: [4, u],
    webcRequestStart: [12, u],
    webcResponseEnd: [14, u],
    webcResponseStart: [13, u],
    webcSecureConnectionStart: [11, u],
    webcUnloadEventEnd: [3, u],
    webcUnloadEventStart: [2, u],
    webcWsAttempts: [28, s],
    webcWsNormal: [27, u],
    webcWsOpening: [24, u],
    webcWsPairing: [25, u],
    webcWsSyncing: [26, u]
  }, [1, 1, 1], "regular"]
});
exports.WebcPageLoadWamEvent = c;