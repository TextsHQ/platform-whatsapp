Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveNonceNotificationRPC = function (e) {
  const t = (0, r.parseNonceNotificationRequest)(e);
  if (!t.success) {
    throw new i.SmaxParsingFailure((0, a.errorMessageRpcParsing)("NonceNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value
  };
};
var r = require("./302226.js");
var i = require("./590062.js");
var a = require("./216342.js");