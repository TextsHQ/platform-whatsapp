Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    joinedSubgroups: t = [],
    unjoinedSubgroups: n = []
  } = (0, a.useOptionalModelValues)(e, ["joinedSubgroups", "unjoinedSubgroups", "id"]) || {};
  const r = t.length + n.length;
  return {
    joinedSubgroups: t,
    unjoinedSubgroups: n,
    subgroupCount: r
  };
};
var a = require("../app/655241.js");