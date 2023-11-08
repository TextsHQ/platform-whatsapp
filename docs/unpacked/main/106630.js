var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeaveCommunityAnnouncementGroupAdminPopup = function (e) {
  const {
    isCommunityCreator: t,
    isArchived: n,
    onArchive: a
  } = e;
  let c = u.fbt._("You cannot exit the announcement group as a community admin. You can remove yourself as an admin and then exit this group.", null, {
    hk: "3iB6uS"
  });
  if (t) {
    c = u.fbt._("You cannot exit the announcement group because you created the community it's in. You can deactivate the community through community info instead.", null, {
      hk: "3hWgpB"
    });
  }
  return s.default.createElement(o.ConfirmPopup, (0, r.default)({
    testid: "leave-cag-as-admin-popup",
    onOK: () => i.ModalManager.close(),
    okText: (0, l.default)("Cancel")
  }, !n && {
    onCancel: a,
    cancelText: (0, l.default)("Archive instead")
  }), c);
};
exports.LeaveCommunityAnnouncementGroupMemberPopup = function (e) {
  const {
    isArchived: t,
    onArchive: n
  } = e;
  return s.default.createElement(o.ConfirmPopup, (0, r.default)({
    testid: "leave-cag-as-admin-popup"
  }, t ? {
    okText: (0, l.default)("OK"),
    onOK: () => i.ModalManager.close()
  } : {
    okText: (0, l.default)("Archive instead"),
    onOK: n,
    cancelText: (0, l.default)("OK"),
    onCancel: () => i.ModalManager.close()
  }), t ? u.fbt._("To exit this group, you must exit the community.", null, {
    hk: "44vy9N"
  }) : u.fbt._("To exit this group, you must exit the community. You can always archive it instead.", null, {
    hk: "41yiRy"
  }));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = require("../app/114850.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));