var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExistingGroupSubgroupSuggestion = function () {
  return s.apply(this, arguments);
};
exports.createNewGroupSubgroupSuggestion = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./173139.js");
var l = require("../app/984330.js");
var i = require("../app/669050.js");
var u = require("../app/574819.js");
function s() {
  return (s = (0, r.default)(function* (e, t) {
    function n(e) {
      let {
        code: t,
        text: n
      } = e;
      __LOG__(2)`createExistingGroupSubgroupSuggestion failed: ${t}:${n}`;
      return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
    }
    const a = yield (0, o.sendCreateSubGroupSuggestionRPC)({
      iqTo: (0, u.widToGroupJid)(e),
      suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs: {
        createSubGroupSuggestionSuggestionForExistingGroups: {
          groupArgs: t.map(e => ({
            groupJid: (0, u.widToGroupJid)(e)
          }))
        }
      }
    });
    switch (a.name) {
      case "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess":
        return a.value.subGroupSuggestionGroup.map(e => {
          var t;
          return {
            groupJid: e.jid,
            error: (t = e.subGroupNotAuthorizedOrNotExistOrConflictOrResourceLimitOrBadRequestOrServerErrorMixinGroup) === null || t === undefined ? undefined : t.value.error
          };
        });
      case "CreateSubGroupSuggestionResponseClientError":
        return n(a.value.errorCreateSubGroupSuggestionErrors.value);
      case "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess":
        return n({
          code: 500,
          text: "Received invalid new group success response for create existing group subgroup suggestion"
        });
      default:
        a.name;
        return n(a.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}
function c() {
  return (c = (0, r.default)(function* (e, t, n) {
    function a(e) {
      let {
        code: t,
        text: n
      } = e;
      __LOG__(2)`createNewGroupSubgroupSuggestion failed: ${t}:${n}`;
      return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
    }
    const r = yield (0, o.sendCreateSubGroupSuggestionRPC)({
      iqTo: (0, u.widToGroupJid)(e),
      suggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroupArgs: {
        createSubGroupSuggestionSuggestionForNewGroup: {
          subjectElementValue: t,
          descriptionArgs: n != null ? {
            bodyElementValue: n
          } : undefined
        }
      }
    });
    switch (r.name) {
      case "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess":
        {
          var s;
          const a = ((s = r.value.subGroupSuggestionDescription) === null || s === undefined ? undefined : s.error) ? undefined : n;
          return {
            id: (0, i.createWid)(r.value.subGroupSuggestionJid),
            owner: (0, i.createWid)(r.value.subGroupSuggestionCreator),
            t: r.value.subGroupSuggestionCreation,
            parentGroupId: e,
            subject: t,
            desc: a,
            isExistingGroup: false,
            participantCount: undefined
          };
        }
      case "CreateSubGroupSuggestionResponseClientError":
        return a(r.value.errorCreateSubGroupSuggestionErrors.value);
      case "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess":
        return a({
          code: 500,
          text: "Received invalid existing group success response for create new subgroup suggestion"
        });
      default:
        r.name;
        return a(r.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}