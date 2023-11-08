var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetMemberAddModeRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./999831.js");
var i = require("./197309.js");
var u = require("./726956.js");
var s = require("./220978.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeSetMemberAddModeRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseSetMemberAddModeResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "SetMemberAddModeResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseSetMemberAddModeResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "SetMemberAddModeResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseSetMemberAddModeResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "SetMemberAddModeResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SetMemberAddMode", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}