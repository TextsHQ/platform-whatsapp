var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetLinkedGroupsParticipantsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./354066.js");
var i = require("./574869.js");
var u = require("./917006.js");
var s = require("./21869.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeGetLinkedGroupsParticipantsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseGetLinkedGroupsParticipantsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "GetLinkedGroupsParticipantsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseGetLinkedGroupsParticipantsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "GetLinkedGroupsParticipantsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseGetLinkedGroupsParticipantsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "GetLinkedGroupsParticipantsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetLinkedGroupsParticipants", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}