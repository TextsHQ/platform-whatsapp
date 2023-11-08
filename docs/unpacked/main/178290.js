Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUpdateForOrphanReactions = function (e) {
  e.forEach(e => {
    if (a.ReactionsCollection.get(e.parentMsgKey)) {
      a.ReactionsCollection.addOrUpdateReaction(e);
    }
  });
};
var a = require("../app/762897.js");