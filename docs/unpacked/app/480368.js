Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetMembershipApprovalRequestsClientErrors = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, s.parseIQErrorItemNotFoundMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: n.value
    });
  }
  const p = (0, u.parseIQErrorNotAuthorizedMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAuthorized",
      value: p.value
    });
  }
  const f = (0, o.parseIQErrorForbiddenMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: f.value
    });
  }
  const _ = (0, c.parseIQErrorRateOverlimitMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "IQErrorRateOverlimit",
      value: _.value
    });
  }
  const g = (0, l.parseIQErrorLockedMixin)(e);
  if (g.success) {
    return (0, r.makeResult)({
      name: "IQErrorLocked",
      value: g.value
    });
  }
  const m = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (m.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: m.value
    });
  }
  return (0, d.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorItemNotFound", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorRateOverlimit", "IQErrorLocked", "IQErrorFallbackClient"], [t, n, p, f, _, g, m]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./341963.js");
var s = require("./495837.js");
var l = require("./457039.js");
var u = require("./174577.js");
var c = require("./58511.js");
var d = require("./686310.js");