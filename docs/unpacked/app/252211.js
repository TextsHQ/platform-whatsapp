Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceholderActivityWamEvent = undefined;
var r = require("./901032.js");
var i = require("./195222.js");
var a = require("./684290.js");
var o = require("./718451.js");
var s = require("./35980.js");
var l = require("./711602.js");
var u = require("./191081.js");
var c = require("./872044.js");
var d = require("./208407.js");
var p = require("./147402.js");
var f = require("./21008.js");
const {
  BOOLEAN: _,
  INTEGER: g,
  STRING: m
} = r.TYPES;
const h = (0, r.defineEvents)({
  PlaceholderActivity: [1980, {
    deviceCount: [9, g],
    deviceSizeBucket: [8, p.SIZE_BUCKET],
    e2eSenderType: [16, i.E2E_SENDER_TYPE],
    isLid: [12, _],
    messageBeforeReg: [15, _],
    messageIsRevoke: [7, _],
    messageKeyHash: [14, m],
    messageMediaType: [6, a.MEDIA_TYPE],
    messageType: [5, o.MESSAGE_TYPE],
    participantCount: [10, g],
    placeholderActionInd: [2, s.PLACEHOLDER_ACTION],
    placeholderAddReason: [11, c.PLACEHOLDER_REASON_TYPE],
    placeholderChatTypeInd: [3, l.PLACEHOLDER_CHAT_TYPE],
    placeholderPopulationType: [17, u.PLACEHOLDER_POPULATION_TYPE],
    placeholderTimePeriod: [4, g],
    placeholderTypeInd: [1, d.PLACEHOLDER_TYPE],
    typeOfGroup: [13, f.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.PlaceholderActivityWamEvent = h;