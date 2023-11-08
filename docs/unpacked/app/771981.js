Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveBannerSuggestionRPC = function (e) {
  const t = (0, r.parseBannerSuggestionRequest)(e);
  if (!t.success) {
    throw new i.SmaxParsingFailure((0, a.errorMessageRpcParsing)("BannerSuggestion", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value
  };
};
var r = require("./686803.js");
var i = require("./590062.js");
var a = require("./216342.js");