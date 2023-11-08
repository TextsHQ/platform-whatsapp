var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetSubGroupSuggestionsRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./799913.js");
var s = require("./287823.js");
var l = require("./370034.js");
var u = require("./311132.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetSubGroupSuggestionsRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetSubGroupSuggestionsResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetSubGroupSuggestionsResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetSubGroupSuggestionsResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetSubGroupSuggestionsResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetSubGroupSuggestionsResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetSubGroupSuggestionsResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetSubGroupSuggestions", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}