var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./250281.js");
var a = require("./256354.js");
var o = require("./409847.js");
var s = require("./94872.js");
var l = r(require("./98165.js"));
var u = r(require("./53575.js"));
var c = {
  getLangPref: function () {
    return l.default.getItemFromLocalStorage(s.KEYS.LANG);
  },
  setLangPref: function (e) {
    l.default.setItemToLocalStorage(s.KEYS.LANG, e);
    if ((0, i.isSocketConnected)()) {
      o.userPrefsIdb.set(s.KEYS.LANG, e);
    }
  },
  getMarkTranslations: function () {
    if (!a.MARK_TRANSLATIONS_ENABLED) {
      return false;
    }
    const e = u.default.get(s.KEYS.MARK_TRANSLATIONS);
    if (typeof e == "boolean") {
      return e;
    } else {
      return a.MARK_TRANSLATIONS_ENABLED;
    }
  },
  setMarkTranslations: function (e) {
    u.default.set(s.KEYS.MARK_TRANSLATIONS, e);
  },
  setHour24: function (e) {
    u.default.set(s.KEYS.HOUR_24, e);
  },
  getHour24: function () {
    const e = u.default.get(s.KEYS.HOUR_24);
    if (typeof e == "boolean") {
      return e;
    } else {
      return null;
    }
  }
};
exports.default = c;