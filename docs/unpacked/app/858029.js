var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.databaseUpdatesForDeactivateCommunity = function () {
  return T.apply(this, arguments);
};
exports.databaseUpdatesForExitedCommunity = function () {
  return M.apply(this, arguments);
};
exports.databaseUpdatesForIntegrityDeactivateCommunity = function () {
  return S.apply(this, arguments);
};
exports.databaseUpdatesForSubgroupUnlink = f;
exports.partitionSubgroups = E;
var i = r(require("../vendor/348926.js"));
var a = require("./35665.js");
var o = require("./185212.js");
var s = require("./242382.js");
var l = require("./430599.js");
var u = require("./61229.js");
var c = require("./98742.js");
var d = require("./459857.js");
var p = require("./669050.js");
function f(e, t) {
  return function () {
    return m.apply(this, arguments);
  }(e, t, false);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, n) {
    const [r, i] = yield Promise.all([(0, a.getJoinedSubgroupsMetadata)((0, p.createWid)(e.id)).then(e => e.filter(e => !(0, p.createWid)(e.id).equals(t))), (0, a.getUnjoinedSubgroupsMetadata)((0, p.createWid)(e.id))]);
    return f(n, r.concat(i).map(e => {
      let {
        id: t,
        subject: n
      } = e;
      return {
        id: (0, p.createWid)(t),
        subject: n
      };
    }));
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    t.forEach(t => {
      t.parentGroupId = n ? e : undefined;
      t.generalSubgroup = n ? t.generalSubgroup : undefined;
    });
    const {
      joinedSubgroups: r,
      unjoinedSubgroups: i
    } = E(t, yield h(t.map(e => e.id)));
    return [...r.map(t => (0, o.persistGroupMetadata)(t.id, {
      parentGroup: n ? e.toString() : undefined,
      generalSubgroup: n ? t.generalSubgroup : undefined
    })), (0, l.updateUnjoinedSubgroupsJob)(i, e, n)];
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = new Map((yield (0, s.bulkGetParticipants)(e)).filter(Boolean).map(e => [e.groupId, e.participants]));
    const n = (0, d.assertGetMeUser)().toString();
    return e => {
      var r;
      var i;
      return (r = (i = t.get(e.toString())) === null || i === undefined ? undefined : i.includes(n)) !== null && r !== undefined && r;
    };
  })).apply(this, arguments);
}
function E(e, t) {
  return e.reduce((e, n) => {
    if (t(n.id)) {
      e.joinedSubgroups = e.joinedSubgroups.concat(n);
    } else {
      e.unjoinedSubgroups = e.unjoinedSubgroups.concat(n);
    }
    return e;
  }, {
    joinedSubgroups: [],
    unjoinedSubgroups: []
  });
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const n = [];
    const r = yield (0, o.getGroupMetadata)(e);
    if ((r == null ? undefined : r.isParentGroup) !== true) {
      return n;
    }
    const i = {
      suspended: true,
      terminated: true
    };
    n.push((0, o.persistGroupMetadata)(e, i, t));
    const l = yield (0, a.getDefaultSubgroup)(e);
    if (l != null && (yield (0, s.checkMyMembership)(l))) {
      n.push((0, o.persistGroupMetadata)(l, i, t));
    }
    const u = yield _(r, l, e);
    n.push(...u);
    return n;
  })).apply(this, arguments);
}
function v(e) {
  const t = [];
  t.push((0, c.getGroupMetadataTable)().remove(e.toString()));
  t.push((0, u.getChatTable)().remove(e.toString()));
  return t;
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    const n = [];
    const r = yield (0, o.getGroupMetadata)(e);
    if (r == null || r.isParentGroup !== true) {
      return n;
    }
    const i = yield (0, a.getDefaultSubgroup)(e);
    if (i != null && (yield (0, s.checkMyMembership)(i))) {
      n.push((0, o.persistGroupMetadata)(i, {
        terminated: true,
        parentGroup: undefined
      }, t));
    }
    const l = yield _(r, i, e);
    n.push(...l);
    n.push(...v(e));
    return n;
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    const t = [];
    if (!e) {
      return t;
    }
    const n = yield (0, o.getGroupMetadata)(e);
    if (!n || n.isParentGroup !== true) {
      return t;
    }
    const r = yield (0, a.getDefaultSubgroup)(e);
    const i = r == null ? [] : yield _(n, r, e);
    t.push(...i);
    t.push(...v(e));
    return t;
  })).apply(this, arguments);
}