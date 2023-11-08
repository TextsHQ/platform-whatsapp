Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAcceptGroupAddResponseGroupJoinRequestSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, i.flattenedChildWithTag)(e, "membership_approval_request");
  if (!a.success) {
    return a;
  }
  const o = (0, r.parseIQResultResponseMixin)(e, t);
  if (!o.success) {
    return o;
  }
  return o;
};
var r = require("./769758.js");
var i = require("./686310.js");