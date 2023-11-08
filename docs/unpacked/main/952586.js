Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActivityCellText = function (e) {
  if (e.length === 0) {
    return null;
  }
  const t = e.filter(e => e.type === a.ActivityTypeType.SUB_GROUP_LINK);
  if (t.length === e.length) {
    return function (e) {
      if (e.length === 1) {
        const t = e[0];
        const n = o(t.subgroupName);
        return r.fbt._("New group \"{subgroup_name_first}\" added", [r.fbt._param("subgroup_name_first", n)], {
          hk: "14X3Fh"
        });
      }
      if (e.length === 2) {
        const [t, n] = e;
        const a = o(t.subgroupName);
        const l = o(n.subgroupName);
        return r.fbt._("New groups \"{subgroup_name_first}\" and \"{subgroup_name_second}\" added", [r.fbt._param("subgroup_name_first", a), r.fbt._param("subgroup_name_second", l)], {
          hk: "4DsnL1"
        });
      }
      const [t, n] = e;
      const a = o(t.subgroupName);
      const l = o(n.subgroupName);
      const i = e.length - 2;
      return r.fbt._({
        "*": "New groups \"{subgroup_name_first}\", \"{subgroup_name_second}\", and {leftover_subgroup_activity} more",
        _1: "New groups \"{subgroup_name_first}\", \"{subgroup_name_second}\", and 1 more"
      }, [r.fbt._plural(i, "leftover_subgroup_activity"), r.fbt._param("subgroup_name_first", a), r.fbt._param("subgroup_name_second", l)], {
        hk: "1F62LF"
      });
    }(t).toString();
  }
};
var a = require("../app/255131.js");
var r = require("../vendor/548360.js");
const o = e => e.length > 37 ? e.substr(0, 37) + "..." : e;