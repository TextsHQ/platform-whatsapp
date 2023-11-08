var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunityGeneralChatWelcome = function (e) {
  var t;
  var n;
  const {
    templateParams: a,
    subgroupChat: g,
    author: E
  } = e;
  const [v, _] = a;
  if (((t = g.groupMetadata) === null || t === undefined ? undefined : t.parentGroup) == null) {
    return m.default.createElement("div", {
      className: (0, h.default)(f.uiPadding.vert6, f.uiPadding.horiz12)
    }, (0, d.communityGeneralChatWelcomeTitle)(g.formattedTitle));
  }
  const y = g.groupMetadata.parentGroup;
  const C = o.ChatCollection.get(y);
  const b = C == null ? undefined : C.formattedTitle;
  const M = _ != null ? _ : g == null ? undefined : g.formattedTitle;
  const S = (n = C == null ? undefined : C.iAmAdmin()) !== null && n !== undefined && n;
  let T;
  switch (v) {
    case "created":
      T = p.fbt._("Any new community members will automatically be added here", null, {
        hk: "2PmTis"
      });
      break;
    case "general_chat_auto_add":
      T = p.fbt._("You were added to this group when you joined the community", null, {
        hk: "3myHkn"
      });
      break;
    case "accept":
    case "":
    case null:
      {
        const e = (0, s.getFormattedNames)(E);
        T = e != null && e !== "" ? p.fbt._("{admin_name} added you", [p.fbt._param("admin_name", e)], {
          hk: "2nVNKA"
        }) : p.fbt._("You joined this group", null, {
          hk: "mQW5x"
        });
        break;
      }
    case "invite":
    case "linked_group_join":
    default:
      T = p.fbt._("You joined this group", null, {
        hk: "mQW5x"
      });
  }
  const w = [m.default.createElement(m.default.Fragment, null, T), p.fbt._("All community members can use this chat to talk with each other", null, {
    hk: "3vkCOS"
  })];
  const A = S ? p.fbt._("Add participants", null, {
    hk: "392H10"
  }) : p.fbt._("Explore the community", null, {
    hk: "3ZYcad"
  });
  return m.default.createElement(c.MessageCommunityCard, {
    communityId: y,
    subgroupId: g.id,
    title: (0, d.communityGeneralChatWelcomeTitle)(M),
    body: m.default.createElement(c.BulletedList, {
      items: w
    }),
    footer: A,
    onFooterClick: () => {
      if (S) {
        (0, u.groupOpenAddParticipantFlow)((0, r.default)(g.groupMetadata, "subgroupChat.groupMetadata"), g, b);
      } else if ((0, i.communityTabbedInfoEnabled)()) {
        l.Cmd.openCommunityTabbedInfo(y);
      } else {
        l.Cmd.openCommunityHome(y, undefined, true);
      }
    }
  });
};
var r = a(require("../app/670983.js"));
var o = require("../app/351053.js");
var l = require("../app/780549.js");
var i = require("../app/174834.js");
var u = require("./692310.js");
var s = require("../app/436355.js");
var c = require("../app/210190.js");
var d = require("../app/752202.js");
var f = require("../app/676345.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));