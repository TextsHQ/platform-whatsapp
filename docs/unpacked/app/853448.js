Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageReceiveWamEvent = undefined;
var r = require("./901032.js");
var i = require("./227016.js");
var a = require("./800277.js");
var o = require("./987884.js");
var s = require("./616615.js");
var l = require("./420419.js");
var u = require("./891225.js");
var c = require("./684290.js");
var d = require("./718451.js");
var p = require("./564066.js");
var f = require("./147402.js");
var _ = require("./71677.js");
var g = require("./21008.js");
const {
  BOOLEAN: m,
  INTEGER: h,
  TIMER: y
} = r.TYPES;
const E = (0, r.defineEvents)({
  MessageReceive: [450, {
    agentEngagementType: [28, a.AGENT_ENGAGEMENT_ENUM_TYPE],
    deviceCount: [16, h],
    deviceSizeBucket: [10, f.SIZE_BUCKET],
    disappearingChatInitiator: [14, o.DISAPPEARING_CHAT_INITIATOR_TYPE],
    editType: [25, s.EDIT_TYPE],
    ephemeralityDuration: [13, h],
    ephemeralityInitiator: [26, l.EPHEMERALITY_INITIATOR_TYPE],
    ephemeralityTriggerAction: [27, u.EPHEMERALITY_TRIGGER_ACTION_TYPE],
    isAComment: [36, m],
    isAReply: [19, m],
    isForwardedForward: [18, m],
    isLid: [24, m],
    isViewOnce: [9, m],
    localAddressingMode: [33, i.ADDRESSING_MODE],
    messageAddressingMode: [34, i.ADDRESSING_MODE],
    messageIsInternational: [4, m],
    messageIsInvisible: [23, m],
    messageIsOffline: [5, m],
    messageMediaType: [2, c.MEDIA_TYPE],
    messageQueueTime: [15, y],
    messageReceiveT0: [6, y],
    messageReceiveT1: [7, y],
    messageType: [1, d.MESSAGE_TYPE],
    mutedGroupMessage: [8, m],
    numOfWebUrlsInTextMessage: [3, h],
    offlineCount: [30, h],
    paddingBytesSize: [22, h],
    participantCount: [17, h],
    receiverDefaultDisappearingDuration: [12, h],
    revokeType: [20, p.REVOKE_TYPE],
    senderDefaultDisappearingDuration: [11, h],
    serverAddressingMode: [35, i.ADDRESSING_MODE],
    stickerIsAi: [29, m],
    stickerIsFromStickerMaker: [31, m],
    stickerMakerSourceType: [32, _.STICKER_MAKER_SOURCE_TYPE],
    typeOfGroup: [21, g.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.MessageReceiveWamEvent = E;