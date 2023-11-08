Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorFallbackClientMixin = function (e) {
  const t = (0, i.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "text");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "code", 400, 499);
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    text: n.value,
    code: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");