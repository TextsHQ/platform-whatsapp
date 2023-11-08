Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeleteParentGroupResponseServerError = function (e, t) {
  const n = (0, r.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, a.parseBaseServerErrorMixin)(e, t);
  if (!o.success) {
    return o;
  }
  return o;
};
var a = require("../app/760014.js");
var r = require("../app/686310.js");