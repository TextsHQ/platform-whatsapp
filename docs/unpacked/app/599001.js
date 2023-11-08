var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = {};
  if (!(e instanceof Object) || Array.isArray(e)) {
    throw (0, i.default)("keyMirror(...): Argument must be an object.", "comet_infra");
  }
  for (const n in e) {
    if (e.hasOwnProperty(n)) {
      t[n] = n;
    }
  }
  return t;
};
var i = r(require("./780625.js"));