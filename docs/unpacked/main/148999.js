var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCancelRequestErrorStr = function (e) {
  if (e instanceof d.RequestError) {
    switch (e.status) {
      case 401:
        return g.fbt._("You cannot cancel this request.", null, {
          hk: "NrUvp"
        });
      case 404:
        return g.fbt._("Your request no longer exists.", null, {
          hk: "3ahReK"
        });
    }
  }
  if (e instanceof d.GroupError) {
    switch (e.status) {
      case 400:
        return g.fbt._("An error occurred while canceling.", null, {
          hk: "49koqh"
        });
      case 404:
      case 423:
        return g.fbt._("This group no longer exists.", null, {
          hk: "3wx3Me"
        });
      case 429:
        return g.fbt._("An error occurred while canceling. Please try again later.", null, {
          hk: "42dyuf"
        });
    }
  }
  return g.fbt._("An error occurred while canceling. Please try again.", null, {
    hk: "2fBRLM"
  });
};
exports.getDismissText = function (e) {
  if (e) {
    return (0, u.default)("Close");
  } else {
    return (0, u.default)("Cancel");
  }
};
exports.getErrorStr = function (e) {
  switch (e instanceof o.ServerStatusCodeError ? e.status : null) {
    case 403:
      return g.fbt._("You can't join this group because you are not a member of the community.", null, {
        hk: "3EZdan"
      });
    case 404:
      return g.fbt._("You can't join this group because it no longer exists.", null, {
        hk: "2pp3nO"
      });
    case 405:
      return g.fbt._("You can't join this group because it is not part of the community.", null, {
        hk: "xfvvv"
      });
    case 503:
      return g.fbt._("Check your phone's connection and try again.", null, {
        hk: "37gkoW"
      });
    case 426:
      return g.fbt._("You need approval from an admin to join this group. Update your app so you can request to join.", null, {
        hk: "2RsPOs"
      });
    default:
      return g.fbt._("Unable to join this group. Please try again later.", null, {
        hk: "TLzMU"
      });
  }
};
exports.getFinePrint = function (e) {
  const {
    groupType: t,
    isCommunityParticipant: n = false,
    parentGroupSubject: a,
    membershipApprovalMode: o = false,
    requestSent: l = false
  } = e;
  if (l) {
    if ((0, r.getABPropConfigValue)("group_join_request_m3")) {
      return g.fbt._("Request sent. Waiting for admin approval.", null, {
        hk: "FfDms"
      });
    } else {
      return g.fbt._("Waiting for admin approval.", null, {
        hk: "3UsCzO"
      });
    }
  }
  switch (t) {
    case s.GroupType.COMMUNITY:
      return g.fbt._("When you join this community, you will be added to its announcement group. Your profile will be visible to community admins.", null, {
        hk: "2YTLvo"
      });
    case s.GroupType.LINKED_SUBGROUP:
    case s.GroupType.LINKED_GENERAL_GROUP:
    case s.GroupType.LINKED_ANNOUNCEMENT_GROUP:
      if (n) {
        break;
      }
      if (a != null) {
        if ((0, i.communityAnnouncementImprovementM3Enabled)()) {
          return g.fbt._("You will be added to the community \"{community}\" and its announcement group. Your profile will be visible to community admins.", [g.fbt._param("community", a)], {
            hk: "LZU4v"
          });
        } else {
          return g.fbt._("This group is in the community \"{community}\". By joining, you will be added to the community and your profile is visible to its admins.", [g.fbt._param("community", a)], {
            hk: "1rW6ME"
          });
        }
      } else if ((0, i.communityAnnouncementImprovementM3Enabled)()) {
        return g.fbt._("You will be added to a community and its announcement group. Your profile will be visible to community admins.", null, {
          hk: "HNKIW"
        });
      } else {
        return g.fbt._("This group is in a community. By joining, you will be added to the community and your profile is visible to its admins.", null, {
          hk: "32xYy1"
        });
      }
    case s.GroupType.DEFAULT:
  }
  if (o) {
    return g.fbt._("An admin must approve your request.", null, {
      hk: "4BIBVP"
    });
  }
  return null;
};
exports.getGroupInviteAcceptErrorStr = function (e, t) {
  switch (e instanceof o.ServerStatusCodeError ? e.status : null) {
    case 400:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("Unable to join this community. Please try again later.", null, {
          hk: "2qWMK0"
        });
      } else {
        return g.fbt._("Unable to join this group. Please try again later.", null, {
          hk: "21c74B"
        });
      }
    case 401:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("You can't join this community because you were removed.", null, {
          hk: "cLUYP"
        });
      } else {
        return g.fbt._("You can't join this group because you were removed.", null, {
          hk: "3PHNXf"
        });
      }
    case 404:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("You can't join this community because it does not exist.", null, {
          hk: "33BqZi"
        });
      } else {
        return g.fbt._("You can't join this group because it no longer exists.", null, {
          hk: "1xEKzK"
        });
      }
    case 405:
      return g.fbt._("You can't join this group because you were removed from the community.", null, {
        hk: "2f3lKm"
      });
    case 409:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("You can't join this community because you are already a member of it.", null, {
          hk: "2Rb0OE"
        });
      } else {
        return g.fbt._("You can't join this group because you are already a member of it.", null, {
          hk: "3sUUND"
        });
      }
    case 410:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("You can't join this community because this invite link was reset.", null, {
          hk: "z7ACr"
        });
      } else {
        return g.fbt._("You can't join this group because this invite link was reset.", null, {
          hk: "1zEGh5"
        });
      }
    case 412:
      return g.fbt._("You can't join this group because the community is full.", null, {
        hk: "1F9yp6"
      });
    case 419:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("You can't join this community because it is full.", null, {
          hk: "15kEeB"
        });
      } else {
        return g.fbt._("You can't join this group because it is full.", null, {
          hk: "1D8JSO"
        });
      }
    case 426:
      return g.fbt._("You need approval from an admin to join this group. Update your app so you can request to join.", null, {
        hk: "2RsPOs"
      });
    case 429:
      return g.fbt._("You have reached the limit for the number of groups you can join at this time. You can try joining this group again later.", null, {
        hk: "1UdSzo"
      });
    case 436:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("You can't join this community because the invite link is unavailable.", null, {
          hk: "29TFpa"
        });
      } else {
        return g.fbt._("You can't join this group because the invite link is unavailable.", null, {
          hk: "erhlw"
        });
      }
    default:
      if (t === s.GroupType.COMMUNITY) {
        return g.fbt._("Couldn't join this community. Please try again.", null, {
          hk: "16sZWn"
        });
      } else {
        return g.fbt._("Couldn't join this group. Please try again.", null, {
          hk: "10viZM"
        });
      }
  }
};
exports.getGroupInviteActionText = function (e) {
  const {
    inGroup: t,
    groupType: n,
    isSentByMe: a = false,
    error: l,
    adminRequestRequired: u = false,
    membershipApprovalMode: c = false,
    requestSent: d = false
  } = e;
  if (l instanceof o.ServerStatusCodeError && l.status === 426) {
    return g.fbt._("Update", null, {
      hk: "1b5vbz"
    });
  }
  if (a) {
    return g.fbt._("Revoke invite", null, {
      hk: "3GlOhJ"
    });
  }
  if (t) {
    if (n === s.GroupType.COMMUNITY) {
      return g.fbt._("View community", null, {
        hk: "1hhKVl"
      });
    } else {
      return g.fbt._("View group", null, {
        hk: "1gwwFJ"
      });
    }
  }
  if ((0, i.communitiesEnabled)() && n === s.GroupType.COMMUNITY) {
    return g.fbt._("Join community", null, {
      hk: "2MHgig"
    });
  }
  if (c || (0, r.getABPropConfigValue)("parent_group_tap_to_request_enabled") && (0, i.communitiesEnabled)() && n === s.GroupType.LINKED_SUBGROUP && u) {
    if (d) {
      if ((0, r.getABPropConfigValue)("group_join_request_m3")) {
        return g.fbt._("Cancel request", null, {
          hk: "1VixML"
        });
      } else {
        return g.fbt._("Request Sent", null, {
          hk: "1Y9dOV"
        });
      }
    } else {
      return g.fbt._("Request to join", null, {
        hk: "1CW7Tv"
      });
    }
  }
  return g.fbt._("Join group", null, {
    hk: "2DlQzJ"
  });
};
exports.getGroupInviteRevokeErrorStr = function (e) {
  switch (e) {
    case 400:
      return g.fbt._("Failed to revoke this invite.", null, {
        hk: "1DzSUz"
      });
    case 401:
      return g.fbt._("You can't revoke this group invite because you are not an admin of this group.", null, {
        hk: "3sfM8v"
      });
    case 403:
      return g.fbt._("You can't revoke this group invite because you are not a participant of this group.", null, {
        hk: "4DU6Va"
      });
    case 404:
      return g.fbt._("You can't revoke this group invite because this group has ended.", null, {
        hk: "3KFLBE"
      });
    default:
      return g.fbt._("Can't revoke invite. Please try again.", null, {
        hk: "1Lf1a8"
      });
  }
};
exports.getGroupInviteSubtitle = function (e) {
  var t;
  let {
    groupMetadata: n,
    numSubgroups: a,
    parentGroupSubject: r
  } = e;
  const {
    groupType: o,
    size: i,
    owner: u,
    participants: d
  } = n;
  const f = c.default.isRTL() ? " - " : " · ";
  switch (o) {
    case s.GroupType.LINKED_ANNOUNCEMENT_GROUP:
      return g.fbt._({
        "*": "Announcement group{separator}{number_of_participants} participants",
        _1: "Announcement group{separator}1 participant"
      }, [g.fbt._plural(i != null ? i : 0, "number_of_participants"), g.fbt._param("separator", f)], {
        hk: "1qWVR5"
      });
    case s.GroupType.COMMUNITY:
      return g.fbt._({
        "*": "Community{separator}{number} groups",
        _1: "Community{separator}1 group"
      }, [g.fbt._plural(a != null ? a : 0, "number"), g.fbt._param("separator", f)], {
        hk: "4veTGl"
      });
    case s.GroupType.LINKED_SUBGROUP:
      if (r != null) {
        return g.fbt._("Group in \"{community}\"", [g.fbt._param("community", r)], {
          hk: "3U7lu7"
        });
      }
  }
  const p = u && ((t = d.get(u)) === null || t === undefined ? undefined : t.contact);
  return l.Clock.createdByOnDateStr(n.creation, p);
};
exports.shouldSendInviteRequest = function () {
  if (!p.default.online) {
    h.ToastManager.open(E.default.createElement(m.Toast, {
      msg: g.fbt._("Check your connection and try again.", null, {
        hk: "3GDdHu"
      })
    }));
    f.ModalManager.close();
    return false;
  }
  return true;
};
exports.sortFacePileContacts = function (e, t) {
  const n = [];
  let a = [];
  e.map(e => {
    if (e.contact.getProfilePicThumb().img != null) {
      n.push(e);
    } else {
      a.push(e);
    }
  });
  n.sort(v);
  a = a.slice(0, 2);
  let r = n.concat(a);
  r = r.slice(0, 5);
  const o = Math.max(0, (t != null ? t : e.length) - r.length);
  return {
    sortedContacts: r,
    hiddenPileCount: o
  };
};
var r = require("../app/287461.js");
var o = require("../app/984330.js");
var l = require("../app/63014.js");
var i = require("../app/174834.js");
var u = a(require("../app/395767.js"));
var s = require("../app/862159.js");
var c = a(require("../app/932325.js"));
var d = require("./956932.js");
var f = require("../app/114850.js");
var p = a(require("../app/99398.js"));
var m = require("../app/625786.js");
var h = require("../app/390737.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
function v(e, t) {
  return Number(t.isAdmin) - Number(e.isAdmin);
}