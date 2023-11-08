Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToDataURI = function (e) {
  return `data:image/jpeg;base64,${function (e) {
    return btoa(String.fromCharCode.apply(null, r.Binary.build(e).readByteArray()));
  }(e)}`;
};
var r = require("./904704.js");