var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiSectionIcon = function (e) {
  const t = h[e.sectionId];
  return m.default.createElement(t, null);
};
exports.sectionIdToIcon = undefined;
var r = require("./743840.js");
var o = require("./490518.js");
var l = require("./25321.js");
var i = require("./823080.js");
var u = require("./58248.js");
var s = require("./989559.js");
var c = require("./798201.js");
var d = require("./85246.js");
var f = require("./233180.js");
var p = require("./41278.js");
var m = a(require("../vendor/667294.js"));
const h = {
  [r.SECTIONS.RECENT]: p.PanelRecentIcon,
  [r.SECTIONS.RECENT_REACTIONS]: p.PanelRecentIcon,
  [r.SECTIONS.SMILEYS_PEOPLE]: c.PanelEmojiPeopleIcon,
  [r.SECTIONS.ANIMALS_NATURE]: u.PanelEmojiNatureIcon,
  [r.SECTIONS.FOOD_DRINK]: i.PanelEmojiFoodIcon,
  [r.SECTIONS.ACTIVITY]: o.PanelEmojiActivityIcon,
  [r.SECTIONS.TRAVEL_PLACES]: f.PanelEmojiTravelIcon,
  [r.SECTIONS.OBJECTS]: s.PanelEmojiObjectsIcon,
  [r.SECTIONS.SYMBOLS]: d.PanelEmojiSymbolsIcon,
  [r.SECTIONS.FLAGS]: l.PanelEmojiFlagsIcon
};
exports.sectionIdToIcon = h;