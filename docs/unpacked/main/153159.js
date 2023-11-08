Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeUnknownAddModeMixin = function (e, t) {
  const n = function (e) {
    const {
      memberAddModeElementValue: t
    } = e;
    return (0, a.smax)("member_add_mode", null, t);
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");