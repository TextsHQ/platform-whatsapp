var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/659177.js"));
var o = require("../app/396574.js");
var l = a(require("./820760.js"));
var i = require("../app/905225.js");
var u = a(require("../vendor/667294.js"));
var s = e => {
  let {
    children: t,
    icon: n,
    secondary: a,
    theme: s
  } = e;
  let c = (0, o.classnamesConvertMeToStylexPlease)({
    [l.default.inConversation]: s === "conversation",
    [l.default.inList]: s === "list",
    [l.default.mdChatSearchList]: s === "md-chat-search-list",
    [l.default.themeChatInfo]: s === "chat-info",
    [l.default.themeReportedMsg]: s === "reported-msg",
    [l.default.container]: true
  });
  if (s === "conversation") {
    const e = r.default.get("defaultPreference");
    if (e && e.wallpaperColor === i.DEFAULT_CHAT_WALLPAPER) {
      c = (0, o.classnamesConvertMeToStylexPlease)(c, l.default.defaultWallpaper);
    }
  }
  const d = n != null ? u.default.createElement("div", {
    className: l.default.icon
  }, n) : null;
  const f = a != null ? u.default.createElement("div", {
    className: l.default.secondary
  }, a) : null;
  return u.default.createElement("div", {
    className: c
  }, d, u.default.createElement("div", {
    className: l.default.body
  }, u.default.createElement("div", {
    className: l.default.main
  }, t), f));
};
exports.default = s;