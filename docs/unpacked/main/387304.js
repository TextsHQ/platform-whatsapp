var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMsgAdmin = exports.handleContactUs = undefined;
var r = require("../app/780549.js");
var o = a(require("./695681.js"));
var l = a(require("./402085.js"));
var i = require("../app/581354.js");
var u = require("../app/114850.js");
var s = require("./983271.js");
var c = a(require("../vendor/667294.js"));
const d = () => {};
const f = () => {};
exports.handleContactUs = e => {
  u.ModalManager.close();
  u.ModalManager.open(c.default.createElement(o.default, {
    onCancel: d,
    onSend: f,
    supportTag: s.SUSPENDED_GROUP_SUPPORT_TAG,
    entityId: e
  }), {
    transition: "modal-flow"
  });
};
exports.handleMsgAdmin = (e, t) => {
  const n = t => {
    (0, i.findChat)(t, "msgBarActions").then(t => {
      t.quotedMsgAdminGroupJid = e.id;
      t.quotedMsgAdminGroupSubject = null;
      t.quotedMsgAdminParentGroupJid = null;
      r.Cmd.openChatBottom(t);
    });
  };
  const a = e.participants.getAdmins();
  if (a.length !== 1) {
    u.ModalManager.open(c.default.createElement(l.default, {
      title: t,
      filter: t => {
        const n = e.participants.get(t.id);
        return !!(n == null ? undefined : n.isAdmin);
      },
      onCancel: () => u.ModalManager.close(),
      onSelect: e => {
        n(e.id);
        u.ModalManager.close();
      }
    }));
  } else {
    n(a[0].id);
  }
};