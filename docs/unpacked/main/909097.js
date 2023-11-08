Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = e.trim().normalize("NFKD");
  if ((0, o.numCodepoints)(t) >= a.FTS_MIN_CHARS) {
    return true;
  }
  if (r.CONTAINS_EMOJI_REGEX.test(t)) {
    return true;
  }
  if (r.CONTAINS_HAN_OR_KANA_SCRIPT_REGEX.test(t)) {
    return true;
  }
  return false;
};
var a = require("./918586.js");
var r = require("./225348.js");
var o = require("../app/370257.js");