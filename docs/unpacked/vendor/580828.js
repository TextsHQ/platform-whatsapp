var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e % 10 == 1) {
      return r.NUMBER_ONE;
    } else if (e % 10 == 2) {
      return r.NUMBER_TWO;
    } else if (e % 100 == 0 || e % 100 == 20 || e % 100 == 40 || e % 100 == 60 || e % 100 == 80) {
      return r.NUMBER_FEW;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;