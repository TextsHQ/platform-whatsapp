var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrlExtendedTextMessage = function (e) {
  return Boolean(e == null ? undefined : e.matchedText) || Boolean(e == null ? undefined : e.canonicalUrl) || Boolean(e == null ? undefined : e.description) || Boolean(e == null ? undefined : e.title);
};
exports.parseExtendedTextMessageProto = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    extendedTextMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const c = u.Message$ExtendedTextMessage$FontType;
  let d;
  if ((r == null ? undefined : r.font) != null) {
    switch (r.font) {
      case c.SYSTEM:
      case c.SYSTEM_TEXT:
      case c.FB_SCRIPT:
      case c.SYSTEM_BOLD:
      case c.MORNINGBREEZE_REGULAR:
      case c.CALISTOGA_REGULAR:
      case c.EXO2_EXTRABOLD:
      case c.COURIERPRIME_BOLD:
        d = r.font;
    }
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: l.MSG_TYPE.CHAT,
      body: (0, s.convertToTextWithoutSpecialEmojis)((r == null ? undefined : r.text) || ""),
      matchedText: r == null ? undefined : r.matchedText,
      description: r == null ? undefined : r.description,
      title: r == null ? undefined : r.title,
      thumbnail: (0, o.decodeBytes)(r == null ? undefined : r.jpegThumbnail) || "",
      richPreviewType: r == null ? undefined : r.previewType,
      doNotPlayInline: r == null ? undefined : r.doNotPlayInline,
      textColor: r == null ? undefined : r.textArgb,
      backgroundColor: r == null ? undefined : r.backgroundArgb,
      mediaKey: (0, o.decodeBytes)(r == null ? undefined : r.mediaKey),
      mediaKeyTimestamp: (r == null ? undefined : r.mediaKeyTimestamp) != null ? (0, a.numberOrThrowIfTooLarge)(r.mediaKeyTimestamp) : n.mediaKeyTimestamp,
      thumbnailDirectPath: r == null ? undefined : r.thumbnailDirectPath,
      thumbnailSha256: (0, o.decodeBytes)(r == null ? undefined : r.thumbnailSha256),
      thumbnailEncSha256: (0, o.decodeBytes)(r == null ? undefined : r.thumbnailEncSha256),
      thumbnailHeight: r == null ? undefined : r.thumbnailHeight,
      thumbnailWidth: r == null ? undefined : r.thumbnailWidth,
      inviteGrpType: (r == null ? undefined : r.inviteLinkGroupTypeV2) != null ? (0, o.parseInviteGrpType)(r == null ? undefined : r.inviteLinkGroupTypeV2) : n.inviteGrpType,
      font: d != null ? d : n.font
    }),
    contextInfo: r == null ? undefined : r.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./21094.js");
var s = require("./974637.js");
var l = require("./373070.js");
var u = require("./533494.js");