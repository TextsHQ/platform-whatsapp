Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLock = function (e) {
  return {
    lock(t, n) {
      const a = new r.Resolvable();
      const o = t.map(e => [e, new r.Resolvable()]);
      Promise.all(o.map(t => {
        let [n, r] = t;
        return e.enqueue(n, () => {
          r.resolve();
          return a.promise;
        });
      })).catch(() => {
        (0, i.TAGS)(["WALock"]).ERROR`Lock failed for ${t}`;
      });
      return Promise.all(o.map(e => {
        let [t, n] = e;
        return n.promise;
      })).then(() => n()).finally(() => {
        a.resolve();
      });
    },
    wait: t => e.wait(t)
  };
};
var r = require("./950376.js");
var i = require("./462545.js");