var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteChatPopup = function (e) {
  var t;
  var n;
  var a;
  const {
    onCancel: O,
    onDeleteOrExit: k
  } = e;
  const D = (0, T.useModelValues)(e.chat, ["id", "isPSA", "isReadOnly", "isGroup", "isUser", "isBroadcast", "groupMetadata", "archive", "isNewsletter"]);
  const I = () => {
    if (D.isPSA) {
      u.Cmd.archiveChatFromEntryPoint((0, _.unproxy)(D), true, 7);
    } else {
      u.Cmd.archiveChat((0, _.unproxy)(D), true);
    }
    E.ModalManager.close();
  };
  let R;
  if (!(!D.isGroup || D.isReadOnly || D.archive)) {
    R = {
      text: (0, p.default)("Archive instead"),
      onClick: I
    };
  }
  if ((0, s.communitiesEnabled)() && ((t = D.groupMetadata) === null || t === undefined ? undefined : t.groupType) === m.GroupType.LINKED_ANNOUNCEMENT_GROUP && !(0, i.isIntegritySuspendedDefaultSubgroup)(D) && !(0, i.isTerminatedGroup)(D)) {
    var N;
    var x;
    if (Boolean((N = D.groupMetadata) === null || N === undefined ? undefined : N.participants.iAmAdmin())) {
      return S.default.createElement(h.LeaveCommunityAnnouncementGroupAdminPopup, {
        isCommunityCreator: Boolean((x = D.groupMetadata) === null || x === undefined ? undefined : x.participants.iAmSuperAdmin()),
        isArchived: D.archive,
        onArchive: I
      });
    }
    if ((0, s.communityAnnouncementImprovementM3Enabled)()) {
      return S.default.createElement(h.LeaveCommunityAnnouncementGroupMemberPopup, {
        isArchived: D.archive,
        onArchive: I
      });
    }
  }
  const L = (0, l.isCommunityCreator)((n = D.groupMetadata) === null || n === undefined ? undefined : n.getParentGroupChat());
  if (((a = D.groupMetadata) === null || a === undefined ? undefined : a.groupType) === m.GroupType.LINKED_GENERAL_GROUP && L) {
    return S.default.createElement(g.LeaveCommunityGeneralChatPopup, {
      isArchived: D.archive,
      onArchive: I
    });
  }
  return S.default.createElement(c.ConfirmPopup, {
    title: A(D),
    onOK: () => {
      var e;
      let t;
      if (((e = D.groupMetadata) === null || e === undefined ? undefined : e.groupType) === m.GroupType.COMMUNITY) {
        const e = (0, r.default)(D.groupMetadata, "chat.groupMetadata").joinedSubgroups.map(e => {
          const t = o.ChatCollection.get(e);
          return {
            id: e,
            subject: (0, r.default)(t, "subgroupChat").formattedTitle
          };
        });
        t = (0, C.databaseUpdatesForSubgroupUnlink)(D.id, e).then(e => Promise.all(e)).then(() => {
          (0, b.updateModelsForSubgroupUnlink)(D.id, e);
          return (0, d.sendDelete)(D);
        });
      } else if (D.isGroup) {
        t = D.isReadOnly ? (0, d.sendDelete)(D) : (0, f.sendExitGroup)(D).then(() => {});
      } else if (D.isUser || D.isBroadcast) {
        t = (0, d.sendDelete)(D);
      } else {
        __LOG__(3)`deleteChatPopup:onDelete Unsupported chat type`;
      }
      if (t) {
        k(t);
      }
      E.ModalManager.close();
    },
    okText: P(D),
    onCancel: () => {
      E.ModalManager.close();
      if (!(O == null)) {
        O();
      }
    },
    extraButtonProps: R
  }, S.default.createElement(y.TextDiv, {
    theme: "muted"
  }, function (e) {
    if (function (e) {
      return e.isGroup && e.isReadOnly || e.isUser || e.isBroadcast;
    }(e)) {
      return null;
    }
    if (w(e)) {
      var t;
      var n;
      const r = (t = e.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
      var a;
      if ((r == null ? undefined : r.formattedTitle) != null) {
        if (((a = e.groupMetadata) === null || a === undefined ? undefined : a.groupType) === m.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
          return M.fbt._("By exiting this group you will also exit and lose access to the community \"{community_name}.\"", [M.fbt._param("community_name", S.default.createElement(v.Name, {
            chat: r,
            titlify: true
          }))], {
            hk: "j50Jr"
          });
        } else {
          return M.fbt._("By exiting the group \"{group_name}\" you will also exit and lose access to the community \"{community_name}.\"", [M.fbt._param("group_name", S.default.createElement(v.Name, {
            chat: e,
            titlify: true
          })), M.fbt._param("community_name", S.default.createElement(v.Name, {
            chat: r,
            titlify: true
          }))], {
            hk: "cXamv"
          });
        }
      } else if (((n = e.groupMetadata) === null || n === undefined ? undefined : n.groupType) === m.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        return M.fbt._("By exiting this group you will also exit and lose access to the community.", null, {
          hk: "3UXikw"
        });
      } else {
        return M.fbt._("By exiting the group \"{group_name}\" you will also exit and lose access to the community.", [M.fbt._param("group_name", S.default.createElement(v.Name, {
          chat: e,
          titlify: true
        }))], {
          hk: "1aMHPz"
        });
      }
    }
    return M.fbt._("Only group admins will be notified that you left the group.", null, {
      hk: "2h7JvK"
    });
  }(D)));
};
var r = a(require("../app/670983.js"));
var o = require("../app/351053.js");
var l = require("../app/394164.js");
var i = require("../app/374660.js");
var u = require("../app/780549.js");
var s = require("../app/174834.js");
var c = require("../app/103440.js");
var d = require("./95049.js");
var f = require("../app/887440.js");
var p = a(require("../app/395767.js"));
var m = require("../app/862159.js");
var h = require("./106630.js");
var g = require("./486816.js");
var E = require("../app/114850.js");
var v = require("../app/21645.js");
var _ = require("../app/163139.js");
var y = require("../app/180519.js");
var C = require("../app/858029.js");
var b = require("./612180.js");
var M = require("../vendor/548360.js");
var S = a(require("../vendor/667294.js"));
var T = require("../app/655241.js");
function w(e) {
  var t;
  var n;
  const a = (t = e.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
  return (0, s.communitiesEnabled)() && (a == null || (n = a.groupMetadata) === null || n === undefined ? undefined : n.joinedSubgroups.length) === 1;
}
function A(e) {
  var t;
  if (((t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === m.GroupType.COMMUNITY) {
    return M.fbt._("Delete this community?", null, {
      hk: "2CNyvW"
    });
  } else if (e.isGroup) {
    if (w(e) && !e.isReadOnly) {
      return M.fbt._("Exit group and community?", null, {
        hk: "1wubvS"
      });
    } else if (e.isReadOnly) {
      return M.fbt._("Delete this group?", null, {
        hk: "2PlADN"
      });
    } else {
      return M.fbt._("Exit \"{group_name}\" group?", [M.fbt._param("group_name", S.default.createElement(v.Name, {
        chat: e,
        titlify: true
      }))], {
        hk: "2shtgT"
      });
    }
  } else if (e.isUser) {
    return M.fbt._("Delete this chat?", null, {
      hk: "3v4QBf"
    });
  } else if (e.isBroadcast) {
    return M.fbt._("Delete broadcast list?", null, {
      hk: "Xp84E"
    });
  } else {
    return undefined;
  }
}
function P(e) {
  var t;
  if (((t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) === m.GroupType.COMMUNITY) {
    return M.fbt._("Delete community", null, {
      hk: "3JfWQv"
    });
  } else if (e.isGroup) {
    if (e.isReadOnly) {
      return M.fbt._("Delete group", null, {
        hk: "Raajp"
      });
    } else {
      return M.fbt._("Exit group", null, {
        hk: "wnp71"
      });
    }
  } else if (e.isUser || e.isBroadcast) {
    return M.fbt._("Delete chat", null, {
      hk: "w3dKM"
    });
  } else {
    return undefined;
  }
}