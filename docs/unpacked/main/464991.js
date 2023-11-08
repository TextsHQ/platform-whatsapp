var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroupParticipants = function () {
  return p.apply(this, arguments);
};
exports.demoteCommunityParticipants = function () {
  return E.apply(this, arguments);
};
exports.demoteGroupParticipants = function () {
  return m.apply(this, arguments);
};
exports.promoteCommunityParticipants = function () {
  return g.apply(this, arguments);
};
exports.promoteGroupParticipants = function () {
  return h.apply(this, arguments);
};
exports.removeGroupParticipants = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./621916.js");
var l = require("./944556.js");
var i = require("./317561.js");
var u = require("./402655.js");
var s = require("../app/984330.js");
var c = require("../app/854379.js");
var d = require("../app/574819.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = yield (0, u.sendRemoveParticipantsRPC)({
      participantArgs: t.map(e => ({
        participantJid: (0, d.widToUserJid)(e)
      })),
      iqTo: (0, d.widToGroupJid)(e),
      hasRemoveLinkedGroupsTrue: false
    });
    switch (n.name) {
      case "RemoveParticipantsResponseSuccess":
        return {
          status: 207,
          participants: n.value.removeParticipant.map(e => {
            var t;
            const n = (t = e.participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup) === null || t === undefined ? undefined : t.value.error;
            return {
              userWid: (0, c.userJidToUserWid)(e.jid),
              code: n != null ? n : "200",
              invite_code: null,
              invite_code_exp: null
            };
          })
        };
      case "RemoveParticipantsResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorRemoveParticipantsClientErrors.value;
          __LOG__(3)`error sending remove group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
      case "RemoveParticipantsResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`error sending remove group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
    }
  })).apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e, t) {
    const n = yield (0, o.sendAddParticipantsRPC)({
      participantArgs: t.map(e => e.lid != null ? {
        participantJid: (0, d.widToUserJid)(e.lid),
        phoneNumberMixinArgs: {
          anyPhoneNumber: (0, d.widToUserJid)(e.phoneNumber)
        }
      } : {
        participantJid: (0, d.widToUserJid)(e.phoneNumber)
      }),
      iqTo: (0, d.widToGroupJid)(e)
    });
    switch (n.name) {
      case "AddParticipantsResponseSuccess":
        return {
          status: 207,
          participants: n.value.addParticipant.map(e => {
            var t;
            var n;
            var a;
            var r;
            var o;
            var l;
            var i;
            var u;
            var s;
            const d = (t = e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) === null || t === undefined || (n = t.value) === null || n === undefined || (a = n.addParticipantsParticipantMixins) === null || a === undefined ? undefined : a.value.error;
            const f = (r = e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.addParticipantsParticipantMixins) === null || r === undefined || (o = r.value) === null || o === undefined ? undefined : o.membershipApprovalRequestError;
            let p;
            let m;
            var h;
            var g;
            var E;
            var v;
            var _;
            var y;
            var C;
            var b;
            if (((l = e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) === null || l === undefined || (i = l.value) === null || i === undefined || (u = i.addParticipantsParticipantMixins) === null || u === undefined ? undefined : u.name) === "ParticipantRequestCodeCanBeSent") {
              p = (h = e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) === null || h === undefined || (g = h.value) === null || g === undefined || (E = g.addParticipantsParticipantMixins) === null || E === undefined || (v = E.value) === null || v === undefined ? undefined : v.addRequestCode;
              m = (_ = e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) === null || _ === undefined || (y = _.value) === null || y === undefined || (C = y.addParticipantsParticipantMixins) === null || C === undefined || (b = C.value) === null || b === undefined ? undefined : b.addRequestExpiration;
            }
            return {
              userWid: e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.jid != null ? (0, c.userJidToUserWid)(e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.jid) : null,
              code: d != null ? d : "200",
              subCode: {
                membershipApprovalRequestError: f
              },
              invite_code: p,
              invite_code_exp: (s = m) === null || s === undefined ? undefined : s.toString()
            };
          })
        };
      case "AddParticipantsResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorAddParticipantsClientErrors.value;
          __LOG__(3)`error sending add group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
      case "AddParticipantsResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`error sending add group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
    }
  })).apply(this, arguments);
}
function m() {
  return (m = (0, r.default)(function* (e, t) {
    const n = yield (0, i.sendPromoteDemoteRPC)({
      demoteArgs: {
        participantArgs: t.map(e => ({
          participantJid: (0, d.widToUserJid)(e)
        }))
      },
      iqTo: (0, d.widToGroupJid)(e)
    });
    switch (n.name) {
      case "PromoteDemoteResponseSuccessDemote":
        return {
          status: 207,
          participants: n.value.demoteParticipant.map(e => {
            const t = e.error;
            return {
              userWid: (0, c.userJidToUserWid)(e.jid),
              code: t != null ? t : "200",
              invite_code: null,
              invite_code_exp: null
            };
          })
        };
      case "PromoteDemoteResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorPromoteDemoteClientErrors.value;
          __LOG__(3)`error sending demote group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
      case "PromoteDemoteResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`error sending demote group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, r.default)(function* (e, t) {
    const n = yield (0, i.sendPromoteDemoteRPC)({
      promoteArgs: {
        participantArgs: t.map(e => ({
          participantJid: (0, d.widToUserJid)(e)
        }))
      },
      iqTo: (0, d.widToGroupJid)(e)
    });
    switch (n.name) {
      case "PromoteDemoteResponseSuccessPromote":
        return {
          status: 207,
          participants: n.value.promoteParticipant.map(e => {
            const t = e.error;
            return {
              userWid: (0, c.userJidToUserWid)(e.jid),
              code: t != null ? t : "200",
              invite_code: null,
              invite_code_exp: null
            };
          })
        };
      case "PromoteDemoteResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorPromoteDemoteClientErrors.value;
          __LOG__(3)`error sending promote group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
      case "PromoteDemoteResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`error sending promote group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, r.default)(function* (e, t) {
    const n = yield (0, l.sendPromoteDemoteAdminRPC)({
      promoteArgs: {
        participantArgs: t.map(e => ({
          participantJid: (0, d.widToUserJid)(e)
        }))
      },
      iqTo: (0, d.widToGroupJid)(e)
    });
    switch (n.name) {
      case "PromoteDemoteAdminResponseSuccessMultiAdmin":
        return {
          status: 207,
          participants: n.value.adminParticipant.map(e => {
            const t = e.error;
            return {
              userWid: (0, c.userJidToUserWid)(e.jid),
              code: t != null ? t : "200",
              invite_code: null,
              invite_code_exp: null
            };
          })
        };
      case "PromoteDemoteAdminResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorPromoteDemoteAdminClientErrors.value;
          __LOG__(3)`error sending promoting group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
      case "PromoteDemoteAdminResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`error sending promoting group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
    }
  })).apply(this, arguments);
}
function E() {
  return (E = (0, r.default)(function* (e, t) {
    const n = yield (0, l.sendPromoteDemoteAdminRPC)({
      demoteArgs: {
        participantArgs: t.map(e => ({
          participantJid: (0, d.widToUserJid)(e)
        }))
      },
      iqTo: (0, d.widToGroupJid)(e)
    });
    switch (n.name) {
      case "PromoteDemoteAdminResponseSuccessMultiAdmin":
        return {
          status: 207,
          participants: n.value.adminParticipant.map(e => {
            const t = e.error;
            return {
              userWid: (0, c.userJidToUserWid)(e.jid),
              code: t != null ? t : "200",
              invite_code: null,
              invite_code_exp: null
            };
          })
        };
      case "PromoteDemoteAdminResponseClientError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorPromoteDemoteAdminClientErrors.value;
          __LOG__(3)`error sending demoting group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
      case "PromoteDemoteAdminResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorServerErrors.value;
          __LOG__(3)`error sending demoting group participants iq: ${e}`;
          return Promise.reject(new s.ServerStatusCodeError(+e, t));
        }
    }
  })).apply(this, arguments);
}