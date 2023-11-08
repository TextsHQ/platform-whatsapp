Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseChangeNotificationSetOrChangeNotificationSetHashOrChangeNotificationDeletedMixinGroup = function (e) {
  const t = (0, o.parseChangeNotificationSetMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "ChangeNotificationSet",
      value: t.value
    });
  }
  const n = (0, a.parseChangeNotificationSetHashMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "ChangeNotificationSetHash",
      value: n.value
    });
  }
  const l = (0, i.parseChangeNotificationDeletedMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "ChangeNotificationDeleted",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["Set", "SetHash", "Deleted"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./110624.js");
var a = require("./850725.js");
var o = require("./863845.js");
var s = require("./686310.js");