var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetSubGroupSuggestionsResponseSuccess = function (e, t) {
  const n = (0, d.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, d.flattenedChildWithTag)(e, "sub_group_suggestions");
  if (!r.success) {
    return r;
  }
  const o = (0, s.parseGetSubGroupSuggestionsFetchByViewMixin)(r.value);
  if (!o.success) {
    return o;
  }
  const u = (0, l.parseIQResultResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  const c = (0, d.mapChildrenWithTag)(r.value, "sub_group_suggestion", 0, 1000, g);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    subGroupSuggestionsGetSubGroupSuggestionsFetchByViewMixin: o.value
  }, u.value), {}, {
    subGroupSuggestionsSubGroupSuggestion: c.value
  }));
};
exports.parseGetSubGroupSuggestionsResponseSuccessSubGroupSuggestionsSubGroupSuggestion = g;
exports.parseGetSubGroupSuggestionsResponseSuccessSubGroupSuggestionsSubGroupSuggestionDescription = p;
exports.parseGetSubGroupSuggestionsResponseSuccessSubGroupSuggestionsSubGroupSuggestionIsExistingGroup = f;
exports.parseGetSubGroupSuggestionsResponseSuccessSubGroupSuggestionsSubGroupSuggestionParticipantCount = _;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./699342.js");
var s = require("./530459.js");
var l = require("./769758.js");
var u = require("./399235.js");
var c = require("./467923.js");
var d = require("./686310.js");
function p(e) {
  const t = (0, d.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, u.parseSubGroupSuggestionDescriptionMixin)(e);
  n.success;
  return n;
}
function f(e) {
  const t = (0, d.assertTag)(e, "is_existing_group");
  if (!t.success) {
    return t;
  }
  const n = (0, d.contentStringEnum)(e, o.ENUM_FALSE_TRUE);
  if (n.success) {
    return (0, a.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function _(e) {
  const t = (0, d.assertTag)(e, "participant_count");
  if (!t.success) {
    return t;
  }
  const n = (0, d.contentInt)(e);
  if (n.success) {
    return (0, a.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}
function g(e) {
  const t = (0, d.assertTag)(e, "sub_group_suggestion");
  if (!t.success) {
    return t;
  }
  const n = (0, d.flattenedChildWithTag)(e, "subject");
  if (!n.success) {
    return n;
  }
  const r = (0, d.optionalChildWithTag)(e, "description", p);
  if (!r.success) {
    return r;
  }
  const o = (0, d.optionalChildWithTag)(e, "is_existing_group", f);
  if (!o.success) {
    return o;
  }
  const s = (0, d.optionalChildWithTag)(e, "participant_count", _);
  if (!s.success) {
    return s;
  }
  const l = (0, d.attrIntRange)(e, "creation", 0, undefined);
  if (!l.success) {
    return l;
  }
  const u = (0, d.contentString)(n.value);
  if (!u.success) {
    return u;
  }
  const g = (0, c.parseSubGroupSuggestionMixin)(e);
  if (g.success) {
    return (0, a.makeResult)((0, i.default)((0, i.default)({
      creation: l.value,
      subjectElementValue: u.value
    }, g.value), {}, {
      description: r.value,
      isExistingGroup: o.value,
      participantCount: s.value
    }));
  } else {
    return g;
  }
}