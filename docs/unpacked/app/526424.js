var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormattedText = function (e) {
  let {
    text: t
  } = e;
  return s.default.createElement(i.EmojiText, {
    direction: "auto",
    text: t
  });
};
exports.isMe = function (e) {
  return e instanceof o.default && (0, a.isMeAccount)(e);
};
var i = require("./305521.js");
var a = require("./459857.js");
var o = r(require("./124928.js"));
var s = r(require("../vendor/667294.js"));