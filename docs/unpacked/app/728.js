Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO = exports.YOUTUBE_URL_TIME_PARAM_PATTERN = exports.YOUTUBE_URL_TIME_PARAM_NAME = exports.URL_PATTERNS = exports.PiPVideoType = exports.PLAYER_TYPE = exports.HOSTNAME = undefined;
exports.getAttributionIcon = u;
exports.getAttributionIconWithDefault = function (e, t) {
  let n = u(e);
  if (n == null) {
    n = u(t);
  }
  return n;
};
var r = require("./872469.js");
var i = require("./717312.js");
var a = require("./653929.js");
const o = {
  YOUTUBE: "youtube.com",
  YOUTUBE_MOBILE: "m.youtube.com",
  YOUTUBE_SHORTENED: "youtu.be",
  INSTAGRAM: "instagram.com",
  STREAMABLE: "streamable.com",
  FACEBOOK: "facebook.com",
  FBWATCH: "fbwat.ch",
  FBWATCH_ALT: "fb.watch",
  SHARECHAT: "sharechat.com"
};
exports.HOSTNAME = o;
const s = require("../vendor/76672.js").Mirrored(["FLOATER", "OG_FLOATER", "MEDIA_VIEWER"]);
exports.PLAYER_TYPE = s;
const l = require("../vendor/76672.js").Mirrored(["OG", "YOUTUBE", "MSG"]);
exports.PiPVideoType = l;
function u(e) {
  switch (e) {
    case o.YOUTUBE:
    case o.YOUTUBE_MOBILE:
    case o.YOUTUBE_SHORTENED:
      return a.LogoYoutubeIcon;
    case o.INSTAGRAM:
      return i.LogoInstagramIcon;
    case o.FACEBOOK:
      return r.LogoFacebookIcon;
    default:
      return null;
  }
}
exports.YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO = 16 / 9;
exports.URL_PATTERNS = {
  ONLINE_VIDEO_URL: {
    YOUTUBE: [/^https?:\/\/youtu\.be\/(.{11})/, /^https?:\/\/(m\.)?youtube\.com\/watch\?v=(.{11})/, /^https?:\/\/(m\.)?youtube\.com\/shorts\/(.{11})/]
  }
};
exports.YOUTUBE_URL_TIME_PARAM_NAME = "t";
exports.YOUTUBE_URL_TIME_PARAM_PATTERN = /^(\d+h)?(\d+m)?(\d+s)?(\d+)?$/;