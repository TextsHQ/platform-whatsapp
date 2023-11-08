var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    altText: t,
    mediaData: n
  } = e;
  const {
    preview: a
  } = (0, i.useModelValues)(n, ["preview"]);
  const s = a instanceof o.default ? a.url() : null;
  return l.default.createElement("div", {
    className: r.default.mediaViewerBlurCrop,
    onClick: u
  }, l.default.createElement("img", {
    className: r.default.mediaViewerBlurImg,
    src: s,
    alt: t
  }));
};
var r = a(require("./559587.js"));
var o = a(require("../app/756680.js"));
var l = a(require("../vendor/667294.js"));
var i = require("../app/655241.js");
function u(e) {
  e.stopPropagation();
}