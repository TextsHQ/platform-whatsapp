Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EphemeralOutOfSyncInfoWamEvent = undefined;
var r = require("./901032.js");
var i = require("./749286.js");
const {
  BOOLEAN: a,
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  EphemeralOutOfSyncInfo: [3892, {
    groupSizeBucket: [1, i.CLIENT_GROUP_SIZE_BUCKET],
    incomingMessageEphemeralityDuration: [2, o],
    isAGroup: [3, a],
    isNewThreadForUser: [5, a],
    otherDefaultModeDuration: [6, o],
    threadEphemeralityDuration: [7, o],
    threadId: [8, s],
    userDefaultModeDuration: [9, o]
  }, [1, 1, 1], "regular"]
});
exports.EphemeralOutOfSyncInfoWamEvent = l;