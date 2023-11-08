var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const {
    unreadCount: e,
    showUnreadMentionIcon: t
  } = (0, E.useWAWebArchivedChatsActivityIndicator)();
  const n = e === 0 || t ? null : g.default.createElement("div", {
    className: u.default.unreadCountWrapper
  }, g.default.createElement(c.default, {
    count: e,
    transparentBg: true
  }));
  const a = g.default.createElement(f.FlexRow, {
    align: "center",
    justify: "center",
    className: u.default.archivedIcon
  }, g.default.createElement(o.ArchivedIcon, null));
  const v = t ? g.default.createElement("div", {
    className: u.default.iconMentions,
    key: "icon-mentions"
  }, g.default.createElement(p.MentionsIcon, {
    className: u.default.iconMentions
  })) : null;
  const _ = [h.fbt._("Archived", null, {
    hk: "1PK2es"
  }), t ? h.fbt._("@ message", null, {
    hk: "2UzXVt"
  }) : ""].join(" ");
  const y = g.default.createElement(g.default.Fragment, null, v, n);
  return g.default.createElement(g.default.Fragment, null, g.default.createElement("button", {
    "data-tab": m.TAB_ORDER.ARCHIVED_ENTRY_POINT,
    className: u.default.wrapper,
    onClick: () => {
      new s.ChatFolderOpenWamEvent({
        activityIndicatorCount: e,
        folderType: "Archive"
      }).commit();
      d.DrawerManager.openDrawerLeft(g.default.createElement(r.ArchivedFlowLoadable, {
        onEnd: () => d.DrawerManager.closeDrawerLeft()
      }));
    },
    "aria-label": _
  }, g.default.createElement(i.default, {
    role: "group",
    ariaColIndex: null,
    image: a,
    primary: h.fbt._("Archived", null, {
      hk: "1PK2es"
    }),
    detail: y,
    theme: "archive-panel"
  })), g.default.createElement(l.default, null));
};
var r = require("./767173.js");
var o = require("./271647.js");
var l = a(require("./579484.js"));
var i = a(require("../main-chunk/170206.js"));
var u = a(require("./402865.js"));
var s = require("./181748.js");
var c = a(require("./683874.js"));
var d = require("../app/900316.js");
var f = require("../app/690495.js");
var p = require("./229281.js");
var m = require("../main-chunk/931109.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));
var E = require("./161119.js");