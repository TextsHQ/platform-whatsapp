var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseWhatsAppAdIdentityResponseMixin = function (e) {
  const t = (0, i.assertTag)(e, "whatsapp_ad_identity");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  const a = (0, l.parseAdStatusMixin)(e);
  if (!a.success) {
    return a;
  }
  return (0, o.makeResult)((0, r.default)({
    id: n.value
  }, a.value));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./168392.js");
var i = require("../app/686310.js");