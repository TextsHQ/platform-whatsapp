var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const n = p.fbt._("Send for admin review?", null, {
    hk: "uQT69"
  });
  const a = p.fbt._("This message will be sent to group admins for review. Other group members will not be notified.", null, {
    hk: "kAwOW"
  });
  const h = p.fbt._("Ok", null, {
    hk: "3Q6CXh"
  });
  const g = p.fbt._("Sending for admin review", null, {
    hk: "1cmQwt"
  });
  const E = p.fbt._("Sent for admin review", null, {
    hk: "2d5HW4"
  });
  const v = p.fbt._("Failed to send for admin review.", null, {
    hk: "3q8juP"
  });
  const _ = (0, l.getChat)(t).id;
  return m.default.createElement(o.ConfirmPopup, {
    onOK: () => {
      (0, u.logRTAReportingEvent)({
        reportToAdminInteraction: f.REPORT_TO_ADMIN_INTERACTION.CLICK_CONFIRM_SEND_FOR_ADMIN_REVIEW,
        groupId: _.user
      });
      const e = new r.ActionType(g);
      const n = (0, s.sendForAdminReview)(t, _).then(() => new r.ActionType(E)).catch(() => new r.ActionType(v)).finally(() => {
        i.ModalManager.close();
      });
      d.ToastManager.open(m.default.createElement(r.ActionToast, {
        initialAction: e,
        pendingAction: n
      }));
    },
    okText: h,
    onCancel: () => {
      (0, u.logRTAReportingEvent)({
        reportToAdminInteraction: f.REPORT_TO_ADMIN_INTERACTION.CLICK_CANCEL_SEND_FOR_ADMIN_REVIEW,
        groupId: _.user
      });
      i.ModalManager.close();
    },
    title: n
  }, m.default.createElement(c.WDSTextMuted, null, a));
};
var r = require("../app/328620.js");
var o = require("../app/103440.js");
var l = require("../app/163755.js");
var i = require("../app/114850.js");
var u = require("./626163.js");
var s = require("./490141.js");
var c = require("../app/180519.js");
var d = require("../app/390737.js");
var f = require("./328340.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));