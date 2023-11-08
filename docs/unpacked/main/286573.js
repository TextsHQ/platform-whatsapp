var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setChatHasOpened = function () {
  return l.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/840089.js");
function l() {
  return (l = (0, r.default)(function* (e) {
    const t = {
      hasOpened: true
    };
    yield (0, o.updateChatTable)(e.id, t);
    e.set(t);
  })).apply(this, arguments);
}