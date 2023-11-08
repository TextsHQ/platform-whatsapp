var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupSuggestionAction = undefined;
exports.sendSubgroupSuggestionsAction = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./393380.js");
var l = require("../app/984330.js");
var i = require("../app/369461.js");
var u = require("../app/459857.js");
var s = require("../app/669050.js");
var c = require("../app/574819.js");
const d = require("../vendor/76672.js").Mirrored(["APPROVE", "REJECT", "CANCEL"]);
function f() {
  return (f = (0, r.default)(function* (e, t, n) {
    const a = t.map(e => ({
      subGroupSuggestionCreator: (0, c.widToUserJid)(e.creator),
      subGroupSuggestionJid: (0, c.widToGroupJid)(e.id)
    }));
    let r;
    let l;
    let f;
    if (n === d.APPROVE) {
      r = {
        subGroupSuggestionArgs: a
      };
    } else if (n === d.REJECT) {
      l = {
        subGroupSuggestionArgs: a
      };
    } else {
      f = {
        subGroupSuggestionArgs: t.map(e => ({
          subGroupSuggestionJid: (0, c.widToGroupJid)(e.id)
        }))
      };
    }
    const m = yield (0, o.sendSubGroupSuggestionsActionRPC)({
      iqTo: (0, c.widToGroupJid)(e),
      approveArgs: r,
      rejectArgs: l,
      cancelArgs: f
    });
    switch (m.name) {
      case "SubGroupSuggestionsActionResponseSuccess":
        {
          var h;
          var g;
          var E;
          let e;
          e = n === d.APPROVE ? m.value.subGroupSuggestionsActionApprove : n === d.REJECT ? m.value.subGroupSuggestionsActionReject : m.value.subGroupSuggestionsActionCancel;
          if ((h = (g = e) === null || g === undefined || (E = g.subGroupSuggestion) === null || E === undefined ? undefined : E.map(e => {
            let t;
            var a;
            if (n === d.APPROVE) {
              t = (a = e.subGroupSuggestionsApprovalErrors) === null || a === undefined ? undefined : a.value.error;
            } else if (n === d.REJECT) {
              var r;
              t = (r = e.subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin) === null || r === undefined ? undefined : r.error;
            } else {
              var o;
              t = (o = e.subGroupSuggestionsActionSubGroupSuggestionNotFoundMixin) === null || o === undefined ? undefined : o.error;
            }
            const l = (0, s.createWid)(e.jid);
            const c = e.creator != null ? (0, s.createWid)(e.creator) : (0, u.assertGetMe)();
            return {
              id: (0, i.getSubgroupSuggestionId)(l, c),
              error: t
            };
          })) !== null && h !== undefined) {
            return h;
          } else {
            return [];
          }
        }
      case "SubGroupSuggestionsActionResponseClientError":
        return p(m.value.errorSubGroupSuggestionsActionClientErrors.value);
      default:
        m.name;
        return p(m.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}
function p(e) {
  let {
    code: t,
    text: n
  } = e;
  __LOG__(2)`subgroupSuggestionsAction failed: ${t}:${n}`;
  return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
}
exports.SubgroupSuggestionAction = d;