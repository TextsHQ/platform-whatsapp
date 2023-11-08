var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantWithJidAndPnMixin = function (e) {
  const t = (0, l.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseParticipantWithJidMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, s.parsePhoneNumberMixin)(e);
  if (!r.success) {
    return r;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, n.value), r.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./94750.js");
var s = require("./202804.js");
var l = require("./686310.js");