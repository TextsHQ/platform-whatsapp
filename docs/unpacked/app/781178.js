Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityTabActionWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  CommunityTabAction: [3496, {
    communityNoActionTabViews: [4, i],
    communityTabGroupNavigations: [1, i],
    communityTabToHomeViews: [2, i],
    communityTabViews: [3, i],
    communityTabViewsViaContextMenu: [5, i]
  }, [1, 1, 1], "regular"]
});
exports.CommunityTabActionWamEvent = a;