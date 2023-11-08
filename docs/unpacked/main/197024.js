var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDeleteRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./261111.js");
var i = require("./510132.js");
var u = require("./743406.js");
var s = require("./451279.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeDeleteRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseDeleteResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "DeleteResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseDeleteResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "DeleteResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseDeleteResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "DeleteResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("Delete", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}