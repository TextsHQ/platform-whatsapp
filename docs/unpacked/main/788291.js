var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWhatsappAdCreationUrl = undefined;
exports.getWhatsappEditAdUrl = function (e, t) {
  return `https://www.facebook.com/ad_center/edit/?boost_id=${e}&entry_point=whatsapp_smb_web_ad_edit_manage_ads_ad_row_menu&flow_id=${t}`;
};
exports.getWhatsappManageAdsUrl = undefined;
exports.getWhatsappRecreateAdUrl = function (e) {
  return `https://www.facebook.com/page_promotions/edit/?source=whatsapp_smb_web_recreate_ad_manage_ads_ad_row_menu&campaign_group_id=${e}`;
};
exports.getWhatsappViewAdDetailsUrl = function (e) {
  return `https://www.facebook.com/ad_center/manage/?boost_id=${e}`;
};
var r = a(require("../vendor/348926.js"));
var o = require("./368641.js");
var l = require("../app/459857.js");
var i = a(require("../app/556869.js"));
const u = "https://www.facebook.com/page_promotions/create?";
const s = "page_id";
const c = function () {
  var e = (0, r.default)(function* (e, t, n) {
    const a = new URLSearchParams();
    a.append("objective", "boosted_message");
    if (e.id != null) {
      a.append(s, e.id);
    }
    const r = JSON.stringify({
      flow_id: n
    });
    const c = JSON.stringify({
      whatsapp_media_source_type: "new_content_creation"
    });
    a.append("source", t);
    a.append("request_data", btoa(r));
    a.append("so", btoa(c));
    const d = e.type === "whatsapp" && e.hasCreatedAd;
    if (!e.hasFacebookPage || d) {
      const t = yield (0, o.queryNonce)();
      if (t == null) {
        __LOG__(4, undefined, new Error())`[ctwa] AdCreation URL Nonce is null`;
        throw (0, i.default)("[ctwa] AdCreation URL Nonce is null");
      }
      return ((e, t, n, a) => {
        const r = new URLSearchParams();
        r.append("code", e);
        r.append("pn", t);
        r.append("value_prop", "Ads");
        if (n != null) {
          r.append(s, n);
        }
        r.append("redirect_url", a);
        return "https://www.facebook.com/pages/whatsapp?" + r.toString();
      })(t, (0, l.assertGetMeUser)().user, e.id, u + a.toString());
    }
    return u + a.toString();
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.getWhatsappAdCreationUrl = c;
exports.getWhatsappManageAdsUrl = (e, t) => "https://www.facebook.com/" + e.id + "/ad_center/?ref_source=" + t;