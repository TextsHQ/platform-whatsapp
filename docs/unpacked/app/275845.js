Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRegistrationIDMixin = function (e) {
  const t = (0, i.flattenedChildWithTag)(e, "registration");
  if (!t.success) {
    return t;
  }
  const n = (0, i.contentBytesRange)(t.value, 4, 4);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    registrationElementValue: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");