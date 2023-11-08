var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e % 10 == 1 && e % 100 != 11 && e % 100 != 71 && e % 100 != 91) {
      return r.NUMBER_ONE;
    } else if (e % 10 == 2 && e % 100 != 12 && e % 100 != 72 && e % 100 != 92) {
      return r.NUMBER_TWO;
    } else if ((e % 10 >= 3 && e % 10 <= 4 || e % 10 == 9) && (e % 100 < 10 || e % 100 > 19) && (e % 100 < 70 || e % 100 > 79) && (e % 100 < 90 || e % 100 > 99)) {
      return r.NUMBER_FEW;
    } else if (e !== 0 && e % 1000000 == 0) {
      return r.NUMBER_MANY;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;