var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockSendPing = function () {
  return s.apply(this, arguments);
};
exports.updateClockSkew = function (e) {
  (0, o.setClockSkew)(e);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./632157.js");
function s() {
  return (s = (0, i.default)(function* () {
    yield (0, a.sendPing)();
  })).apply(this, arguments);
}