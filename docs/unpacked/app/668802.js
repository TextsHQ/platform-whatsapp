Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterSuspendedErrorMixin = function (e) {
  const t = (0, i.assertTag)(e, "newsletter");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "error", "423");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    error: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");