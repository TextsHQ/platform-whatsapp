var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendUpdateBlockListRPC = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./563314.js");
var s = require("./816398.js");
var l = require("./221735.js");
var u = require("./914737.js");
var c = require("./440455.js");
var d = require("./590062.js");
var p = require("./216342.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, c.makeUpdateBlockListRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseUpdateBlockListResponseSuccessWithMatch)(r, n);
    if (i.success) {
      return {
        name: "UpdateBlockListResponseSuccessWithMatch",
        value: i.value
      };
    }
    const f = (0, u.parseUpdateBlockListResponseSuccessWithMismatch)(r, n);
    if (f.success) {
      return {
        name: "UpdateBlockListResponseSuccessWithMismatch",
        value: f.value
      };
    }
    const _ = (0, o.parseUpdateBlockListResponseInvalidRequest)(r, n);
    if (_.success) {
      return {
        name: "UpdateBlockListResponseInvalidRequest",
        value: _.value
      };
    }
    const g = (0, s.parseUpdateBlockListResponseServerError)(r, n);
    if (g.success) {
      return {
        name: "UpdateBlockListResponseServerError",
        value: g.value
      };
    }
    throw new d.SmaxParsingFailure((0, p.errorMessageRpcParsing)("UpdateBlockList", {
      SuccessWithMatch: i,
      SuccessWithMismatch: f,
      InvalidRequest: _,
      ServerError: g
    }));
  })).apply(this, arguments);
}