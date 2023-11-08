var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProtobuf = function (e) {
  let {
    result: t,
    pluginsMatched: n
  } = (0, a.parseProtobufWithMultipleMessageParserPlugin)(e);
  for (const a of i.default) {
    const i = a(e);
    var r;
    if (i != null) {
      n.push(`${i.msgData.type}:${(r = i.msgData.subtype) !== null && r !== undefined ? r : "null"}`);
      if (t == null) {
        t = i;
      }
    }
  }
  if (n.length > 1) {
    __LOG__(4, undefined, new Error(), true)`parseProtoPlugins: Matched more than 1 plugin types ${n.join(",")}`;
    SEND_LOGS("parse-protobuf-unexpected-plugin-match");
    return null;
  }
  return t;
};
var i = r(require("./290494.js"));
var a = require("./623958.js");