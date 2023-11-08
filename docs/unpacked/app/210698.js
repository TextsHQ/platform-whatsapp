Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveRefreshCodeNotifyCompanionRPC = function (e) {
  const t = (0, r.parseRefreshCodeNotifyCompanionRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("RefreshCodeNotifyCompanion", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeRefreshCodeNotifyCompanionResponseAck: () => (0, i.makeRefreshCodeNotifyCompanionResponseAck)(e)
  };
};
var r = require("./866518.js");
var i = require("./800498.js");
var a = require("./590062.js");
var o = require("./216342.js");