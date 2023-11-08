var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAcknowledgeGroupRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./633583.js");
var s = require("./668937.js");
var l = require("./550265.js");
var u = require("./112254.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeAcknowledgeGroupRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseAcknowledgeGroupResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "AcknowledgeGroupResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseAcknowledgeGroupResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "AcknowledgeGroupResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseAcknowledgeGroupResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "AcknowledgeGroupResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("AcknowledgeGroup", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}