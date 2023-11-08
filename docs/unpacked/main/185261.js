var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDeleteParentGroupRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./33407.js");
var i = require("./704530.js");
var u = require("./995561.js");
var s = require("./188262.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeDeleteParentGroupRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseDeleteParentGroupResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "DeleteParentGroupResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseDeleteParentGroupResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "DeleteParentGroupResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseDeleteParentGroupResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "DeleteParentGroupResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("DeleteParentGroup", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}