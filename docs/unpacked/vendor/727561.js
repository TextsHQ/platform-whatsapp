var r = require("./567990.js");
var i = /^\s+/;
module.exports = function (e) {
  if (e) {
    return e.slice(0, r(e) + 1).replace(i, "");
  } else {
    return e;
  }
};