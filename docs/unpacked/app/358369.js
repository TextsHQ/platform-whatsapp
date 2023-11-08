Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorType = undefined;
exports.getAllColors = function () {
  return Array.from(i.members());
};
exports.getColorValue = function (e) {
  switch (e) {
    case i.BLACK:
      return r.Color.fromHex("#434343");
    case i.GRAY:
      return r.Color.fromHex("#9DA0A9");
    case i.WHITE:
      return r.Color.fromHex("#FFFFFF");
    case i.BLUE:
      return r.Color.fromHex("#33CEFF");
    case i.GREEN:
      return r.Color.fromHex("#64DC2F");
    case i.PURPLE:
      return r.Color.fromHex("#BD73FF");
    case i.ORANGE:
      return r.Color.fromHex("#F49226");
    case i.RED:
      return r.Color.fromHex("#FF4A4A");
  }
};
var r = require("./102826.js");
const i = require("../vendor/76672.js").Mirrored(["BLACK", "GRAY", "WHITE", "BLUE", "GREEN", "PURPLE", "ORANGE", "RED"]);
exports.ColorType = i;