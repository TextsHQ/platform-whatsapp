Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return (t, n) => {
    if (t.groupType === a.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      return -1;
    }
    if (n.groupType === a.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      return 1;
    }
    if (t.groupType === a.GroupType.LINKED_GENERAL_GROUP) {
      return -1;
    }
    if (n.groupType === a.GroupType.LINKED_GENERAL_GROUP) {
      return 1;
    }
    const r = e.some(e => t.id.equals(e));
    const o = e.some(e => n.id.equals(e));
    if (r && !o) {
      return -1;
    } else if (!r && o) {
      return 1;
    } else {
      return t.subject.localeCompare(n.subject);
    }
  };
};
var a = require("../app/862159.js");