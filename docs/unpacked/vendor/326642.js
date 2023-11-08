var r = require("./756321.js").ExifReader;
module.exports = function (e) {
  var t = new r();
  t.load(e);
  var n;
  var i = t.getAllTags();
  var a = {};
  for (var o in i) {
    a[(n = o, n.replace(/([A-Z][a-z])|([a-z][A-Z])|([A-Z])/g, function (e) {
      if (e.length == 1) {
        return e.toLowerCase();
      } else if (e[0] == e[0].toUpperCase()) {
        return " " + e.toLowerCase();
      } else {
        return e[0] + " " + e[1].toLowerCase();
      }
    }).replace(/^\s+|\s+$/g, ""))] = i[o].description;
  }
  return a;
};