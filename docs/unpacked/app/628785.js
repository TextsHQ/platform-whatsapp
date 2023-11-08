Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveLiveUpdatesNotificationRPC = function (e) {
  const t = (0, r.parseLiveUpdatesNotificationRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("LiveUpdatesNotification", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeLiveUpdatesNotificationResponseAck: () => (0, i.makeLiveUpdatesNotificationResponseAck)(e)
  };
};
var r = require("./892722.js");
var i = require("./328323.js");
var a = require("./590062.js");
var o = require("./216342.js");