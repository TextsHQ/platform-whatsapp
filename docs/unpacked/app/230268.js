Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./227016.js");
var a = require("./800277.js");
var o = require("./987884.js");
var s = require("./535480.js");
var l = require("./751047.js");
var u = require("./616615.js");
var c = require("./420419.js");
var d = require("./891225.js");
var p = require("./684290.js");
var f = require("./243703.js");
var _ = require("./804974.js");
var g = require("./718451.js");
var m = require("./564066.js");
var h = require("./147402.js");
var y = require("./71677.js");
var E = require("./21008.js");
const {
  BOOLEAN: S,
  INTEGER: v,
  NUMBER: T,
  TIMER: M
} = r.TYPES;
const A = (0, r.defineEvents)({
  MessageSend: [854, {
    agentEngagementType: [49, a.AGENT_ENGAGEMENT_ENUM_TYPE],
    deviceCount: [31, v],
    deviceSizeBucket: [25, h.SIZE_BUCKET],
    disappearingChatInitiator: [30, o.DISAPPEARING_CHAT_INITIATOR_TYPE],
    e2eBackfill: [23, S],
    e2eCiphertextType: [10, s.E2E_CIPHERTEXT_TYPE],
    e2eCiphertextVersion: [9, v],
    e2eFailureReason: [46, l.E2E_FAILURE_REASON],
    editDuration: [43, v],
    editType: [44, u.EDIT_TYPE],
    ephemeralityDuration: [21, v],
    ephemeralityInitiator: [47, c.EPHEMERALITY_INITIATOR_TYPE],
    ephemeralityTriggerAction: [48, d.EPHEMERALITY_TRIGGER_ACTION_TYPE],
    excessPayloadKbSize: [40, v],
    fastForwardEnabled: [15, S],
    isAComment: [54, S],
    isAReply: [35, S],
    isFromWamsys: [19, S],
    isLid: [39, S],
    isViewOnce: [22, S],
    localAddressingMode: [53, i.ADDRESSING_MODE],
    mediaCaptionPresent: [8, S],
    messageDistributionType: [41, f.MESSAGE_DISTRIBUTION_ENUM_TYPE],
    messageForwardAgeT: [14, M],
    messageIsFanout: [5, S],
    messageIsFastForward: [13, S],
    messageIsFirstUserMessage: [26, S],
    messageIsForward: [4, S],
    messageIsInternational: [7, S],
    messageIsInvisible: [29, S],
    messageIsRevoke: [24, S],
    messageMediaType: [3, p.MEDIA_TYPE],
    messageSendOptUploadEnabled: [12, S],
    messageSendResult: [1, _.MESSAGE_SEND_RESULT_TYPE],
    messageSendResultIsTerminal: [17, S],
    messageSendT: [11, M],
    messageType: [2, g.MESSAGE_TYPE],
    networkWasDisconnected: [37, S],
    overallMediaSize: [42, T],
    participantCount: [32, v],
    receiverDefaultDisappearingDuration: [28, v],
    resendCount: [16, v],
    retryCount: [6, v],
    revokeDuration: [33, v],
    revokeType: [34, m.REVOKE_TYPE],
    sendButtonPressT: [45, v],
    senderDefaultDisappearingDuration: [27, v],
    stickerIsAi: [50, S],
    stickerIsAvatar: [38, S],
    stickerIsFirstParty: [18, S],
    stickerIsFromStickerMaker: [51, S],
    stickerMakerSourceType: [52, y.STICKER_MAKER_SOURCE_TYPE],
    thumbSize: [20, T],
    typeOfGroup: [36, E.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.MessageSendWamEvent = A;