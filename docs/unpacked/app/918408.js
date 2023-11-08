Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseThreadMetadata = function (e) {
  const t = e.child(r.INFO_TYPE.THREAD_META);
  const n = {};
  t.forEachChildWithTag("item", e => {
    const t = e.attrChatJid("from");
    const r = e.attrTime("t");
    n[String(t)] = r;
  });
  return n;
};
var r = require("./162574.js");