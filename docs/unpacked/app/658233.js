Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGetIsContactABusiness = function (e) {
  return (0, r.getVerifiedBusinessNameTable)().bulkGet(e.map(e => {
    var t;
    if ((t = e == null ? undefined : e.user) !== null && t !== undefined) {
      return t;
    } else {
      return "";
    }
  })).then(e => e.map(e => e != null));
};
var r = require("./830627.js");