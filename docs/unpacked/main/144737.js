var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateConversationPanel = function (e, t) {
  (0, r.default)(e, {
    scaleX: [1, t]
  }, {
    duration: 300,
    easing: [0.1, 0.82, 0.25, 1]
  });
  return t !== 1;
};
var r = a(require("../app/330619.js"));