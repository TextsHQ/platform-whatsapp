var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanUnjoinedSubgroups = function () {
  return d.apply(this, arguments);
};
exports.removeUnjoinedSubgroupMetadataFromStorage = function (e) {
  (0, s.getUnjoinedSubgroupMetadataTable)().remove(e.toString());
};
exports.updateUnjoinedSubgroups = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("../vendor/506479.js"));
var s = require("./709136.js");
const l = ["defaultSubgroup", "generalSubgroup", "parentGroupId"];
function u(e) {
  const t = {};
  const {
    defaultSubgroup: n,
    generalSubgroup: r,
    parentGroupId: i
  } = e;
  const s = (0, o.default)(e, l);
  if (n != null) {
    t.defaultSubgroup = n;
  }
  if (r != null) {
    t.generalSubgroup = r;
  }
  if (i != null) {
    t.parentGroup = i.toString();
  }
  return (0, a.default)((0, a.default)((0, a.default)({}, s), t), {}, {
    id: e.id.toString()
  });
}
function c() {
  return (c = (0, i.default)(function* (e) {
    let {
      unjoinedSubgroups: t,
      parentGroupId: n,
      link: r
    } = e;
    if (!r) {
      return void (yield (0, s.getUnjoinedSubgroupMetadataTable)().bulkRemove(t.map(e => e.id.toString())));
    }
    let i = [];
    const o = yield (0, s.getUnjoinedSubgroupMetadataTable)().bulkGet(t.map(e => e.id.toString()));
    i = t.map((e, t) => {
      const r = o[t];
      let i = {
        subject: e.subject,
        subjectTime: e.subjectTime || 0
      };
      if (r) {
        const e = r.subjectTime || 0;
        if (e > i.subjectTime) {
          i = {
            subject: r.subject,
            subjectTime: e
          };
        }
      }
      return u((0, a.default)((0, a.default)((0, a.default)({}, e), i), {}, {
        parentGroupId: n
      }));
    });
    yield (0, s.getUnjoinedSubgroupMetadataTable)().bulkCreateOrMerge(i);
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    let {
      unjoinedSubgroupIds: t,
      parentGroupId: n
    } = e;
    const r = (yield (0, s.getUnjoinedSubgroupMetadataTable)().equals(["parentGroup"], n.toString())).map(e => e.id);
    const i = t.map(e => e.toString());
    const a = r.filter(e => !i.includes(e));
    yield (0, s.getUnjoinedSubgroupMetadataTable)().bulkRemoveByIndex(["id"], a);
  })).apply(this, arguments);
}