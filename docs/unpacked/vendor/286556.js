var r = require("./789465.js");
var i = require("./977813.js");
module.exports = function (e, t, n) {
  if (n !== undefined && !i(e[t], n) || n === undefined && !(t in e)) {
    r(e, t, n);
  }
};