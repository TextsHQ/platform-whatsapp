var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendClientNotificationRPC = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./256422.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = (0, o.makeClientNotificationRequest)(e);
    yield (0, a.castSmaxStanza)(t);
  })).apply(this, arguments);
}