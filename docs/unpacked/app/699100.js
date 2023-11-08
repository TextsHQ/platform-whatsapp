var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBotListResponseError = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "error");
  if (!r.success) {
    return r;
  }
  const u = (0, s.parseIQErrorResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  const c = (0, o.parseIQErrorInternalServerErrorOrForbiddenOrBadRequestOrNotAllowedMixinGroup)(r.value);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, u.value), {}, {
    errorIQErrorInternalServerErrorOrForbiddenOrBadRequestOrNotAllowedMixinGroup: c.value
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./774322.js");
var s = require("./753615.js");
var l = require("./686310.js");