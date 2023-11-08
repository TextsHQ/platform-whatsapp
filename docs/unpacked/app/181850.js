Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePrimarySetIQErrorCompanionNotConnectedMixin = function (e) {
  const t = (0, i.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrInt, e, "code", 454);
  if (!n.success) {
    return n;
  }
  const a = (0, i.literal)(i.attrString, e, "text", "companion-not-connected");
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    code: n.value,
    text: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");