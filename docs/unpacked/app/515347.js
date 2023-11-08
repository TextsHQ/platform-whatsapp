Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUnknownAddModeMixin = function (e) {
  const t = (0, i.assertTag)(e, "member_add_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, i.contentString)(e);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    elementValue: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");