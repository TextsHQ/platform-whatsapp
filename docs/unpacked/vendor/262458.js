var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1 || e === 11) {
      return r.NUMBER_ONE;
    } else if (e === 2 || e === 12) {
      return r.NUMBER_TWO;
    } else if (e >= 3 && e <= 10 || e >= 13 && e <= 19) {
      return r.NUMBER_FEW;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;