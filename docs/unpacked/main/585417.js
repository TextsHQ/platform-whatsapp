var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    displayType: n
  } = e;
  const a = (0, o.isTrusted)(t.unsafe());
  return l.default.createElement(r.ImageMessage, {
    contentContainerClassName: (0, i.default)(u),
    displayAuthor: false,
    mediaData: t.mediaData,
    displayType: n,
    msg: t,
    hideMeta: true,
    trusted: a
  });
};
var r = require("./654386.js");
var o = require("../app/435711.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  marginTop: "if44n927",
  marginEnd: "ryaohf54",
  marginBottom: "f6aumy9w",
  marginStart: "sd2p8cyi"
};