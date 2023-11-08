var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNativeFlowCtasFromInteractiveMsg = undefined;
exports.nativeFlowButtonToCtaButton = u;
var i = require("./22323.js");
var a = r(require("./753110.js"));
var o = r(require("./182394.js"));
var s = require("./373070.js");
var l = require("../vendor/548360.js");
function u(e, t) {
  var n;
  const r = (n = e.buttonParamsJson) !== null && n !== undefined ? n : "";
  const a = JSON.parse(r);
  if (e.name === "cta_url") {
    return {
      name: "cta_url",
      index: t,
      data: {
        label: a.display_text,
        url: a.url,
        merchantUrl: a.merchant_url
      }
    };
  }
  if (e.name === "cta_call") {
    return {
      name: e.name,
      index: t,
      data: {
        label: a.display_text,
        selectionId: a.id
      }
    };
  }
  if (e.name === "quick_reply") {
    return {
      name: e.name,
      index: t,
      data: {
        label: a.display_text,
        selectionId: a.id,
        disabled: a.disabled,
        buttonParamsJson: r
      }
    };
  }
  if (e.name === "cta_catalog") {
    const e = a.catalog_product_id != null ? l.fbt._("View Product", null, {
      hk: "3yvnzX"
    }) : l.fbt._("View Catalog", null, {
      hk: "2zIY3m"
    });
    const n = a.catalog_product_id != null ? (0, i.createProductLink)(a.business_phone_number, a.catalog_product_id) : (0, i.createCatalogLink)(a.business_phone_number);
    return {
      name: "cta_catalog",
      index: t,
      data: {
        label: e.toString(),
        catalogUrl: n,
        businessPhoneNumber: a.business_phone_number,
        catalogProductId: a.catalog_product_id
      }
    };
  }
}
exports.getNativeFlowCtasFromInteractiveMsg = e => {
  var t;
  if (e.type === s.MSG_TYPE.INTERACTIVE && e.interactiveType === o.default.NATIVE_FLOW && (e.nativeFlowName === a.default.QUICK_REPLY || e.nativeFlowName === a.default.CTA_CALL || e.nativeFlowName === a.default.CTA_URL || e.nativeFlowName === a.default.CTA_CATALOG) && ((t = e.interactivePayload) === null || t === undefined ? undefined : t.buttons) != null) {
    const t = [];
    e.interactivePayload.buttons.forEach((e, n) => {
      const r = u(e, n);
      if (r != null) {
        t.push(r);
      }
    });
    if (t.length > 0) {
      return t;
    }
  }
  return null;
};