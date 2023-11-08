var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreGroupParticipantsForChats = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/351053.js");
var l = require("../app/209639.js");
var i = a(require("../app/667845.js"));
var u = a(require("../app/442690.js"));
var s = require("../app/853441.js");
var c = require("../app/918475.js");
var d = require("../app/440401.js");
var f = require("../app/669050.js");
function p() {
  return (p = (0, r.default)(function* (e) {
    const t = new Map();
    e.forEach(e => {
      const n = i.default.get(e);
      if (n && !n.participantQueryPromise && n.stale) {
        n.participantQueryPromise = new Promise(n => {
          t.set(e, n);
        });
      } else {
        __LOG__(2)`[init-from-storage]: restoreGroupParticipantsForChats: skip for chat - ${e}`;
      }
    });
    const n = Array.from(t.keys());
    try {
      (yield (0, c.getParticipantTable)().bulkGet(n)).forEach(function () {
        var e = (0, r.default)(function* (e, a) {
          var r;
          const c = i.default.get(n[a]);
          const p = !!((r = o.ChatCollection.get(n[a])) === null || r === undefined ? undefined : r.isReadOnly);
          if (c) {
            try {
              let r = [];
              let o = [];
              if (e == null || e.deviceSyncComplete != null && !e.deviceSyncComplete || e.staleType === l.STALE_TYPES.PARTICIPANT) {
                if (p) {
                  __LOG__(2)`[init-from-storage]: restoreGroupParticipantsForChats: skip sync stale participant for read only chat ${n[a]}`;
                } else {
                  var m;
                  __LOG__(2)`[init-from-storage]: restoreGroupParticipantsForChats: sync stale participant for ${n[a]}`;
                  const e = yield (0, s.sendQueryGroup)((0, f.createWid)(n[a]));
                  r = ((m = e == null ? undefined : e.participants) !== null && m !== undefined ? m : []).map(e => {
                    let {
                      id: t,
                      isAdmin: n,
                      isSuperAdmin: a
                    } = e;
                    return new u.default({
                      id: t,
                      isAdmin: n,
                      isSuperAdmin: a
                    });
                  });
                }
              } else {
                var h;
                var g;
                const t = new Set(e.admins);
                r = (h = (g = e.participants) === null || g === undefined ? undefined : g.map(e => {
                  var n;
                  return new u.default({
                    id: (0, f.createUserWid)(e),
                    isAdmin: t.has(e),
                    isSuperAdmin: ((n = c.owner) === null || n === undefined ? undefined : n.toString()) === e
                  });
                })) !== null && h !== undefined ? h : [];
              }
              var E;
              if (e == null) {
                o = [];
              } else {
                o = (E = e.pastParticipants) === null || E === undefined ? undefined : E.map(e => {
                  let {
                    jid: t,
                    leaveTs: n,
                    leaveReason: a
                  } = e;
                  return new u.default({
                    id: (0, f.createWid)(t),
                    leaveTs: n,
                    leaveReason: a
                  });
                });
              }
              c.participants.add(r, {
                merge: true
              });
              c.pastParticipants.add(o, {
                merge: true
              });
              c.stale = false;
              c.deviceStale = (e == null ? undefined : e.staleType) === l.STALE_TYPES.DEVICE;
              if (e != null) {
                (0, d.cacheGroupMetrics)(e);
              }
            } finally {
              const e = t.get(n[a]);
              if (!(e == null)) {
                e();
              }
              c.participantQueryPromise = null;
            }
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
    } catch (e) {
      return void n.forEach(e => {
        const n = t.get(e);
        if (!(n == null)) {
          n();
        }
        const a = i.default.get(e);
        if (a) {
          a.participantQueryPromise = null;
        }
      });
    }
  })).apply(this, arguments);
}