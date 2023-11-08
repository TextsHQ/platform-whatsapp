var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactImage = function (e) {
  let {
    contact: t,
    size: n,
    theme: a,
    waitIdle: c,
    ephemeralIcon: d,
    searchQuery: f,
    showStatusRingAroundProfilePhoto: p,
    loadPicture: m = true
  } = e;
  if (p === true) {
    if ((0, r.isSearchResult)(f)) {
      return s.default.createElement(l.default, {
        contact: t,
        photoSize: n,
        waitIdle: c,
        rowSection: u.STATUS_ROW_SECTION.CHAT_LIST_SEARCH,
        rowIndex: 0
      });
    } else {
      return s.default.createElement(i.StatusV3ProfilePhotoRingWrapper, {
        contact: t,
        waitIdle: c,
        photoSize: n,
        hideWhenNoUnreadStatuses: false,
        rowSection: u.STATUS_ROW_SECTION.GROUP_PARTICIPANT,
        rowIndex: 0
      });
    }
  }
  return s.default.createElement(o.DetailImage, {
    id: t.id,
    size: n,
    ephemeralIcon: d,
    waitIdle: c,
    loadPicture: m
  });
};
var r = require("./668231.js");
var o = require("../app/23641.js");
var l = a(require("./18290.js"));
var i = require("./83271.js");
var u = require("./122093.js");
var s = a(require("../vendor/667294.js"));