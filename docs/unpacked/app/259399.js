Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAckPaidConversationBizDeliveryContext = o;
exports.parseAckPaidConversationBizOrigin = u;
exports.parseAckPaidConversationBizOriginReferral = l;
exports.parseAckPaidConversationBizOriginReferralSourceUrl = s;
exports.parseAckPaidConversationMixin = function (e) {
  const t = (0, a.assertTag)(e, "ack");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "biz");
  if (!n.success) {
    return n;
  }
  const s = (0, a.optionalChildWithTag)(n.value, "delivery_context", o);
  if (!s.success) {
    return s;
  }
  const l = (0, a.optionalChildWithTag)(n.value, "origin", u);
  if (!l.success) {
    return l;
  }
  const c = (0, a.attrString)(n.value, "paid_convo_id");
  if (!c.success) {
    return c;
  }
  const d = (0, a.attrStringEnum)(n.value, "pricing_model", i.ENUM_CBP_NBP);
  if (!d.success) {
    return d;
  }
  const p = (0, a.attrStringEnum)(n.value, "billable", i.ENUM_FALSE_TRUE);
  if (!p.success) {
    return p;
  }
  const f = (0, a.optional)(a.attrIntRange, n.value, "expiration_timestamp", 0, undefined);
  if (!f.success) {
    return f;
  }
  const _ = (0, a.optional)(a.attrString, n.value, "pricing_category");
  if (!_.success) {
    return _;
  }
  return (0, r.makeResult)({
    bizPaidConvoId: c.value,
    bizPricingModel: d.value,
    bizBillable: p.value,
    bizExpirationTimestamp: f.value,
    bizPricingCategory: _.value,
    bizDeliveryContext: s.value,
    bizOrigin: l.value
  });
};
var r = require("./135781.js");
var i = require("./46335.js");
var a = require("./686310.js");
function o(e) {
  const t = (0, a.assertTag)(e, "delivery_context");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrStringEnum)(e, "optimization_goal", i.ENUM_DELIVERY_NOOPTIMIZATION);
  if (n.success) {
    return (0, r.makeResult)({
      optimizationGoal: n.value
    });
  } else {
    return n;
  }
}
function s(e) {
  const t = (0, a.assertTag)(e, "source_url");
  if (!t.success) {
    return t;
  }
  const n = (0, a.contentString)(e);
  if (n.success) {
    return (0, r.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function l(e) {
  const t = (0, a.assertTag)(e, "referral");
  if (!t.success) {
    return t;
  }
  const n = (0, a.optionalChildWithTag)(e, "source_url", s);
  if (!n.success) {
    return n;
  }
  const i = (0, a.optional)(a.attrString, e, "source_type");
  if (i.success) {
    return (0, r.makeResult)({
      sourceType: i.value,
      sourceUrl: n.value
    });
  } else {
    return i;
  }
}
function u(e) {
  const t = (0, a.assertTag)(e, "origin");
  if (!t.success) {
    return t;
  }
  const n = (0, a.optionalChildWithTag)(e, "referral", l);
  if (!n.success) {
    return n;
  }
  const i = (0, a.attrString)(e, "type");
  if (i.success) {
    return (0, r.makeResult)({
      type: i.value,
      referral: n.value
    });
  } else {
    return i;
  }
}