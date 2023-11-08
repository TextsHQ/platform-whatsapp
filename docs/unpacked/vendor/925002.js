var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e % 10 == 1 && e % 100 != 11) {
      return r.NUMBER_ONE;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;