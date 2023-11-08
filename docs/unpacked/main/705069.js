Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJoinLinkedGroupResponseGroupJoinRequestSuccess = function (e, t) {
  const n = (0, r.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, r.flattenedChildWithTag)(e, "membership_approval_request");
  if (!o.success) {
    return o;
  }
  const l = (0, a.parseIQResultResponseMixin)(e, t);
  if (!l.success) {
    return l;
  }
  return l;
};
var a = require("../app/769758.js");
var r = require("../app/686310.js");