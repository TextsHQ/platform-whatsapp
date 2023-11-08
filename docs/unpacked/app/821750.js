Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergePausedMixin = function (e) {
  const t = (0, r.smax)("chatstate", null, (0, r.smax)("paused", null));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");