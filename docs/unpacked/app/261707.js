Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveClientExpirationRPC = function (e) {
  const t = (0, r.parseClientExpirationRequest)(e);
  if (!t.success) {
    throw new i.SmaxParsingFailure((0, a.errorMessageRpcParsing)("ClientExpiration", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value
  };
};
var r = require("./359777.js");
var i = require("./590062.js");
var a = require("./216342.js");