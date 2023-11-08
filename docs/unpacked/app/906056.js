Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePausedMixin = function (e) {
  const t = (0, r.assertTag)(e, "chatstate");
  if (!t.success) {
    return t;
  }
  const n = (0, r.flattenedChildWithTag)(e, "paused");
  if (!n.success) {
    return n;
  }
  return r.voidSuccess;
};
var r = require("./686310.js");