var r = require("./538814.js");
var i = {
  getVariation: function (e) {
    if (e === 1) {
      return r.NUMBER_ONE;
    } else {
      return r.NUMBER_OTHER;
    }
  }
};
module.exports = i;