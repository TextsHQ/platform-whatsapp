var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendLinkSubGroupsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./25678.js");
var i = require("./227966.js");
var u = require("./621880.js");
var s = require("./223125.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeLinkSubGroupsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseLinkSubGroupsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "LinkSubGroupsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseLinkSubGroupsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "LinkSubGroupsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseLinkSubGroupsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "LinkSubGroupsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("LinkSubGroups", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}