var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSubjectNotification = function (e, author, displayName, body) {
  if ((0, i.isCommunityAnnouncementGroup)(e)) {
    if ((0, a.isMeAccount)(author)) {
      return o.fbt._("You changed the community's name to \"{community_name}\"", [o.fbt._param("community_name", body)], {
        hk: "DG7ea"
      });
    } else if (displayName != null) {
      return o.fbt._("{user} changed the community's name to \"{community_name}\"", [o.fbt._param("user", displayName), o.fbt._param("community_name", body)], {
        hk: "1qK6P0"
      });
    } else {
      return o.fbt._("A participant changed the community's name to \"{community_name}\"", [o.fbt._param("community_name", body)], {
        hk: "4hAl6C"
      });
    }
  }
  if ((0, a.isMeAccount)(author)) {
    return o.fbt._("You changed the subject to \"{group_name}\"", [o.fbt._param("group_name", body)], {
      hk: "2mtky1"
    });
  }
  if (displayName != null) {
    return o.fbt._("{user} changed the subject to \"{group_name}\"", [o.fbt._param("user", displayName), o.fbt._param("group_name", body)], {
      hk: "2g5nTQ"
    });
  } else {
    return o.fbt._("A participant changed the subject to \"{group_name}\"", [o.fbt._param("group_name", body)], {
      hk: "3ynTdM"
    });
  }
};
var i = require("./374660.js");
var a = require("./459857.js");
var o = require("../vendor/548360.js");
r(require("../vendor/667294.js"));