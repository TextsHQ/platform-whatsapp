Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdFatalErrorWamEvent = undefined;
var r = require("./901032.js");
var i = require("./896771.js");
var a = require("./845972.js");
var o = require("./438255.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  MdFatalError: [2304, {
    collection: [2, i.COLLECTION],
    currentPrimaryAppVersion: [14, u],
    daysSinceLastPeriodicSync: [11, l],
    hoursSinceFirstFiniteFailure: [12, l],
    isBootstrap: [3, s],
    isFatal: [16, s],
    isWebLthashConsistent: [17, s],
    mailboxAgeDays: [13, l],
    mdFatalErrorCode: [1, a.MD_SYNCD_FATAL_ERROR_CODE],
    patchSnapshotMutationCount: [9, l],
    patchVersion: [5, l],
    sessionStartPrimaryAppVersion: [15, u],
    sourceType: [10, o.MD_SYNCD_FATAL_ERROR_SOURCE],
    timeSincePairingMs: [6, l],
    timeSinceRefreshMs: [7, l],
    timeSinceTabTakeoverMs: [8, l]
  }, [1, 1, 1], "regular"]
});
exports.MdFatalErrorWamEvent = c;