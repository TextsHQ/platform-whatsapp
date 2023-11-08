Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantWithLidMixin = function (e) {
  const t = (0, a.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrUserJid)(e, "lid");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    lid: n.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");