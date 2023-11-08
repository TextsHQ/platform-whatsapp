var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNonPersistedJob = function (e, t, n) {
  if (typeof t != "function") {
    throw (0, o.default)("getNonPersistJob got invalid function param");
  }
  const r = (0, a.getInstance)((n == null ? undefined : n.priority) === i.JOB_PRIORITY.SKIP);
  return {
    fireAndForget() {
      r.enqueue(e, () => t.apply(null, arguments), n);
    },
    waitUntilCompleted() {
      return r.enqueue(e, () => t.apply(null, arguments), n);
    }
  };
};
var i = require("./775593.js");
var a = require("./376651.js");
var o = r(require("./556869.js"));