var a = require("../vendor/595318.js");
exports.yj = function () {
  if (!d()) {
    return;
  }
  self.setInterval(() => {
    new s.WebcMemoryStatWamEvent((0, r.default)((0, r.default)({}, (0, o.default)(d(), "getMemoryInfo()")), {}, {
      hasVerifiedNumber: i.Stream.mode === i.StreamMode.MAIN,
      numMessages: l.MsgCollection.length
    })).commit();
  }, u.MEMORY_METRIC_INTERVAL);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/61113.js");
var i = require("../app/973981.js");
var u = require("./645249.js");
var s = require("./57620.js");
const c = Date.now();
function d() {
  var e;
  const t = (e = self.performance) === null || e === undefined ? undefined : e.memory;
  if (t) {
    return {
      uptime: (Date.now() - c) / 1000,
      jsHeapSizeLimit: t.jsHeapSizeLimit,
      totalJsHeapSize: t.totalJSHeapSize,
      usedJsHeapSize: t.usedJSHeapSize
    };
  }
}