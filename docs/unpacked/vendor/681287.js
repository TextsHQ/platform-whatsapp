var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1) {
      return r.NUMBER_ONE;
    } else if (e >= 2 && e <= 4) {
      return r.NUMBER_FEW;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;