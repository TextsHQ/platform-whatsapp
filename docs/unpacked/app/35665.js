var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultSubgroup = function () {
  return S.apply(this, arguments);
};
exports.getDefaultSubgroupMetadata = y;
exports.getJoinedSubgroups = M;
exports.getJoinedSubgroupsMetadata = v;
exports.getSubgroups = function () {
  return h.apply(this, arguments);
};
exports.getUnjoinedSubgroups = function () {
  return C.apply(this, arguments);
};
exports.getUnjoinedSubgroupsMetadata = b;
exports.isLastJoinedSubgroup = function () {
  return P.apply(this, arguments);
};
exports.persistCommunityLink = function (e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  const i = {
    chatId: e,
    subgroups: t,
    action: n
  };
  if (r) {
    return g(i);
  }
  return f([i]);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./392646.js");
var s = require("./667662.js");
var l = require("./242382.js");
var u = require("./61229.js");
var c = require("./98742.js");
var d = require("./709136.js");
var p = require("./669050.js");
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, a.default)(function* (e) {
    const t = new Map();
    const n = new Map();
    e.forEach(e => {
      e.subgroups.forEach(e => {
        n.set(String(e.id), null);
      });
      switch (e.action) {
        case s.CommunityLinkOperation.SiblingGroupLink:
        case s.CommunityLinkOperation.SiblingGroupUnlink:
          t.set(String(e.chatId), null);
      }
    });
    (yield (0, c.getGroupMetadataTable)().bulkGet(Array.from(t.keys()))).forEach(e => {
      if (e && e.parentGroup != null) {
        t.set(e.id, String(e.parentGroup));
      }
    });
    (yield (0, u.getChatTable)().bulkGet(Array.from(n.keys()))).forEach(e => {
      if (e) {
        n.set(e.id, e);
      }
    });
    const r = new Map();
    const a = new Map();
    const o = new Set();
    e.forEach(e => {
      let i = null;
      let l = false;
      switch (e.action) {
        case s.CommunityLinkOperation.SiblingGroupLink:
          i = t.get(String(e.chatId));
          l = true;
          break;
        case s.CommunityLinkOperation.SiblingGroupUnlink:
          i = t.get(String(e.chatId));
          l = false;
          break;
        case s.CommunityLinkOperation.SubGroupLink:
          i = String(e.chatId);
          l = true;
          break;
        case s.CommunityLinkOperation.SubGroupUnlink:
          i = String(e.chatId);
          l = false;
      }
      if (i != null) {
        ((e, t, i) => {
          t.forEach(t => {
            const s = String(t.id);
            const l = n.get(s);
            if (l == null || l.isReadOnly) {
              if (i) {
                var u;
                o.delete(s);
                const n = {
                  id: s,
                  subject: t.subject,
                  subjectTime: (u = t.subjectTime) !== null && u !== undefined ? u : 0,
                  parentGroup: e
                };
                const r = a.get(s);
                if (r && r.subjectTime > n.subjectTime) {
                  n.subject = r.subject;
                  n.subjectTime = r.subjectTime;
                }
                a.set(s, n);
              } else {
                a.delete(s);
                o.add(s);
              }
            } else {
              r.set(s, {
                id: s,
                parentGroup: i ? e : undefined
              });
            }
          });
        })(i, e.subgroups, l);
      }
    });
    yield Promise.all([(0, c.getGroupMetadataTable)().bulkCreateOrMerge(Array.from(r.values())), (0, d.getUnjoinedSubgroupMetadataTable)().bulkRemove(Array.from(o)), (0, d.getUnjoinedSubgroupMetadataTable)().bulkGet(Array.from(a.keys())).then(e => {
      e.forEach(e => {
        if (!e) {
          return;
        }
        const t = a.get(e.id);
        if (t && e.subjectTime != null && e.subjectTime > t.subjectTime) {
          t.subjectTime = e.subjectTime;
          t.subject = e.subject;
        }
      });
      return (0, d.getUnjoinedSubgroupMetadataTable)().bulkCreateOrMerge(Array.from(a.values()).map(e => (0, i.default)({}, e)));
    })]);
  })).apply(this, arguments);
}
const g = (0, o.batch)({
  delayMs: 5000
}, function () {
  var e = (0, a.default)(function* (e) {
    yield f(e);
    return Promise.resolve(e.map(() => {}));
  });
  return function () {
    return e.apply(this, arguments);
  };
}());
function m(e) {
  return (0, c.getGroupMetadataTable)().equals(["parentGroup"], e.toString());
}
function h() {
  return (h = (0, a.default)(function* (e) {
    return (yield m(e)).map(e => (0, p.createWid)(e.id));
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e) {
    return (yield m(e)).find(e => e.defaultSubgroup === true);
  })).apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e) {
    const t = yield y(e);
    if (t == null) {
      return null;
    } else {
      return (0, p.createWid)(t.id);
    }
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e) {
    const t = yield m(e);
    return (yield (0, l.bulkCheckMyMembership)(t.map(e => {
      let {
        id: t
      } = e;
      return (0, p.createWid)(t);
    }))).map((e, n) => [t[n], e]).filter(e => {
      let [, t] = e;
      return t;
    }).map(e => {
      let [t] = e;
      return t;
    });
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e) {
    return (yield v(e)).map(e => {
      let {
        id: t
      } = e;
      return (0, p.createWid)(t);
    });
  })).apply(this, arguments);
}
function b(e) {
  return (0, d.getUnjoinedSubgroupMetadataTable)().equals(["parentGroup"], e.toString());
}
function C() {
  return (C = (0, a.default)(function* (e) {
    return (yield b(e)).map(e => (0, p.createWid)(e.id));
  })).apply(this, arguments);
}
function P() {
  return (P = (0, a.default)(function* (e) {
    const t = e.parentGroup;
    if (t == null) {
      return false;
    }
    const n = (0, p.createWid)(e.id);
    const r = yield M((0, p.createWid)(t));
    return r.length === 1 && r[0].equals(n);
  })).apply(this, arguments);
}