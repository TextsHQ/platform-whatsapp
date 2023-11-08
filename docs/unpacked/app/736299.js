Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdLinkDeviceCompanionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./72687.js");
const {
  BOOLEAN: a,
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MdLinkDeviceCompanion: [2576, {
    mdDurationS: [8, o],
    mdLinkDeviceCompanionErrorCode: [6, o],
    mdLinkDeviceCompanionStage: [4, i.MD_LINK_DEVICE_COMPANION_STAGE],
    mdRegAttemptId: [9, s],
    mdSessionId: [1, s],
    mdTimestampS: [7, o],
    mdWasUpgraded: [5, a]
  }, [1, 1, 1], "regular"]
});
exports.MdLinkDeviceCompanionWamEvent = l;