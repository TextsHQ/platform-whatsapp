var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBannerSuggestionRequest = function (e) {
  const t = (0, d.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, d.flattenedChildWithTag)(e, "ctwa_suggestion");
  if (!n.success) {
    return n;
  }
  const r = (0, d.optionalChildWithTag)(n.value, "banner", m);
  if (!r.success) {
    return r;
  }
  const o = (0, c.literalJid)(c.attrDomainJid, e, "from", "s.whatsapp.net");
  if (!o.success) {
    return o;
  }
  const s = (0, d.optional)(c.attrUserJid, e, "to");
  if (!s.success) {
    return s;
  }
  const l = (0, d.literal)(d.attrString, e, "type", "business");
  if (!l.success) {
    return l;
  }
  const p = (0, d.attrString)(n.value, "target_entity_id");
  if (!p.success) {
    return p;
  }
  const f = (0, u.parseServerNotificationMixin)(e);
  if (!f.success) {
    return f;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    from: o.value,
    to: s.value,
    type: l.value,
    ctwaSuggestionTargetEntityId: p.value
  }, f.value), {}, {
    ctwaSuggestionBanner: r.value
  }));
};
exports.parseBannerSuggestionRequestCtwaSuggestionBanner = m;
exports.parseBannerSuggestionRequestCtwaSuggestionBannerAction = p;
exports.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedBody = _;
exports.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHeading = f;
exports.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHighlight = g;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./527730.js");
var s = require("./787085.js");
var l = require("./773181.js");
var u = require("./188153.js");
var c = require("./568113.js");
var d = require("./686310.js");
function p(e) {
  const t = (0, d.assertTag)(e, "action");
  if (!t.success) {
    return t;
  }
  const n = (0, d.optional)(d.attrString, e, "deep_link");
  if (!n.success) {
    return n;
  }
  const r = (0, d.optional)(d.attrString, e, "local_link");
  if (!r.success) {
    return r;
  }
  const i = (0, d.optional)(d.attrString, e, "local_android_link");
  if (i.success) {
    return (0, a.makeResult)({
      deepLink: n.value,
      localLink: r.value,
      localAndroidLink: i.value
    });
  } else {
    return i;
  }
}
function f(e) {
  const t = (0, d.assertTag)(e, "localised_heading");
  if (!t.success) {
    return t;
  }
  const n = (0, d.flattenedChildWithTag)(e, "localisation_metadata");
  if (!n.success) {
    return n;
  }
  const r = (0, d.attrString)(e, "value");
  if (!r.success) {
    return r;
  }
  const i = (0, s.parseLocalisationMetadataMixin)(n.value);
  if (i.success) {
    return (0, a.makeResult)({
      value: r.value,
      localisationMetadataLocalisationMetadataMixin: i.value
    });
  } else {
    return i;
  }
}
function _(e) {
  const t = (0, d.assertTag)(e, "localised_body");
  if (!t.success) {
    return t;
  }
  const n = (0, d.flattenedChildWithTag)(e, "localisation_metadata");
  if (!n.success) {
    return n;
  }
  const r = (0, d.attrString)(e, "value");
  if (!r.success) {
    return r;
  }
  const i = (0, s.parseLocalisationMetadataMixin)(n.value);
  if (i.success) {
    return (0, a.makeResult)({
      value: r.value,
      localisationMetadataLocalisationMetadataMixin: i.value
    });
  } else {
    return i;
  }
}
function g(e) {
  const t = (0, d.assertTag)(e, "localised_highlight");
  if (!t.success) {
    return t;
  }
  const n = (0, d.flattenedChildWithTag)(e, "localisation_metadata");
  if (!n.success) {
    return n;
  }
  const r = (0, d.attrString)(e, "value");
  if (!r.success) {
    return r;
  }
  const i = (0, s.parseLocalisationMetadataMixin)(n.value);
  if (i.success) {
    return (0, a.makeResult)({
      value: r.value,
      localisationMetadataLocalisationMetadataMixin: i.value
    });
  } else {
    return i;
  }
}
function m(e) {
  const t = (0, d.assertTag)(e, "banner");
  if (!t.success) {
    return t;
  }
  const n = (0, d.flattenedChildWithTag)(e, "config");
  if (!n.success) {
    return n;
  }
  const r = (0, d.flattenedChildWithTag)(e, "content");
  if (!r.success) {
    return r;
  }
  const s = (0, d.flattenedChildWithTag)(r.value, "heading");
  if (!s.success) {
    return s;
  }
  const u = (0, d.flattenedChildWithTag)(r.value, "body");
  if (!u.success) {
    return u;
  }
  const c = (0, d.flattenedChildWithTag)(r.value, "highlight");
  if (!c.success) {
    return c;
  }
  const m = (0, d.optionalChildWithTag)(e, "action", p);
  if (!m.success) {
    return m;
  }
  const h = (0, d.optionalChildWithTag)(r.value, "localised_heading", f);
  if (!h.success) {
    return h;
  }
  const y = (0, d.optionalChildWithTag)(r.value, "localised_body", _);
  if (!y.success) {
    return y;
  }
  const E = (0, d.optionalChildWithTag)(r.value, "localised_highlight", g);
  if (!E.success) {
    return E;
  }
  const S = (0, d.attrIntRange)(n.value, "expires_at", 1, undefined);
  if (!S.success) {
    return S;
  }
  const v = (0, d.attrStringEnum)(n.value, "display", o.ENUM_INFO_WARNING);
  if (!v.success) {
    return v;
  }
  const T = (0, d.attrStringEnum)(n.value, "revoked", o.ENUM_FALSE_TRUE);
  if (!T.success) {
    return T;
  }
  const M = (0, d.attrString)(r.value, "locale");
  if (!M.success) {
    return M;
  }
  const A = (0, d.contentString)(s.value);
  if (!A.success) {
    return A;
  }
  const b = (0, d.contentString)(u.value);
  if (!b.success) {
    return b;
  }
  const C = (0, d.contentString)(c.value);
  if (!C.success) {
    return C;
  }
  const P = (0, l.parseNativeActionsMixinMixin)(e);
  if (P.success) {
    return (0, a.makeResult)((0, i.default)((0, i.default)({
      configExpiresAt: S.value,
      configDisplay: v.value,
      configRevoked: T.value,
      contentLocale: M.value,
      contentHeadingElementValue: A.value,
      contentBodyElementValue: b.value,
      contentHighlightElementValue: C.value
    }, P.value), {}, {
      action: m.value,
      contentLocalisedHeading: h.value,
      contentLocalisedBody: y.value,
      contentLocalisedHighlight: E.value
    }));
  } else {
    return P;
  }
}