var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityAdminDemoteErrorPopup = function (e) {
  const {
    onParticipantDemote: t,
    onCancel: n = d,
    isMe: a = false
  } = e;
  return c.default.createElement(r.ConfirmPopup, {
    okText: s.fbt._("Try again", null, {
      hk: "4kyl3x"
    }),
    onOK: t,
    onCancel: n
  }, c.default.createElement(u.TextParagraph, {
    size: "16"
  }, a ? s.fbt._("An error occurred while dismissing you as a community admin. Please try again.", null, {
    hk: "1uT2SR"
  }) : s.fbt._("An error occurred while dismissing this member as community admin. Please try again.", null, {
    hk: "2YfctV"
  })));
};
exports.CommunityAdminDemotePopup = function (e) {
  const {
    onParticipantDemote: t,
    onCancel: n = d
  } = e;
  return c.default.createElement(r.ConfirmPopup, {
    title: s.fbt._("Dismiss as community admin?", null, {
      hk: "26ASPh"
    }),
    onOK: t,
    onCancel: n
  }, c.default.createElement(u.TextParagraph, {
    size: "16"
  }, s.fbt._("They won't be able to send announcements, manage the community or use other admin tools.", null, {
    hk: "328GFw"
  })));
};
exports.CommunityAdminLimitPopup = function (e) {
  const {
    parentGroupAdminsLimit: t,
    onOk: n = d
  } = e;
  return c.default.createElement(r.ConfirmPopup, {
    title: s.fbt._("Community admin limit reached", null, {
      hk: "V5B4J"
    }),
    onOK: n
  }, c.default.createElement(u.TextParagraph, {
    size: "16"
  }, s.fbt._({
    "*": "You reached the maximum of {adminsNumber} admins for this community.",
    _1: "You reached the maximum of 1 admin for this community."
  }, [s.fbt._plural(t, "adminsNumber")], {
    hk: "1NjbGh"
  })));
};
exports.CommunityAdminPromoteErrorPopup = function (e) {
  const {
    onParticipantPromote: t,
    onCancel: n = d
  } = e;
  return c.default.createElement(r.ConfirmPopup, {
    onOK: t,
    okText: s.fbt._("Try again", null, {
      hk: "22ZvLF"
    }),
    onCancel: n
  }, c.default.createElement(u.TextParagraph, {
    size: "16"
  }, s.fbt._("An error occurred while making this member a community admin. Please try again.", null, {
    hk: "3oNBRR"
  })));
};
exports.CommunityAdminPromoteInvalidParticipantErrorPopup = function (e) {
  const {
    onOk: t = d
  } = e;
  return c.default.createElement(r.ConfirmPopup, {
    onOK: t
  }, c.default.createElement(u.TextParagraph, {
    size: "16"
  }, s.fbt._("This member is not in the community announcement group, so they cannot be a community admin. Once they join the group, you can make them a community admin.", null, {
    hk: "30So3I"
  })));
};
exports.CommunityAdminPromotePopup = function (e) {
  const {
    contact: t,
    onParticipantPromote: n,
    onCancel: a = d
  } = e;
  const i = t ? s.fbt._("{contact_name} must be a community admin to be an admin of its announcement group. If you make them a community admin, they can send announcements, manage groups, edit community information and use other admin tools.", [s.fbt._param("contact_name", c.default.createElement(o.EmojiText, {
    text: (0, l.getFormattedName)(t)
  }))], {
    hk: "8Dluu"
  }) : s.fbt._("Community admins can send announcements, manage groups, edit community information and use other admin tools.", null, {
    hk: "2vBbEt"
  });
  return c.default.createElement(r.ConfirmPopup, {
    title: s.fbt._("Make community admin?", null, {
      hk: "1Zv0M7"
    }),
    onOK: n,
    onCancel: a
  }, c.default.createElement(u.TextParagraph, {
    size: "16"
  }, i));
};
var r = require("../app/103440.js");
var o = require("../app/305521.js");
var l = require("../app/714574.js");
var i = require("../app/114850.js");
var u = require("../app/180519.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
function d() {
  i.ModalManager.close();
}