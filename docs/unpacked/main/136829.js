var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnblockLidUserModal = function (e) {
  const {
    contact: t
  } = e;
  function n() {
    return (n = (0, r.default)(function* () {
      yield t.addPendingAction((0, o.unblockContact)(t));
      i.ModalManager.close();
    })).apply(this, arguments);
  }
  const a = c.default.createElement(u.TextSpan, {
    theme: "title"
  }, s.fbt._("Unblock Contact", null, {
    hk: "5xjVp"
  }));
  return c.default.createElement(l.ConfirmPopup, {
    onOK: function () {
      return n.apply(this, arguments);
    },
    okText: s.fbt._("Unblock", null, {
      hk: "16wUGf"
    }),
    onCancel: () => i.ModalManager.close(),
    cancelText: s.fbt._("Cancel", null, {
      hk: "4nbiP8"
    }),
    title: a
  }, s.fbt._("You cannot request or share phone number for a blocked contact. Click Unblock to request/share phone number.", null, {
    hk: "4h40UB"
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/547979.js");
var l = require("../app/103440.js");
var i = require("../app/114850.js");
var u = require("../app/180519.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));