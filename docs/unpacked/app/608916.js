var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParticipantInfo = M;
exports.addParticipantInfoIncognitoCag = A;
exports.addPastParticipants = function (e) {
  return (0, d.getStorage)().lock(["participant"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const r = yield n.bulkGet(e.map(e => e.groupId));
      const i = e.map((e, t) => {
        let {
          groupId: n,
          pastParticipants: i
        } = e;
        const a = r[t];
        if (a) {
          return function (e, t) {
            return {
              groupId: e.groupId,
              senderKey: e.senderKey,
              participants: e.participants,
              pastParticipants: t.map(e => {
                let {
                  id: t,
                  leaveReason: n,
                  leaveTs: r
                } = e;
                return {
                  jid: t.toString(),
                  leaveTs: r,
                  leaveReason: n
                };
              }),
              admins: e.admins,
              rotateKey: e.rotateKey,
              version: e.version,
              staleType: e.staleType
            };
          }(a, i);
        } else {
          return R(n, {
            pastParticipants: i
          });
        }
      });
      n.bulkCreateOrReplace(i);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.changeParticipantAdminInfoIncognitoCag = O;
exports.createParticipantInfo = R;
exports.getGroupParticipant = function () {
  return w.apply(this, arguments);
};
exports.markGroupParticipantStale = function (e) {
  let {
    group: t
  } = e;
  return (0, d.getStorage)().lock(["participant"], e => {
    let [n] = e;
    return n.merge(String(t), {
      staleType: s.STALE_TYPES.PARTICIPANT
    });
  });
};
exports.modifyGroupParticipant = function (e) {
  let {
    group: t,
    oldId: n,
    newId: r,
    prevVersion: o,
    newVersion: l
  } = e;
  const u = String(t);
  return (0, d.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [t] = e;
      const a = yield t.get(u);
      if (!a) {
        throw new s.GroupUnSyncedError("modifyGroupParticipant: group participant info missing");
      }
      if (a.version && (o == null || o !== a.version) && !(0, c.isVIdDeprecationEnabled)()) {
        throw new s.GroupUnSyncedError("modifyGroupParticipant: prev version info missing");
      }
      return t.createOrReplace(function (e, t, n, r) {
        const a = String(t);
        const o = String(n);
        const s = new Map(e.senderKey);
        const l = e.participants.filter(e => e !== a).concat(o);
        Array.from(s.keys()).forEach(e => {
          const n = (0, y.createWid)(e).user;
          if (t.user === n) {
            s.delete(e);
          } else {
            s.set(e, false);
          }
        });
        s.set(o, false);
        const u = e.admins.map(e => e === a ? o : e);
        return (0, i.default)((0, i.default)({}, e), {}, {
          participants: l,
          senderKey: s,
          admins: u,
          version: r,
          rotateKey: true
        });
      }(a, n, r, l));
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.removeParticipantInfo = b;
exports.removeParticipantInfoIncognitoCag = C;
exports.replaceParticipantInfo = N;
exports.replaceParticipantInfoIncognitoCag = D;
exports.replaceParticipants = function (e) {
  let {
    group: t,
    participants: n,
    admins: r,
    deviceIds: i,
    groupInfo: o,
    version: s
  } = e;
  let l = false;
  if (o != null) {
    l = Boolean(o.incognito) && Boolean(o.defaultSubgroup);
  }
  const u = t.toString();
  return (0, d.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [t] = e;
      const a = yield t.get(u);
      if (!a) {
        return t.create(R(u, {
          participants: n,
          admins: r,
          deviceIds: i,
          version: s
        }));
      }
      yield t.createOrReplace(l ? D(a, {
        participants: n,
        admins: r,
        deviceIds: i,
        version: s
      }) : N(a, {
        participants: n,
        admins: r,
        deviceIds: i,
        version: s
      }));
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.updateCommunityParticipants = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (n) {
    return T({
      id: String(e),
      data: t
    });
  }
  const {
    participants: r
  } = t;
  const i = e.toString();
  return (0, d.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [n] = e;
      const a = yield n.get(i);
      if (!a) {
        throw new s.GroupUnSyncedError(`updateCommunityParticipants: group participant info missing for action ${t.action}`);
      }
      switch (t.action) {
        case s.PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE:
          return n.createOrReplace(I(a, r, s.PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE));
        case s.PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE:
          return n.createOrReplace(I(a, r, s.PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE));
        default:
          throw (0, E.default)(`updateCommunityParticipants: failed with unknown action ${t.action}`);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.updateDBParticipants = function (e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  const i = Boolean(n == null ? undefined : n.defaultSubgroup) && Boolean(n == null ? undefined : n.incognito);
  if (r) {
    return v({
      id: String(e),
      data: t,
      groupMetadata: n
    });
  }
  const {
    participants: o,
    version: l,
    prevVersion: u
  } = t;
  const p = e.toString();
  return (0, d.getStorage)().lock(["participant"], function () {
    var e = (0, a.default)(function* (e) {
      let [n] = e;
      const r = yield n.get(p);
      if (!r) {
        throw new s.GroupUnSyncedError(`updateParticipants: group participant info missing for action ${t.action}`);
      }
      if (r.version && (u == null || u !== r.version) && !(0, c.isVIdDeprecationEnabled)()) {
        throw new s.GroupUnSyncedError(`updateParticipants: prevVersion info missing for action ${t.action}`);
      }
      switch (t.action) {
        case s.PARTICIPANT_OPERATION.ADD:
          return n.createOrReplace(i ? A(r, o, t.deviceIds, l) : M(r, o, t.deviceIds, l));
        case s.PARTICIPANT_OPERATION.REMOVE:
          return n.createOrReplace(i ? C(r, o, t.timestamp, t.author, l, t.reason) : b(r, o, t.timestamp, t.author, l, t.reason));
        case s.PARTICIPANT_OPERATION.DEMOTE:
          return n.createOrReplace(i ? O(r, o, t.deviceIds, l, s.PARTICIPANT_OPERATION.DEMOTE) : P(r, o, t.deviceIds, l, s.PARTICIPANT_OPERATION.DEMOTE));
        case s.PARTICIPANT_OPERATION.PROMOTE:
          return n.createOrReplace(i ? O(r, o, t.deviceIds, l, s.PARTICIPANT_OPERATION.PROMOTE) : P(r, o, t.deviceIds, l, s.PARTICIPANT_OPERATION.PROMOTE));
        default:
          throw (0, E.default)(`updateParticipants: failed with unknown action ${t.action}`);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.updateGroupParticipantTableWithoutDeviceSync = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./392646.js");
var s = require("./209639.js");
var l = require("./862159.js");
var u = require("./687352.js");
var c = require("./790215.js");
var d = require("./732011.js");
var p = require("./271315.js");
var f = require("./437695.js");
var _ = require("./918475.js");
var g = require("./459857.js");
var m = require("./499497.js");
var h = require("./440401.js");
var y = require("./669050.js");
var E = r(require("./556869.js"));
function S() {
  return (S = (0, a.default)(function* (e) {
    let {
      groupInfos: t
    } = e;
    const n = yield (0, _.getParticipantTable)().bulkGet(t.map(e => e.id.toString()));
    const r = new Map();
    n.forEach(e => e && r.set(e.groupId, e.senderKey));
    const i = t.map(e => {
      var t;
      var n;
      var i;
      const a = [];
      const o = [];
      const l = e.id.toString();
      const u = r.get(l) || new Map();
      if (!((t = e.participants) === null || t === undefined)) {
        t.forEach(e => {
          if (e.isAdmin) {
            o.push(e.id);
          }
          a.push(e.id);
        });
      }
      const c = (n = (i = e.pastParticipants) === null || i === undefined ? undefined : i.map(e => {
        let {
          id: t,
          leaveTs: n,
          leaveReason: r
        } = e;
        return {
          jid: t.toString(),
          leaveTs: n,
          leaveReason: r
        };
      })) !== null && n !== undefined ? n : [];
      if (Boolean(e.incognito) && Boolean(e.defaultSubgroup)) {
        const t = o.some(e => (0, g.isMeAccount)(e));
        (0, p.augmentedCagGroupParticipantList)(t, e.participants).forEach(function (e) {
          const t = String(e);
          if (!u.has(t)) {
            u.set(t, false);
          }
        });
      } else {
        var d;
        if (!((d = e.participants) === null || d === undefined)) {
          d.forEach(e => {
            u.set(String(e.id), false);
          });
        }
      }
      return {
        groupId: l,
        participants: a.map(String),
        pastParticipants: c,
        admins: o.map(String),
        senderKey: u,
        rotateKey: false,
        staleType: s.STALE_TYPES.DEVICE
      };
    });
    return (0, _.getParticipantTable)().bulkCreateOrReplace(i);
  })).apply(this, arguments);
}
const v = (0, o.batch)({
  delayMs: 3000
}, function () {
  var e = (0, a.default)(function* (e) {
    const t = Array.from(new Set(e.map(e => e.id)));
    yield (0, d.getStorage)().lock(["participant"], function () {
      var n = (0, a.default)(function* (n) {
        let [r] = n;
        const i = new Map((yield r.bulkGet(t)).filter(Boolean).map(e => [e.groupId, e]));
        e.forEach(e => {
          let {
            id: t,
            data: n,
            groupMetadata: r
          } = e;
          const a = Boolean(r == null ? undefined : r.defaultSubgroup) && Boolean(r == null ? undefined : r.incognito);
          const o = i.get(t);
          if (!o) {
            return void __LOG__(2)`updateParticipantsBatched: no local record found for group ${t}`;
          }
          const {
            participants: l,
            version: u,
            prevVersion: d
          } = n;
          if (o.version != null && (d == null || d !== o.version) && !(0, c.isVIdDeprecationEnabled)()) {
            __LOG__(2)`updateParticipantsBatched: out-of-order group notification for ${t}, action: ${n.action}`;
            return void (o.deviceSyncComplete = false);
          }
          let p = null;
          switch (n.action) {
            case s.PARTICIPANT_OPERATION.ADD:
              p = a ? A(o, l, n.deviceIds, u) : M(o, l, n.deviceIds, u);
              break;
            case s.PARTICIPANT_OPERATION.REMOVE:
              p = a ? C(o, l, n.timestamp, n.author, u, n.reason) : b(o, l, n.timestamp, n.author, u, n.reason);
              break;
            case s.PARTICIPANT_OPERATION.DEMOTE:
              p = a ? O(o, l, n.deviceIds, u, s.PARTICIPANT_OPERATION.DEMOTE) : P(o, l, n.deviceIds, u, s.PARTICIPANT_OPERATION.DEMOTE);
              break;
            case s.PARTICIPANT_OPERATION.PROMOTE:
              p = a ? O(o, l, n.deviceIds, u, s.PARTICIPANT_OPERATION.PROMOTE) : P(o, l, n.deviceIds, u, s.PARTICIPANT_OPERATION.PROMOTE);
              break;
            default:
              __LOG__(2)`updateParticipants: failed with unknown action ${n.action}`;
          }
          if (p != null) {
            i.set(p.groupId, p);
          }
        });
        return r.bulkCreateOrReplace(Array.from(i.values()));
      });
      return function () {
        return n.apply(this, arguments);
      };
    }());
    return e.map(() => {});
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
const T = (0, o.batch)({
  delayMs: 3000
}, function () {
  var e = (0, a.default)(function* (e) {
    const t = Array.from(new Set(e.map(e => e.id)));
    yield (0, d.getStorage)().lock(["participant"], function () {
      var n = (0, a.default)(function* (n) {
        let [r] = n;
        const i = new Map((yield r.bulkGet(t)).filter(Boolean).map(e => [e.groupId, e]));
        e.forEach(e => {
          let {
            id: t,
            data: n
          } = e;
          const r = i.get(t);
          if (!r) {
            return void __LOG__(2)`updateCommunityParticipantsBatched: no local record found for group ${t}`;
          }
          const {
            participants: a
          } = n;
          let o = null;
          switch (n.action) {
            case s.PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE:
              o = I(r, a, s.PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE);
              break;
            case s.PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE:
              o = I(r, a, s.PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE);
              break;
            default:
              __LOG__(2)`updateCommunityParticipantsBatched: failed with unknown action ${n.action}`;
          }
          if (o != null) {
            i.set(o.groupId, o);
          }
        });
        return r.bulkCreateOrReplace(Array.from(i.values()));
      });
      return function () {
        return n.apply(this, arguments);
      };
    }());
    return e.map(() => {});
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
function M(e, t, n, r) {
  var i;
  var a;
  const o = new Map(e.senderKey);
  n.forEach(e => {
    if ((0, g.isMeDevice)(e)) {
      return;
    }
    if (e.isHosted()) {
      return;
    }
    const t = String(e);
    o.set(t, false);
  });
  const s = new Set();
  for (const {
    id: e
  } of t) {
    s.add(String(e));
  }
  const l = (i = (a = e.pastParticipants) === null || a === undefined ? undefined : a.filter(e => !s.has(e.jid))) !== null && i !== undefined ? i : [];
  const u = e.participants;
  for (const e of s.values()) {
    u.push(e);
  }
  return {
    groupId: e.groupId,
    senderKey: o,
    participants: u,
    pastParticipants: l,
    admins: e.admins,
    rotateKey: e.rotateKey,
    version: r,
    staleType: e.staleType
  };
}
function A(e, t, n, r) {
  var i;
  var a;
  const o = new Map(e.senderKey);
  n.forEach(e => {
    if ((0, g.isMeDevice)(e)) {
      return;
    }
    if (e.isHosted()) {
      return;
    }
    const t = String(e);
    o.set(t, false);
  });
  const s = new Set();
  const l = new Set();
  for (const {
    id: e,
    lid: n
  } of t) {
    l.add(String(e));
    if (!(n == null || e.isLid())) {
      s.add(String(n));
    }
  }
  const u = (i = (a = e.pastParticipants) === null || a === undefined ? undefined : a.filter(e => !l.has(e.jid))) !== null && i !== undefined ? i : [];
  const c = e.participants.filter(e => !s.has(e));
  for (const e of l.values()) {
    c.push(e);
  }
  return {
    groupId: e.groupId,
    senderKey: o,
    participants: c,
    pastParticipants: u,
    admins: e.admins,
    rotateKey: e.rotateKey,
    version: r,
    staleType: e.staleType
  };
}
function b(e, t, n, r, i) {
  var a;
  var o;
  const s = new Map(e.senderKey);
  let l = e.rotateKey;
  s.forEach((e, n) => {
    const r = (0, y.createWid)(n);
    if (t.some(e => e.id.isSameAccount(r))) {
      l = l || e;
      s.delete(n);
    }
  });
  if (l) {
    s.forEach((e, t) => {
      s.set(t, false);
    });
  }
  const c = t.map(e => {
    let {
      id: t
    } = e;
    return String(t);
  });
  const d = (a = e.pastParticipants) === null || a === undefined ? undefined : a.concat((o = t.map(e => ({
    jid: e.id.toString(),
    leaveTs: n,
    leaveReason: e.id.equals(r) ? u.LeaveReason.Left : u.LeaveReason.Removed
  }))) !== null && o !== undefined ? o : []);
  if (!e.rotateKey && l) {
    (0, f.postSenderKeyExpiredMetric)({
      chatId: e.groupId,
      deviceCount: e.senderKey.size,
      expiryReason: m.EXPIRY_REASON.USER_LEAVE
    });
  }
  const p = e.admins.filter(e => !c.includes(e));
  const _ = e.participants.filter(e => !c.includes(e));
  return {
    groupId: e.groupId,
    senderKey: s,
    participants: _,
    pastParticipants: d,
    admins: p,
    rotateKey: l,
    version: i,
    staleType: e.staleType
  };
}
function C(e, t, n, r, i, a) {
  var o;
  var s;
  const c = new Map(e.senderKey);
  let d = e.rotateKey;
  const p = t.map(e => e.id.isLid() ? e.id : e.lid).filter(Boolean);
  c.forEach((e, n) => {
    const r = (0, y.createWid)(n);
    if (r.isLid() && a !== l.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
      return void (p.some(e => e.isSameAccount(r)) && c.delete(n));
    }
    if (!r.isLid() && a === l.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
      return void c.delete(n);
    }
    if (t.some(e => e.id.user === r.user && e.id.server === r.server)) {
      d = d || e;
      c.delete(n);
    }
  });
  if (d) {
    c.forEach((e, t) => {
      if (!(0, y.createWid)(t).isLid()) {
        c.set(t, false);
      }
    });
  }
  const _ = t.map(e => {
    let {
      id: t
    } = e;
    return String(t);
  });
  const g = (o = e.pastParticipants) === null || o === undefined ? undefined : o.concat((s = t.map(e => ({
    jid: e.id.toString(),
    leaveTs: n,
    leaveReason: e.id.equals(r) ? u.LeaveReason.Left : u.LeaveReason.Removed
  }))) !== null && s !== undefined ? s : []);
  if (!e.rotateKey && d) {
    (0, f.postSenderKeyExpiredMetric)({
      chatId: e.groupId,
      deviceCount: e.senderKey.size,
      expiryReason: m.EXPIRY_REASON.USER_LEAVE
    });
  }
  const h = e.admins.filter(e => !_.includes(e));
  let E = e.participants;
  if (a === l.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
    const e = t.reduce((e, t) => {
      let {
        lid: n,
        id: r
      } = t;
      if (n == null || r.isLid()) {
        return e;
      } else {
        return e.set(r.toString(), n.toString());
      }
    }, new Map());
    E = E.map(t => {
      var n;
      if ((n = e.get(t)) !== null && n !== undefined) {
        return n;
      } else {
        return t;
      }
    });
  } else {
    E = E.filter(e => !_.includes(e));
  }
  return {
    groupId: e.groupId,
    senderKey: c,
    participants: E,
    pastParticipants: g,
    admins: h,
    rotateKey: d,
    version: i,
    staleType: e.staleType
  };
}
function P(e, t, n, r, i) {
  let a = e.admins;
  const o = t.map(e => {
    let {
      id: t
    } = e;
    return String(t);
  });
  if (i === s.PARTICIPANT_OPERATION.DEMOTE) {
    a = e.admins.filter(e => !o.includes(e));
  } else if (i === s.PARTICIPANT_OPERATION.PROMOTE) {
    const t = new Set(e.admins);
    o.forEach(e => t.add(e));
    a = Array.from(t);
  }
  return {
    groupId: e.groupId,
    senderKey: e.senderKey,
    participants: e.participants,
    pastParticipants: e.pastParticipants,
    admins: a,
    rotateKey: e.rotateKey,
    version: r,
    staleType: e.staleType
  };
}
function O(e, t, n, r, i) {
  let a = e.admins;
  const o = t.map(e => {
    let {
      id: t
    } = e;
    return String(t);
  });
  const l = new Map(e.senderKey);
  if (n != null && n.length > 0) {
    n.forEach(e => {
      if ((0, g.isMeDevice)(e)) {
        return;
      }
      if (e.isHosted()) {
        return;
      }
      const t = String(e);
      l.set(t, false);
    });
  }
  let u = e.participants;
  if (i === s.PARTICIPANT_OPERATION.DEMOTE) {
    a = e.admins.filter(e => !o.includes(e));
    if (!a.some(e => (0, g.isMeAccount)((0, y.createWid)(e)))) {
      const e = t.reduce((e, t) => {
        let {
          lid: n,
          id: r
        } = t;
        if (n == null || r.isLid()) {
          return e;
        } else {
          return e.set(r.toString(), n.toString());
        }
      }, new Map());
      u = u.map(t => {
        var n;
        if ((n = e.get(t)) !== null && n !== undefined) {
          return n;
        } else {
          return t;
        }
      });
    }
  } else if (i === s.PARTICIPANT_OPERATION.PROMOTE) {
    const n = t.reduce((e, t) => {
      let {
        lid: n,
        id: r
      } = t;
      if (n == null || r.isLid()) {
        return e;
      } else {
        return e.set(n.toString(), r.toString());
      }
    }, new Map());
    a = e.admins.concat(o);
    u = u.map(e => {
      var t;
      if ((t = n.get(e)) !== null && t !== undefined) {
        return t;
      } else {
        return e;
      }
    });
  }
  return {
    groupId: e.groupId,
    senderKey: l,
    participants: u,
    pastParticipants: e.pastParticipants,
    admins: a,
    rotateKey: e.rotateKey,
    version: r,
    staleType: e.staleType
  };
}
function I(e, t, n) {
  let r = e.admins;
  let i = e.participants;
  const a = t.map(e => {
    let {
      id: t
    } = e;
    return String(t);
  });
  if (n === s.PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE) {
    r = e.admins.filter(e => !a.includes(e));
    i = r;
  } else if (n === s.PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE) {
    const t = a.filter(t => !e.admins.includes(t));
    r = e.admins.concat(t);
    i = r;
  }
  return {
    groupId: e.groupId,
    senderKey: e.senderKey,
    participants: i,
    pastParticipants: e.pastParticipants,
    admins: r,
    rotateKey: e.rotateKey,
    version: e.version,
    staleType: e.staleType
  };
}
function R(e, t) {
  const {
    participants: n = [],
    pastParticipants: r = [],
    admins: i = [],
    deviceIds: a = [],
    version: o
  } = t;
  const l = new Map();
  a.forEach(e => {
    if ((0, g.isMeDevice)(e)) {
      return;
    }
    if (e.isHosted()) {
      return;
    }
    const t = String(e);
    if (!l.has(t)) {
      l.set(t, false);
    }
  });
  return {
    groupId: e,
    senderKey: l,
    participants: n.map(e => {
      let {
        id: t
      } = e;
      return String(t);
    }),
    pastParticipants: r.map(e => {
      let {
        id: t,
        leaveReason: n,
        leaveTs: r
      } = e;
      return {
        jid: t.toString(),
        leaveTs: r,
        leaveReason: n
      };
    }),
    admins: i.map(String),
    rotateKey: false,
    version: o,
    staleType: n.length === 0 ? s.STALE_TYPES.PARTICIPANT : undefined
  };
}
function N(e, t) {
  const {
    participants: n,
    admins: r,
    deviceIds: i,
    version: a
  } = t;
  let o = e.rotateKey;
  const s = e.senderKey;
  const l = new Map();
  i.forEach(e => {
    if ((0, g.isMeDevice)(e)) {
      return;
    }
    if (e.isHosted()) {
      return;
    }
    const t = String(e);
    const n = s.get(t);
    if (n == null) {
      l.set(t, false);
    } else {
      l.set(t, n);
      s.delete(t);
    }
  });
  for (const e of s.values()) {
    o = o || e;
  }
  return {
    groupId: e.groupId,
    senderKey: l,
    participants: n.map(e => {
      let {
        id: t
      } = e;
      return String(t);
    }),
    pastParticipants: e.pastParticipants,
    admins: r.map(String),
    rotateKey: o,
    version: a
  };
}
function D(e, t) {
  const {
    participants: n,
    admins: r,
    deviceIds: i,
    version: a
  } = t;
  let o = e.rotateKey;
  const s = e.senderKey;
  const l = new Map();
  i.forEach(e => {
    if ((0, g.isMeDevice)(e)) {
      return;
    }
    if (e.isHosted()) {
      return;
    }
    const t = String(e);
    const n = s.get(t);
    if (n == null) {
      l.set(t, false);
    } else {
      l.set(t, n);
      s.delete(t);
    }
  });
  for (const [e, t] of s.entries()) {
    if (t && !(0, y.createWid)(e).isLid()) {
      o = true;
      break;
    }
  }
  return {
    groupId: e.groupId,
    senderKey: l,
    participants: n.map(e => {
      let {
        id: t
      } = e;
      return String(t);
    }),
    pastParticipants: e.pastParticipants,
    admins: r.map(String),
    rotateKey: o,
    version: a
  };
}
function w() {
  return (w = (0, a.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    var a;
    let {
      groupWid: o
    } = e;
    const l = yield (0, _.getParticipantTable)().get(String(o));
    if (!l) {
      return null;
    }
    const u = new Set(l.admins);
    const c = (t = (n = l.participants) === null || n === undefined ? undefined : n.map(e => ({
      id: (0, y.createWid)(e),
      isAdmin: u.has(e),
      isSuperAdmin: false
    }))) !== null && t !== undefined ? t : [];
    const d = (r = (i = l.pastParticipants) === null || i === undefined ? undefined : i.map(e => {
      let {
        jid: t,
        leaveTs: n,
        leaveReason: r
      } = e;
      return {
        id: (0, y.createWid)(t),
        leaveTs: n,
        leaveReason: r
      };
    })) !== null && r !== undefined ? r : [];
    (0, h.cacheGroupMetrics)(l);
    const p = l.deviceSyncComplete == null || l.deviceSyncComplete ? undefined : s.STALE_TYPES.PARTICIPANT;
    return {
      participants: c,
      pastParticipants: d,
      staleType: (a = l.staleType) !== null && a !== undefined ? a : p,
      deviceCount: l.senderKey.size
    };
  })).apply(this, arguments);
}