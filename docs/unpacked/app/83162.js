Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = 0;
  const n = e.charCode;
  const r = e.keyCode;
  if (n != null && n !== 0) {
    t = n;
  } else if (r != null && r !== 0) {
    t = r;
  }
  return i.has(t);
};
var r = require("./81644.js");
const i = new Set([r.SpecialKeyMap.enter, r.SpecialKeyMap.space]);