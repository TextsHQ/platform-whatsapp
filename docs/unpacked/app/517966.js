Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveSetMetadataNotificationRPC = function (e) {
  const t = (0, r.parseSetMetadataNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("SetMetadataNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeSetMetadataNotificationResponseAck: () => (0, i.makeSetMetadataNotificationResponseAck)(e)
  };
};
var r = require("./365470.js");
var i = require("./766847.js");
var a = require("./590062.js");
var o = require("./216342.js");