Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncomingMessageDropWamEvent = undefined;
var r = require("./901032.js");
var i = require("./800277.js");
var a = require("./535480.js");
var o = require("./555678.js");
var s = require("./751047.js");
var l = require("./195222.js");
var u = require("./684290.js");
var c = require("./271791.js");
var d = require("./564066.js");
var p = require("./21008.js");
const {
  BOOLEAN: f,
  INTEGER: _
} = r.TYPES;
const g = (0, r.defineEvents)({
  IncomingMessageDrop: [3724, {
    agentEngagementType: [12, i.AGENT_ENGAGEMENT_ENUM_TYPE],
    e2eCiphertextType: [1, a.E2E_CIPHERTEXT_TYPE],
    e2eDestination: [2, o.E2E_DESTINATION],
    e2eFailureReason: [9, s.E2E_FAILURE_REASON],
    e2eSenderType: [3, l.E2E_SENDER_TYPE],
    messageDropReason: [4, c.MESSAGE_DROP_REASON_TYPE],
    messageMediaType: [5, u.MEDIA_TYPE],
    offline: [6, f],
    offlineCount: [11, _],
    retryCount: [7, _],
    revokeType: [8, d.REVOKE_TYPE],
    typeOfGroup: [10, p.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.IncomingMessageDropWamEvent = g;