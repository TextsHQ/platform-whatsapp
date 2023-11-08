var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashUserPrefKey = function (e) {
  const t = (0, a.getMaybeMeUser)();
  if (!t) {
    return void __LOG__(3)`hashUserPrefKey: Me has not loaded yet.`;
  }
  return (0, i.default)(t.toString() + ":" + e);
};
var i = r(require("./983254.js"));
var a = require("./459857.js");