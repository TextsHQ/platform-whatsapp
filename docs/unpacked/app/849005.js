Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityHomeActionWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i,
  STRING: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  CommunityHomeAction: [3494, {
    communityHomeGroupDiscoveries: [1, i],
    communityHomeGroupJoins: [2, i],
    communityHomeGroupNavigations: [3, i],
    communityHomeId: [4, a],
    communityHomeViews: [5, i]
  }, [1, 1, 1], "regular"]
});
exports.CommunityHomeActionWamEvent = o;