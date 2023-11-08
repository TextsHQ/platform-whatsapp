var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logCatalogViewOrBizEvent = exports.isCatalogOwner = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./298471.js");
var s = require("./72696.js");
var l = require("./104209.js");
var u = require("./459857.js");
var c = r(require("./124928.js"));
var d = require("./669050.js");
const p = ["isOwner", "catalogBizAction", "catalogViewAction", "bizActionConfig", "bizPlatform", "catalogOwnerJid"];
exports.isCatalogOwner = e => {
  let t;
  if (e.catalogOwnerJid) {
    t = (0, d.createWid)(e.catalogOwnerJid);
  } else if (e.catalogOwnerWid) {
    t = e.catalogOwnerWid;
  } else if (e.product) {
    t = e.product.catalogWid;
  }
  return t instanceof c.default && (0, u.isMeAccount)(t);
};
exports.logCatalogViewOrBizEvent = e => {
  const {
    isOwner: t,
    catalogBizAction: n,
    catalogViewAction: r,
    bizActionConfig: u,
    bizPlatform: c,
    catalogOwnerJid: d
  } = e;
  const f = (0, a.default)(e, p);
  if (n && t) {
    new l.CatalogBizWamEvent((0, i.default)((0, i.default)({
      catalogBizAction: n
    }, f), u)).commit();
  } else if (r && (0, s.isPSForCatalogViewEnabled)()) {
    new o.BizCatalogViewWamEvent((0, i.default)({
      catalogViewAction: r,
      bizPlatform: c,
      catalogOwnerJid: d
    }, f)).commit();
  }
};