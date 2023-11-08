Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorResourceLimitMixin = function (e) {
  const t = (0, i.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "text", "resource-limit");
  if (!n.success) {
    return n;
  }
  const a = (0, i.literal)(i.attrInt, e, "code", 419);
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