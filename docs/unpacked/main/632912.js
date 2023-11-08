Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergePhoneNumberMixin = function (e, t) {
  const n = function (e) {
    const {
      anyPhoneNumber: t
    } = e;
    return (0, a.smax)("smax$any", {
      phone_number: (0, o.USER_JID)(t)
    });
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/716358.js");