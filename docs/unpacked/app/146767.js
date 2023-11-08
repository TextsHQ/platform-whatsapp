var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFetchMissingPreKeysRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./627059.js");
var s = require("./641492.js");
var l = require("./94135.js");
var u = require("./151521.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeFetchMissingPreKeysRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseFetchMissingPreKeysResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "FetchMissingPreKeysResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseFetchMissingPreKeysResponseRequestError)(r, n);
    if (p.success) {
      return {
        name: "FetchMissingPreKeysResponseRequestError",
        value: p.value
      };
    }
    const f = (0, s.parseFetchMissingPreKeysResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "FetchMissingPreKeysResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("FetchMissingPreKeys", {
      Success: i,
      RequestError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}