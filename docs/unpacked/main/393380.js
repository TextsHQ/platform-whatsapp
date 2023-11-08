var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSubGroupSuggestionsActionRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./875010.js");
var i = require("./885891.js");
var u = require("./328950.js");
var s = require("./68415.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeSubGroupSuggestionsActionRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseSubGroupSuggestionsActionResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "SubGroupSuggestionsActionResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseSubGroupSuggestionsActionResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "SubGroupSuggestionsActionResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseSubGroupSuggestionsActionResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "SubGroupSuggestionsActionResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SubGroupSuggestionsAction", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}