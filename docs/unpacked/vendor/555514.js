var r = require("./624523.js");
var i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var a = /\\(\\)?/g;
var o = r(function (e) {
  var t = [];
  if (e.charCodeAt(0) === 46) {
    t.push("");
  }
  e.replace(i, function (e, n, r, i) {
    t.push(r ? i.replace(a, "$1") : n || e);
  });
  return t;
});
module.exports = o;