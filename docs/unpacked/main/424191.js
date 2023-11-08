Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetSubGroupsClientErrors = function (e) {
  const t = (0, i.parseIQErrorItemNotFoundMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: t.value
    });
  }
  const n = (0, l.parseIQErrorForbiddenMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: n.value
    });
  }
  const s = (0, r.parseIQErrorBadRequestMixin)(e);
  if (s.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: s.value
    });
  }
  const c = (0, o.parseIQErrorFallbackClientMixin)(e);
  if (c.success) {
    return (0, a.makeResult)({
      name: "IQErrorFallbackClient",
      value: c.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["IQErrorItemNotFound", "IQErrorForbidden", "IQErrorBadRequest", "IQErrorFallbackClient"], [t, n, s, c]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/996831.js");
var l = require("../app/341963.js");
var i = require("../app/495837.js");
var u = require("../app/686310.js");