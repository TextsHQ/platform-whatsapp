Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventLoopDelay = function () {
  const e = (0, r.performanceAbsoluteNow)();
  return new Promise(t => {
    setTimeout(() => {
      t((0, r.performanceAbsoluteNow)() - e);
    }, 0);
  });
};
var r = require("./632157.js");