var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPromoteDemoteNotification = function (e) {
  let {
    subtype: t,
    participantsCount: n,
    subject: r,
    subjectClickable: o,
    participantsClickable: s
  } = e;
  switch (t) {
    case "promote":
      if (n === 1 && (0, i.isMe)(r)) {
        return a.fbt._("You're now an admin", null, {
          hk: "3kNNwA"
        });
      } else {
        return a.fbt._({
          "*": "{participant_names} are now admins",
          _1: "{participant_names} is now an admin"
        }, [a.fbt._plural(n), a.fbt._param("participant_names", s)], {
          hk: "1QhprX"
        });
      }
    case "demote":
      if (n === 1 && (0, i.isMe)(r)) {
        return a.fbt._("You're no longer an admin", null, {
          hk: "4b22N8"
        });
      } else {
        return a.fbt._({
          "*": "{participant_names} are no longer admins",
          _1: "{participant_names} is no longer an admin"
        }, [a.fbt._plural(n), a.fbt._param("participant_names", s)], {
          hk: "2Jzb50"
        });
      }
    case "linked_group_promote":
      if ((0, i.isMe)(r)) {
        return a.fbt._("You're now a community admin", null, {
          hk: "4fMCJO"
        });
      } else {
        return a.fbt._("{name} is now a community admin", [a.fbt._param("name", o)], {
          hk: "493qke"
        });
      }
    case "linked_group_demote":
      if ((0, i.isMe)(r)) {
        return a.fbt._("You're no longer a community admin", null, {
          hk: "1QoLu3"
        });
      } else {
        return a.fbt._("{name} is no longer a community admin", [a.fbt._param("name", o)], {
          hk: "2dDMg7"
        });
      }
    default:
      __LOG__(2)`wa:formatPromoteDemoteNotification:unknown message subtype: ${t}`;
      return "";
  }
};
var i = require("./526424.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));