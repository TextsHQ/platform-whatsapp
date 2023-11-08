var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRemoveParticipantsRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./127868.js");
var i = require("./65323.js");
var u = require("./554057.js");
var s = require("./678999.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeRemoveParticipantsRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseRemoveParticipantsResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "RemoveParticipantsResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseRemoveParticipantsResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "RemoveParticipantsResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseRemoveParticipantsResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "RemoveParticipantsResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("RemoveParticipants", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}