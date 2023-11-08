var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunitySubjectHalfSuccessErrorPopup = function (e) {
  const {
    parentChat: t
  } = e;
  const n = u.fbt._("Announcement group name was not updated", null, {
    hk: "1vhxYu"
  });
  const a = u.fbt._("An error occured. Click to try again.", null, {
    hk: "4d8eBZ"
  });
  return s.default.createElement(r.ConfirmPopup, {
    title: n,
    onCancel: () => {
      l.ModalManager.close();
    },
    onOK: () => c(t),
    okText: (0, o.default)("Try again")
  }, a);
};
exports.CommunitySubjectSyncingIssuePopup = function (e) {
  const {
    parentChat: t,
    onOK: n
  } = e;
  const a = u.fbt._("Error updating announcement group name", null, {
    hk: "18FxQm"
  });
  const i = u.fbt._("The community name was updated but the announcement group was not. Click to try again.", null, {
    hk: "3467Rk"
  });
  return s.default.createElement(r.ConfirmPopup, {
    title: a,
    onCancel: () => {
      l.ModalManager.close();
    },
    onOK: () => {
      c(t);
      if (!(n == null)) {
        n();
      }
    },
    okText: (0, o.default)("Try again")
  }, i);
};
var r = require("../app/103440.js");
var o = a(require("../app/395767.js"));
var l = require("../app/114850.js");
var i = require("./470824.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
function c(e) {
  const t = e.contact.name;
  (0, i.setGroupSubject)(e, t).catch(() => {
    __LOG__(3)`community_half_success_error_popup:onSetSubject failed`;
  });
  l.ModalManager.close();
}