Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeleteParentGroupClientError = function (e) {
  const t = (0, r.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, l.parseIQErrorNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "IQErrorNotAuthorized",
      value: n.value
    });
  }
  const u = (0, o.parseIQErrorItemNotFoundMixin)(e);
  if (u.success) {
    return (0, a.makeResult)({
      name: "IQErrorItemNotFound",
      value: u.value
    });
  }
  return (0, i.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNotAuthorized", "IQErrorItemNotFound"], [t, n, u]);
};
var a = require("../app/135781.js");
var r = require("../app/452390.js");
var o = require("../app/495837.js");
var l = require("../app/174577.js");
var i = require("../app/686310.js");