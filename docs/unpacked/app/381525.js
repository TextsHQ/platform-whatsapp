var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadEmojiSuggestions = function (e) {
  return (0, s.promiseLoop)(function () {
    var t = (0, i.default)(function* (t, n, r) {
      const i = (0, o.delayMs)((0, a.expBackoff)(r, 120000, 1000, 0.1));
      const s = yield (0, l.getLangModule)(e);
      try {
        const [,, e] = yield s.default();
        return t(e);
      } catch (e) {
        return i;
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }()).catch(() => ({}));
};
var i = r(require("../vendor/348926.js"));
var a = require("./250655.js");
var o = require("./8304.js");
var s = require("./904086.js");
var l = require("./464175.js");