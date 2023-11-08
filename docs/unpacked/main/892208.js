var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGroupDescription = function () {
  return h.apply(this, arguments);
};
exports.setGroupMemberAddMode = function () {
  return g.apply(this, arguments);
};
exports.setGroupProperty = function (e, t, n) {
  let a = {
    hasLocked: false,
    hasAnnouncement: false,
    hasNoFrequentlyForwarded: false,
    ephemeralArgs: null,
    hasUnlocked: false,
    hasNotAnnouncement: false,
    hasFrequentlyForwardedOk: false,
    hasNotEphemeral: false,
    membershipApprovalModeArgs: null,
    hasAllowAdminReports: false,
    hasNotAllowAdminReports: false,
    hasAllowNonAdminSubGroupCreation: false,
    hasNotAllowNonAdminSubGroupCreation: false,
    hasGroupHistory: false,
    hasNoGroupHistory: false,
    iqTo: (0, f.widToGroupJid)(e)
  };
  switch (t) {
    case d.GROUP_SETTING_TYPE.ANNOUNCEMENT:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        hasAnnouncement: n === 1,
        hasNotAnnouncement: n !== 1
      });
      break;
    case d.GROUP_SETTING_TYPE.RESTRICT:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        hasLocked: n === 1,
        hasUnlocked: n !== 1
      });
      break;
    case d.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        hasNoFrequentlyForwarded: n === 1,
        hasFrequentlyForwardedOk: n !== 1
      });
      break;
    case d.GROUP_SETTING_TYPE.EPHEMERAL:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        ephemeralArgs: n > 0 ? {
          ephemeralExpiration: n
        } : null,
        hasNotEphemeral: n <= 0
      });
      break;
    case d.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        membershipApprovalModeArgs: {
          groupJoinMembershipApprovalModeEnabledOrDisabledMixinGroupArgs: n === 1 ? {
            isGroupJoinMembershipApprovalModeEnabled: true
          } : {
            isGroupJoinMembershipApprovalModeDisabled: true
          }
        }
      });
      break;
    case d.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        hasAllowAdminReports: n === 1,
        hasNotAllowAdminReports: n !== 1
      });
      break;
    case d.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
      a = (0, r.default)((0, r.default)({}, a), {}, {
        hasAllowNonAdminSubGroupCreation: n === 1,
        hasNotAllowNonAdminSubGroupCreation: n !== 1
      });
      break;
    default:
      return Promise.reject((0, p.default)(`invalid group property ${t}`));
  }
  return (0, u.sendSetPropertyRPC)(a);
};
exports.setGroupSubject = function () {
  return m.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("./646604.js");
var i = require("./113886.js");
var u = require("./51723.js");
var s = require("./171528.js");
var c = require("../app/984330.js");
var d = require("../app/682144.js");
var f = require("../app/574819.js");
var p = a(require("../app/556869.js"));
function m() {
  return (m = (0, o.default)(function* (e, t) {
    const n = yield (0, s.sendSetSubjectRPC)({
      iqTo: (0, f.widToGroupJid)(e),
      subjectElementValue: t
    });
    switch (n.name) {
      case "SetSubjectResponseSuccess":
        return;
      case "SetSubjectResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorSetSubjectClientErrors.value;
          return Promise.reject(new c.ServerStatusCodeError(Number(e), t));
        }
      case "SetSubjectResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          return Promise.reject(new c.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, o.default)(function* (e, t, n, a) {
    const r = t != null ? yield (0, l.sendSetDescriptionRPC)({
      bodyArgs: {
        bodyElementValue: t
      },
      iqTo: (0, f.widToGroupJid)(e),
      descriptionId: n,
      descriptionPrev: a,
      hasDescriptionDeleteTrue: false
    }) : yield (0, l.sendSetDescriptionRPC)({
      bodyArgs: undefined,
      iqTo: (0, f.widToGroupJid)(e),
      descriptionId: n,
      descriptionPrev: a,
      hasDescriptionDeleteTrue: true
    });
    switch (r.name) {
      case "SetDescriptionResponseSuccess":
        return;
      case "SetDescriptionResponseClientError":
        {
          const {
            code: e,
            text: t
          } = r.value.errorSetDescriptionClientErrors.value;
          return Promise.reject(new c.ServerStatusCodeError(Number(e), t));
        }
      case "SetDescriptionResponseServerError":
        {
          const {
            code: e,
            text: t
          } = r.value.errorServerErrors.value;
          return Promise.reject(new c.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, o.default)(function* (e, t, n) {
    let a;
    a = n === 1 ? {
      isAllMembersAddMode: true
    } : {
      isAdminAddMode: true
    };
    return (0, i.sendSetMemberAddModeRPC)({
      iqTo: (0, f.widToGroupJid)(e),
      adminOrAllMembersOrUnknownAddModeMixinGroupArgs: a
    });
  })).apply(this, arguments);
}