var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexUpdateNewsletter = function () {
  return l.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
var s = require("./716652.js");
function l() {
  return (l = (0, a.default)(function* (e, t, r, a, l) {
    const u = i !== undefined ? i : i = require("./504415.js");
    const c = {
      newsletter_id: e,
      updates: {
        name: t,
        description: r,
        picture: a,
        settings: l != null ? {
          reaction_codes: {
            value: (0, s.mapReactionCodesSettingToMexInput)(l)
          }
        } : null
      }
    };
    return yield (0, o.fetchQuery)(u, c);
  })).apply(this, arguments);
}