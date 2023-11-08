var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupSuggestionsActionResponseSuccess = function (e, t) {
  const n = (0, f.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, f.flattenedChildWithTag)(e, "sub_group_suggestions_action");
  if (!a.success) {
    return a;
  }
  const r = (0, f.optionalChildWithTag)(a.value, "approve", m);
  if (!r.success) {
    return r;
  }
  const l = (0, f.optionalChildWithTag)(a.value, "reject", g);
  if (!l.success) {
    return l;
  }
  const i = (0, f.optionalChildWithTag)(a.value, "cancel", v);
  if (!i.success) {
    return i;
  }
  const u = (0, d.attrStringFromReference)(t, ["to"]);
  if (!u.success) {
    return u;
  }
  const s = (0, f.literal)(f.attrString, e, "from", u.value);
  if (!s.success) {
    return s;
  }
  const c = (0, f.literal)(f.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  const p = (0, d.attrStringFromReference)(t, ["id"]);
  if (!p.success) {
    return p;
  }
  const h = (0, f.literal)(f.attrString, e, "id", p.value);
  if (!h.success) {
    return h;
  }
  return (0, o.makeResult)({
    type: c.value,
    subGroupSuggestionsActionApprove: r.value,
    subGroupSuggestionsActionReject: l.value,
    subGroupSuggestionsActionCancel: i.value
  });
};
exports.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionApprove = m;
exports.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionApproveSubGroupSuggestion = p;
exports.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionCancel = v;
exports.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionCancelSubGroupSuggestion = E;
exports.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionReject = g;
exports.parseSubGroupSuggestionsActionResponseSuccessSubGroupSuggestionsActionRejectSubGroupSuggestion = h;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/202804.js");
var i = require("../app/467923.js");
var u = require("../app/479512.js");
var s = require("./607437.js");
var c = require("./659511.js");
var d = require("../app/591439.js");
var f = require("../app/686310.js");
function p(e) {
  const t = (0, f.assertTag)(e, "sub_group_suggestion");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseSubGroupSuggestionMixin)(e);
  if (!n.success) {
    return n;
  }
  const a = (0, c.parseSubGroupSuggestionsApprovalErrors)(e);
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, n.value), {}, {
    subGroupSuggestionsApprovalErrors: a.success ? a.value : null
  }));
}
function m(e) {
  const t = (0, f.assertTag)(e, "approve");
  if (!t.success) {
    return t;
  }
  const n = (0, f.mapChildrenWithTag)(e, "sub_group_suggestion", 1, 1000, p);
  if (n.success) {
    return (0, o.makeResult)({
      subGroupSuggestion: n.value
    });
  } else {
    return n;
  }
}
function h(e) {
  const t = (0, f.assertTag)(e, "sub_group_suggestion");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseSubGroupSuggestionMixin)(e);
  if (!n.success) {
    return n;
  }
  const a = (0, s.parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin)(e);
  const u = (0, l.parsePhoneNumberMixin)(e);
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, n.value), {}, {
    subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin: a.success ? a.value : null,
    phoneNumberMixin: u.success ? u.value : null
  }));
}
function g(e) {
  const t = (0, f.assertTag)(e, "reject");
  if (!t.success) {
    return t;
  }
  const n = (0, f.mapChildrenWithTag)(e, "sub_group_suggestion", 1, 1000, h);
  if (n.success) {
    return (0, o.makeResult)({
      subGroupSuggestion: n.value
    });
  } else {
    return n;
  }
}
function E(e) {
  const t = (0, f.assertTag)(e, "sub_group_suggestion");
  if (!t.success) {
    return t;
  }
  const n = (0, u.parseSubGroupSuggestionWithoutCreatorMixin)(e);
  if (!n.success) {
    return n;
  }
  const a = (0, s.parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin)(e);
  const i = (0, l.parsePhoneNumberMixin)(e);
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, n.value), {}, {
    subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin: a.success ? a.value : null,
    phoneNumberMixin: i.success ? i.value : null
  }));
}
function v(e) {
  const t = (0, f.assertTag)(e, "cancel");
  if (!t.success) {
    return t;
  }
  const n = (0, f.mapChildrenWithTag)(e, "sub_group_suggestion", 1, 1000, E);
  if (n.success) {
    return (0, o.makeResult)({
      subGroupSuggestion: n.value
    });
  } else {
    return n;
  }
}