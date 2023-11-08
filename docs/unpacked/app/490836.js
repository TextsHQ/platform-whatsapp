Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAlignment = exports.FontType = undefined;
exports.getAllFonts = function () {
  return Array.from(i.members());
};
exports.getFontStyle = function (e) {
  switch (e) {
    case i.SANS_SERIF:
      return {
        fontFamily: "sans-serif"
      };
    case i.SERIF:
      return {
        fontFamily: "\"Droid Serif\", serif"
      };
    case i.NORICAN_REGULAR:
      return {
        fontFamily: "\"Norican\""
      };
    case i.BRYNDAN_WRITE:
      return {
        fontFamily: "\"Bryndan-Write\""
      };
    case i.OSWALD_HEAVY:
      return {
        fontFamily: "\"Oswald\"",
        fontWeight: "bold"
      };
  }
};
exports.getFontTranslation = function (e) {
  switch (e) {
    case i.SANS_SERIF:
      return r.fbt._("Sans Serif", null, {
        hk: "oqthG"
      });
    case i.SERIF:
      return r.fbt._("Serif", null, {
        hk: "1EWGvo"
      });
    case i.NORICAN_REGULAR:
      return r.fbt._("Norican", null, {
        hk: "RU2yb"
      });
    case i.BRYNDAN_WRITE:
      return r.fbt._("Bryndan Write", null, {
        hk: "2d40Ei"
      });
    case i.OSWALD_HEAVY:
      return r.fbt._("Oswald", null, {
        hk: "vyZEQ"
      });
  }
};
var r = require("../vendor/548360.js");
const i = require("../vendor/76672.js").Mirrored(["SANS_SERIF", "SERIF", "NORICAN_REGULAR", "BRYNDAN_WRITE", "OSWALD_HEAVY"]);
exports.FontType = i;
const a = require("../vendor/76672.js")({
  LEFT: "LEFT",
  CENTER: "CENTER",
  RIGHT: "RIGHT"
});
exports.TextAlignment = a;