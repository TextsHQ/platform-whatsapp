Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castTypedArrays = function (e, t) {
  if (t instanceof e) {
    return t;
  }
  if (typeof t == "string") {
    return new e((0, r.decodeB64)(t));
  }
  return new e(t);
};
var r = require("./417405.js");