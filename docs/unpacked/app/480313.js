var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = function () {
  if ((0, u.isSyncdDisabled)()) {
    return Promise.resolve();
  }
  (function () {
    const e = (0, o.default)(s.reportWam, 60000, {
      maxWait: 180000
    });
    c.Cmd.on(c.APP_STATE_SYNC_COMPLETED, e);
  })();
  h();
  return (0, s.initializeStateMachine)();
};
exports.lockForSync = function (e, t, n) {
  const r = (0, p.getStorage)().lock([...e, ...m], e => Promise.all([(0, _.appendPendingMutationsRows)(t), n(e)])).then(() => {
    const e = t.map(e => e.collection);
    (0, s.markCollectionsForSync)(e);
  });
  return Promise.resolve(r);
};
exports.sanitizeActionInSyncActionsRow = h;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/23279.js"));
var s = require("./280015.js");
var l = require("./122393.js");
var u = require("./272961.js");
var c = require("./780549.js");
var d = r(require("./797137.js"));
var p = require("./732011.js");
var f = require("./666545.js");
var _ = require("./610876.js");
var g = require("./960523.js");
const m = ["pending-mutations"];
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* () {
    if (!(yield (0, g.getMdSyncActionsActionSanitized)())) {
      __LOG__(2)`syncd: sanitizing null 'action' property in sync-actions table`;
      const e = (yield (0, f.getSyncActionsTable)().all()).filter(e => e.action == null).map(e => {
        const t = JSON.parse(e.index)[0];
        if (l.Actions.cast(t)) {
          return (0, i.default)((0, i.default)({}, e), {}, {
            action: t
          });
        } else {
          __LOG__(2)`syncd: invalid action ${t}`;
          return (0, i.default)({}, e);
        }
      });
      yield (0, _.updateSyncActionRows)(e);
      yield (0, g.setMdSyncActionsActionSanitized)(true);
    }
  })).apply(this, arguments);
}
(0, d.default)().then(() => {
  if (!(0, u.isSyncdDisabled)()) {
    (0, s.processOnAppResume)();
  }
});