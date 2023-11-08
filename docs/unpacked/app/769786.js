Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForwardSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./987884.js");
var a = require("./535480.js");
var o = require("./420419.js");
var s = require("./891225.js");
var l = require("./684290.js");
var u = require("./380176.js");
var c = require("./718451.js");
var d = require("./21008.js");
const {
  BOOLEAN: p,
  INTEGER: f,
  TIMER: _
} = r.TYPES;
const g = (0, r.defineEvents)({
  ForwardSend: [1728, {
    disappearingChatInitiator: [21, i.DISAPPEARING_CHAT_INITIATOR_TYPE],
    e2eCiphertextType: [12, a.E2E_CIPHERTEXT_TYPE],
    e2eCiphertextVersion: [11, f],
    ephemeralityDuration: [18, f],
    ephemeralityInitiator: [24, o.EPHEMERALITY_INITIATOR_TYPE],
    ephemeralityTriggerAction: [25, s.EPHEMERALITY_TRIGGER_ACTION_TYPE],
    fastForwardEnabled: [5, p],
    isForwardedForward: [22, p],
    isFrequentlyForwarded: [14, p],
    mediaCaptionPresent: [10, p],
    messageBizType: [26, u.MESSAGE_BIZ_TYPE],
    messageForwardAgeT: [4, _],
    messageIsFanout: [6, p],
    messageIsFastForward: [3, p],
    messageIsInternational: [9, p],
    messageMediaType: [2, l.MEDIA_TYPE],
    messageSendT: [13, _],
    messageType: [1, c.MESSAGE_TYPE],
    receiverDefaultDisappearingDuration: [20, f],
    resendCount: [8, f],
    retryCount: [7, f],
    senderDefaultDisappearingDuration: [19, f],
    typeOfGroup: [23, d.TYPE_OF_GROUP_ENUM],
    wouldBeFrequentlyForwardedAt3: [16, p],
    wouldBeFrequentlyForwardedAt4: [17, p]
  }, [1, 1, 1], "regular"]
});
exports.ForwardSendWamEvent = g;