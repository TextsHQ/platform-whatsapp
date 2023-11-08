Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n,
    addCompositeIndex: o,
    addIndex: s
  } = (0, a.columnBuilder)(e.config);
  e.add("reactions").version((0, i.reactionsCreateTable)(), [n(["parentMsgKey", "senderUserJid"]), t("msgKey"), t("reactionText"), t("timestamp"), t("orphan"), t("orphanReason"), t("read"), t("ack"), s("parentMsgKey"), s("orphan"), t("t")]).version((0, i.addReactionTableOrphanIndex)(), [o(["parentMsgKey", "orphan"])]).version((0, i.addReactionTableMsgKeyIndex)(), [s("msgKey")]).view(e => e);
};
exports.getReactionsTable = function () {
  return (0, r.getStorage)().table("reactions");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");