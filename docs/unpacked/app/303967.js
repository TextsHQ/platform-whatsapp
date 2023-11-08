Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveDeleteNotificationRPC = function (e) {
  const t = (0, r.parseDeleteNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("DeleteNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeDeleteNotificationResponseAck: () => (0, i.makeDeleteNotificationResponseAck)(e)
  };
};
var r = require("./730515.js");
var i = require("./255118.js");
var a = require("./590062.js");
var o = require("./216342.js");