Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinkSubGroupsClientError = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, u.parseIQErrorNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: n.value
    });
  }
  const f = (0, o.parseIQErrorForbiddenMixin)(e);
  if (f.success) {
    return (0, a.makeResult)({
      name: "IQErrorForbidden",
      value: f.value
    });
  }
  const p = (0, l.parseIQErrorItemNotFoundMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: p.value
    });
  }
  const m = (0, i.parseIQErrorNotAllowedMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAllowed",
      value: m.value
    });
  }
  const h = (0, s.parseIQErrorPayloadTooLargeMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "IQErrorPayloadTooLarge",
      value: h.value
    });
  }
  const g = (0, c.parseIQErrorResourceLimitMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "IQErrorResourceLimit",
      value: g.value
    });
  }
  return (0, d.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNotAuthorized", "IQErrorForbidden", "IQErrorItemNotFound", "IQErrorNotAllowed", "IQErrorPayloadTooLarge", "IQErrorResourceLimit"], [t, n, f, p, m, h, g]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/341963.js");
var l = require("../app/495837.js");
var i = require("../app/134023.js");
var u = require("../app/174577.js");
var s = require("./628904.js");
var c = require("../app/513127.js");
var d = require("../app/686310.js");