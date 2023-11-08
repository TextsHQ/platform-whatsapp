var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSubgroupSuggestions = exports.removeAllSubgroupSuggestions = exports.getSubgroupSuggestions = exports.addSubgroupSuggestions = undefined;
exports.removeSubgroupSuggestionsWithOfflineOption = function (e) {
  let {
    subgroupSuggestions: t,
    isOffline: n
  } = e;
  if (n === true) {
    return d({
      suggestionsRowKeys: t
    });
  }
  return c(t);
};
exports.updateOwnerInSubgroupSuggestions = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./392646.js");
var s = require("./311443.js");
var l = require("./669050.js");
exports.getSubgroupSuggestions = e => (0, s.getSubgroupSuggestionTable)().equals(["parentGroupId"], e.toString()).then(e => e.map(e => {
  let {
    id: t,
    parentGroupId: n,
    subject: r,
    desc: i,
    owner: a,
    t: o,
    isExistingGroup: s,
    participantCount: u
  } = e;
  return {
    id: (0, l.createWid)(t),
    parentGroupId: (0, l.createWid)(n),
    subject: r,
    desc: i,
    owner: (0, l.createWid)(a),
    t: o,
    isExistingGroup: s,
    participantCount: u
  };
}));
const u = (e, t) => {
  const n = t.map(t => {
    let {
      id: n,
      subject: r,
      desc: i,
      owner: a,
      t: o,
      isExistingGroup: s,
      participantCount: l
    } = t;
    return {
      id: n.toString(),
      parentGroupId: e.toString(),
      subject: r,
      desc: i,
      owner: a.toString(),
      t: o,
      isExistingGroup: s,
      participantCount: l
    };
  });
  return (0, s.getSubgroupSuggestionTable)().bulkCreateOrReplace(n);
};
exports.addSubgroupSuggestions = u;
exports.updateOwnerInSubgroupSuggestions = (e, t, n, r) => function () {
  var o = (0, a.default)(function* () {
    const o = (yield Promise.all(t.map(function () {
      var t = (0, a.default)(function* (t) {
        return yield (0, s.getSubgroupSuggestionTable)().get([e.toString(), t.toString(), n.toString()]);
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()))).filter(Boolean);
    const d = o.map(e => (0, i.default)((0, i.default)({}, e), {}, {
      owner: r,
      parentGroupId: (0, l.createWid)(e.parentGroupId),
      id: (0, l.createWid)(e.id)
    }));
    yield c(o.map(t => {
      let {
        id: r
      } = t;
      return {
        parentGroupId: e,
        id: (0, l.createWid)(r),
        owner: n
      };
    }));
    yield u(e, d);
  });
  return function () {
    return o.apply(this, arguments);
  };
}()();
const c = e => (0, s.getSubgroupSuggestionTable)().bulkRemove(e.map(e => {
  let {
    parentGroupId: t,
    id: n,
    owner: r
  } = e;
  return [t.toString(), n.toString(), r.toString()];
}));
exports.removeSubgroupSuggestions = c;
exports.removeAllSubgroupSuggestions = e => (0, s.getSubgroupSuggestionTable)().bulkRemoveByIndex(["parentGroupId"], [e.toString()]);
const d = (0, o.batch)({
  delayMs: 3000
}, function () {
  var e = (0, a.default)(function* (e) {
    const t = e.reduce((e, t) => {
      e.push(...t.suggestionsRowKeys);
      return e;
    }, []);
    yield c(t);
    return [];
  });
  return function () {
    return e.apply(this, arguments);
  };
}());