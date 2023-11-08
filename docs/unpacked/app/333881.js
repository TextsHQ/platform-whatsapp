Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralSyncResponseReceiveWamEvent = undefined;
var r = require("./901032.js");
var i = require("./987884.js");
var a = require("./420419.js");
var o = require("./891225.js");
var s = require("./546703.js");
var l = require("./340587.js");
const {
  BOOLEAN: u,
  INTEGER: c,
  STRING: d
} = r.TYPES;
const p = (0, r.defineEvents)({
  EphemeralSyncResponseReceive: [4780, {
    clientDisappearingModeInitiator: [1, i.DISAPPEARING_CHAT_INITIATOR_TYPE],
    clientEphemeralityDuration: [2, c],
    clientEphemeralityInitiator: [3, a.EPHEMERALITY_INITIATOR_TYPE],
    clientEphemeralitySettingTimestamp: [4, c],
    clientEphemeralityTriggerAction: [5, o.EPHEMERALITY_TRIGGER_ACTION_TYPE],
    esrDisappearingModeInitiator: [6, i.DISAPPEARING_CHAT_INITIATOR_TYPE],
    esrEphemeralityDuration: [7, c],
    esrEphemeralityInitiator: [8, a.EPHEMERALITY_INITIATOR_TYPE],
    esrEphemeralitySettingTimestamp: [9, c],
    esrEphemeralityTriggerAction: [10, o.EPHEMERALITY_TRIGGER_ACTION_TYPE],
    esrFailureReason: [11, s.ESR_FAILURE_REASON_TYPE],
    esrResolveResult: [12, l.ESR_SEND_RESULT_TYPE],
    isAGroup: [13, u],
    threadId: [14, d]
  }, [1, 1, 1], "regular"]
});
exports.EphemeralSyncResponseReceiveWamEvent = p;