var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantWithJidAndLidMixin = function (e) {
  const t = (0, l.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseParticipantWithJidMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, s.parseParticipantWithLidMixin)(e);
  if (!r.success) {
    return r;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, n.value), r.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./94750.js");
var s = require("./191883.js");
var l = require("./686310.js");