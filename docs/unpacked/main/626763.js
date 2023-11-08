var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCreateRPC = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./600442.js");
var i = require("./164322.js");
var u = require("./561455.js");
var s = require("./389862.js");
var c = require("./684952.js");
var d = require("../app/590062.js");
var f = require("../app/216342.js");
function p() {
  return (p = (0, r.default)(function* (e, t) {
    const n = (0, c.makeCreateRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, s.parseCreateResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "CreateResponseSuccess",
        value: r.value
      };
    }
    const p = (0, i.parseCreateResponseGroupAlreadyExists)(a, n);
    if (p.success) {
      return {
        name: "CreateResponseGroupAlreadyExists",
        value: p.value
      };
    }
    const m = (0, l.parseCreateResponseClientError)(a, n);
    if (m.success) {
      return {
        name: "CreateResponseClientError",
        value: m.value
      };
    }
    const h = (0, u.parseCreateResponseServerError)(a, n);
    if (h.success) {
      return {
        name: "CreateResponseServerError",
        value: h.value
      };
    }
    throw new d.SmaxParsingFailure((0, f.errorMessageRpcParsing)("Create", {
      Success: r,
      GroupAlreadyExists: p,
      ClientError: m,
      ServerError: h
    }));
  })).apply(this, arguments);
}