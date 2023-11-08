var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAvailabilityRPC = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./688044.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = (0, o.makeAvailabilityRequest)(e);
    yield (0, a.castSmaxStanza)(t);
  })).apply(this, arguments);
}