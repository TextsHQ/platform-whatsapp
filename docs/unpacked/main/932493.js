Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollsActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/749286.js");
var o = require("./607693.js");
var l = require("../app/21008.js");
const {
  BOOLEAN: i,
  INTEGER: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  PollsActions: [3676, {
    groupSizeBucket: [1, r.CLIENT_GROUP_SIZE_BUCKET],
    isAGroup: [6, i],
    isAdmin: [2, i],
    pollAction: [3, o.POLL_ACTION_TYPE],
    pollCreationDs: [4, u],
    pollOptionsCount: [5, u],
    typeOfGroup: [7, l.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.PollsActionsWamEvent = s;