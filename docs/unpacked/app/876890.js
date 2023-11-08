var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySubgroupSuggestions = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./338962.js");
var o = require("./984330.js");
var s = require("./854379.js");
var l = require("./574819.js");
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = yield (0, a.sendGetSubGroupSuggestionsRPC)({
      iqTo: (0, l.widToGroupJid)(e),
      subGroupMixinArgs: {
        anySubGroupJid: (0, l.widToGroupJid)(t)
      }
    });
    switch (n.name) {
      case "GetSubGroupSuggestionsResponseSuccess":
        return n.value.subGroupSuggestionsSubGroupSuggestion.map(t => {
          var n;
          var r;
          var i;
          return {
            id: (0, s.groupJidToWid)(t.jid),
            parentGroupId: e,
            subject: t.subjectElementValue,
            desc: (n = t.description) === null || n === undefined ? undefined : n.bodyElementValue,
            owner: (0, s.userJidToUserWid)(t.creator),
            t: t.creation,
            isExistingGroup: ((r = t.isExistingGroup) === null || r === undefined ? undefined : r.elementValue) === "true",
            participantCount: (i = t.participantCount) === null || i === undefined ? undefined : i.elementValue
          };
        });
      case "GetSubGroupSuggestionsResponseClientError":
        return c(n.value.errorGetSubGroupSuggestionsClientErrors.value);
      default:
        n.name;
        return c(n.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}
function c(e) {
  let {
    code: t,
    text: n
  } = e;
  __LOG__(2)`querySubgroupSuggestions failed: ${t}:${n}`;
  return Promise.reject(new o.ServerStatusCodeError(Number(t), n));
}