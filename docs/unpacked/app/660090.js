var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const r = (0, o.systemMessageActionTextStylingEnabled)();
  let u;
  if (t) {
    u = (0, i.getFormattedName)(t, true);
  }
  switch (e) {
    case "membership_approval_mode":
      {
        const e = n[0] && a.GroupSettingChangeSystemMessageToggleEnabled.cast(n[0].toString()) === a.GroupSettingChangeSystemMessageToggleEnabled.On;
        const r = n[1] && a.GroupSettingChangeSystemMessageIsAdmin.cast(n[1].toString()) === a.GroupSettingChangeSystemMessageIsAdmin.Admin;
        if (e) {
          if (u == null) {
            if (r) {
              return l.fbt._("New participants need admin approval to join this group. Click to change.", null, {
                hk: "1d3CFC"
              });
            } else {
              return l.fbt._("New participants need admin approval to join this group.", null, {
                hk: "3l1C92"
              });
            }
          } else if ((0, s.isMeAccount)(t)) {
            return l.fbt._("You turned on admin approval to join this group. Click to change.", null, {
              hk: "14pFvg"
            });
          } else if (r) {
            return l.fbt._("{author} turned on admin approval to join this group. Click to change.", [l.fbt._param("author", u)], {
              hk: "4w0YIM"
            });
          } else {
            return l.fbt._("{author} turned on admin approval to join this group", [l.fbt._param("author", u)], {
              hk: "2MT00g"
            });
          }
        } else if (u == null) {
          return l.fbt._("Admin approval to join this group was turned off.", null, {
            hk: "1zNvy8"
          });
        } else if ((0, s.isMeAccount)(t)) {
          return l.fbt._("You turned off admin approval to join this group. Click to change.", null, {
            hk: "1DsWjI"
          });
        } else if (r) {
          return l.fbt._("{author} turned off admin approval to join this group. Click to change.", [l.fbt._param("author", u)], {
            hk: "z8HrE"
          });
        } else {
          return l.fbt._("{author} turned off admin approval to join this group", [l.fbt._param("author", u)], {
            hk: "42xQ9Y"
          });
        }
      }
    case "membership_approval_request":
    case "created_membership_requests":
      if (r) {
        return l.fbt._("{author} requested to join", [l.fbt._param("author", u)], {
          hk: "4zVBZn"
        });
      } else {
        return l.fbt._("{author} requested to join. Click to review.", [l.fbt._param("author", u)], {
          hk: "y43oX"
        });
      }
    default:
      __LOG__(2)`wa:formatMembershipApprovalNotification:unknown message subtype: ${e}`;
  }
  return "";
};
var i = require("./436355.js");
var a = require("./862159.js");
var o = require("./108590.js");
var s = require("./459857.js");
var l = require("../vendor/548360.js");
r(require("../vendor/667294.js"));