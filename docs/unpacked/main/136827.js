var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloadChatMessages = function () {
  return l.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/743643.js");
function l() {
  return (l = (0, r.default)(function* (e) {
    if (!(e.hasPreloaded || e.pendingInitialLoading)) {
      (0, o.loadEarlierMsgs)(e, e.msgs).then(() => {
        e.trigger("msgs:preloaded");
      });
      e.hasPreloaded = true;
    }
  })).apply(this, arguments);
}