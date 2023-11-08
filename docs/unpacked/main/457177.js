Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionsBridgeApi = undefined;
var a = require("./15487.js");
var r = require("../app/251444.js");
var o = require("./178290.js");
const l = {
  checkUpdateForOrphanReactions(e) {
    let {
      updatedRecords: t
    } = e;
    (0, o.checkUpdateForOrphanReactions)(t);
  },
  deleteModelsForLastAddOnPreview(e) {
    let {
      messagesIds: t
    } = e;
    return (0, r.deleteModelsForLastAddOnPreview)(t);
  },
  hasReactionsInCollection(e) {
    let {
      msgKeys: t
    } = e;
    return (0, a.hasReactionsInCollection)(t);
  }
};
exports.ReactionsBridgeApi = l;