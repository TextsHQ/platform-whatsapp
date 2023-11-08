Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeRawV3DeprecatedMixin = function (e, t) {
  const n = function (e) {
    const {
      rawProtocolV: t
    } = e;
    return (0, i.smax)("raw", {
      v: (0, o.INT)(3),
      protocol_v: (0, r.OPTIONAL)(o.INT, t)
    });
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");