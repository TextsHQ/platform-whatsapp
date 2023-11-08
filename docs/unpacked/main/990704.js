var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return c.default.createElement(i.SelectModal, {
    title: e.isVideo ? s.fbt._("Group video call", null, {
      hk: "4rrIQR"
    }) : s.fbt._("Group voice call", null, {
      hk: "gRekC"
    }),
    filter: t => !e.groupParticipants || !!e.groupParticipants.find(e => e.equals(t.id)) && !(0, o.getIsMe)(t),
    onCancel: () => l.ModalManager.close(),
    onConfirm: t => {
      e.onStartGroupCall(t.map(e => e.id));
      l.ModalManager.close();
    },
    listType: i.ListType.ParticipantManageModal,
    useAllContacts: e.groupParticipants != null,
    maxItems: r.default.VOIP_MAX_GROUP_CALL_PARTICIPANTS - 1,
    maxItemsExceedErrorMsg: s.fbt._({
      "*": "You can only call up to {count} contacts",
      _1: "You can only call up to 1 contact"
    }, [s.fbt._plural(r.default.VOIP_MAX_GROUP_CALL_PARTICIPANTS - 1, "count")], {
      hk: "3YH4AA"
    }),
    singleSelectionFooterType: e.isVideo ? u.FooterType.VIDEO_CALL : u.FooterType.VOICE_CALL,
    multipleSelectionFooterType: e.isVideo ? u.FooterType.VIDEO_CALL : u.FooterType.VOICE_CALL,
    allowBlockedContacts: false
  });
};
var r = a(require("../app/846870.js"));
var o = require("../app/660666.js");
var l = require("../app/114850.js");
var i = require("./61740.js");
var u = require("./792882.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));