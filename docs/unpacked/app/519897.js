var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./646083.js");
var c = require("./72696.js");
var d = require("./434736.js");
const p = new s.WapParser("editProductResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("product_catalog_edit").child("product");
  return (0, u.parseProductNode)(t);
});
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    if ((0, c.commerceFeaturesDisabledBySanctions)()) {
      throw new l.E451();
    }
    const r = (0, o.wap)("iq", {
      id: (0, o.generateId)(),
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog"
    }, (0, o.wap)("product_catalog_edit", {
      v: "1"
    }, (0, u.productModelToNode)(e), (0, o.wap)("width", null, t.toString()), (0, o.wap)("height", null, n.toString())));
    const i = yield (0, a.deprecatedSendIqErrorParser)(r, p, d.parseErrorFields);
    if (i.success) {
      return i.result;
    }
    if (i.errorCode === 451) {
      throw new l.E451();
    }
    throw i.customError ? new l.CatalogEditServerError(i.errorCode, i.customError) : new l.ServerStatusCodeError(i.errorCode);
  })).apply(this, arguments);
}