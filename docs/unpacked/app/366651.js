Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseClientErrors = function (e) {
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
  const d = (0, u.parseIQErrorNotAuthorizedMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAuthorized",
      value: d.value
    });
  }
  const p = (0, o.parseIQErrorForbiddenMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "IQErrorForbidden",
      value: p.value
    });
  }
  const f = (0, l.parseIQErrorLockedMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "IQErrorLocked",
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
  return (0, c.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorItemNotFound", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorLocked", "IQErrorFallbackClient"], [t, n, d, p, f, _]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./341963.js");
var s = require("./495837.js");
var l = require("./457039.js");
var u = require("./174577.js");
var c = require("./686310.js");