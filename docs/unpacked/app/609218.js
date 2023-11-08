Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2eMessageSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./227016.js");
var a = require("./800277.js");
var o = require("./622195.js");
var s = require("./535480.js");
var l = require("./555678.js");
var u = require("./751047.js");
var c = require("./616615.js");
var d = require("./684290.js");
var p = require("./564066.js");
var f = require("./21008.js");
const {
  BOOLEAN: _,
  INTEGER: g
} = r.TYPES;
const m = (0, r.defineEvents)({
  E2eMessageSend: [476, {
    agentEngagementType: [15, a.AGENT_ENGAGEMENT_ENUM_TYPE],
    e2eCiphertextType: [5, s.E2E_CIPHERTEXT_TYPE],
    e2eCiphertextVersion: [6, g],
    e2eDestination: [4, l.E2E_DESTINATION],
    e2eFailureReason: [2, u.E2E_FAILURE_REASON],
    e2eReceiverType: [8, o.DEVICE_TYPE],
    e2eSuccessful: [1, _],
    editType: [14, c.EDIT_TYPE],
    encRetryCount: [9, g],
    isLid: [12, _],
    localAddressingMode: [16, i.ADDRESSING_MODE],
    messageIsInvisible: [10, _],
    messageMediaType: [7, d.MEDIA_TYPE],
    retryCount: [3, g],
    revokeType: [11, p.REVOKE_TYPE],
    typeOfGroup: [13, f.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.E2eMessageSendWamEvent = m;