Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var n = (e, t) => {
  const n = e.pin || 0;
  const r = t.pin || 0;
  if (n || r) {
    if (n !== r) {
      if (n > r) {
        return -1;
      } else {
        return 1;
      }
    } else if (e.id.toString() < t.id.toString()) {
      return -1;
    } else {
      return 1;
    }
  }
  const i = Math.max(e.previewT || 0, e.draftMessageSortTs || 0, e.t || 0);
  const a = Math.max(t.previewT || 0, t.draftMessageSortTs || 0, t.t || 0);
  if (i !== a) {
    if (i > a) {
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
exports.default = n;