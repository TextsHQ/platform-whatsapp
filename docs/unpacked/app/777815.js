Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receivePrimaryHelloNotifyCompanionRPC = function (e) {
  const t = (0, r.parsePrimaryHelloNotifyCompanionRequest)(e);
  if (!t.success) {
    throw new a.SmaxParsingFailure((0, o.errorMessageRpcParsing)("PrimaryHelloNotifyCompanion", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makePrimaryHelloNotifyCompanionResponseAck: () => (0, i.makePrimaryHelloNotifyCompanionResponseAck)(e)
  };
};
var r = require("./203613.js");
var i = require("./941231.js");
var a = require("./590062.js");
var o = require("./216342.js");