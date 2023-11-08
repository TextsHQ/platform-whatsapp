var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    mediaData: t
  } = e;
  if (!t) {
    return null;
  }
  let n;
  if (t.type === r.default.TYPE.AUDIO) {
    n = u.default.createElement(o.MsgAudioIcon, null);
  } else if (t.type === r.default.TYPE.VIDEO) {
    n = t.isGif ? u.default.createElement(l.MsgGifIcon, null) : u.default.createElement(i.MsgVideoIcon, null);
  }
  if (n == null) {
    return null;
  }
  return u.default.createElement("div", {
    className: (0, s.default)(c)
  }, n);
};
var r = a(require("../app/116253.js"));
var o = require("./919347.js");
var l = require("./23497.js");
var i = require("./352656.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  position: "lhggkp7q",
  bottom: "lrw9n60e",
  start: "qzp46edm",
  color: "k17s6i4e",
  pointerEvents: "m62443ks"
};