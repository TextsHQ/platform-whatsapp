Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAbPropDependingGlobalWamAttributes = function () {
  i.Global.set({
    serviceImprovementOptOut: (0, r.getABPropConfigValue)("service_improvement_opt_out_flag")
  });
};
var r = require("./287461.js");
var i = require("./130945.js");