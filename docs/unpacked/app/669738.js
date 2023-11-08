var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetPrivacySettingRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./799774.js");
var s = require("./541596.js");
var l = require("./636448.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, l.makeSetPrivacySettingRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseSetPrivacySettingResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "SetPrivacySettingResponseSuccess",
        value: i.value
      };
    }
    const d = (0, o.parseSetPrivacySettingResponseError)(r, n);
    if (d.success) {
      return {
        name: "SetPrivacySettingResponseError",
        value: d.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("SetPrivacySetting", {
      Success: i,
      Error: d
    }));
  })).apply(this, arguments);
}