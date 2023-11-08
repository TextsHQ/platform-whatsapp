Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.holdoutRuleValidator = undefined;
var a = require("./834322.js");
var r = require("../app/323829.js");
var o = require("../app/628905.js");
exports.holdoutRuleValidator = e => {
  const {
    qpConfigExposureHoldout: t,
    qpConfigExperimentKey: n
  } = e.data;
  if (n != null && n.length > 0) {
    (0, o.getJobManager)().fireAndForget(r.jobSerializers.userExposureToQuickPromotion(e.id, n));
  }
  if (t === "true") {
    return a.RESULT_FALSE_HOLDOUT_IN_HOLDOUT;
  } else {
    return a.RESULT_TRUE;
  }
};