var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeOpenAdsManagementScreen = function (e) {
  (0, r.logManageAdsScreenEvent)(e, i.LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_ADS_TAPPED);
  l.DrawerManager.openDrawerLeft(u.default.createElement(o.AdsManagementDrawerLoadable, {
    activeAccountInfo: e
  }));
};
var r = require("./445693.js");
var o = require("./196033.js");
var l = require("../app/900316.js");
var i = require("./282952.js");
var u = a(require("../vendor/667294.js"));