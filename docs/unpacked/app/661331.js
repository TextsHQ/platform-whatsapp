var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetParticipatingGroupsRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./262293.js");
var s = require("./626276.js");
var l = require("./707959.js");
var u = require("./265451.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetParticipatingGroupsRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetParticipatingGroupsResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetParticipatingGroupsResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetParticipatingGroupsResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetParticipatingGroupsResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetParticipatingGroupsResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetParticipatingGroupsResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetParticipatingGroups", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}