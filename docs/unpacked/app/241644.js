Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("newsletter-reactions").version((0, i.newsletterReactionsCreateTable)(), [n("parentMsgKey"), t("emojiCountMap"), t("serverTimestamp")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("newsletter-reactions");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");