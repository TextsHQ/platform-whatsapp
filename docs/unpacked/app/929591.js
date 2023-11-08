Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseKeyTypeMixin = function (e) {
  const t = (0, i.flattenedChildWithTag)(e, "type");
  if (!t.success) {
    return t;
  }
  const n = (0, i.contentLiteralBytes)(t.value, new Uint8Array([5]));
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    typeElementValue: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");