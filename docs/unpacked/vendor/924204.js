var r = require("./48041.js");
var i = require("./694348.js");
var a = require("./52995.js");
var o = require("./35577.js");
var s = require("./225336.js");
var u = i.get.bind(i);
module.exports = function (e) {
  var t;
  a.registerTranslations(e.translations);
  var n = (t = e.hooks) !== null && t !== undefined ? t : {};
  if (n.getFbtResult == null) {
    n.getFbtResult = u;
  }
  if (n.getFbsResult == null) {
    n.getFbsResult = s;
  }
  if (n.getTranslatedInput == null) {
    n.getTranslatedInput = a.getTranslatedInput;
  }
  if (n.getViewerContext == null) {
    n.getViewerContext = function () {
      return o;
    };
  }
  r.register(n);
};