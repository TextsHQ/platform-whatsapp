Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPromotionEligible = function (e, t) {
  const {
    id: n,
    data: a
  } = e;
  const {
    qpConfigLogEligibilityWaterfall: r
  } = a;
  for (let a = 0; a < p.length; a++) {
    const {
      step: o,
      validator: l
    } = p[a];
    const i = l(e, t);
    const {
      result: u
    } = i;
    if (r === "true" && i.skipWaterfallLogging !== true) {
      new f.WhatsappQuickPromotionClientEligibilityWaterfallWamEvent({
        step: o,
        promotionId: n,
        eligibilityStatus: u === true,
        qpFailureReason: i.result == null ? i.reason : undefined
      }).commit();
    }
    if (i.forcePass === true) {
      return true;
    }
    if (u == null) {
      return false;
    }
  }
  return true;
};
var a = require("./121112.js");
var r = require("./639338.js");
var o = require("./443294.js");
var l = require("./479766.js");
var i = require("./625297.js");
var u = require("./632756.js");
var s = require("./998252.js");
var c = require("./194490.js");
var d = require("./532145.js");
var f = require("./14593.js");
const p = [{
  step: "client_definition_validator_content",
  validator: o.contentRuleValidator
}, {
  step: "post_client_definition_validator_content",
  validator: d.surfaceRuleValidator
}, {
  step: "client_force_pass",
  validator: u.forcePassRuleValidator
}, {
  step: "client_enabled_time",
  validator: l.enabledTimeRuleValidator
}, {
  step: "client_ttl",
  validator: r.clientTtlRuleValidator
}, {
  step: "client_surface_delay",
  validator: c.surfaceDelayRuleValidator
}, {
  step: "client_action_limit",
  validator: a.actionLimitRuleValidator
}, {
  step: "client_filters",
  validator: i.filtersRuleValidator
}, {
  step: "client_exposure_log",
  validator: s.holdoutRuleValidator
}];