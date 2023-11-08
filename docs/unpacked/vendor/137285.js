var r = require("./562705.js");
var i = require("./135694.js");
var a = require("./701469.js");
var o = r ? r.isConcatSpreadable : undefined;
module.exports = function (e) {
  return a(e) || i(e) || !!(o && e && e[o]);
};