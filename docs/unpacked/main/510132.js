Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeleteResponseServerError = function (e, t) {
  const n = (0, r.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, a.parseInternalServerErrorIQErrorResponseMixin)(e, t);
  if (!o.success) {
    return o;
  }
  return o;
};
var a = require("../app/765416.js");
var r = require("../app/686310.js");