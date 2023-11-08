var r = require("./727418.js");
var i = require("./48041.js");
var a = {};
var o = {
  getTranslatedInput: function (e) {
    var t = e.args;
    var n = e.options;
    var r = n == null ? undefined : n.hk;
    var o = i.getViewerContext().locale;
    var s = a[o];
    if (r == null || (s == null ? undefined : s[r]) == null) {
      return null;
    } else {
      return {
        table: s[r],
        args: t
      };
    }
  },
  registerTranslations: function (e) {
    a = e;
  },
  getRegisteredTranslations: function () {
    return a;
  },
  mergeTranslations: function (e) {
    Object.keys(e).forEach(function (t) {
      var n;
      a[t] = r((n = a[t]) !== null && n !== undefined ? n : {}, e[t]);
    });
  }
};
module.exports = o;