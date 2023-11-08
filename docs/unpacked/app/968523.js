Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup = function (e) {
  const t = (0, i.parseQueryPictureDirectPathResponseMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "QueryPictureDirectPathResponse",
      value: t.value
    });
  }
  const n = (0, o.parseQueryPictureMatchedResponseMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "QueryPictureMatchedResponse",
      value: n.value
    });
  }
  const l = (0, a.parseQueryPictureEmptyResponseMixin)(e);
  if (l.success) {
    return (0, r.makeResult)({
      name: "QueryPictureEmptyResponse",
      value: l.value
    });
  }
  return (0, s.errorMixinDisjunction)(e, ["QueryPictureDirectPathResponse", "QueryPictureMatchedResponse", "QueryPictureEmptyResponse"], [t, n, l]);
};
var r = require("./135781.js");
var i = require("./474024.js");
var a = require("./154486.js");
var o = require("./224299.js");
var s = require("./686310.js");