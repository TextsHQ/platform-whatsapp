Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseComposingOrPausedMixinGroup = function (e) {
  const t = (0, i.parseComposingMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "Composing",
      value: t.value
    });
  }
  const n = (0, a.parsePausedMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "Paused",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["Composing", "Paused"], [t, n]);
};
var r = require("./135781.js");
var i = require("./853548.js");
var a = require("./906056.js");
var o = require("./686310.js");