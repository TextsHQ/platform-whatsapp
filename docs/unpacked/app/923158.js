var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSetRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./498878.js");
var s = require("./132002.js");
var l = require("./652504.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, l.makeSetRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseSetResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "SetResponseSuccess",
        value: i.value
      };
    }
    const d = (0, o.parseSetResponseError)(r, n);
    if (d.success) {
      return {
        name: "SetResponseError",
        value: d.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("Set", {
      Success: i,
      Error: d
    }));
  })).apply(this, arguments);
}