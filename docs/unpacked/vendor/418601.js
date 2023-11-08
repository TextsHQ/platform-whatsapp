var r = require("./14841.js");
var i = 1 / 0;
module.exports = function (e) {
  if (e) {
    if ((e = r(e)) === i || e === -1 / 0) {
      return (e < 0 ? -1 : 1) * 1.7976931348623157e+308;
    } else if (e == e) {
      return e;
    } else {
      return 0;
    }
  } else if (e === 0) {
    return e;
  } else {
    return 0;
  }
};