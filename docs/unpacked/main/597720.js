Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUnlinkGroupsClientError = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, i.parseIQErrorNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: n.value
    });
  }
  const s = (0, o.parseIQErrorItemNotFoundMixin)(e);
  if (s.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: s.value
    });
  }
  const c = (0, l.parseIQErrorNotAcceptableMixin)(e);
  if (c.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAcceptable",
      value: c.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNotAuthorized", "IQErrorItemNotFound", "IQErrorNotAcceptable"], [t, n, s, c]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/495837.js");
var l = require("../app/995767.js");
var i = require("../app/174577.js");
var u = require("../app/686310.js");