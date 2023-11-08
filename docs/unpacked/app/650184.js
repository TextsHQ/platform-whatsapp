var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appealProductMD = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./72696.js");
const c = new s.WapParser("appealProductResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  return e.child("response").child("success").contentString() === "true";
});
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if ((0, u.commerceFeaturesDisabledBySanctions)()) {
      throw new l.E451();
    }
    const n = (0, o.wap)("iq", {
      id: (0, o.generateId)(),
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "fb:thrift_iq"
    }, (0, o.wap)("request", {
      type: "appeal_product"
    }, (0, o.wap)("reason", null, t), (0, o.wap)("id", null, e)));
    const r = yield (0, a.deprecatedSendIq)(n, c);
    if (r.success) {
      return r.result;
    }
    if (r.errorCode === 451) {
      throw new l.E451();
    }
    throw new l.ServerStatusCodeError(r.errorCode);
  })).apply(this, arguments);
}