Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeRegistrationIDMixin = function (e, t) {
  const n = function (e) {
    const {
      registrationElementValue: t
    } = e;
    return (0, r.smax)("smax$any", null, (0, r.smax)("registration", null, t));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");