var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCreateSubGroupSuggestionRPC = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./696639.js");
var i = require("./523615.js");
var u = require("./791453.js");
var s = require("./500430.js");
var c = require("./557266.js");
var d = require("../app/590062.js");
var f = require("../app/216342.js");
function p() {
  return (p = (0, r.default)(function* (e, t) {
    const n = (0, c.makeCreateSubGroupSuggestionRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess)(a, n);
    if (r.success) {
      return {
        name: "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
        value: r.value
      };
    }
    const p = (0, i.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess)(a, n);
    if (p.success) {
      return {
        name: "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
        value: p.value
      };
    }
    const m = (0, l.parseCreateSubGroupSuggestionResponseClientError)(a, n);
    if (m.success) {
      return {
        name: "CreateSubGroupSuggestionResponseClientError",
        value: m.value
      };
    }
    const h = (0, s.parseCreateSubGroupSuggestionResponseServerError)(a, n);
    if (h.success) {
      return {
        name: "CreateSubGroupSuggestionResponseServerError",
        value: h.value
      };
    }
    throw new d.SmaxParsingFailure((0, f.errorMessageRpcParsing)("CreateSubGroupSuggestion", {
      NewGroupSuggestionSuccess: r,
      ExistingGroupsSuggestionSuccess: p,
      ClientError: m,
      ServerError: h
    }));
  })).apply(this, arguments);
}