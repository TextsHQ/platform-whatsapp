var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElectronAppExpiryTime = function (e) {
  if (e > 0) {
    return (0, i.futureUnixTime)(i.DAY_SECONDS * e, o);
  }
  return o;
};
var i = require("./632157.js");
var a = r(require("../vendor/730381.js"));
const o = (0, i.castToUnixTime)((0, a.default)("2023-09-30 00:01", "YYYY-MM-DD HH:mm").unix());