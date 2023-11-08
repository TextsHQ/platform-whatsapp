Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLwiAdsIdentityTypeFromActiveAccountInfo = p;
exports.logManageAdsEntryPointTap = exports.logManageAdsEntryPointImpression = exports.logAdCreationNuxScreen = exports.logAdCreationImpression = exports.logAdCreationIconTooltip = exports.logAdCreationEntryTap = undefined;
exports.logManageAdsScreenEvent = function (e, t) {
  const {
    hasFacebookPage: n
  } = e;
  const a = p(e);
  new l.LwiScreenWamEvent({
    lwiAdsIdentityType: a,
    lwiScreenReference: f.LWI_SCREEN_REFERENCE.LWI_MANAGE_ADS_TAB,
    lwiScreenAction: t,
    userHasLinkedFbPage: n
  }).commit();
};
var a = require("./582215.js");
var r = require("./46147.js");
var o = require("./486975.js");
var l = require("./204622.js");
var i = require("./733203.js");
var u = require("./331394.js");
var s = require("../app/757453.js");
var c = require("./268793.js");
var d = require("./846377.js");
var f = require("./409969.js");
function p(e) {
  if (e.type === "whatsapp") {
    return c.LWI_ADS_IDENTITY_TYPE.WHATSAPP;
  } else {
    e.type;
    return c.LWI_ADS_IDENTITY_TYPE.PAGE;
  }
}
exports.logAdCreationIconTooltip = e => {
  new a.AdvertiseTooltipImpressionWamEvent({
    lwiEntryPoint: d.LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON,
    tooltipAction: e
  }).commit();
};
exports.logAdCreationImpression = (e, t) => {
  new r.LwiEntryPointImpressionWamEvent({
    lwiEntryPoint: e,
    userHasLinkedFbPage: t
  }).commit();
};
exports.logAdCreationEntryTap = e => {
  let {
    lwiEntryPoint: t,
    userHasLinkedFbPage: n,
    waCampaignId: a
  } = e;
  (0, s.resetAdCreationSequenceNumber)();
  const r = (0, s.generateAdCreationFlowId)();
  new o.LwiEntryTapWamEvent({
    lwiEntryPoint: t,
    lwiFlowId: r,
    userHasLinkedFbPage: n,
    waCampaignId: a
  }).commit();
  return r;
};
exports.logAdCreationNuxScreen = (e, t, n) => {
  new l.LwiScreenWamEvent({
    lwiAdsIdentityType: t,
    lwiEventSequenceNumber: (0, s.getAndIncrementAdCreationSequenceNumber)(),
    lwiFlowId: (0, s.getAdCreationFlowId)(),
    lwiIsFbAppInstalled: false,
    lwiScreenAction: e,
    lwiScreenReference: f.LWI_SCREEN_REFERENCE.LWI_SCREEN_NUX_EDUCATION,
    userHasLinkedFbPage: n
  }).commit();
};
exports.logManageAdsEntryPointImpression = e => {
  new i.ManageAdsEntryPointImpressionWamEvent({
    manageAdsEntryPoint: e
  }).commit();
};
exports.logManageAdsEntryPointTap = e => {
  new u.ManageAdsEntryPointTapWamEvent({
    manageAdsEntryPoint: e
  }).commit();
};