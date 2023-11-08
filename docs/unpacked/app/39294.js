var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanUnjoinedSubgroupsInCollection = function (e, t) {
  const n = (0, o.unjoinedSubgroupMetaDataCollection)().filter(e => e.parentGroupId.equals(t)).map(e => e.id).filter(t => !e.includes(t));
  (0, o.unjoinedSubgroupMetaDataCollection)().remove(n);
};
exports.determineUnjoined = f;
exports.getUnjoinedSubgroups = function (e) {
  n = e.map(e => {
    let {
      id: t
    } = e;
    return t;
  });
  const t = n.filter(e => f(e));
  var n;
  return e.filter(e => t.includes(e.id));
};
exports.subgroupJoinedToUnjoined = function (e, t) {
  const n = (0, o.chatCollection)().get(t.toString());
  const r = n == null ? undefined : n.groupMetadata;
  if (n == null || r == null) {
    return;
  }
  u(e);
  if (r.participants.length === 0) {
    return;
  }
  if (!e.hasJoined()) {
    return;
  }
  const i = {
    id: t,
    subject: n.formattedTitle,
    defaultSubgroup: !!r.defaultSubgroup,
    generalSubgroup: !!r.generalSubgroup,
    parentGroupId: e.id
  };
  (0, l.updateUnjoinedSubgroupsJob)([i], e.id);
  p([i], e.id);
};
exports.subgroupUnjoinedToJoined = function (e, t) {
  (0, a.removeUnjoinedSubgroupMetadataFromStorage)(t);
  d(t);
  c(e);
  u(e);
};
exports.unlinkParentGroup = function (e, t) {
  (0, o.groupMetaDataCollection)().add({
    id: t,
    parentGroup: null
  }, {
    merge: true
  });
  u(e);
};
exports.updateJoinedSubgroups = u;
exports.updateJoinedSubgroupsInCollection = function (e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
  e.forEach(e => {
    const {
      id: r,
      subject: a
    } = e;
    if (a != null) {
      (0, s.updateSubject)(r, a);
    }
    (0, o.groupMetaDataCollection)().add((0, i.default)((0, i.default)({}, e), {}, {
      parentGroup: n ? t : null,
      generalSubgroup: n ? e.generalSubgroup : null
    }), {
      merge: true
    });
  });
  u((0, o.groupMetaDataCollection)().assertGet(t.toString()));
};
exports.updateUnjoinedSubgroups = c;
exports.updateUnjoinedSubgroupsInCollection = p;
var i = r(require("../vendor/81109.js"));
var a = require("./148143.js");
var o = require("./503268.js");
var s = require("./853441.js");
var l = require("./430599.js");
function u(e) {
  e.joinedSubgroups = (0, o.groupMetaDataCollection)().filter(t => {
    var n;
    return ((n = t.parentGroup) === null || n === undefined ? undefined : n.equals(e.id)) && t.participants.iAmMember();
  }).map(e => e.id);
}
function c(e) {
  e.unjoinedSubgroups = (0, o.unjoinedSubgroupMetaDataCollection)().filter(t => t.parentGroupId.equals(e.id)).map(e => e.id);
}
function d(e) {
  (0, o.unjoinedSubgroupMetaDataCollection)().remove(e.toString());
}
function p(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
  e.forEach(e => {
    if (!n) {
      return void d(e.id);
    }
    let {
      subject: r,
      subjectTime: a
    } = e;
    const s = (0, o.unjoinedSubgroupMetaDataCollection)().get(e.id.toString());
    if (s && (s.subjectTime || 0) > (a || 0)) {
      r = s.subject;
      a = s.subjectTime;
    }
    (0, o.unjoinedSubgroupMetaDataCollection)().add((0, i.default)((0, i.default)({}, e), {}, {
      parentGroupId: t,
      subject: r,
      subjectTime: a
    }), {
      merge: true
    });
  });
  const r = (0, o.groupMetaDataCollection)().get(t.toString());
  if (r) {
    c(r);
  }
}
function f(e) {
  var t;
  const n = (0, o.chatCollection)().get(e.toString());
  return n == null || !((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmMember());
}