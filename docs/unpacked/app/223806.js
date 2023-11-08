Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseApplicationNegativeAckMixin = function (e) {
  const t = (0, i.assertTag)(e, "ack");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrIntRange)(e, "application_error", 0, undefined);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    applicationError: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");