Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingSearch = undefined;
var a = require("./281173.js");
var r = require("./900359.js");
var o = require("./876668.js");
var l = require("./929776.js");
class i extends a.Search {
  constructor() {
    super(...arguments);
    this.id = "SettingSearch";
  }
  preloadData() {
    this.data = (0, o.buildSearchableHierarchy)((0, o.getSettingsSearchHierarchy)()).filter(e => !(e.parent != null && !(0, l.getResult)(e.parent.isAvailable)) && (0, l.getResult)(e.isAvailable));
  }
  queryFn(e) {
    const t = (0, r.normalizeString)(e);
    return {
      type: "setting",
      results: this.data.filter(e => e.searchCriteria != null && e.searchCriteria.includes(t)).map(e => ({
        id: e.id,
        type: "setting",
        data: e
      }))
    };
  }
}
exports.SettingSearch = i;