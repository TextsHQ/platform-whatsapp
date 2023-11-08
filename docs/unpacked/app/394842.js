Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveServerNotificationRPC = function (e) {
  const t = (0, r.parseServerNotificationRequest)(e);
  if (!t.success) {
    throw new i.SmaxParsingFailure((0, a.errorMessageRpcParsing)("ServerNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value
  };
};
var r = require("./8374.js");
var i = require("./590062.js");
var a = require("./216342.js");