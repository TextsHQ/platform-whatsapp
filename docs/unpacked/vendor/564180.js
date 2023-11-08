var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 0) {
      return r.NUMBER_ZERO;
    } else if (e === 1) {
      return r.NUMBER_ONE;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;