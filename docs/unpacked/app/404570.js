Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("lid-chat-state").version((0, i.lidChatStateCreateTable)(), [n("id"), t("shareOwnPn"), t("requestedPnTimestamp")]).view(e => e);
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");