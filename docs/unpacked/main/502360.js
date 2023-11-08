Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableHeaderAndFooterFormatting = function (e, t) {
  return {
    formatters: (0, a.HeaderAndFooter)({
      links: e,
      selectable: true,
      trusted: t
    }),
    selectable: true
  };
};
var a = require("../app/675886.js");