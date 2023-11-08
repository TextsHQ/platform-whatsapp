Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  return {
    extendedTextMessage: {
      text: t.body,
      matchedText: t.matchedText,
      canonicalUrl: t.canonicalUrl,
      description: t.description,
      title: t.title,
      jpegThumbnail: (0, i.encodeBytes)(t.thumbnail),
      previewType: t.richPreviewType,
      contextInfo: n,
      mediaKey: (0, i.encodeBytes)(t.mediaKey),
      mediaKeyTimestamp: (0, r.isNumber)(t.mediaKeyTimestamp) ? t.mediaKeyTimestamp : undefined,
      thumbnailDirectPath: t.thumbnailDirectPath,
      thumbnailSha256: (0, i.encodeBytes)(t.thumbnailSha256),
      thumbnailEncSha256: (0, i.encodeBytes)(t.thumbnailEncSha256),
      thumbnailHeight: t.thumbnailHeight,
      thumbnailWidth: t.thumbnailWidth,
      inviteLinkGroupTypeV2: s(t.inviteGrpType),
      backgroundArgb: t.backgroundColor
    }
  };
};
var r = require("./724976.js");
var i = require("./974637.js");
var a = require("./862159.js");
var o = require("./533494.js");
function s(e) {
  switch (e) {
    case a.GroupType.COMMUNITY:
      return o.Message$ExtendedTextMessage$InviteLinkGroupType.PARENT;
    case a.GroupType.LINKED_SUBGROUP:
      return o.Message$ExtendedTextMessage$InviteLinkGroupType.SUB;
    case a.GroupType.LINKED_ANNOUNCEMENT_GROUP:
      return o.Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT_SUB;
    default:
      return o.Message$ExtendedTextMessage$InviteLinkGroupType.DEFAULT;
  }
}