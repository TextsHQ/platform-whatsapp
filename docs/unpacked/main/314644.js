var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  if (t.paymentNoteMsg && t.paymentNoteMsg.type === r.MSG_TYPE.STICKER) {
    const e = t.paymentNoteMsg;
    if (e) {
      const t = new o.StickerModel({
        id: e.filehash,
        mimetype: e.mimetype,
        width: e.width,
        height: e.height,
        filehash: e.filehash,
        encFilehash: e.encFilehash,
        directPath: e.directPath,
        mediaKey: e.mediaKey,
        mediaKeyTimestamp: e.mediaKeyTimestamp,
        deprecatedMms3Url: e.deprecatedMms3Url
      });
      return i.default.createElement("div", {
        className: (0, u.default)(s)
      }, i.default.createElement(l.default, {
        sticker: t
      }));
    }
  }
  return null;
};
var r = require("../app/373070.js");
var o = require("../app/164832.js");
var l = a(require("./767569.js"));
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  alignSelf: "o2es7gts",
  textAlign: "qfejxiq4"
};