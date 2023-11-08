var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1) {
      return r.NUMBER_ONE;
    } else if (e === 2) {
      return r.NUMBER_TWO;
    } else if ((e < 0 || e > 10) && e % 10 == 0) {
      return r.NUMBER_MANY;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;