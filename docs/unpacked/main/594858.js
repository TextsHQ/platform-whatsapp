var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userHasExitedGroupFilter = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/632157.js");
var l = require("./834322.js");
var i = require("./748860.js");
var u = require("../app/757453.js");
var s = require("../app/459857.js");
const c = {
  reason: "filtersRuleValidator:exitedGroupFilter: Group privacy setting is not all"
};
const d = {
  reason: "filtersRuleValidator:exitedGroupFilter: No group metadata found"
};
const f = {
  reason: "filtersRuleValidator:exitedGroupFilter: User is a group member"
};
const p = {
  reason: "filtersRuleValidator:exitedGroupFilter: User not found as past participant"
};
const m = {
  reason: "filtersRuleValidator:exitedGroupFilter: User exited group timestamp outside threshold"
};
const h = {
  name: "whatsapp_user_has_exited_group",
  filter: (e, t, n) => {
    var a;
    const h = n == null || (a = n.group) === null || a === undefined ? undefined : a.groupMetadata;
    if (h == null) {
      return d;
    }
    if (!!h.participants.iAmMember()) {
      return f;
    }
    const g = h.pastParticipants.get((0, s.assertGetMeUser)());
    if (g == null) {
      return p;
    }
    const E = (0, i.convertFilterParametersIntoMap)(t);
    const v = parseInt((0, r.default)(E.get("param"), "parameters.get('param')"), 10);
    if (!(0, o.isInFuture)((0, o.futureUnixTime)(v, (0, o.castToUnixTime)(g.leaveTs)))) {
      return m;
    }
    if ((0, u.getUserPrivacySettings)().groupAdd !== "all") {
      return c;
    } else {
      return l.RESULT_TRUE;
    }
  }
};
exports.userHasExitedGroupFilter = h;