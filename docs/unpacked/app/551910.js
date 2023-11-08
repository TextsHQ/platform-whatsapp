Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeThreadTypeVanishModeMixin = function (e) {
  const t = (0, r.smax)("chatstate", null, (0, r.smax)("meta", {
    thread_type: "vm"
  }));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");