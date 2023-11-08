var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetLinkedGroupRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./460794.js");
var i = require("./175181.js");
var u = require("./43460.js");
var s = require("./991409.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeGetLinkedGroupRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseGetLinkedGroupResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "GetLinkedGroupResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseGetLinkedGroupResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "GetLinkedGroupResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseGetLinkedGroupResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "GetLinkedGroupResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetLinkedGroup", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}