var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAcceptGroupAddRPC = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./684451.js");
var s = require("./449601.js");
var l = require("./283148.js");
var u = require("./343448.js");
var c = require("./965997.js");
var d = require("./590062.js");
var p = require("./216342.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, c.makeAcceptGroupAddRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseAcceptGroupAddResponseGroupJoinRequestSuccess)(r, n);
    if (i.success) {
      return {
        name: "AcceptGroupAddResponseGroupJoinRequestSuccess",
        value: i.value
      };
    }
    const f = (0, u.parseAcceptGroupAddResponseSuccess)(r, n);
    if (f.success) {
      return {
        name: "AcceptGroupAddResponseSuccess",
        value: f.value
      };
    }
    const _ = (0, o.parseAcceptGroupAddResponseClientError)(r, n);
    if (_.success) {
      return {
        name: "AcceptGroupAddResponseClientError",
        value: _.value
      };
    }
    const g = (0, l.parseAcceptGroupAddResponseServerError)(r, n);
    if (g.success) {
      return {
        name: "AcceptGroupAddResponseServerError",
        value: g.value
      };
    }
    throw new d.SmaxParsingFailure((0, p.errorMessageRpcParsing)("AcceptGroupAdd", {
      GroupJoinRequestSuccess: i,
      Success: f,
      ClientError: _,
      ServerError: g
    }));
  })).apply(this, arguments);
}