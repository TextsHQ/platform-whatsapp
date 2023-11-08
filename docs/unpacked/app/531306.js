Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAddRequestMixin = function (e, t) {
  const n = function (e) {
    const {
      addRequestCode: t,
      addRequestAdmin: n,
      addRequestExpiration: a
    } = e;
    return (0, i.smax)("picture", null, (0, i.smax)("add_request", {
      code: (0, o.CUSTOM_STRING)(t),
      admin: (0, r.OPTIONAL)(o.USER_JID, n),
      expiration: (0, o.INT)(a)
    }));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");