Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("newsletter-my-votes").version((0, i.newsletterMyVotesCreateTable)(), [n(["chatJid", "msgServerId"]), t("serverTimestampMs"), t("votes"), t("ack"), t("t"), t("read"), t("msgKey")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("newsletter-my-votes");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");