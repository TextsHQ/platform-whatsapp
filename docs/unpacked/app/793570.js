var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetCountryCodeRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./801865.js");
var s = require("./777434.js");
var l = require("./73289.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, l.makeGetCountryCodeRequest)();
    const n = yield (0, a.sendSmaxStanza)(t, e);
    const r = (0, s.parseGetCountryCodeResponseGetCountryCodeResponse)(n, t);
    if (r.success) {
      return {
        name: "GetCountryCodeResponseGetCountryCodeResponse",
        value: r.value
      };
    }
    const i = (0, o.parseGetCountryCodeResponseError)(n, t);
    if (i.success) {
      return {
        name: "GetCountryCodeResponseError",
        value: i.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("GetCountryCode", {
      GetCountryCodeResponse: r,
      Error: i
    }));
  })).apply(this, arguments);
}