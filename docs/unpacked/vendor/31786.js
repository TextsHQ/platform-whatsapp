var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1) {
      return r.NUMBER_ONE;
    } else if (e === 0 || e % 100 >= 2 && e % 100 <= 10) {
      return r.NUMBER_FEW;
    } else if (e % 100 >= 11 && e % 100 <= 19) {
      return r.NUMBER_MANY;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;