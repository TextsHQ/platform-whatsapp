var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProtobufWithMultipleMessageParserPlugin = function (e) {
  const t = [];
  let n;
  for (const a of i.default) {
    const i = a(e);
    var r;
    if (i != null) {
      t.push(`${i.msgData.type}:${(r = i.msgData.subtype) !== null && r !== undefined ? r : "null"}`);
      if (n == null) {
        n = i;
      }
    }
  }
  return {
    result: n,
    pluginsMatched: t
  };
};
var i = r(require("./483963.js"));