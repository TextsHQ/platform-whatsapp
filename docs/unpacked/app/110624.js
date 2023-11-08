Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseChangeNotificationDeletedMixin = function (e) {
  const t = (0, i.assertTag)(e, "set");
  if (!t.success) {
    return t;
  }
  const n = (0, r.parseDisplayNameMixin)(e);
  if (!n.success) {
    return n;
  }
  return n;
};
var r = require("./589775.js");
var i = require("./686310.js");