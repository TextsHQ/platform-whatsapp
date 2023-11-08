var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProductCatalog = function () {
  return d.apply(this, arguments);
};
exports.productCatalogCreateResponse = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./72696.js");
const c = new s.WapParser("productCatalogCreateResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  e.child("product_catalog_create");
});
function d() {
  return (d = (0, i.default)(function* () {
    if ((0, u.commerceFeaturesDisabledBySanctions)()) {
      throw new l.E451();
    }
    const e = (0, o.wap)("iq", {
      id: (0, o.generateId)(),
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog"
    }, (0, o.wap)("product_catalog_create", {
      version: "1"
    }));
    const t = yield (0, a.deprecatedSendIq)(e, c);
    if (t.success) {
      return t.result;
    }
    if (t.errorCode === 451) {
      throw new l.E451();
    }
    throw new l.ServerStatusCodeError(t.errorCode);
  })).apply(this, arguments);
}
exports.productCatalogCreateResponse = c;