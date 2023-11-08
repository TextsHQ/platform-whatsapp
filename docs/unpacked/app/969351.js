var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLinkNotifAsFbt = function (e, t, n, r) {
  return m(e, t, n, r, false);
};
exports.formatLinkNotification = m;
var i = require("./287461.js");
var a = require("./436355.js");
var o = r(require("./667845.js"));
var s = r(require("./932325.js"));
var l = r(require("./825158.js"));
var u = require("./628199.js");
var c = require("./459857.js");
var d = r(require("./124928.js"));
var p = require("../vendor/548360.js");
var f = r(require("../vendor/667294.js"));
const _ = e => e instanceof d.default && (0, c.isMeAccount)(e);
function g(e) {
  return !e;
}
function m(e, t, n, r, c) {
  const d = t ? (0, a.getFormattedName)(t, !c, e) : null;
  const m = n ? (0, a.getFormattedName)(n, !c) : null;
  switch (e) {
    case "parent_group_link":
      return function (e, t, n, r) {
        const i = (0, a.getFormattedCommunityNameWithAlternative)({
          jid: e[0],
          asString: !t,
          alternativeStringName: e[1]
        });
        if (!g(i) && _(n)) {
          return p.fbt._("You added this group and its participants to the community {community}", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(i, !t))], {
            hk: "4nckix"
          });
        }
        if (g(i) && _(n)) {
          return p.fbt._("You added this group and its participants to a community", null, {
            hk: "2WbR5d"
          });
        }
        if (!g(i) && n != null) {
          return p.fbt._("{author} added this group and its participants to the community {community}", [p.fbt._param("author", r), p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(i, !t))], {
            hk: "3d0Fnn"
          });
        }
        if (!g(i) && n == null) {
          return p.fbt._("This group and its participants were added to the community {community}", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(i, !t))], {
            hk: "2GnUkW"
          });
        }
        if (g(i) && n != null) {
          return p.fbt._("{author} added this group and its participants to a community", [p.fbt._param("author", r)], {
            hk: "8zlZu"
          });
        }
        return p.fbt._("This group and its participants were added to a community", null, {
          hk: "3cwk3U"
        });
      }(r, c, t, d);
    case "parent_group_link_membership_approval":
      return function (e, t) {
        var n;
        const r = (0, a.getFormattedCommunityNameWithAlternative)({
          jid: e[0],
          asString: !t,
          alternativeStringName: e[1]
        });
        const s = e[0];
        const l = Boolean(s ? (n = o.default.get(s)) === null || n === undefined ? undefined : n.isParentGroupClosed : undefined);
        const u = e[2] === "admin";
        const c = e[3] === "true";
        if ((0, i.getABPropConfigValue)("group_join_request_m2") && c) {
          if (u) {
            return p.fbt._("New participants need admin approval to join this group. Click to change.", null, {
              hk: "1d3CFC"
            });
          } else {
            return p.fbt._("New participants need admin approval to join this group.", null, {
              hk: "3l1C92"
            });
          }
        }
        if (!(0, i.getABPropConfigValue)("group_join_request_m2_setting") && l) {
          if (g(r)) {
            return p.fbt._("Anyone in this community can request to join this group by messaging group admins.", null, {
              hk: "4sPAx1"
            });
          } else {
            return p.fbt._("Anyone in the community {community} can request to join this group by messaging group admins.", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(r, !t))], {
              hk: "3BCa3y"
            });
          }
        }
        if ((0, i.getABPropConfigValue)("group_join_request_m2_setting")) {
          if (c) {
            if (u) {
              return p.fbt._("New participants need admin approval to join this group. Click to change.", null, {
                hk: "1d3CFC"
              });
            } else {
              return p.fbt._("New participants need admin approval to join this group.", null, {
                hk: "3l1C92"
              });
            }
          }
          if (u) {
            if (g(r)) {
              return p.fbt._("Anyone in this community can join this group. Click to change.", null, {
                hk: "1b1S29"
              });
            } else {
              return p.fbt._("Anyone in the community {community} can join this group. Click to change.", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(r, !t))], {
                hk: "1LStFi"
              });
            }
          }
        }
        if (!g(r)) {
          return p.fbt._("Anyone in the community {community} can join this group.", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(r, !t))], {
            hk: "1ZW3he"
          });
        }
        return p.fbt._("Anyone in this community can join this group.", null, {
          hk: "1Vut2l"
        });
      }(r, c);
    case "sibling_group_link":
      return function (e, t, n, r, i) {
        const [...o] = e;
        const c = (0, a.getFormattedGroupListForCommunity)(o, !t, i);
        const d = (0, u.unFlattenPairList)(o).length;
        if (_(n)) {
          if (c == null) {
            return p.fbt._({
              "*": "You added {count} groups",
              _1: "You added 1 group"
            }, [p.fbt._plural(d, "count")], {
              hk: "3cW3UL"
            });
          } else {
            return p.fbt._({
              "*": "You added the groups {groups}",
              _1: "You added the group {groups}"
            }, [p.fbt._plural(d), p.fbt._param("groups", c)], {
              hk: "NvT7c"
            });
          }
        }
        if (n != null) {
          if (c == null) {
            return p.fbt._({
              "*": "{author} added {count} groups",
              _1: "{author} added 1 group"
            }, [p.fbt._plural(d, "count"), p.fbt._param("author", r)], {
              hk: "1vwggs"
            });
          } else {
            return p.fbt._({
              "*": "{author} added the groups {groups}",
              _1: "{author} added the group {groups}"
            }, [p.fbt._plural(d), p.fbt._param("author", r), p.fbt._param("groups", c)], {
              hk: "1tOS3J"
            });
          }
        }
        if (c == null) {
          return p.fbt._({
            "*": "{count} groups were added",
            _1: "1 group was added"
          }, [p.fbt._plural(d, "count")], {
            hk: "1ACK5U"
          });
        }
        if (!t) {
          return s.default.t(38, {
            formattedNames: c,
            _plural: d
          });
        }
        return f.default.createElement(l.default, {
          id: 38,
          plural: d,
          params: {
            count: d,
            formattedNames: c
          }
        });
      }(r, c, t, d, e);
    case "sub_group_link":
      break;
    case "parent_group_unlink":
      return function (e, t, n, r) {
        const [...i] = e;
        const o = (0, a.getFormattedCommunityNameWithAlternative)({
          jid: i[0],
          asString: !t,
          alternativeStringName: i[1]
        });
        if (o != null && _(n)) {
          return p.fbt._("You removed this group from the community {community}", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(o, !t))], {
            hk: "2X88Ik"
          });
        }
        if (o == null && _(n)) {
          return p.fbt._("You removed this group from a community", null, {
            hk: "1mLYQR"
          });
        }
        if (o != null && n != null) {
          return p.fbt._("{author} removed this group from the community {community}", [p.fbt._param("author", r), p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(o, !t))], {
            hk: "2Pjtdd"
          });
        }
        if (o != null && n == null) {
          return p.fbt._("This group was removed from the community {community}", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(o, !t))], {
            hk: "2eO6Mn"
          });
        }
        if (o == null && n != null) {
          return p.fbt._("{author} removed this group from a community", [p.fbt._param("author", r)], {
            hk: "1hLgAv"
          });
        }
        return p.fbt._("This group was removed from a community", null, {
          hk: "1UqTCc"
        });
      }(r, c, t, d);
    case "integrity_parent_group_unlink":
      return function (e, t) {
        const n = (0, a.getClickableIntegrityDeactivateCommunityName)(e[0], e[1], t);
        if (n != null) {
          return p.fbt._("This group is no longer part of the community {community}", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(n, !t))], {
            hk: "3Tg8im"
          });
        }
        return p.fbt._("This group is no longer part of a community", null, {
          hk: "ke9K9"
        });
      }(r, c);
    case "delete_parent_group_unlink":
    case "delete_parent_group":
      return function (e, t, n, r) {
        let i;
        if (!(e[0] == null || typeof e[0] != "string" || g(e[0]))) {
          i = (0, a.getClickableDeactivatedCommunityName)(e[0], r);
        }
        if (i != null && t != null) {
          if (_(n)) {
            return p.fbt._("You deactivated the community {community}", [p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(i, !r))], {
              hk: "YWd8W"
            });
          } else {
            return p.fbt._("{author} deactivated the community {community}", [p.fbt._param("author", t), p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(i, !r))], {
              hk: "ZmtSZ"
            });
          }
        }
        if (_(n)) {
          return p.fbt._("You deactivated a community", null, {
            hk: "9fqss"
          });
        }
        if (t != null) {
          return p.fbt._("{author} deactivated a community", [p.fbt._param("author", t)], {
            hk: "4AXmkv"
          });
        }
        return p.fbt._("A community was deactivated", null, {
          hk: "40jOZC"
        });
      }(r, d, t, c);
    case "sibling_group_unlink":
      return function (e, t, n, r) {
        const [...i] = e;
        const o = (0, a.getFormattedGroupListForCommunity)(i, !t);
        const c = (0, u.unFlattenPairList)(i).length;
        if (_(n)) {
          if (o == null) {
            return p.fbt._({
              "*": "You removed {count} groups",
              _1: "You removed 1 group"
            }, [p.fbt._plural(c, "count")], {
              hk: "tjTNY"
            });
          } else {
            return p.fbt._({
              "*": "You removed the groups {groups}",
              _1: "You removed the group {groups}"
            }, [p.fbt._plural(c), p.fbt._param("groups", o)], {
              hk: "2asmYg"
            });
          }
        }
        if (n != null) {
          if (o == null) {
            return p.fbt._({
              "*": "{author} removed {count} groups",
              _1: "{author} removed 1 group"
            }, [p.fbt._plural(c, "count"), p.fbt._param("author", r)], {
              hk: "tj8st"
            });
          } else {
            return p.fbt._({
              "*": "{author} removed the groups {groups}",
              _1: "{author} removed the group {groups}"
            }, [p.fbt._plural(c), p.fbt._param("author", r), p.fbt._param("groups", o)], {
              hk: "5MzvX"
            });
          }
        }
        if (o == null) {
          return p.fbt._({
            "*": "{count} groups were removed",
            _1: "1 group was removed"
          }, [p.fbt._plural(c, "count")], {
            hk: "4DvbDx"
          });
        }
        if (!t) {
          return s.default.t(39, {
            formattedNames: o,
            _plural: c
          });
        }
        return f.default.createElement(l.default, {
          id: 39,
          plural: c,
          params: {
            count: c,
            formattedNames: o
          }
        });
      }(r, c, t, d);
    case "sub_group_unlink":
      break;
    case "community_create":
      return function (e, t, n, r) {
        const i = (0, a.getFormattedCommunityNameWithAlternative)({
          jid: e[0],
          asString: !t,
          alternativeStringName: e[1]
        });
        if (g(i)) {
          if (r != null) {
            return function (e) {
              return p.fbt._("{author} created the community", [p.fbt._param("author", e)], {
                hk: "4Dguct"
              });
            }(r);
          } else if (_(n)) {
            return p.fbt._("You created the community", null, {
              hk: "4ubjtI"
            });
          } else {
            return p.fbt._("The community was created", null, {
              hk: "1IVIoH"
            });
          }
        }
        if (_(n)) {
          o = i;
          return p.fbt._("You created the community \"{community_name}\"", [p.fbt._param("community_name", o)], {
            hk: "48XnL6"
          });
        }
        if (r != null) {
          return function (e, t) {
            return p.fbt._("{author} created the community \"{community_name}\"", [p.fbt._param("author", e), p.fbt._param("community_name", t)], {
              hk: "4ozVy8"
            });
          }(r, i);
        }
        var o;
        return function (e) {
          return p.fbt._("The community \"{community_name}\" was created", [p.fbt._param("community_name", e)], {
            hk: "41b5fU"
          });
        }(i);
      }(r, c, t, d);
    case "linked_group_join":
      return function (e, t) {
        if (_(e)) {
          return p.fbt._("You joined from the community", null, {
            hk: "2Dw6An"
          });
        }
        return p.fbt._("{author} joined from the community", [p.fbt._param("author", t)], {
          hk: "XjW5z"
        });
      }(n, m);
    case "auto_add":
    case "default_sub_group_admin_add":
      return function (e, t, n) {
        if (e && e.length >= 2) {
          const r = (0, a.getFormattedCommunityNameWithAlternative)({
            jid: e[0],
            asString: !t,
            alternativeStringName: e[1]
          });
          if (g(r)) {
            return p.fbt._("{author} added you to this group and the community", [p.fbt._param("author", n)], {
              hk: "2hKjk"
            });
          } else {
            return p.fbt._("{author} added you to this group and the community {community}", [p.fbt._param("author", n), p.fbt._param("community", (0, a.getCommunityNameInQuotationMarks)(r, !t))], {
              hk: "3cZOZ3"
            });
          }
        }
        return p.fbt._("{author} added you", [p.fbt._param("author", n)], {
          hk: "43QqY3"
        });
      }(r, c, d);
    case "invite_auto_add":
      return function (e, t, n, r) {
        let i;
        let o = false;
        if (e && e.length >= 3) {
          i = (0, a.getFormattedNameIfExists)(e[0]);
          if (i == null) {
            i = e[1];
          }
          if (e[2] === "true") {
            o = true;
          }
        }
        if (!o) {
          if (_(n)) {
            if (g(i)) {
              return p.fbt._("You were added to this community", null, {
                hk: "4e1yk2"
              });
            } else {
              return p.fbt._("You were added to this community because you joined the group {group-name}", [p.fbt._param("group-name", (0, a.getCommunityNameInQuotationMarks)(i, !t))], {
                hk: "CVGkJ"
              });
            }
          } else {
            return p.fbt._("{user_name} joined", [p.fbt._param("user_name", r)], {
              hk: "nMrAo"
            });
          }
        }
        if (_(n)) {
          if (g(i)) {
            return p.fbt._("You were added", null, {
              hk: "2zV9JG"
            });
          } else {
            return p.fbt._("You were added because you joined the group {group-name}", [p.fbt._param("group-name", (0, a.getCommunityNameInQuotationMarks)(i, !t))], {
              hk: "PPL4x"
            });
          }
        }
        return p.fbt._("{user_name} joined", [p.fbt._param("user_name", r)], {
          hk: "nMrAo"
        });
      }(r, c, n, m);
    default:
      __LOG__(2)`wa:formatLinkNotification:unknown message subtype: ${e}`;
  }
}