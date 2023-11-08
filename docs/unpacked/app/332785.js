var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetBlockListRPC = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./930454.js");
var s = require("./656159.js");
var l = require("./848999.js");
var u = require("./38969.js");
var c = require("./678051.js");
var d = require("./590062.js");
var p = require("./216342.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, c.makeGetBlockListRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, u.parseGetBlockListResponseSuccessWithMismatch)(r, n);
    if (i.success) {
      return {
        name: "GetBlockListResponseSuccessWithMismatch",
        value: i.value
      };
    }
    const f = (0, l.parseGetBlockListResponseSuccessWithMatch)(r, n);
    if (f.success) {
      return {
        name: "GetBlockListResponseSuccessWithMatch",
        value: f.value
      };
    }
    const _ = (0, s.parseGetBlockListResponseInvalidRequest)(r, n);
    if (_.success) {
      return {
        name: "GetBlockListResponseInvalidRequest",
        value: _.value
      };
    }
    const g = (0, o.parseGetBlockListResponseInternalServerError)(r, n);
    if (g.success) {
      return {
        name: "GetBlockListResponseInternalServerError",
        value: g.value
      };
    }
    throw new d.SmaxParsingFailure((0, p.errorMessageRpcParsing)("GetBlockList", {
      SuccessWithMismatch: i,
      SuccessWithMatch: f,
      InvalidRequest: _,
      InternalServerError: g
    }));
  })).apply(this, arguments);
}