Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityFeatureUsageWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./276081.js");
var o = require("./572968.js");
const {
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  CommunityFeatureUsage: [3696, {
    communityId: [2, l],
    communityUiAction: [4, r.COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE],
    communityUiFeature: [3, o.COMMUNITY_UI_FEATURE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.CommunityFeatureUsageWamEvent = i;