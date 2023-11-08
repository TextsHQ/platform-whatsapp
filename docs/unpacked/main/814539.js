var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3ProfilePhotoRing = function (e) {
  const {
    contactStatusV3: t,
    photoSize: a,
    waitIdle: d,
    hideWhenNoUnreadStatuses: f,
    rowSection: p,
    rowIndex: m
  } = e;
  const h = (0, c.useModelValues)(t, ["contact", "totalCount", "unreadCount"]);
  const g = h.unreadCount === 0 && e.hideWhenNoUnreadStatuses || h.totalCount === 0;
  const E = (0, r.getSize)(a);
  const v = E != null ? E + 4 : 53;
  return s.default.createElement(s.default.Fragment, null, s.default.createElement(u.StatusV3ImageRing, {
    statusV3: h,
    size: v,
    stroke: 4,
    hideWhenNoUnreadStatuses: f,
    theme: u.RingTheme.ChatList,
    respectAppTheme: true,
    breakRing: false
  }), s.default.createElement(l.HotKeys, {
    onClick: e => {
      if (g) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      const a = (0, o.default)(require("./3470.js"));
      i.ModalManager.openMedia(s.default.createElement(a, {
        statusV3: t,
        onClose: () => i.ModalManager.closeMedia(),
        rowSection: p,
        rowIndex: m
      }), {
        transition: "status-v3-modal"
      });
    }
  }, s.default.createElement(r.DetailImage, {
    id: h.contact.id,
    theme: g ? undefined : "status_v3_profile_photo_ring",
    size: a,
    waitIdle: d,
    ephemeralIcon: "chat-list"
  })));
};
var r = require("../app/23641.js");
var o = a(require("../app/97359.js"));
var l = require("../app/81644.js");
var i = require("../app/114850.js");
var u = require("./473016.js");
var s = a(require("../vendor/667294.js"));
var c = require("../app/655241.js");