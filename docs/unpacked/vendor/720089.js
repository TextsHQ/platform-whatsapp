var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e % 10 == 1 && e % 100 != 11) {
      return r.NUMBER_ONE;
    } else if (e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14)) {
      return r.NUMBER_FEW;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;