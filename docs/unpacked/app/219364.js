Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AndroidMessageSendPerfWamEvent = undefined;
var r = require("./901032.js");
var i = require("./227016.js");
var a = require("./749286.js");
var o = require("./434085.js");
var s = require("./616615.js");
var l = require("./684290.js");
var u = require("./718451.js");
var c = require("./147402.js");
var d = require("./21008.js");
const {
  BOOLEAN: p,
  INTEGER: f,
  TIMER: _
} = r.TYPES;
const g = (0, r.defineEvents)({
  AndroidMessageSendPerf: [1994, {
    appRestart: [16, p],
    bucketedSenderKeyDistributionCountPercentage: [32, f],
    bucketedSenderKeyDistributionHashTime: [35, f],
    deviceCount: [36, f],
    deviceSizeBucket: [26, c.SIZE_BUCKET],
    durationAbs: [11, _],
    durationRelative: [12, _],
    durationT: [1, _],
    editType: [42, s.EDIT_TYPE],
    fetchPrekeys: [15, p],
    fetchPrekeysPercentage: [21, f],
    groupSizeBucket: [17, a.CLIENT_GROUP_SIZE_BUCKET],
    isDirectedMessage: [33, p],
    isE2eBackfill: [27, p],
    isLid: [41, p],
    isMessageFanout: [9, p],
    isMessageForward: [8, p],
    isRevokeMessage: [24, p],
    isViewOnce: [29, p],
    jobsInQueue: [18, f],
    localAddressingMode: [43, i.ADDRESSING_MODE],
    mediaType: [3, l.MEDIA_TYPE],
    messageIsFirstUserMessage: [30, p],
    messageIsInvisible: [31, p],
    messageType: [4, u.MESSAGE_TYPE],
    networkWasDisconnected: [14, p],
    participantCount: [37, f],
    phoneCores: [34, f],
    prekeysEligibleForPrallelProcessing: [28, p],
    receiverDeviceCount: [39, f],
    sendCount: [13, f],
    sendRetryCount: [10, f],
    sendStage: [2, o.CLIENT_MESSAGE_SEND_STAGE],
    senderDeviceCount: [40, f],
    senderKeyDistributionCountPercentage: [23, f],
    sessionsMissingWhenComposing: [25, p],
    targetDeviceGroupSizeBucket: [20, a.CLIENT_GROUP_SIZE_BUCKET],
    threadsInExecution: [19, f],
    typeOfGroup: [38, d.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 2000], "regular"]
});
exports.AndroidMessageSendPerfWamEvent = g;