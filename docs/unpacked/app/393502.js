var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveConflict = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./986753.js");
var o = require("./122393.js");
var s = require("./661996.js");
function l() {
  return u.apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = yield Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        const n = t.get(e.index);
        if (n) {
          const t = e.actionHandler;
          return {
            remoteMutationIndex: e.index,
            conflictResolutionState: yield t.resolveConflicts(n, e)
          };
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    const r = new Map();
    n.forEach(e => {
      if (e) {
        r.set(e.remoteMutationIndex, e.conflictResolutionState);
      }
    });
    return r;
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const n = [];
    let r = [];
    const i = yield (0, a.getSyncPendingMutationsByCollectionInTransaction)(e);
    const u = new Map(i.map(e => [e.index, e]));
    const c = yield l(t, u);
    t.forEach(e => {
      const t = c.get(e.index);
      if (t) {
        switch (t) {
          case o.ConflictResolutionState.SkipRemote:
            break;
          case o.ConflictResolutionState.ApplyRemoteAndDropLocal:
            n.push(e);
            r = r.concat(i.filter(t => t.index === e.index));
            break;
          case o.ConflictResolutionState.SkipRemoteAndDropLocal:
            r = r.concat(i.filter(t => t.index === e.index));
        }
      } else {
        n.push(e);
      }
    });
    const d = (0, s.sort)(n);
    const p = [];
    for (let e = 0; e < d.length; e++) {
      const t = d[e].actionHandler;
      if (!(yield t.dropMutationDueToCrossIndexConflict(d[e], u))) {
        p.push(d[e]);
      }
    }
    return {
      remoteMutationsToApply: p,
      pendingMutationsToDrop: r.map(e => e.id).filter(Boolean)
    };
  })).apply(this, arguments);
}