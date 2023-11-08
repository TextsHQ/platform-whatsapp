var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetRPC = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./614622.js");
var s = require("./732159.js");
var l = require("./897630.js");
var u = require("./248373.js");
var c = require("./360875.js");
var d = require("./590062.js");
var p = require("./216342.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, c.makeGetRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, u.parseGetResponseSuccessPictureURL)(r, n);
    if (i.success) {
      return {
        name: "GetResponseSuccessPictureURL",
        value: i.value
      };
    }
    const f = (0, l.parseGetResponseSuccessPictureBlob)(r, n);
    if (f.success) {
      return {
        name: "GetResponseSuccessPictureBlob",
        value: f.value
      };
    }
    const _ = (0, s.parseGetResponseSuccessNoData)(r, n);
    if (_.success) {
      return {
        name: "GetResponseSuccessNoData",
        value: _.value
      };
    }
    const g = (0, o.parseGetResponseError)(r, n);
    if (g.success) {
      return {
        name: "GetResponseError",
        value: g.value
      };
    }
    throw new d.SmaxParsingFailure((0, p.errorMessageRpcParsing)("Get", {
      SuccessPictureURL: i,
      SuccessPictureBlob: f,
      SuccessNoData: _,
      Error: g
    }));
  })).apply(this, arguments);
}