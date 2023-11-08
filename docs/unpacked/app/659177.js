Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./997853.js");
var i = require("./392125.js");
var a = require("./438328.js");
var o = require("./94872.js");
var s = require("./905225.js");
class l extends i.BaseCollection {
  initializeFromCache(e) {
    this.add([{
      id: a.DEFAULT_PREFERENCE,
      wallpaperColor: s.DEFAULT_CHAT_WALLPAPER,
      saveToCameraRoll: true,
      showDoodle: true
    }, ...(e || [])], {
      merge: true
    });
  }
  get(e) {
    return super.get(e) || super.get(a.DEFAULT_PREFERENCE);
  }
  delete() {
    super.delete();
    this.add({
      id: a.DEFAULT_PREFERENCE,
      wallpaperColor: s.DEFAULT_CHAT_WALLPAPER,
      saveToCameraRoll: true,
      showDoodle: true
    });
  }
}
l.model = a.ChatPreference;
l.cachePolicy = {
  id: o.COLLECTIONS_KEYS.CHAT_PREFERENCE_COLLECTION,
  policy: r.CACHE_POLICY.LOAD,
  delay: 1000
};
var u = new l();
exports.default = u;