Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMulticastMixin = function (e) {
  const t = (0, r.smax)("message", null, (0, r.smax)("multicast", null));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");