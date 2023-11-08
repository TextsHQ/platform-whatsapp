var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPassiveIQRPC = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./33541.js");
var s = require("./264537.js");
var l = require("./590062.js");
var u = require("./216342.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = (0, s.makePassiveIQRequest)();
    const n = yield (0, a.sendSmaxStanza)(t, e);
    const r = (0, o.parsePassiveIQResponseSuccess)(n, t);
    if (r.success) {
      return {
        name: "PassiveIQResponseSuccess",
        value: r.value
      };
    }
    throw new l.SmaxParsingFailure((0, u.errorMessageRpcParsing)("PassiveIQ", {
      Success: r
    }));
  })).apply(this, arguments);
}