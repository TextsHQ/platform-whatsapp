Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetInviteGroupInfoClientErrors = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, l.parseIQErrorItemNotFoundMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorItemNotFound",
      value: n.value
    });
  }
  const f = (0, o.parseIQErrorGoneMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "IQErrorGone",
      value: f.value
    });
  }
  const _ = (0, d.parseIQErrorNotAuthorizedMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAuthorized",
      value: _.value
    });
  }
  const g = (0, c.parseIQErrorNotAcceptableMixin)(e);
  if (g.success) {
    return (0, r.makeResult)({
      name: "IQErrorNotAcceptable",
      value: g.value
    });
  }
  const m = (0, u.parseIQErrorLockedMixin)(e);
  if (m.success) {
    return (0, r.makeResult)({
      name: "IQErrorLocked",
      value: m.value
    });
  }
  const h = (0, s.parseIQErrorGrowthLockedMixin)(e);
  if (h.success) {
    return (0, r.makeResult)({
      name: "IQErrorGrowthLocked",
      value: h.value
    });
  }
  const y = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (y.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: y.value
    });
  }
  return (0, p.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorItemNotFound", "IQErrorGone", "IQErrorNotAuthorized", "IQErrorNotAcceptable", "IQErrorLocked", "IQErrorGrowthLocked", "IQErrorFallbackClient"], [t, n, f, _, g, m, h, y]);
};
var r = require("./135781.js");
var i = require("./452390.js");
var a = require("./996831.js");
var o = require("./701000.js");
var s = require("./477728.js");
var l = require("./495837.js");
var u = require("./457039.js");
var c = require("./995767.js");
var d = require("./174577.js");
var p = require("./686310.js");