Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionActionsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("../app/684290.js");
var o = require("../app/718451.js");
var l = require("./959245.js");
const i = (0, a.defineEvents)({
  ReactionActions: [3184, {
    mediaType: [3, r.MEDIA_TYPE],
    messageType: [1, o.MESSAGE_TYPE],
    reactionAction: [2, l.REACTION_ACTION_TYPE]
  }, [1, 10, 20], "regular"]
});
exports.ReactionActionsWamEvent = i;