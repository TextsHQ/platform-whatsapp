Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupProfilePictureClientErrors = function (e) {
  const t = (0, s.parseIQErrorItemNotFoundMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorForbiddenMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: n.value
    });
  }
  const d = (0, l.parseIQErrorNotAllowedMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAllowed",
      value: d.value
    });
  }
  const p = (0, i.parseIQErrorBadRequestMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: p.value
    });
  }
  const f = (0, u.parseIQErrorRateOverlimitMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: f.value
    });
  }
  const _ = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: _.value
    });
  }
  return (0, c.errorMixinDisjunction)(e, ["IQErrorItemNotFound", "IQErrorForbidden", "IQErrorNotAllowed", "IQErrorBadRequest", "IQErrorRateOverlimit", "IQErrorFallbackClient"], [t, n, d, p, f, _]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./341963.js");
var s = require("./495837.js");
var l = require("./134023.js");
var u = require("./58511.js");
var c = require("./686310.js");