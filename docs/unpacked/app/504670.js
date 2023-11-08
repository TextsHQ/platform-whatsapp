Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFetchMissingPreKeysUserErrorMixin = function (e) {
  const t = (0, i.assertTag)(e, "user");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "error");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(n.value, "text");
  if (!a.success) {
    return a;
  }
  const o = (0, i.literal)(i.attrInt, n.value, "code", 500);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    errorText: a.value,
    errorCode: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");