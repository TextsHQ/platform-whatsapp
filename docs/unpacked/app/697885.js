var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexMuteNewsletter = function () {
  return s.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
function s() {
  return (s = (0, a.default)(function* (e) {
    const t = i !== undefined ? i : i = require("./612841.js");
    return yield (0, o.fetchQuery)(t, {
      newsletter_id: e
    });
  })).apply(this, arguments);
}