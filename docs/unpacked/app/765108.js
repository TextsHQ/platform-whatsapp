var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadStatusV3Thumbnail = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./989577.js");
var o = r(require("./343087.js"));
var s = require("./373070.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const {
      msg: t,
      isPreload: n,
      signal: r
    } = e;
    const {
      encFilehash: i,
      thumbnailSha256: l,
      thumbnailEncSha256: u,
      thumbnailDirectPath: c
    } = t;
    if (t.type === s.MSG_TYPE.IMAGE && t.scanLengths && t.scansSidecar && i) {
      yield (0, a.downloadProgressiveJpegThumbnail)({
        msg: t,
        signal: r,
        isPreload: n
      });
    } else if (l && u && c) {
      yield (0, o.default)({
        msg: t,
        signal: r,
        isPreload: n,
        chat: null
      });
    }
  })).apply(this, arguments);
}