var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRequestSilentNonceResponseError = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "error");
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseHackBaseIQErrorResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  const c = (0, s.parseIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup)(r.value);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, u.value), {}, {
    errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup: c.value
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./808312.js");
var s = require("./14773.js");
var l = require("./686310.js");