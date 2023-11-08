var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./72696.js");
var c = require("./355813.js");
const d = new s.WapParser("reportProductResponse", e => {
  e.assertTag("iq");
  e.assertAttr("type", "result");
});
function p() {
  return (p = (0, i.default)(function* (e, t, n) {
    if ((0, u.commerceFeaturesDisabledBySanctions)()) {
      throw new l.E451();
    }
    const r = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "fb:thrift_iq",
      type: "set",
      id: (0, o.generateId)()
    }, (0, o.wap)("request", {
      type: "report_product",
      biz_jid: (0, c.USER_JID)(e)
    }, n ? (0, o.wap)("reason", null, n) : undefined, (0, o.wap)("id", null, t)));
    const i = yield (0, a.deprecatedSendIq)(r, d);
    if (!i.success) {
      if (i.errorCode === 451) {
        throw new l.E451();
      }
      throw new l.ServerStatusCodeError(i.errorCode);
    }
  })).apply(this, arguments);
}