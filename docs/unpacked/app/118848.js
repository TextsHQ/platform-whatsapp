Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIqMixinErrors = function (e) {
  const t = (0, a.parseIQErrorInternalServerErrorMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorInternalServerError",
      value: t.value
    });
  }
  const n = (0, i.parseIQErrorBadRequestMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: n.value
    });
  }
  const d = (0, l.parseIQErrorResourceLimitMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "IQErrorResourceLimit",
      value: d.value
    });
  }
  const p = (0, o.parseIQErrorNonSupportedPrimaryMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorNonSupportedPrimary",
      value: p.value
    });
  }
  const f = (0, u.parsePrimarySetIQErrorCompanionNotConnectedMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "PrimarySetIQErrorCompanionNotConnected",
      value: f.value
    });
  }
  const _ = (0, s.parseIQErrorNotAllowedMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAllowed",
      value: _.value
    });
  }
  return (0, c.errorMixinDisjunction)(e, ["IQErrorInternalServerError", "IQErrorBadRequest", "IQErrorResourceLimit", "IQErrorNonSupportedPrimary", "IQErrorCompanionNotConnected", "IQErrorNotAllowed"], [t, n, d, p, f, _]);
};
var r = require("./135781.js");
var i = require("./12788.js");
var a = require("./700216.js");
var o = require("./998227.js");
var s = require("./368260.js");
var l = require("./248101.js");
var u = require("./181850.js");
var c = require("./686310.js");