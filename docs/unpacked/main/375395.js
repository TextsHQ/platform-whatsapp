var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCommunityAdminPromotionNotificationPopup = function (e) {
  if (e == null) {
    return;
  }
  const t = p(e);
  if (t == null) {
    return;
  }
  u.ModalManager.open(f.default.createElement(o.CommunityAdminPromotionNotificationFlowLoadable, {
    communityMetadata: t
  }));
};
exports.shouldOpenCommunityAdminPromotionNotificationPopup = function (e) {
  if (e == null) {
    return false;
  }
  if (!(0, l.communityAdminPromotionOneTimePromptEnabled)()) {
    return false;
  }
  if ((0, r.isDeactivatedCommunityAnnouncementGroup)(e)) {
    return false;
  }
  if ((0, r.isSuspendedGroup)(e)) {
    return false;
  }
  const t = p(e);
  if (t == null) {
    return false;
  }
  if (!t.participants.iAmAdmin() || (0, c.isMeAccount)(t.owner) || !(0, d.shouldShowNUX)((0, s.getCommunityAdminPromotionNuxKey)(t.id.toString()))) {
    return false;
  }
  return true;
};
var r = require("../app/374660.js");
var o = require("./807101.js");
var l = require("../app/174834.js");
var i = require("../app/862159.js");
var u = require("../app/114850.js");
var s = require("../app/95589.js");
var c = require("../app/459857.js");
var d = require("../app/377773.js");
var f = a(require("../vendor/667294.js"));
function p(e) {
  var t;
  const n = e.groupMetadata;
  if (n == null) {
    return;
  }
  let a;
  switch (n.groupType) {
    case i.GroupType.COMMUNITY:
      a = n;
      break;
    case i.GroupType.LINKED_ANNOUNCEMENT_GROUP:
      a = (t = n.getParentGroupChat()) === null || t === undefined ? undefined : t.groupMetadata;
  }
  return a;
}