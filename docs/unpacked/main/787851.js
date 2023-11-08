var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendUnlinkGroupsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./735487.js");
var i = require("./563689.js");
var u = require("./369930.js");
var s = require("./409189.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeUnlinkGroupsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseUnlinkGroupsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "UnlinkGroupsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseUnlinkGroupsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "UnlinkGroupsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseUnlinkGroupsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "UnlinkGroupsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("UnlinkGroups", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}