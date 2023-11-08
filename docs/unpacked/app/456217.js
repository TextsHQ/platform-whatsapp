Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOfflineMixin = function (e) {
  const t = (0, i.attrIntRange)(e, "offline", 0, 12);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    offline: t.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");