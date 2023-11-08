var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCommunityParticipantPromote = s;
exports.openCommunityParticipantPromoteConfirmation = function (e, t, n, a) {
  if (!e) {
    l.ModalManager.close();
    __LOG__(4, undefined, new Error(), true)`[community-promote] parent chat does not exist`;
    return void SEND_LOGS("community-promote-parent-chat-undefined");
  }
  l.ModalManager.open(u.default.createElement(o.CommunityAdminPromotePopup, {
    onParticipantPromote: () => s(e, t, n),
    contact: a
  }));
};
var r = require("../app/287461.js");
var o = require("./659862.js");
var l = require("../app/114850.js");
var i = require("./33014.js");
var u = a(require("../vendor/667294.js"));
function s(e, t, n) {
  var a;
  var c;
  var d;
  var f;
  if (((a = e.groupMetadata) === null || a === undefined || (c = a.participants.get(t.id)) === null || c === undefined ? undefined : c.isAdmin) === true) {
    return void l.ModalManager.close();
  }
  const p = (0, r.getABPropConfigValue)("parent_group_admins_limit");
  if (((d = (f = e.groupMetadata) === null || f === undefined ? undefined : f.participants.getAdmins().length) !== null && d !== undefined ? d : 0) + 1 > p) {
    l.ModalManager.close();
    return void l.ModalManager.open(u.default.createElement(o.CommunityAdminLimitPopup, {
      parentGroupAdminsLimit: p
    }));
  } else if (n == null ? undefined : n.get(t.id)) {
    t.contact.pendingAction++;
    (0, i.promoteCommunityParticipants)(e, [t]).then(e => {
      if (!(e == null ? undefined : e.participants)) {
        return;
      }
      const t = e.participants[0];
      if (e.participants.length !== 1) {
        __LOG__(4, undefined, new Error(), true)`[community-promote] Unexpected participants length: ${e.participants.length}`;
        SEND_LOGS("promote-unexpected-participants-length");
      }
      if (t.code === "419") {
        l.ModalManager.open(u.default.createElement(o.CommunityAdminLimitPopup, {
          parentGroupAdminsLimit: p
        }));
      } else if (t.code === "403") {
        __LOG__(3)`[community-promote] error trying to promote participant that is not a member of the CAG`;
        l.ModalManager.open(u.default.createElement(o.CommunityAdminPromoteInvalidParticipantErrorPopup, null));
      }
    }).catch(a => {
      __LOG__(3)`[community-promote] error sending promote community participants iq: ${a}`;
      l.ModalManager.open(u.default.createElement(o.CommunityAdminPromoteErrorPopup, {
        onParticipantPromote: () => s(e, t, n)
      }));
    }).finally(() => {
      t.contact.pendingAction--;
    });
    return void l.ModalManager.close();
  } else {
    l.ModalManager.close();
    return void l.ModalManager.open(u.default.createElement(o.CommunityAdminPromoteInvalidParticipantErrorPopup, null));
  }
}