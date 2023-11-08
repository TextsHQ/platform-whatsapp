Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeComposingOrPausedMixinGroup = function (e, t) {
  if (t.composing) {
    return (0, i.mergeComposingMixin)(e, t.composing);
  }
  if (t.isPaused) {
    return (0, a.mergePausedMixin)(e);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./893402.js");
var a = require("./821750.js");