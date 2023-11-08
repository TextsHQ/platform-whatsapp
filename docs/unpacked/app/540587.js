Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2eMessageRecvWamEvent = undefined;
var r = require("./901032.js");
var i = require("./227016.js");
var a = require("./800277.js");
var o = require("./535480.js");
var s = require("./555678.js");
var l = require("./751047.js");
var u = require("./195222.js");
var c = require("./616615.js");
var d = require("./684290.js");
var p = require("./564066.js");
var f = require("./86736.js");
var _ = require("./21008.js");
const {
  BOOLEAN: g,
  INTEGER: m
} = r.TYPES;
const h = (0, r.defineEvents)({
  E2eMessageRecv: [478, {
    agentEngagementType: [15, a.AGENT_ENGAGEMENT_ENUM_TYPE],
    e2eCiphertextType: [5, o.E2E_CIPHERTEXT_TYPE],
    e2eCiphertextVersion: [6, m],
    e2eDestination: [4, s.E2E_DESTINATION],
    e2eFailureReason: [2, l.E2E_FAILURE_REASON],
    e2eSenderType: [8, u.E2E_SENDER_TYPE],
    e2eSuccessful: [1, g],
    editType: [13, c.EDIT_TYPE],
    isLid: [11, g],
    localAddressingMode: [16, i.ADDRESSING_MODE],
    messageAddressingMode: [17, i.ADDRESSING_MODE],
    messageMediaType: [7, d.MEDIA_TYPE],
    offline: [9, g],
    retryCount: [3, m],
    revokeType: [10, p.REVOKE_TYPE],
    serverAddressingMode: [18, i.ADDRESSING_MODE],
    stanzaType: [14, f.STANZA_TYPE],
    typeOfGroup: [12, _.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 20], "regular"]
});
exports.E2eMessageRecvWamEvent = h;