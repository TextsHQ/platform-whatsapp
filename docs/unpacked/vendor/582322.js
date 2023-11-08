var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1 || e === 2 || e === 3 || e % 10 != 4 && e % 10 != 6 && e % 10 != 9) {
      return r.NUMBER_ONE;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;