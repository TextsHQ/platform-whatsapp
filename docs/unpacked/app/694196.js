var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetPrivacySettingRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./494920.js");
var s = require("./889494.js");
var l = require("./960252.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, l.makeGetPrivacySettingRequest)();
    const n = yield (0, a.sendSmaxStanza)(t, e);
    const r = (0, s.parseGetPrivacySettingResponseSuccess)(n, t);
    if (r.success) {
      return {
        name: "GetPrivacySettingResponseSuccess",
        value: r.value
      };
    }
    const i = (0, o.parseGetPrivacySettingResponseError)(n, t);
    if (i.success) {
      return {
        name: "GetPrivacySettingResponseError",
        value: i.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("GetPrivacySetting", {
      Success: r,
      Error: i
    }));
  })).apply(this, arguments);
}