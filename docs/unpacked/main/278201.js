var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupAddPrivacyTipBanner = function (e) {
  let {
    onAction: t
  } = e;
  return i.default.createElement(r.PrivacyTipBanner, {
    text: l.fbt._("Control who can add you to groups.", null, {
      hk: "3WgVmm"
    }),
    actionText: l.fbt._("Review privacy settings", null, {
      hk: "yi1Oo"
    }),
    settingStep: o.SettingsSteps.PrivacyVisiblityEditGroupAdd,
    onAction: t
  });
};
var r = require("./959989.js");
var o = require("./73016.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));