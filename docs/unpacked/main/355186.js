var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECTIONS = exports.ORDERED_TAB_SECTION_IDS = undefined;
var r = a(require("./660331.js"));
const o = {
  FAVORITES: "FAVORITES",
  [r.default.TRENDING]: r.default.TRENDING,
  [r.default.HAHA]: r.default.HAHA,
  [r.default.SAD]: r.default.SAD,
  [r.default.LOVE]: r.default.LOVE,
  [r.default.REACTIONS]: r.default.REACTIONS,
  [r.default.SPORTS]: r.default.SPORTS,
  [r.default.TV]: r.default.TV
};
exports.SECTIONS = o;
const l = {
  [o.FAVORITES]: o.FAVORITES,
  [o.TRENDING]: o.TRENDING,
  [o.HAHA]: o.HAHA,
  [o.SAD]: o.SAD,
  [o.LOVE]: o.LOVE,
  [o.REACTIONS]: o.REACTIONS,
  [o.SPORTS]: o.SPORTS,
  [o.TV]: o.TV
};
const i = [l.FAVORITES, l.TRENDING, l.HAHA, l.SAD, l.LOVE, l.REACTIONS, l.SPORTS, l.TV];
exports.ORDERED_TAB_SECTION_IDS = i;