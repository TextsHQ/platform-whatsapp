var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return l.default.createElement(r.WDSButtonPrimary, {
    testid: "conversation-panel-header-newsletter-follow-button",
    onClick: e.onClick,
    spinner: e.isLoading,
    disabled: e.isLoading
  }, o.fbt._("Follow", null, {
    hk: "1nzVmF"
  }));
};
var r = require("../app/617425.js");
var o = require("../vendor/548360.js");
var l = a(require("../vendor/667294.js"));