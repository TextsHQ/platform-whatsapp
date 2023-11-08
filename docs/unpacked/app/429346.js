Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIdentityKeyMixin = function (e) {
  const t = (0, i.flattenedChildWithTag)(e, "identity");
  if (!t.success) {
    return t;
  }
  const n = (0, r.parseKeyDataMixin)(t.value);
  if (!n.success) {
    return n;
  }
  return n;
};
var r = require("./616216.js");
var i = require("./686310.js");