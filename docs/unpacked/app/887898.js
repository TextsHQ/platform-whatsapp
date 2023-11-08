Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRequestErrorsFetch = function (e) {
  const t = (0, i.parseIQErrorBadRequestMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "IQErrorBadRequest",
      value: t.value
    });
  }
  const n = (0, o.parseIQErrorNoValidJIDMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "IQErrorNoValidJID",
      value: n.value
    });
  }
  const l = (0, a.parseIQErrorFallbackClientMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "IQErrorFallbackClient",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["IQErrorBadRequest", "IQErrorNoValidJID", "IQErrorFallbackClient"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./449917.js");
var a = require("./812845.js");
var o = require("./386028.js");
var s = require("./686310.js");