var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAllSubgroups = function () {
  return m.apply(this, arguments);
};
exports.querySubgroup = function () {
  return g.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("./518152.js");
var i = require("./240633.js");
var u = require("../app/632157.js");
var s = require("../app/984330.js");
var c = require("../app/854379.js");
var d = require("../app/669050.js");
var f = require("../app/574819.js");
var p = a(require("../app/556869.js"));
function m() {
  return (m = (0, o.default)(function* (e, t) {
    const n = yield (0, i.sendGetSubGroupsRPC)({
      iqTo: (0, f.widToGroupJid)(e),
      optionalSubGroupMixinArgs: t ? {
        anySubGroupJid: (0, f.widToGroupJid)(t)
      } : null
    });
    switch (n.name) {
      case "GetSubGroupsResponseSuccess":
        return n.value.subGroupsGroup.map(e => {
          let t;
          try {
            t = (0, d.createWid)(`${e.id}@g.us`);
          } catch (e) {
            __LOG__(2)`parseSubgroupNode failed: ${e}`;
          }
          if (t == null || !t.isGroup()) {
            throw (0, p.default)("parseSubgroupNode: invalid group id");
          }
          return {
            id: t,
            subject: e.subject,
            subjectTime: (0, u.castToUnixTime)(e.sT),
            defaultSubgroup: e.hasDefaultSubGroup,
            generalSubgroup: e.hasGeneralChat
          };
        });
      case "GetSubGroupsResponseClientError":
        {
          const e = n.value.errorGetSubGroupsClientErrors;
          switch (e.name) {
            case "IQErrorForbidden":
            case "IQErrorBadRequest":
            case "IQErrorItemNotFound":
              return E(e.value);
            default:
              e.name;
              return E(e.value);
          }
        }
      default:
        n.name;
        return E(n.value.errorServerErrors.value);
    }
  })).apply(this, arguments);
}
function h(e) {
  return e.map(e => {
    if (e.groupInfoParticipantMixins.name === "GroupInfoParticipantAdmin") {
      const {
        type: t,
        groupInfoParticipantAdminMixins: n
      } = e.groupInfoParticipantMixins.value;
      const a = {
        isAdmin: t === "admin" || t === "superadmin",
        isSuperAdmin: t === "superadmin",
        id: (0, c.userJidToUserWid)(n.value.jid)
      };
      if (n.name === "ParticipantWithJid" || n.name === "ParticipantWithJidAndPn") {
        return a;
      } else if (n.name === "ParticipantWithJidAndLid") {
        return (0, r.default)((0, r.default)({}, a), {}, {
          lid: (0, c.userJidToUserWid)(n.value.lid)
        });
      } else {
        n.name;
        return (0, r.default)((0, r.default)({}, a), {}, {
          lid: (0, c.userJidToUserWid)(n.value.lid),
          displayName: n.value.displayName
        });
      }
    }
    e.groupInfoParticipantMixins.name;
    const t = e.groupInfoParticipantMixins.value.participantMixins;
    if (t.name === "ParticipantWithJid" || t.name === "ParticipantWithJidAndPn") {
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, c.userJidToUserWid)(t.value.jid)
      };
    } else if (t.name === "ParticipantWithJidAndLid") {
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, c.userJidToUserWid)(t.value.jid),
        lid: (0, c.userJidToUserWid)(t.value.lid)
      };
    } else if (t.name === "ParticipantWithJidContainingLidAndDisplayName") {
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, c.userJidToUserWid)(t.value.jid),
        displayName: t.value.displayName
      };
    } else {
      t.name;
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, c.userJidToUserWid)(t.value.jid),
        lid: (0, c.userJidToUserWid)(t.value.lid),
        displayName: t.value.displayName
      };
    }
  });
}
function g() {
  return (g = (0, o.default)(function* (e, t, n) {
    const a = yield (0, l.sendGetLinkedGroupRPC)({
      iqTo: (0, f.widToGroupJid)(t),
      queryLinkedType: "sub_group",
      queryLinkedJid: (0, f.widToGroupJid)(e),
      optionalSubGroupMixinArgs: n ? {
        anySubGroupJid: (0, f.widToGroupJid)(n)
      } : null
    });
    switch (a.name) {
      case "GetLinkedGroupResponseSuccess":
        {
          const {
            groupDescriptionGroupInfoDescriptionMixin: e,
            groupGroupInfoAttributesMixin: {
              creation: t,
              sT: n,
              namedSubjectOrUnnamedSubjectFallbackMixinGroup: {
                value: {
                  subject: o
                }
              },
              creator: l
            },
            jid: i,
            groupParticipant: u,
            groupSize: s,
            hasGroupAdminRequestRequired: d,
            groupMembershipApprovalRequest: f,
            groupMembershipApprovalMode: p
          } = a.value.linkedGroupLinkedGroupInfoMixin;
          let m = {};
          if (e != null) {
            const {
              bodyElementValue: t,
              id: n,
              t: a,
              participant: o
            } = e;
            m = (0, r.default)({
              desc: t,
              descId: n,
              descTime: a
            }, o != null && {
              descOwner: (0, c.userJidToUserWid)(o)
            });
          }
          const g = (0, r.default)({
            id: (0, c.groupJidToWid)(i),
            creation: t,
            subjectTime: n,
            participants: h(u),
            size: s,
            adminRequestRequired: d,
            membershipApprovalRequest: f != null && f.error !== 304,
            membershipApprovalMode: (p == null ? undefined : p.state) === "on",
            subject: undefined,
            owner: undefined
          }, m);
          if (l != null) {
            g.owner = (0, c.userJidToUserWid)(l);
          }
          if (o != null) {
            g.subject = o;
          }
          return g;
        }
      case "GetLinkedGroupResponseClientError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorGetLinkedGroupClientErrors.value;
          __LOG__(2)`joinSubgroup failed: ${a.name}`;
          return Promise.reject(new s.ServerStatusCodeError(Number(e), t));
        }
      default:
        {
          a.name;
          const {
            code: e,
            text: t
          } = a.value.errorServerErrors.value;
          __LOG__(2)`joinSubgroup failed: ${a.name}`;
          return Promise.reject(new s.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}
function E(e) {
  let {
    code: t,
    text: n
  } = e;
  __LOG__(2)`queryAllSubgroups failed: ${t}:${n}`;
  return Promise.reject(new s.ServerStatusCodeError(Number(t), n));
}