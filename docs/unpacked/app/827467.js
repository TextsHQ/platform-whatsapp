var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupUnSyncedError = undefined;
exports.clearAdminshipCache = function (e) {
  if (e != null) {
    v.delete(e);
  } else {
    v.clear();
  }
};
exports.getGroupSenderKeyList = function () {
  return g.apply(this, arguments);
};
exports.getGroupSenderKeyListFromParticipantRecord = m;
exports.injectPastParticipantsFromDB = function () {
  return S.apply(this, arguments);
};
exports.isCurrentUserGroupAdmin = function () {
  return T.apply(this, arguments);
};
exports.markForgetSenderKey = function (e, t) {
  const n = e.toString();
  return (0, u.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [r] = e;
      const i = yield r.get(n);
      if (i) {
        yield r.createOrReplace(y(i, t, false));
      } else {
        __LOG__(2)`markForgetSenderKey: group participant info missing for group ${n}`;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.markHasSenderKey = function (e, t) {
  const n = e.toString();
  return (0, u.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [r] = e;
      const i = yield r.get(n);
      if (i) {
        yield r.createOrReplace(y(i, t, true));
      } else {
        __LOG__(2)`markHasSenderKey: group participant info missing for group ${n}`;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.pruneExpiredPastParticipants = function () {
  return (0, u.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [t] = e;
      const n = yield (0, c.getParticipantTable)().all();
      const r = [];
      n.forEach(e => {
        const t = e.pastParticipants.filter(e => {
          const t = (0, o.castToUnixTime)(e.leaveTs);
          return (0, o.happenedWithin)(t, o.DAY_SECONDS * l.PAST_PARTICIPANT_EXPIRATION_DAYS);
        });
        if (t.length !== e.pastParticipants.length) {
          const n = (0, i.default)((0, i.default)({}, e), {}, {
            pastParticipants: t
          });
          r.push(n);
        }
      });
      r.length;
      return t.bulkCreateOrReplace(r);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.setAdminshipCache = function (e, t) {
  v.set(e, t);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./359987.js");
var l = require("./682144.js");
var u = require("./732011.js");
var c = require("./918475.js");
var d = require("./459857.js");
var p = require("./440401.js");
var f = require("./669050.js");
class _ extends Error {
  constructor() {
    super(...arguments);
    this.name = "GroupUnSyncedError";
  }
}
function g() {
  return (g = (0, a.default)(function* (e) {
    const t = e.toString();
    return m(e, yield (0, c.getParticipantTable)().get(t));
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, a.default)(function* (e, t) {
    const n = [];
    const r = [];
    if (!t) {
      return {
        skDistribList: n,
        skList: r,
        rotateKey: false
      };
    }
    const {
      senderKey: i,
      rotateKey: a
    } = t;
    i.forEach((e, t) => {
      var a;
      const o = (0, f.createWid)(t);
      const s = (0, f.toUserWid)(o);
      const l = (a = i.get(s.toString())) !== null && a !== undefined && a;
      if (e && l) {
        r.push(o);
      } else {
        n.push(o);
        if (o.isCompanion() && e && !l) {
          __LOG__(3)`getGroupSenderKeyList: include ${t} because its primary doesn't have sender key`;
        }
      }
    });
    yield E(e, i.size);
    (0, p.cacheGroupMetrics)(t);
    if (a) {
      return {
        skDistribList: [...n, ...r],
        skList: [],
        rotateKey: a
      };
    } else {
      return {
        skDistribList: n,
        skList: r,
        rotateKey: a
      };
    }
  })).apply(this, arguments);
}
function y(e, t, n) {
  const r = new Map(e.senderKey);
  let i = false;
  t.forEach(e => {
    if ((0, d.isMeDevice)(e)) {
      return;
    }
    const t = String(e);
    if (r.has(t)) {
      r.set(t, n);
    } else if (!e.isLid()) {
      i = true;
    }
  });
  return {
    groupId: e.groupId,
    senderKey: r,
    participants: e.participants,
    pastParticipants: e.pastParticipants,
    admins: e.admins,
    rotateKey: i,
    deviceSyncComplete: e.deviceSyncComplete
  };
}
function E(e, t) {
  return (0, s.frontendSendAndReceive)("updateCachedDeviceCount", {
    groupWid: e,
    deviceCount: t
  });
}
function S() {
  return (S = (0, a.default)(function* (e) {
    const t = e.map(e => e.id.toString());
    const n = yield (0, c.getParticipantTable)().bulkGet(t);
    return e.map((e, t) => {
      var r;
      var a;
      return (0, i.default)((0, i.default)({}, e), {}, {
        pastParticipants: (r = n[t]) === null || r === undefined || (a = r.pastParticipants) === null || a === undefined ? undefined : a.map(e => {
          let {
            jid: t,
            leaveTs: n,
            leaveReason: r
          } = e;
          return {
            id: (0, f.createWid)(t),
            leaveTs: n,
            leaveReason: r
          };
        })
      });
    });
  })).apply(this, arguments);
}
exports.GroupUnSyncedError = _;
const v = new Map();
function T() {
  return (T = (0, a.default)(function* (e) {
    const t = v.get(e);
    if (t == null) {
      var n;
      const t = yield (0, c.getParticipantTable)().get(e);
      const r = !!t && t.admins.includes((n = (0, d.getMaybeMeUser)()) === null || n === undefined ? undefined : n.toString());
      v.set(e, r);
      return r;
    }
    return t;
  })).apply(this, arguments);
}