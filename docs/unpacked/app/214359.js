Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveQPNotificationRPC = function (e) {
  const t = (0, r.parseQPNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("QPNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeQPNotificationResponseAck: () => (0, i.makeQPNotificationResponseAck)(e)
  };
};
var r = require("./461560.js");
var i = require("./683986.js");
var a = require("./590062.js");
var o = require("./216342.js");