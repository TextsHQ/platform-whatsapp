Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupInfoClientErrors = function (e) {
  const t = (0, s.parseIQErrorGoneMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorGone",
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
  const d = (0, o.parseIQErrorForbiddenMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: d.value
    });
  }
  const p = (0, l.parseIQErrorItemNotFoundMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
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
  return (0, c.errorMixinDisjunction)(e, ["IQErrorGone", "IQErrorBadRequest", "IQErrorForbidden", "IQErrorItemNotFound", "IQErrorRateOverlimit", "IQErrorFallbackClient"], [t, n, d, p, f, _]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./341963.js");
var s = require("./701000.js");
var l = require("./495837.js");
var u = require("./58511.js");
var c = require("./686310.js");