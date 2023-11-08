var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./72696.js");
const c = new s.WapParser("visibilitySetResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
});
function d() {
  return (d = (0, i.default)(function* (e) {
    if ((0, u.commerceFeaturesDisabledBySanctions)()) {
      throw new l.E451();
    }
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "w:biz:catalog",
      smax_id: "23",
      id: (0, o.generateId)()
    }, (0, o.wap)("product_visibility_update", {
      v: "1"
    }, e.map(e => (0, o.wap)("product", {
      is_hidden: e.isHidden ? "true" : "false"
    }, (0, o.wap)("id", null, e.productId)))));
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