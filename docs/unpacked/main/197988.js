var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCommunityParticipantDemoteConfirmation = function (e, t) {
  var n;
  var a;
  if (!t) {
    __LOG__(4, undefined, new Error(), true)`[community-demote] parent chat does not exist`;
    return void SEND_LOGS("community-demote-parent-chat-undefined");
  }
  const p = (n = t.groupMetadata) === null || n === undefined ? undefined : n.participants;
  const m = (0, s.isMeAccount)((a = t.groupMetadata) === null || a === undefined ? undefined : a.owner);
  const h = e => {
    (0, o.logCadminDemoteEvent)(c.CADMIN_DEMOTE_ORIGIN_TYPE.MEMBER_LIST, e, (p == null ? undefined : p.getAdmins().length) === 1 || m);
  };
  const g = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    h(e ? d.CADMIN_DEMOTE_RESULT_TYPE.RETRY_CANCEL : d.CADMIN_DEMOTE_RESULT_TYPE.CANCEL);
    i.ModalManager.close();
  };
  const E = function () {
    var n;
    let a = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if ((p == null || (n = p.get(e.id)) === null || n === undefined ? undefined : n.isAdmin) !== false) {
      e.contact.pendingAction++;
      (0, u.demoteCommunityParticipants)(t, [e]).then(() => {
        if (e.id.equals((0, s.getMaybeMeUser)())) {
          h(a ? d.CADMIN_DEMOTE_RESULT_TYPE.RETRY_SUCCESS : d.CADMIN_DEMOTE_RESULT_TYPE.SUCCESS);
        }
      }).catch(() => {
        __LOG__(3, true, undefined, true)`Error sending demote community participants iq`;
        SEND_LOGS("community-admin-self-demote-failed");
        if (e.id.equals((0, s.getMaybeMeUser)())) {
          h(a ? d.CADMIN_DEMOTE_RESULT_TYPE.RETRY_FAILURE : d.CADMIN_DEMOTE_RESULT_TYPE.FAILURE);
        }
        i.ModalManager.open(f.default.createElement(l.CommunityAdminDemoteErrorPopup, {
          onParticipantDemote: () => E(true),
          onCancel: () => g(true),
          isMe: e.id.equals((0, s.getMaybeMeUser)())
        }));
      }).finally(() => {
        e.contact.pendingAction--;
      });
      i.ModalManager.close();
    } else {
      i.ModalManager.close();
    }
  };
  const v = () => {
    h(d.CADMIN_DEMOTE_RESULT_TYPE.FAILURE);
    i.ModalManager.close();
  };
  if (e.id.equals((0, s.getMaybeMeUser)())) {
    i.ModalManager.open(f.default.createElement(r.default, {
      onDemote: E,
      onCancel: g,
      onFailure: v,
      isCommunityOwner: m
    }));
  } else {
    i.ModalManager.open(f.default.createElement(l.CommunityAdminDemotePopup, {
      onParticipantDemote: E
    }));
  }
};
var r = a(require("./488145.js"));
var o = require("./378280.js");
var l = require("./659862.js");
var i = require("../app/114850.js");
var u = require("./33014.js");
var s = require("../app/459857.js");
var c = require("./909991.js");
var d = require("./427360.js");
var f = a(require("../vendor/667294.js"));