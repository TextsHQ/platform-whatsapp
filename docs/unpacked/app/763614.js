Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areExpressionPanelsEnabled = function () {
  return (0, r.getABPropConfigValue)("web_expression_panels");
};
exports.isAttachMenuRedesignEnabled = function () {
  return (0, r.getABPropConfigValue)("web_attach_menu_redesign");
};
exports.shouldShowExpressionPanelsOutOfInput = function () {
  return (0, r.getABPropConfigValue)("web_expression_panels_outside_input");
};
var r = require("./287461.js");