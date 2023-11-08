Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoPickerType = exports.PhotoPickerThemeType = exports.PHOTO_PICKER_QUALIFIED_EMOJIS = undefined;
var a = require("../app/70354.js");
const r = require("../vendor/76672.js").Mirrored(["GROUP", "PROFILE", "COMMUNITY", "DEFAULT_ANNOUNCEMENT_GROUP", "GENERAL_GROUP", "COVER_PHOTO", "NEWSLETTER"]);
exports.PhotoPickerType = r;
const o = require("../vendor/76672.js").Mirrored(["COVER_PHOTO", "EMOJI_SUGGESTIONS"]);
exports.PhotoPickerThemeType = o;
const l = [String.fromCodePoint(127979), String.fromCodePoint(128054), String.fromCodePoint(128049), String.fromCodePoint(127969), String.fromCodePoint(129716), String.fromCodePoint(127800), String.fromCodePoint(127912), String.fromCodePoint(127958, 65039), String.fromCodePoint(128218), String.fromCodePoint(127916), String.fromCodePoint(127918), String.fromCodePoint(128247), String.fromCodePoint(128241), String.fromCodePoint(9917), String.fromCodePoint(127936), String.fromCodePoint(127955), String.fromCodePoint(127944), String.fromCodePoint(128512), String.fromCodePoint(128663), String.fromCodePoint(127828), String.fromCodePoint(127922), String.fromCodePoint(9992, 65039), String.fromCodePoint(10084, 65039)].map(e => a.EmojiUtil.normalizeEmojiFromString(e)).filter(Boolean);
exports.PHOTO_PICKER_QUALIFIED_EMOJIS = l;