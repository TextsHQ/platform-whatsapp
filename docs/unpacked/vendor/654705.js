var r = require("./218470.js");
module.exports = function (e, t) {
  var n = this.__data__;
  var i = r(n, e);
  if (i < 0) {
    ++this.size;
    n.push([e, t]);
  } else {
    n[i][1] = t;
  }
  return this;
};