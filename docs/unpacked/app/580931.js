var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manuallySetMedia = function (e) {
  let {
    msg: t,
    media: n,
    rmrReason: r,
    chatWid: l
  } = e;
  const u = t.mediaObject;
  if (!u) {
    return;
  }
  o.default.createFromData(n, t.mimetype).then(e => {
    (0, a.manuallySetMedia)({
      mimetype: t.mimetype,
      mediaObject: u,
      mediaBlob: e,
      mediaType: (0, s.getMsgMediaType)(t),
      rmrReason: r,
      downloadOrigin: (0, i.default)(t),
      chatWid: l
    });
  });
};
var i = r(require("./762467.js"));
var a = require("./102645.js");
var o = r(require("./756680.js"));
var s = require("./708761.js");