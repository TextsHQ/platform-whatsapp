var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlock = function (e, t) {
  const n = e.contact;
  const a = (0, i.getSpamFlowFromBlockEntryPoint)(t);
  const u = () => {
    if (e == null ? undefined : e.isPSA) {
      const n = e.msgs.last();
      const a = (0, i.getBlockPsaRemoveEntryPointFromBlockEntryPoint)(t);
      if (a != null) {
        (0, g.logChatPSARemove)(n, 1, a);
      }
    }
    (0, o.blockContact)({
      contact: n,
      blockEntryPoint: t
    });
    d.ModalManager.close();
  };
  let s = v.default.createElement(l.default, {
    contact: e.contact,
    onCancel: () => d.ModalManager.close(),
    onBlock: u,
    onReportSpamBlock: () => {
      (0, m.sendReport)({
        chat: (0, h.unproxy)(e),
        spamFlow: a
      });
      (0, o.blockContact)({
        contact: n,
        blockEntryPoint: t
      });
      d.ModalManager.close();
    }
  });
  if (e.isPSA) {
    s = v.default.createElement(p.default, {
      onCancel: () => d.ModalManager.close(),
      onBlock: u
    });
  } else if (e.contact.isBusiness) {
    s = v.default.createElement(r.default, {
      contact: e.contact,
      blockEntryPoint: t,
      withReport: true
    });
  }
  d.ModalManager.open(s);
};
exports.handleUnblock = function (e, t) {
  const n = v.default.createElement(f.Name, {
    contact: e
  });
  d.ModalManager.open(v.default.createElement(s.ConfirmPopup, {
    okText: (0, c.default)("Unblock"),
    onOK: () => {
      const n = u.ChatCollection.get(e.id);
      if (n == null ? undefined : n.isPSA) {
        const e = n.msgs.last();
        const a = (0, i.getUnblockPsaRemoveEntryPointFromBlockEntryPoint)(t);
        if (a != null) {
          (0, g.logChatPSARemove)(e, 2, a);
        }
      }
      (0, o.unblockContact)(e, t);
      d.ModalManager.close();
    },
    onCancel: () => d.ModalManager.close(),
    title: E.fbt._("Unblock {contact_name}?", [E.fbt._param("contact_name", n)], {
      hk: "2lSJYH"
    })
  }));
};
var r = a(require("./208423.js"));
var o = require("../app/547979.js");
var l = a(require("./232666.js"));
var i = require("../app/157550.js");
var u = require("../app/351053.js");
var s = require("../app/103440.js");
var c = a(require("../app/395767.js"));
var d = require("../app/114850.js");
var f = require("../app/21645.js");
var p = a(require("./179197.js"));
var m = require("../app/383296.js");
var h = require("../app/163139.js");
var g = require("../app/369084.js");
var E = require("../vendor/548360.js");
var v = a(require("../vendor/667294.js"));