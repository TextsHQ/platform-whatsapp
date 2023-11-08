var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chatContainsGoldenBox = function (e) {
  if (e == null) {
    return false;
  }
  if ((0, o.isSupportGroup)(e) || (0, r.default)(e.id.user)) {
    return false;
  }
  if (e.isUser) {
    return !(!e.contact.isEnterprise || (0, p.getReducedPrivacyMode)(e.contact.privacyMode) !== p.ReducedPrivacyMode.E2EE) || !e.contact.isEnterprise;
  }
  if (e.isGroup || e.isBroadcast) {
    return true;
  }
  return false;
};
exports.getHighlightSurfaceForGoldenBox = function (e) {
  if (E.default.isGroup(e)) {
    return g.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP;
  }
  if (E.default.isBroadcast(e)) {
    return g.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_BROADCAST;
  }
  if (E.default.isUser(e)) {
    return g.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT;
  }
  __LOG__(3, true, undefined, true)`getHighlightSurfaceForGoldenBox Invalid ChatId`;
  SEND_LOGS("get-highlight-surface-invalid-chat-id");
};
exports.securityUrl = function () {
  return h.default.build("https://www.whatsapp.com/security/", {
    lg: c.default.getLocale()
  });
};
exports.shouldShowNewE2eInfoModal = _;
exports.showEncryptionInfoPopup = function (e) {
  if ((0, d.isPrivacyNarrativeV1Enabled)() && _((0, m.unproxy)(e))) {
    const e = (0, u.getE2EFaqUrl)();
    return void f.ModalManager.open(v.default.createElement(i.E2eInfoModalV2, {
      highlightSurface: g.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
      url: e
    }));
  }
  f.ModalManager.open(v.default.createElement(l.default, {
    highlightSurface: g.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
    chatId: e.id,
    e2eSubtype: "info_encrypted"
  }));
};
var r = a(require("../app/143589.js"));
var o = require("../app/374660.js");
var l = a(require("./209064.js"));
var i = require("./673509.js");
var u = require("../app/258105.js");
var s = a(require("../app/97359.js"));
var c = a(require("../app/932325.js"));
var d = require("../app/97858.js");
var f = require("../app/114850.js");
var p = require("../app/35109.js");
var m = require("../app/163139.js");
var h = a(require("../app/79291.js"));
var g = require("../app/521394.js");
var E = a(require("../app/124928.js"));
var v = a(require("../vendor/667294.js"));
function _(e) {
  if (e == null) {
    return false;
  }
  if ((0, o.isSupportGroup)(e) || (0, r.default)(e.id.user)) {
    return false;
  }
  if (e.isUser) {
    return !e.contact.isBusiness && !e.contact.isEnterprise;
  }
  if (e.isGroup) {
    const t = (0, s.default)(require("../app/667845.js")).get(e.id);
    if (t) {
      return !t.participants.toArray().some(e => e.contact.isBusiness);
    }
  }
  return false;
}