Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveAdminNotificationRPC = function (e) {
  const t = (0, r.parseAdminNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("AdminNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeAdminNotificationResponseAck: () => (0, i.makeAdminNotificationResponseAck)(e)
  };
};
var r = require("./522703.js");
var i = require("./63041.js");
var a = require("./590062.js");
var o = require("./216342.js");