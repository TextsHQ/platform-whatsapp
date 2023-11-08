var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PREFERENCE = exports.ChatPreference = undefined;
var i = require("./481173.js");
var a = r(require("./97359.js"));
var o = r(require("./124928.js"));
const s = "defaultPreference";
exports.DEFAULT_PREFERENCE = s;
class l extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.wallpaperColor = (0, i.prop)();
    this.saveToCameraRoll = (0, i.prop)();
    this.showDoodle = (0, i.prop)();
  }
  getCollection() {
    return (0, a.default)(require("./659177.js"));
  }
}
l.Proxy = "chatPreference";
l.idClass = o.default;
l.allowedIds = [s];
const u = (0, i.defineModel)(l);
exports.ChatPreference = u;