Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveNewsletterRPC = function (e) {
  const t = (0, r.parseNewsletterRequest)(e);
  if (!t.success) {
    throw new o.SmaxParsingFailure((0, s.errorMessageRpcParsing)("Newsletter", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value,
    makeNewsletterResponseError: () => (0, i.makeNewsletterResponseError)(e),
    makeNewsletterResponseSuccess: () => (0, a.makeNewsletterResponseSuccess)(e)
  };
};
var r = require("./903008.js");
var i = require("./932058.js");
var a = require("./824363.js");
var o = require("./590062.js");
var s = require("./216342.js");