Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdGroupParticipantMissAckWamEvent = undefined;
var r = require("./901032.js");
var i = require("./749286.js");
var a = require("./21008.js");
const {
  BOOLEAN: o,
  INTEGER: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MdGroupParticipantMissAck: [4146, {
    groupSizeBucket: [1, i.CLIENT_GROUP_SIZE_BUCKET],
    isLid: [2, o],
    messageIsRevoke: [3, o],
    participantAddCount: [4, s],
    participantRemoveCount: [5, s],
    typeOfGroup: [6, a.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.MdGroupParticipantMissAckWamEvent = l;