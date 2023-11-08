Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetGroupInfoRequest = function (e) {
  const {
    addRequestArgs: t,
    queryPhash: n,
    getGroupInfoRequestTypeMixinArgs: s
  } = e;
  return (0, l.mergeBaseGetGroupMixin)((0, a.smax)("iq", null, (0, o.optionalMerge)(c.mergeGetGroupInfoRequestTypeMixin, (0, a.smax)("query", {
    phash: (0, r.OPTIONAL)(d.CUSTOM_STRING, n)
  }, (0, i.OPTIONAL_CHILD)(p, t)), s)), e);
};
exports.makeGetGroupInfoRequestQueryAddRequest = p;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./770006.js");
var s = require("./331951.js");
var l = require("./96981.js");
var u = require("./972809.js");
var c = require("./514106.js");
var d = require("./716358.js");
function p(e) {
  const {
    addRequestExpiration: t
  } = e;
  return (0, u.mergeCodeMixin)((0, s.mergeAddRequestMixin)((0, a.smax)("add_request", {
    expiration: (0, d.INT)(t)
  }), e), e);
}