var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1) {
      return r.NUMBER_ONE;
    } else if (e === 2) {
      return r.NUMBER_TWO;
    } else if (e >= 3 && e <= 6) {
      return r.NUMBER_FEW;
    } else if (e >= 7 && e <= 10) {
      return r.NUMBER_MANY;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;