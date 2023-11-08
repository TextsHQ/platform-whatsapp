Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveRangeAction = undefined;
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n,
    addIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("active-message-ranges").version((0, i.activeMessageRangesCreateTable)(), [n(["chatId", "action"]), o("chatId"), t("actionValue"), t("remainingMessages")]).view(e => e);
};
exports.getActiveMessageRangesTable = function () {
  return (0, r.getStorage)().table("active-message-ranges");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const o = Object.freeze({
  Unknown: "unknown",
  Archive: "archive",
  MarkChatAsRead: "markChatAsRead",
  ClearChatKeepStarredKeepMedia: "clearChat_0_0",
  ClearChatKeepStarredDeleteMedia: "clearChat_0_1",
  ClearChatDeleteStarredKeepMedia: "clearChat_1_0",
  ClearChatDeleteStarredDeleteMedia: "clearChat_1_1",
  DeleteChatDeleteMedia: "deleteChat_1",
  DeleteChatKeepMedia: "deleteChat_0"
});
exports.ActiveRangeAction = o;