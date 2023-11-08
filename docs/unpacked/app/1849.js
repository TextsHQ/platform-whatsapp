Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveJoinNotificationRPC = function (e) {
  const t = (0, r.parseJoinNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("JoinNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeJoinNotificationResponseAck: () => (0, i.makeJoinNotificationResponseAck)(e)
  };
};
var r = require("./635852.js");
var i = require("./345300.js");
var a = require("./590062.js");
var o = require("./216342.js");