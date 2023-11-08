var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductsMD = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./72696.js");
const c = new s.WapParser("productDeleteResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  return {
    deletedCount: e.child("product_catalog_delete").attrInt("deleted_count")
  };
});
function d() {
  return (d = (0, i.default)(function* (e) {
    if ((0, u.commerceFeaturesDisabledBySanctions)()) {
      throw new l.E451();
    }
    const t = (0, o.wap)("iq", {
      id: (0, o.generateId)(),
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog"
    }, (0, o.wap)("product_catalog_delete", {
      v: "1"
    }, e.map(e => (0, o.wap)("product", null, (0, o.wap)("id", null, e)))));
    const n = yield (0, a.deprecatedSendIq)(t, c);
    if (n.success) {
      return n.result;
    }
    if (n.errorCode === 451) {
      throw new l.E451();
    }
    throw new l.ServerStatusCodeError(n.errorCode);
  })).apply(this, arguments);
}