var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParticipants = function () {
  return y.apply(this, arguments);
};
exports.bulkCheckMyMembership = function () {
  return C.apply(this, arguments);
};
exports.bulkGetParticipants = T;
exports.checkMyMembership = function () {
  return b.apply(this, arguments);
};
exports.demoteCommmunityParticipants = function (e) {
  let {
    group: t,
    participants: n,
    isOffline: r
  } = e;
  return (0, s.updateCommunityParticipants)(t, {
    action: l.PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE,
    participants: n
  }, r);
};
exports.demoteParticipants = function (e) {
  let {
    group: t,
    participants: n,
    version: r,
    prevVersion: i,
    groupMetadata: a,
    isOffline: o
  } = e;
  if (r == null) {
    return Promise.reject((0, m.default)("demoteParticipants: incoming change missing version id"));
  }
  return (0, s.updateDBParticipants)(t, {
    action: l.PARTICIPANT_OPERATION.DEMOTE,
    participants: n,
    version: r,
    prevVersion: i
  }, a, o);
};
exports.getParticipants = M;
exports.promoteCommmunityParticipants = function (e) {
  let {
    group: t,
    participants: n,
    isOffline: r
  } = e;
  return (0, s.updateCommunityParticipants)(t, {
    action: l.PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE,
    participants: n
  }, r);
};
exports.promoteParticipants = function () {
  return E.apply(this, arguments);
};
exports.removeParticipants = function (e) {
  let {
    group: t,
    participants: n,
    timestamp: r,
    author: i,
    version: a,
    prevVersion: o,
    reason: u,
    groupMetadata: c,
    isOffline: d
  } = e;
  if (a == null) {
    return Promise.reject((0, m.default)("removeParticipants: incoming change missing version id"));
  }
  return (0, s.updateDBParticipants)(t, {
    action: l.PARTICIPANT_OPERATION.REMOVE,
    participants: n,
    timestamp: r,
    author: i,
    version: a,
    prevVersion: o,
    reason: u
  }, c, d);
};
exports.updateParticipants = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./642569.js");
var s = require("./608916.js");
var l = require("./209639.js");
var u = require("./862159.js");
var c = require("./280464.js");
var d = require("./271315.js");
var p = require("./98742.js");
var f = require("./918475.js");
var _ = require("./459857.js");
var g = require("./669050.js");
var m = r(require("./556869.js"));
function h() {
  return (h = (0, i.default)(function* (e) {
    let {
      group: t,
      participants: n,
      version: r,
      isOffline: i,
      groupInfo: a,
      skipDeviceSync: o = false
    } = e;
    const l = [];
    n.forEach(e => {
      if (e.isAdmin) {
        l.push(e.id);
      }
    });
    const u = (0, _.getMaybeMeUser)();
    const c = l.some(e => u && u.equals(e));
    let p = false;
    if (a != null) {
      p = Boolean(a.incognito) && Boolean(a.defaultSubgroup);
    }
    const f = p ? (0, d.augmentedCagGroupParticipantList)(c, n) : n.map(e => {
      let {
        id: t
      } = e;
      return t;
    });
    let g;
    g = o ? f : yield S(f, i);
    return (0, s.replaceParticipants)({
      group: t,
      participants: n,
      admins: l,
      deviceIds: g,
      groupInfo: a,
      version: r
    });
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    let {
      group: t,
      participants: n,
      version: r,
      prevVersion: i,
      isOffline: o,
      reason: c
    } = e;
    if (r == null) {
      throw (0, m.default)("addParticipants: incoming change missing version id");
    }
    let h = false;
    const y = t.toString();
    let E = false;
    let v = [];
    const T = (0, _.assertGetMeUser)();
    const M = yield (0, p.getGroupMetadataTable)().get(y);
    if (M == null) {
      throw (0, m.default)("addParticipants: groupMetadataRecord is null");
    }
    const A = M.isLidAddressingMode === true;
    const b = n.some(e => e.id.isLid());
    if (b || (0, a.getABPropConfigValue)("cag_reactions_receive")) {
      const e = yield (0, f.getParticipantTable)().get(y);
      if (e != null) {
        h = Boolean(M.incognito) && Boolean(M.defaultSubgroup);
        v = e.admins.map(e => (0, g.createWid)(e));
        E = v.some(e => T && T.equals(e)) || c === u.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE;
      }
      if (b && !h && !A) {
        return;
      }
    }
    let C = n.map(e => {
      let {
        id: t
      } = e;
      return t;
    });
    if (h) {
      C = c === u.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE ? [...v, ...C, T] : (0, d.augmentedCagGroupParticipantList)(E, n);
    }
    const P = yield S(C, o);
    return (0, s.updateDBParticipants)(t, {
      action: l.PARTICIPANT_OPERATION.ADD,
      participants: n,
      deviceIds: P,
      version: r,
      prevVersion: i
    }, M, o);
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    let {
      group: t,
      participants: n,
      version: r,
      prevVersion: i,
      groupMetadata: a,
      isOffline: o
    } = e;
    if (r == null) {
      return Promise.reject((0, m.default)("promoteParticipants: incoming change missing version id"));
    }
    let u = false;
    const c = t.toString();
    let d = [];
    const p = (0, _.assertGetMeUser)();
    let h;
    if (n.some(e => p.equals(e.id))) {
      const e = yield (0, f.getParticipantTable)().get(c);
      if (e != null) {
        u = Boolean(a.incognito) && Boolean(a.defaultSubgroup);
        if (u) {
          d = e.admins.map(e => (0, g.createWid)(e));
          h = yield S([...d, p], o);
        }
      }
    }
    return (0, s.updateDBParticipants)(t, {
      action: l.PARTICIPANT_OPERATION.PROMOTE,
      participants: n,
      deviceIds: h,
      version: r,
      prevVersion: i
    }, a, o);
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let n = [];
    if (t) {
      e.forEach(e => {
        c.OfflinePendingDeviceCache.addOfflinePendingDevice(String(e));
      });
      return e;
    }
    n = yield (0, o.syncAndGetDeviceList)(e);
    let r = [];
    n.forEach((t, n) => {
      if (t) {
        const {
          id: e,
          devices: n
        } = t;
        r = r.concat(n.map(t => (0, g.createDeviceWidFromDeviceListPk)(e, t.id, t.isHosted)));
      } else {
        r.push(e[n]);
      }
    });
    return r;
  })).apply(this, arguments);
}
function T(e) {
  return (0, f.getParticipantTable)().bulkGet(e.map(e => e.toString()));
}
function M(e) {
  return (0, f.getParticipantTable)().get(e.toString());
}
function A(e) {
  const t = e == null ? undefined : e.participants;
  if (t == null) {
    return false;
  }
  const n = (0, _.getMaybeMeUser)();
  if (n != null && t.includes(n.toString())) {
    return true;
  }
  const r = (0, _.getMaybeMeLidUser)();
  return !(r == null || !t.includes(r.toString()));
}
function b() {
  return (b = (0, i.default)(function* (e) {
    return A(yield M(e));
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    return (yield T(e)).map(A);
  })).apply(this, arguments);
}