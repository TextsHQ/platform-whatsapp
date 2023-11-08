var r = require("./48041.js");
var i = require("./109344.js");
var a = require("./538814.js");
var o = require("./441143.js");
var s = {
  EXACTLY_ONE: "_1",
  getNumberVariations: function (e) {
    var t = i.get(r.getViewerContext().locale).getVariation(e);
    if (!(t & a.BITMASK_NUMBER)) {
      o(false);
    }
    if (e === 1) {
      return ["_1", t, "*"];
    } else {
      return [t, "*"];
    }
  },
  getGenderVariations: function (e) {
    if (!(e & a.BITMASK_GENDER)) {
      o(false);
    }
    return [e, "*"];
  }
};
module.exports = s;