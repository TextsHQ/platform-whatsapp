Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseInternalTestMixin = function (e) {
  const t = (0, i.flattenedChildWithTag)(e, "test");
  if (!t.success) {
    return t;
  }
  const n = (0, i.optional)(i.attrString, t.value, "config");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    testConfig: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");