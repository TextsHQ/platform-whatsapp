Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetAccountNonceRequest = function (e) {
  const {
    identifierArgs: t
  } = e;
  return (0, o.mergeHackBaseIQGetRequestMixin)((0, r.smax)("iq", {
    xmlns: "fb:thrift_iq",
    smax_id: (0, l.INT)(12)
  }, (0, a.OPTIONAL_CHILD)(i, t)), e);
};
exports.makeGetAccountNonceRequestIdentifier = i;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("./777263.js");
var l = require("../app/716358.js");
function i(e) {
  const {
    identifierScope: t
  } = e;
  return (0, r.smax)("identifier", {
    scope: (0, l.CUSTOM_STRING)(t)
  });
}