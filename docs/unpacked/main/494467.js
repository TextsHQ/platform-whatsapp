Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/862159.js");
var r = (e, t) => {
  var n;
  var r;
  if (((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === a.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    return -1;
  }
  if (((r = t.groupMetadata) === null || r === undefined ? undefined : r.groupType) === a.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    return 1;
  }
  const o = e.previewT != null ? Math.max(e.previewT, e.t || 0) : e.t || 0;
  const l = t.previewT != null ? Math.max(t.previewT, t.t || 0) : t.t || 0;
  if (o !== l) {
    if (o > l) {
      return -1;
    } else {
      return 1;
    }
  } else if (e.id.toString() < t.id.toString()) {
    return -1;
  } else {
    return 1;
  }
};
exports.default = r;