Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanExpiredUtmJob = function () {
  return (0, a.createNonPersistedJob)("cleanExpiredUtm", () => (0, i.promiseCallSync)(() => {
    const e = (0, o.getAllUtmsFromLocalStorage)();
    Object.keys(e).forEach(t => {
      const n = e[t];
      if ((0, s.hasUtmExpired)(n)) {
        (0, o.removeUtmFromLocalStorage)(t);
      }
    });
  }), {
    priority: r.JOB_PRIORITY.BEST_EFFORT
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./71230.js");
var a = require("./899137.js");
var o = require("./59594.js");
var s = require("./529085.js");