Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQPSurfacesMixin = function (e) {
  const t = (0, a.assertTag)(e, "surfaces");
  if (!t.success) {
    return t;
  }
  const n = (0, a.mapChildrenWithTag)(e, "surface", 0, 100, T);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    surface: n.value
  });
};
exports.parseQPSurfacesSurface = T;
exports.parseQPSurfacesSurfacePromotion = v;
exports.parseQPSurfacesSurfacePromotionColors = f;
exports.parseQPSurfacesSurfacePromotionContentAttributes = g;
exports.parseQPSurfacesSurfacePromotionContentAttributesAttribute = _;
exports.parseQPSurfacesSurfacePromotionHeader = s;
exports.parseQPSurfacesSurfacePromotionImage = c;
exports.parseQPSurfacesSurfacePromotionImageDark = u;
exports.parseQPSurfacesSurfacePromotionImageLight = l;
exports.parseQPSurfacesSurfacePromotionPrimaryAction = d;
exports.parseQPSurfacesSurfacePromotionQpConfigFilterRules = m;
exports.parseQPSurfacesSurfacePromotionQpConfigInstanceLogData = h;
exports.parseQPSurfacesSurfacePromotionQpConfigPacing = S;
exports.parseQPSurfacesSurfacePromotionQpConfigPacingPromotionConfig = y;
exports.parseQPSurfacesSurfacePromotionQpConfigPacingUserInfo = E;
exports.parseQPSurfacesSurfacePromotionQpConfigTriggersTrigger = o;
exports.parseQPSurfacesSurfacePromotionSecondaryAction = p;
var r = require("./135781.js");
var i = require("./958481.js");
var a = require("./686310.js");
function o(e) {
  const t = (0, a.assertTag)(e, "trigger");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "name");
  if (n.success) {
    return (0, r.makeResult)({
      name: n.value
    });
  } else {
    return n;
  }
}
function s(e) {
  const t = (0, a.assertTag)(e, "header");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "title");
  if (n.success) {
    return (0, r.makeResult)({
      title: n.value
    });
  } else {
    return n;
  }
}
function l(e) {
  const t = (0, a.assertTag)(e, "light");
  if (!t.success) {
    return t;
  }
  const n = (0, a.contentBytes)(e);
  if (n.success) {
    return (0, r.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function u(e) {
  const t = (0, a.assertTag)(e, "dark");
  if (!t.success) {
    return t;
  }
  const n = (0, a.contentBytes)(e);
  if (n.success) {
    return (0, r.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function c(e) {
  const t = (0, a.assertTag)(e, "image");
  if (!t.success) {
    return t;
  }
  const n = (0, a.optionalChildWithTag)(e, "light", l);
  if (!n.success) {
    return n;
  }
  const i = (0, a.optionalChildWithTag)(e, "dark", u);
  if (!i.success) {
    return i;
  }
  const o = (0, a.attrString)(e, "description");
  if (o.success) {
    return (0, r.makeResult)({
      description: o.value,
      light: n.value,
      dark: i.value
    });
  } else {
    return o;
  }
}
function d(e) {
  const t = (0, a.assertTag)(e, "primary_action");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "text");
  if (!n.success) {
    return n;
  }
  const i = (0, a.optional)(a.attrString, e, "universal_link");
  if (!i.success) {
    return i;
  }
  const o = (0, a.optional)(a.attrString, e, "deep_link");
  if (o.success) {
    return (0, r.makeResult)({
      text: n.value,
      universalLink: i.value,
      deepLink: o.value
    });
  } else {
    return o;
  }
}
function p(e) {
  const t = (0, a.assertTag)(e, "secondary_action");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "text");
  if (!n.success) {
    return n;
  }
  const i = (0, a.optional)(a.attrString, e, "universal_link");
  if (!i.success) {
    return i;
  }
  const o = (0, a.optional)(a.attrString, e, "deep_link");
  if (o.success) {
    return (0, r.makeResult)({
      text: n.value,
      universalLink: i.value,
      deepLink: o.value
    });
  } else {
    return o;
  }
}
function f(e) {
  const t = (0, a.assertTag)(e, "colors");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "light");
  if (!n.success) {
    return n;
  }
  const i = (0, a.flattenedChildWithTag)(e, "dark");
  if (!i.success) {
    return i;
  }
  const o = (0, a.optional)(a.attrString, n.value, "background");
  if (!o.success) {
    return o;
  }
  const s = (0, a.optional)(a.attrString, n.value, "highlight");
  if (!s.success) {
    return s;
  }
  const l = (0, a.optional)(a.attrString, i.value, "background");
  if (!l.success) {
    return l;
  }
  const u = (0, a.optional)(a.attrString, i.value, "highlight");
  if (u.success) {
    return (0, r.makeResult)({
      lightBackground: o.value,
      lightHighlight: s.value,
      darkBackground: l.value,
      darkHighlight: u.value
    });
  } else {
    return u;
  }
}
function _(e) {
  const t = (0, a.assertTag)(e, "attribute");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "key");
  if (!n.success) {
    return n;
  }
  const i = (0, a.attrString)(e, "value");
  if (i.success) {
    return (0, r.makeResult)({
      key: n.value,
      value: i.value
    });
  } else {
    return i;
  }
}
function g(e) {
  const t = (0, a.assertTag)(e, "content_attributes");
  if (!t.success) {
    return t;
  }
  const n = (0, a.mapChildrenWithTag)(e, "attribute", 0, 50, _);
  if (n.success) {
    return (0, r.makeResult)({
      attribute: n.value
    });
  } else {
    return n;
  }
}
function m(e) {
  const t = (0, a.assertTag)(e, "filter_rules");
  if (!t.success) {
    return t;
  }
  const n = (0, a.contentBytes)(e);
  if (n.success) {
    return (0, r.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function h(e) {
  const t = (0, a.assertTag)(e, "instance_log_data");
  if (!t.success) {
    return t;
  }
  const n = (0, a.contentBytes)(e);
  if (n.success) {
    return (0, r.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function y(e) {
  const t = (0, a.assertTag)(e, "promotion_config");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrInt)(e, "max_impressions");
  if (!n.success) {
    return n;
  }
  const i = (0, a.attrInt)(e, "max_primary_clicks");
  if (!i.success) {
    return i;
  }
  const o = (0, a.attrInt)(e, "max_secondary_clicks");
  if (!o.success) {
    return o;
  }
  const s = (0, a.attrInt)(e, "max_dismisses");
  if (s.success) {
    return (0, r.makeResult)({
      maxImpressions: n.value,
      maxPrimaryClicks: i.value,
      maxSecondaryClicks: o.value,
      maxDismisses: s.value
    });
  } else {
    return s;
  }
}
function E(e) {
  const t = (0, a.assertTag)(e, "user_info");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrInt)(e, "impression_count");
  if (!n.success) {
    return n;
  }
  const i = (0, a.attrInt)(e, "primary_click_count");
  if (!i.success) {
    return i;
  }
  const o = (0, a.attrInt)(e, "secondary_click_count");
  if (!o.success) {
    return o;
  }
  const s = (0, a.attrInt)(e, "dismiss_click_count");
  if (s.success) {
    return (0, r.makeResult)({
      impressionCount: n.value,
      primaryClickCount: i.value,
      secondaryClickCount: o.value,
      dismissClickCount: s.value
    });
  } else {
    return s;
  }
}
function S(e) {
  const t = (0, a.assertTag)(e, "pacing");
  if (!t.success) {
    return t;
  }
  const n = (0, a.optionalChildWithTag)(e, "promotion_config", y);
  if (!n.success) {
    return n;
  }
  const i = (0, a.optionalChildWithTag)(e, "user_info", E);
  if (i.success) {
    return (0, r.makeResult)({
      promotionConfig: n.value,
      userInfo: i.value
    });
  } else {
    return i;
  }
}
function v(e) {
  const t = (0, a.assertTag)(e, "promotion");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "title");
  if (!n.success) {
    return n;
  }
  const l = (0, a.flattenedChildWithTag)(e, "text");
  if (!l.success) {
    return l;
  }
  const u = (0, a.flattenedChildWithTag)(e, "qp_config");
  if (!u.success) {
    return u;
  }
  const _ = (0, a.flattenedChildWithTag)(u.value, "triggers");
  if (!_.success) {
    return _;
  }
  const y = (0, a.optionalChildWithTag)(e, "header", s);
  if (!y.success) {
    return y;
  }
  const E = (0, a.optionalChildWithTag)(e, "image", c);
  if (!E.success) {
    return E;
  }
  const v = (0, a.optionalChildWithTag)(e, "primary_action", d);
  if (!v.success) {
    return v;
  }
  const T = (0, a.optionalChildWithTag)(e, "secondary_action", p);
  if (!T.success) {
    return T;
  }
  const M = (0, a.optionalChildWithTag)(e, "colors", f);
  if (!M.success) {
    return M;
  }
  const A = (0, a.optionalChildWithTag)(e, "content_attributes", g);
  if (!A.success) {
    return A;
  }
  const b = (0, a.optionalChildWithTag)(u.value, "filter_rules", m);
  if (!b.success) {
    return b;
  }
  const C = (0, a.optionalChildWithTag)(u.value, "instance_log_data", h);
  if (!C.success) {
    return C;
  }
  const P = (0, a.optionalChildWithTag)(u.value, "pacing", S);
  if (!P.success) {
    return P;
  }
  const O = (0, a.attrString)(e, "id");
  if (!O.success) {
    return O;
  }
  const I = (0, a.optional)(a.attrString, e, "instance_id");
  if (!I.success) {
    return I;
  }
  const R = (0, a.contentString)(n.value);
  if (!R.success) {
    return R;
  }
  const N = (0, a.contentString)(l.value);
  if (!N.success) {
    return N;
  }
  const D = (0, a.attrString)(u.value, "template_name");
  if (!D.success) {
    return D;
  }
  const w = (0, a.attrInt)(u.value, "start_time_seconds");
  if (!w.success) {
    return w;
  }
  const L = (0, a.attrInt)(u.value, "end_time_seconds");
  if (!L.success) {
    return L;
  }
  const k = (0, a.attrInt)(u.value, "ttl_seconds");
  if (!k.success) {
    return k;
  }
  const G = (0, a.attrStringEnum)(u.value, "dismissable", i.ENUM_FALSE_TRUE);
  if (!G.success) {
    return G;
  }
  const U = (0, a.attrStringEnum)(u.value, "force_pass", i.ENUM_FALSE_TRUE);
  if (!U.success) {
    return U;
  }
  const x = (0, a.attrInt)(u.value, "surface_delay_time_seconds");
  if (!x.success) {
    return x;
  }
  const B = (0, a.attrStringEnum)(u.value, "deterministic", i.ENUM_FALSE_TRUE);
  if (!B.success) {
    return B;
  }
  const F = (0, a.optional)(a.attrString, u.value, "experiment_key");
  if (!F.success) {
    return F;
  }
  const j = (0, a.attrStringEnum)(u.value, "exposure_holdout", i.ENUM_FALSE_TRUE);
  if (!j.success) {
    return j;
  }
  const Y = (0, a.attrInt)(u.value, "max_impressions");
  if (!Y.success) {
    return Y;
  }
  const K = (0, a.attrInt)(u.value, "impression_cooldown");
  if (!K.success) {
    return K;
  }
  const W = (0, a.attrInt)(u.value, "eligibility_duration_ms");
  if (!W.success) {
    return W;
  }
  const V = (0, a.attrInt)(u.value, "priority");
  if (!V.success) {
    return V;
  }
  const H = (0, a.attrStringEnum)(u.value, "log_eligibility_waterfall", i.ENUM_FALSE_TRUE);
  if (!H.success) {
    return H;
  }
  const $ = (0, a.mapChildrenWithTag)(_.value, "trigger", 1, 50, o);
  if ($.success) {
    return (0, r.makeResult)({
      id: O.value,
      instanceId: I.value,
      titleElementValue: R.value,
      textElementValue: N.value,
      qpConfigTemplateName: D.value,
      qpConfigStartTimeSeconds: w.value,
      qpConfigEndTimeSeconds: L.value,
      qpConfigTtlSeconds: k.value,
      qpConfigDismissable: G.value,
      qpConfigForcePass: U.value,
      qpConfigSurfaceDelayTimeSeconds: x.value,
      qpConfigDeterministic: B.value,
      qpConfigExperimentKey: F.value,
      qpConfigExposureHoldout: j.value,
      qpConfigMaxImpressions: Y.value,
      qpConfigImpressionCooldown: K.value,
      qpConfigEligibilityDurationMs: W.value,
      qpConfigPriority: V.value,
      qpConfigLogEligibilityWaterfall: H.value,
      header: y.value,
      image: E.value,
      primaryAction: v.value,
      secondaryAction: T.value,
      colors: M.value,
      contentAttributes: A.value,
      qpConfigFilterRules: b.value,
      qpConfigInstanceLogData: C.value,
      qpConfigPacing: P.value,
      qpConfigTriggersTrigger: $.value
    });
  } else {
    return $;
  }
}
function T(e) {
  const t = (0, a.assertTag)(e, "surface");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  const i = (0, a.mapChildrenWithTag)(e, "promotion", 0, 100, v);
  if (i.success) {
    return (0, r.makeResult)({
      id: n.value,
      promotion: i.value
    });
  } else {
    return i;
  }
}