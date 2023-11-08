var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetAccessTokenAndSessionCookiesRPC = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./82182.js");
var s = require("./94988.js");
var l = require("./909034.js");
var u = require("./35657.js");
var c = require("./758933.js");
var d = require("./590062.js");
var p = require("./216342.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, c.makeGetAccessTokenAndSessionCookiesRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetAccessTokenAndSessionCookiesResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetAccessTokenAndSessionCookiesResponseSuccess",
        value: i.value
      };
    }
    const f = (0, u.parseGetAccessTokenAndSessionCookiesResponseTooManyAttempts)(r, n);
    if (f.success) {
      return {
        name: "GetAccessTokenAndSessionCookiesResponseTooManyAttempts",
        value: f.value
      };
    }
    const _ = (0, s.parseGetAccessTokenAndSessionCookiesResponseIncorrectNonce)(r, n);
    if (_.success) {
      return {
        name: "GetAccessTokenAndSessionCookiesResponseIncorrectNonce",
        value: _.value
      };
    }
    const g = (0, o.parseGetAccessTokenAndSessionCookiesResponseError)(r, n);
    if (g.success) {
      return {
        name: "GetAccessTokenAndSessionCookiesResponseError",
        value: g.value
      };
    }
    throw new d.SmaxParsingFailure((0, p.errorMessageRpcParsing)("GetAccessTokenAndSessionCookies", {
      Success: i,
      TooManyAttempts: f,
      IncorrectNonce: _,
      Error: g
    }));
  })).apply(this, arguments);
}