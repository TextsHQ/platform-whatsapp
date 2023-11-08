var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useABPropConfigValue = function (e) {
  return (0, o.default)(a.Cmd, "on_ab_props_update", () => (0, i.getABPropConfigValue)(e), [e]);
};
var i = require("./287461.js");
var a = require("./780549.js");
var o = r(require("./524578.js"));