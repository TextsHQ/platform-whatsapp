Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveMessageDeliveryUpdateNotificationRPC = function (e) {
  const t = (0, r.parseMessageDeliveryUpdateNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("MessageDeliveryUpdateNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeMessageDeliveryUpdateNotificationResponseAck: () => (0, i.makeMessageDeliveryUpdateNotificationResponseAck)(e)
  };
};
var r = require("./837712.js");
var i = require("./480750.js");
var a = require("./590062.js");
var o = require("./216342.js");