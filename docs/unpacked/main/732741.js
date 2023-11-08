var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GROUP_INVITE_DEFAULT_DESCRIPTION = undefined;
exports.getGroupInviteLinkPreview = function () {
  return g.apply(this, arguments);
};
exports.getInviteLinkDescription = E;
var r = a(require("../vendor/348926.js"));
var o = require("../app/351053.js");
var l = require("../app/174834.js");
var i = require("../app/639839.js");
var u = a(require("../app/667845.js"));
var s = require("../app/862159.js");
var c = require("../app/232294.js");
var d = require("../app/533494.js");
var f = require("../vendor/548360.js");
const p = require("./841382.js");
const m = 100;
const h = f.fbt._("Group chat invite", null, {
  hk: "cM0Sl"
}).toString();
function g() {
  return (g = (0, r.default)(function* (e, t) {
    var n;
    var a;
    if (t == null) {
      return null;
    }
    let r;
    let f;
    let h;
    try {
      var g;
      var v;
      var _;
      const e = u.default.filter(e => e.inviteCode === t);
      if (e == null || e.length < 1) {
        return null;
      }
      r = e[0];
      h = o.ChatCollection.get(r.id);
      f = (g = h) === null || g === undefined || (v = g.contact) === null || v === undefined || (_ = v.profilePicThumb) === null || _ === undefined ? undefined : _.img;
    } catch (e) {
      return null;
    }
    let y = 0.75;
    if (!(f != null && f !== "")) {
      f = r.groupType === s.GroupType.LINKED_GENERAL_GROUP && (0, l.communityGeneralChatUIEnabled)() ? i.GeneralChatPlaceholderFullUrl : p;
      y = 1;
    }
    const C = [{
      width: m,
      height: m,
      imageFormat: "image/jpeg",
      imageFormatOptions: y
    }];
    const b = yield (0, c.getResizedThumbData)(f, C);
    const M = b != null && b.length > 0 ? b[0] : undefined;
    const S = (n = r.getParentGroupChat()) === null || n === undefined ? undefined : n.formattedTitle;
    let T;
    T = r.groupType === s.GroupType.LINKED_SUBGROUP ? S : E(r.groupType, S);
    return {
      url: e,
      data: {
        title: (a = h) === null || a === undefined ? undefined : a.formattedTitle,
        description: T,
        canonicalUrl: e,
        matchedText: e,
        richPreviewType: d.Message$ExtendedTextMessage$PreviewType.NONE,
        thumbnail: M == null ? undefined : M.dataUrl,
        thumbnailHeight: M == null ? undefined : M.height,
        thumbnailWidth: M == null ? undefined : M.width,
        doNotPlayInline: true,
        inviteGrpType: r.groupType,
        isLoading: false
      }
    };
  })).apply(this, arguments);
}
function E(e, t) {
  if ((0, l.communitiesEnabled)()) {
    if (e === s.GroupType.COMMUNITY) {
      return f.fbt._("Community invite", null, {
        hk: "1GhZRx"
      }).toString();
    } else if (e === s.GroupType.LINKED_SUBGROUP && t != null) {
      return f.fbt._("Group in \"{community}\"", [f.fbt._param("community", t)], {
        hk: "2BQr7f"
      }).toString();
    } else if (e === s.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      return f.fbt._("Announcements", null, {
        hk: "26PNjy"
      }).toString();
    } else {
      return h;
    }
  } else {
    return h;
  }
}
exports.GROUP_INVITE_DEFAULT_DESCRIPTION = h;