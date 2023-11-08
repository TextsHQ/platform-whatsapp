Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveLeaveNotificationRPC = function (e) {
  const t = (0, r.parseLeaveNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("LeaveNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeLeaveNotificationResponseAck: () => (0, i.makeLeaveNotificationResponseAck)(e)
  };
};
var r = require("./659160.js");
var i = require("./496762.js");
var a = require("./590062.js");
var o = require("./216342.js");