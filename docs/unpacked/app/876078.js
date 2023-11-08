var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexCreateNewsletter = function () {
  return s.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
function s() {
  return (s = (0, a.default)(function* (e, t, r) {
    const a = i !== undefined ? i : i = require("./20234.js");
    return yield (0, o.fetchQuery)(a, {
      newsletter_input: {
        name: e,
        description: t,
        picture: r
      }
    });
  })).apply(this, arguments);
}