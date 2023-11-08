var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetSubGroupsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./588714.js");
var i = require("./866016.js");
var u = require("./360545.js");
var s = require("./33889.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeGetSubGroupsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseGetSubGroupsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "GetSubGroupsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseGetSubGroupsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "GetSubGroupsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseGetSubGroupsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "GetSubGroupsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetSubGroups", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}