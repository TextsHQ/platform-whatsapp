Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePDFNThemedIcon = function (e) {
  const t = (0, a.useIsDarkTheme)();
  if (e == null) {
    return null;
  }
  if (t) {
    return e.dark;
  } else {
    return e.light;
  }
};
var a = require("../app/667738.js");