var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCreateCommunity = function () {
  return E.apply(this, arguments);
};
exports.sendDeactivateCommunity = function () {
  return v.apply(this, arguments);
};
exports.sendLinkSubgroups = function () {
  return y.apply(this, arguments);
};
exports.sendRemoveFromCommunity = function () {
  return _.apply(this, arguments);
};
exports.sendUnlinkSubgroups = function () {
  return C.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/477689.js");
var i = require("./626763.js");
var u = require("./185261.js");
var s = require("./21787.js");
var c = require("./402655.js");
var d = require("./787851.js");
var f = require("../app/716358.js");
var p = require("../app/984330.js");
var m = require("../app/854379.js");
var h = require("../app/669050.js");
var g = require("../app/574819.js");
function E() {
  return (E = (0, o.default)(function* (e) {
    let {
      name: t,
      desc: n,
      closed: a,
      hasAllowNonAdminSubGroupCreation: o,
      shouldCreateGeneralChat: u
    } = e;
    const s = (0, r.default)((0, r.default)({}, n != null && n.length > 0 && {
      descriptionArgs: {
        descriptionId: (0, f.generateId)(),
        bodyElementValue: n
      }
    }), {}, {
      namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs: {
        namedSubject: {
          anySubject: t
        }
      },
      hasAnnouncement: false,
      hasNoFrequentlyForwarded: false,
      hasShadow: false,
      hasLocked: false,
      parentArgs: {
        hasParentGroupDefaultMembershipApprovalMode: !!a || undefined
      },
      hasBreakout: false,
      hasAllowNonAdminSubGroupCreation: !!o,
      hasCreateGeneralChat: u
    });
    const c = yield (0, i.sendCreateRPC)(s, {
      timeoutSeconds: 10
    });
    switch (c.name) {
      case "CreateResponseSuccess":
        {
          const {
            groupId: e,
            groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup: t,
            groupCreator: n,
            groupCreation: a
          } = c.value;
          return {
            wid: (0, h.createWid)(`${e}@g.us`),
            subject: t.value.subject,
            creator: (0, m.userJidToUserWid)(n),
            ts: a
          };
        }
      case "CreateResponseClientError":
        {
          __LOG__(2)`sendCreateCommunity failed: ${c.name}`;
          const {
            code: e,
            text: t
          } = c.value.errorCreateClientErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
      case "CreateResponseServerError":
        {
          __LOG__(2)`sendCreateCommunity failed: ${c.name}`;
          const {
            code: e,
            text: t
          } = c.value.errorServerErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
      case "CreateResponseGroupAlreadyExists":
        __LOG__(2)`sendCreateCommunity failed: ${c.name}`;
        return Promise.reject((0, l.customError)("CreateResponseGroupAlreadyExists"));
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, o.default)(function* (e) {
    let {
      parentGroupId: t
    } = e;
    const n = yield (0, u.sendDeleteParentGroupRPC)({
      iqTo: (0, g.widToGroupJid)(t)
    });
    switch (n.name) {
      case "DeleteParentGroupResponseSuccess":
        return {
          parent_group_jid: (0, g.widToGroupJid)(t)
        };
      case "DeleteParentGroupResponseClientError":
        {
          __LOG__(2)`sendDeactivateCommunity failed: ${n.name}`;
          const {
            code: e,
            text: t
          } = n.value.errorDeleteParentGroupClientError.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
      case "DeleteParentGroupResponseServerError":
        {
          __LOG__(2)`sendDeactivateCommunity failed: ${n.name}`;
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, o.default)(function* (e) {
    let {
      parentGroupId: t,
      contactId: n
    } = e;
    const a = yield (0, c.sendRemoveParticipantsRPC)({
      participantArgs: [{
        participantJid: (0, g.widToUserJid)(n)
      }],
      iqTo: (0, g.widToGroupJid)(t),
      hasRemoveLinkedGroupsTrue: true
    });
    switch (a.name) {
      case "RemoveParticipantsResponseSuccess":
        {
          const {
            jid: e,
            participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup: n
          } = a.value.removeParticipant[0];
          return {
            parentGroupJid: (0, g.widToGroupJid)(t),
            contactJid: e,
            errorCode: n == null ? undefined : n.value.error
          };
        }
      case "RemoveParticipantsResponseClientError":
        {
          __LOG__(2)`sendRemoveFromCommunity failed: ${a.name}`;
          const {
            code: e,
            text: t
          } = a.value.errorRemoveParticipantsClientErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
      case "RemoveParticipantsResponseServerError":
        {
          __LOG__(2)`sendRemoveFromCommunity failed: ${a.name}`;
          const {
            code: e,
            text: t
          } = a.value.errorServerErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function y() {
  return (y = (0, o.default)(function* (e) {
    let {
      parentGroupId: t,
      subgroupIds: n
    } = e;
    const a = yield (0, s.sendLinkSubGroupsRPC)({
      groupArgs: n.map(e => ({
        groupJid: (0, g.widToGroupJid)(e)
      })),
      iqTo: (0, g.widToGroupJid)(t)
    });
    switch (a.name) {
      case "LinkSubGroupsResponseSuccess":
        {
          const e = [];
          const t = [];
          const n = [];
          a.value.linksLinkGroup.forEach(a => {
            var r;
            const o = parseInt((r = a.subGroupNotAuthorizedOrForbiddenOrNotExistOrNotAcceptableOrConflictOrResourceLimitOrServerErrorMixinGroup) === null || r === undefined ? undefined : r.value.error, 10);
            if (o) {
              t.push({
                jid: a.jid,
                error: o
              });
            } else {
              e.push(a.jid);
            }
            if (a.participant) {
              n.push(...a.participant.map(e => e.jid));
            }
          });
          return {
            linkedGroupJids: e,
            failedGroups: t,
            failedParticipantJids: n
          };
        }
      case "LinkSubGroupsResponseClientError":
        {
          __LOG__(2)`sendLinkSubgroups failed: ${a.name}`;
          const {
            code: e,
            text: t
          } = a.value.errorLinkSubGroupsClientError.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
      case "LinkSubGroupsResponseServerError":
        {
          __LOG__(2)`sendLinkSubgroups failed: ${a.name}`;
          const {
            code: e,
            text: t
          } = a.value.errorServerErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function C() {
  return (C = (0, o.default)(function* (e) {
    let {
      parentGroupId: t,
      subgroupIds: n,
      removeOrphanMembers: a = false
    } = e;
    const r = yield (0, d.sendUnlinkGroupsRPC)({
      groupArgs: n.map(e => ({
        groupJid: (0, g.widToGroupJid)(e),
        hasGroupRemoveOrphanedMembersTrue: a
      })),
      iqTo: (0, g.widToGroupJid)(t)
    });
    switch (r.name) {
      case "UnlinkGroupsResponseSuccess":
        {
          const e = [];
          const t = [];
          r.value.unlinkGroup.forEach(n => {
            var a;
            const r = parseInt((a = n.subGroupBadRequestOrNotAuthorizedOrNotExistOrNotAcceptableOrPartialServerErrorOrServerErrorMixinGroup) === null || a === undefined ? undefined : a.value.error, 10);
            if (r) {
              t.push({
                jid: n.jid,
                error: r
              });
            } else {
              e.push(n.jid);
            }
          });
          return {
            unlinkedGroupJids: e,
            failedGroups: t
          };
        }
      case "UnlinkGroupsResponseClientError":
        {
          __LOG__(2)`sendUnlinkSubgroups failed: ${r.name}`;
          const {
            code: e,
            text: t
          } = r.value.errorUnlinkGroupsClientError.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
      case "UnlinkGroupsResponseServerError":
        {
          __LOG__(2)`sendUnlinkSubgroups failed: ${r.name}`;
          const {
            code: e,
            text: t
          } = r.value.errorServerErrors.value;
          return Promise.reject(new p.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}