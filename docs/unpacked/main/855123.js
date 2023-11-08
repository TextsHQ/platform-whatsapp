var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    type: t,
    subtype: n
  } = e;
  let a;
  switch (t) {
    case r.MSG_TYPE.E2E_NOTIFICATION:
      a = l.fbt._("Learn more", null, {
        hk: "4eIFmu"
      });
      break;
    case r.MSG_TYPE.GP2:
      a = function (e) {
        switch (e) {
          case "growth_unlocked":
          case "revoke_invite":
            return l.fbt._("View the new invite link", null, {
              hk: "1C2XdG"
            });
          case "add":
            return l.fbt._("View participants", null, {
              hk: "1B3mYF"
            });
          case "description":
          case "initial_pHash_mismatch":
          case "default_sub_group_promote":
          case "default_sub_group_demote":
            return l.fbt._("View", null, {
              hk: "2x30x3"
            });
          case "growth_locked":
            return l.fbt._("Learn more", null, {
              hk: "bghY5"
            });
          case "membership_approval_request":
          case "created_membership_requests":
            return l.fbt._("Review", null, {
              hk: "1og4jP"
            });
          case "created_subgroup_suggestion":
            return l.fbt._("Approve or reject", null, {
              hk: "AaLuO"
            });
          default:
            return null;
        }
      }(n);
  }
  if (a == null) {
    return null;
  }
  return i.default.createElement(o.TextSpan, {
    weight: "medium",
    size: "inherit"
  }, a);
};
var r = require("../app/373070.js");
var o = require("../app/180519.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));