var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidateChatPollMsgs = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./925404.js");
var o = require("./163755.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    try {
      yield (0, a.invalidateChatPolls)(e.id);
      e.msgs.filter(e => (0, o.getAsPollCreation)(e) && !e.pollInvalidated).forEach(e => {
        e.pollInvalidated = true;
      });
    } catch (e) {
      __LOG__(4, undefined, new Error())`[POLLS] Failed to invalidate polls with error: ${e}`;
    }
  })).apply(this, arguments);
}