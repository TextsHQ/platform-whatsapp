var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSyncdDisabledDueToFatalFlag = function (e) {
  (0, i.default)(a.default, "localStorage").setItem(o.KEYS.SYNCD_DISABLED_DUE_TO_FATAL, e.toString());
};
var i = r(require("./670983.js"));
var a = r(require("./174285.js"));
var o = require("./94872.js");