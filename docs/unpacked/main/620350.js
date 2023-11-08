var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  switch (e.msg.interactiveType) {
    case o.default.SHOPS_STOREFRONT:
      if ((t = (0, r.default)(e)) === null || t === undefined) {
        return undefined;
      } else {
        return t[0];
      }
    default:
      return null;
  }
};
var r = a(require("./191612.js"));
var o = a(require("../app/182394.js"));