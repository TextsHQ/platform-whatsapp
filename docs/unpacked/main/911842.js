var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupChatProfilePicture = function (e) {
  let {
    chatWid: t,
    userContact: n,
    usePicInBubbleLayout: a = false,
    disableClick: m = false
  } = e;
  const h = r.ChatCollection.get(t);
  const g = (0, o.getOneToOneContactFromGroupContact)(n.id);
  const E = h ? (0, l.getAssignedColor)(h, g) : 1;
  const v = (0, s.elevatedPushNamesEnabled)(h);
  const _ = (0, d.getAuthorName)(n.id, n, v);
  const y = f.fbt._("Open chat details for {author-name}", [f.fbt._param("author-name", _)], {
    hk: "42ybx"
  });
  return p.default.createElement(u.DetailImage, {
    testId: "group-chat-profile-picture",
    id: n.id,
    size: u.DetailImageSize.None,
    theme: a ? "group_profile_picture_in_bubble" : "group_profile_picture",
    loadAnimation: false,
    onClick: Boolean(m) ? null : () => {
      (0, c.findChat)(g, "groupChatProfilePicture").then(e => {
        if (e != null) {
          i.Cmd.chatInfoDrawer(e);
        }
      });
    },
    authorColor: E,
    tabIndex: 0,
    ariaLabel: y
  });
};
var r = require("../app/351053.js");
var o = require("../app/374660.js");
var l = require("../app/760797.js");
var i = require("../app/780549.js");
var u = require("../app/23641.js");
var s = require("../app/235630.js");
var c = require("../app/581354.js");
var d = require("./115900.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));