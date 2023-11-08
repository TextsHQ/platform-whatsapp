var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForOnlineNaive = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./8304.js");
var o = r(require("./845294.js"));
function s() {
  return (s = (0, i.default)(function* (e) {
    yield (0, o.default)(self, "online", undefined, e);
    return (0, a.delayMs)(100, e);
  })).apply(this, arguments);
}