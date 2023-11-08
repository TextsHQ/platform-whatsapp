var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFetchKeyBundlesRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./614765.js");
var s = require("./401531.js");
var l = require("./991323.js");
var u = require("./109085.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeFetchKeyBundlesRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseFetchKeyBundlesResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "FetchKeyBundlesResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseFetchKeyBundlesResponseRequestError)(r, n);
    if (p.success) {
      return {
        name: "FetchKeyBundlesResponseRequestError",
        value: p.value
      };
    }
    const f = (0, s.parseFetchKeyBundlesResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "FetchKeyBundlesResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("FetchKeyBundles", {
      Success: i,
      RequestError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}