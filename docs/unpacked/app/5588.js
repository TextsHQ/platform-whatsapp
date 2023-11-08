Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveChangeNotificationRPC = function (e) {
  const t = (0, r.parseChangeNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("ChangeNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeChangeNotificationResponseAck: () => (0, i.makeChangeNotificationResponseAck)(e)
  };
};
var r = require("./235763.js");
var i = require("./119064.js");
var a = require("./590062.js");
var o = require("./216342.js");