Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergePayloadMixin = function (e, t) {
  const n = function (e) {
    const {
      plaintextElementValue: t
    } = e;
    return (0, r.smax)("plaintext", null, t);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");