var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaType = undefined;
exports.setupStatusV3Controller = function (e, t) {
  if (e) {
    switch (e.type) {
      case o.default.TYPE.IMAGE:
        {
          let e = 4500;
          if (!((0, r.default)(t.caption) || typeof t.caption != "string")) {
            e += Math.min(t.caption.length / 150, 1) * 2000;
          }
          return new u.default(e);
        }
      case o.default.TYPE.VIDEO:
        if (t.isGif) {
          return new c.default();
        } else {
          return new i.default(f.Video);
        }
      case o.default.TYPE.AUDIO:
      case o.default.TYPE.PTT:
        if ((0, s.isStatusV3VoiceStatusReceiptEnabled)()) {
          return new i.default(f.Audio);
        } else {
          return new u.default(d);
        }
      default:
        return new u.default(d);
    }
  } else if (t.type === l.MSG_TYPE.CHAT) {
    var n;
    var a;
    const e = 2000 + Math.min((n = (a = t.body) === null || a === undefined ? undefined : a.length) !== null && n !== undefined ? n : 0, 1000) * 60;
    return new u.default(e);
  }
  return new u.default(d);
};
var r = a(require("../vendor/441609.js"));
var o = a(require("../app/116253.js"));
var l = require("../app/373070.js");
var i = a(require("./564742.js"));
var u = a(require("./125622.js"));
var s = require("../app/918715.js");
var c = a(require("./557649.js"));
const d = 3000;
const f = require("../vendor/76672.js")({
  Audio: "audio",
  Video: "video"
});
exports.MediaType = f;