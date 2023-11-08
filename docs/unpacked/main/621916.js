var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAddParticipantsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./417120.js");
var i = require("./658591.js");
var u = require("./680006.js");
var s = require("./574223.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeAddParticipantsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseAddParticipantsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "AddParticipantsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseAddParticipantsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "AddParticipantsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseAddParticipantsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "AddParticipantsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("AddParticipants", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}