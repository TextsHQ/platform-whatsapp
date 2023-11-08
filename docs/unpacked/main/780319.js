var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexDeleteNewsletter = function () {
  return i.apply(this, arguments);
};
var r;
var o = a(require("../vendor/348926.js"));
var l = require("../app/123982.js");
function i() {
  return (i = (0, o.default)(function* (e) {
    const t = r !== undefined ? r : r = require("./356277.js");
    return yield (0, l.fetchQuery)(t, {
      newsletter_id: e
    });
  })).apply(this, arguments);
}