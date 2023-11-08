Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityCreationWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./923907.js");
var o = require("./135516.js");
var l = require("./909588.js");
const {
  INTEGER: i,
  STRING: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  CommunityCreation: [3492, {
    communityCreationActionCount: [1, i],
    communityCreationActionTaken: [2, r.COMMUNITY_CREATION_ACTION_TAKEN_TYPE],
    communityCreationCurrentScreen: [3, o.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE],
    communityCreationEntrypoint: [5, l.COMMUNITY_CREATION_ENTRYPOINT_TYPE],
    communityCreationSessionId: [4, u],
    communityId: [6, u]
  }, [1, 1, 1], "regular"]
});
exports.CommunityCreationWamEvent = s;