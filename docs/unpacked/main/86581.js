var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifPanelMenuSectionIconTheme = undefined;
exports.GifSectionIcon = function (e) {
  if (e.theme === g.EXPRESSION_PANELS) {
    return p.default.createElement(E, {
      sectionId: e.sectionId
    });
  }
  if (e.sectionId && e.sectionId === r.SECTIONS.FAVORITES) {
    return p.default.createElement(s.PanelStarredIcon, null);
  }
  return p.default.createElement("span", {
    className: (0, m.default)(h)
  }, e.sectionTitle);
};
var r = require("./355186.js");
var o = require("./830874.js");
var l = require("./535168.js");
var i = require("./212618.js");
var u = require("./490518.js");
var s = require("./545895.js");
var c = require("./787649.js");
var d = require("./576746.js");
var f = require("./511826.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
const h = {
  display: "l7jjieqr",
  maxWidth: "laorhtua",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  textOverflow: "lhj4utae",
  whiteSpace: "le5p0ye3"
};
const g = require("../vendor/76672.js").Mirrored(["EXPRESSION_PANELS"]);
function E(e) {
  let {
    sectionId: t
  } = e;
  switch (t) {
    case r.SECTIONS.TRENDING:
      return p.default.createElement(l.GifTrendingIcon, null);
    case r.SECTIONS.HAHA:
      return p.default.createElement(c.StickerHappyIcon, null);
    case r.SECTIONS.SAD:
      return p.default.createElement(f.StickerSadIcon, null);
    case r.SECTIONS.LOVE:
      return p.default.createElement(d.StickerLoveIcon, null);
    case r.SECTIONS.REACTIONS:
      return p.default.createElement(o.GifReactionIcon, null);
    case r.SECTIONS.SPORTS:
      return p.default.createElement(u.PanelEmojiActivityIcon, null);
    case r.SECTIONS.TV:
      return p.default.createElement(i.GifTvIcon, null);
  }
  return p.default.createElement(s.PanelStarredIcon, null);
}
exports.GifPanelMenuSectionIconTheme = g;