var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToTextWithoutSpecialEmojis = function (e) {
  if (!o) {
    const e = (0, i.default)(Object.keys(a.default));
    o = new RegExp(`(${e})`, "g");
  }
  o.lastIndex = 0;
  return e.replace(o, e => a.default[e]);
};
var i = r(require("./176477.js"));
var a = r(require("./732316.js"));
let o = null;