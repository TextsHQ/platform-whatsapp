Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canSendOrder = function (e) {
  if (!l.Conn.isSMB || e.isGroup || e.isNewsletter) {
    return false;
  }
  if ((0, a.orderDetailsCustomItemEnabled)()) {
    return true;
  }
  const t = r.BusinessProfileCollection.get((0, i.getMeUser)());
  return (0, a.orderDetailsFromCatalogEnabled)() && (0, o.hasCatalog)(t);
};
exports.shouldShowCatalogOption = function (e) {
  if (e.isNewsletter) {
    return false;
  }
  const t = r.BusinessProfileCollection.get((0, i.getMeUser)());
  if (!function () {
    if (!l.Conn.isSMB) {
      return false;
    }
    const e = r.BusinessProfileCollection.get((0, i.getMeUser)());
    return !(0, o.hasShop)(e);
  }() || (0, a.blockCatalogCreationECommerceComplianceIndia)(t)) {
    return false;
  }
  return true;
};
var a = require("../app/72696.js");
var r = require("../app/778945.js");
var o = require("../app/542358.js");
var l = require("../app/445729.js");
var i = require("../app/459857.js");