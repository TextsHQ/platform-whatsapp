var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSendBufferRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./738915.js");
var s = require("./311186.js");
var l = require("./781142.js");
var u = require("./34525.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeSendBufferRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseSendBufferResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "SendBufferResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseSendBufferResponseErrorNoRetry)(r, n);
    if (p.success) {
      return {
        name: "SendBufferResponseErrorNoRetry",
        value: p.value
      };
    }
    const f = (0, s.parseSendBufferResponseErrorRetry)(r, n);
    if (f.success) {
      return {
        name: "SendBufferResponseErrorRetry",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SendBuffer", {
      Success: i,
      ErrorNoRetry: p,
      ErrorRetry: f
    }));
  })).apply(this, arguments);
}