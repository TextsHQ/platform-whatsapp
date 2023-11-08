Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PnhDailyWamEvent = undefined;
var r = require("./901032.js");
var i = require("./21008.js");
const {
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  PnhDaily: [3806, {
    communityId: [1, o],
    mappingMissing: [7, a],
    pnhIndicatorClicksChat: [2, a],
    pnhIndicatorClicksInfoScreen: [3, a],
    reactionDeleteCount: [4, a],
    reactionOpenTrayCount: [5, a],
    totalContacts: [8, a],
    typeOfGroup: [6, i.TYPE_OF_GROUP_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.PnhDailyWamEvent = s;