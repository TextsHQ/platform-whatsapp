var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductOrCatalogLinkPreview = function () {
  return E.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/713464.js");
var l = require("../app/177938.js");
var i = require("../app/27578.js");
var u = require("../app/714574.js");
var s = require("../app/834301.js");
var c = require("../app/232294.js");
var d = require("../app/533494.js");
var f = require("../app/459857.js");
var p = a(require("../app/124928.js"));
var m = require("../app/669050.js");
var h = require("../vendor/548360.js");
const g = 100;
function E() {
  return (E = (0, r.default)(function* (e, t, n) {
    var a;
    var r;
    var E;
    var v;
    if (!p.default.isWid(t)) {
      return null;
    }
    const _ = (0, m.createWid)(t);
    let y;
    try {
      y = yield o.CatalogCollection.find(_);
    } catch (e) {
      return null;
    }
    const C = n ? y.productCollection.get(n) : y.productCollection.getProductModels().find(e => e.reviewStatus === "APPROVED" && !e.isHidden);
    if (C == null || C.reviewStatus !== "APPROVED" || C.isHidden) {
      return null;
    }
    const b = C.getPreviewImage();
    let M;
    let S;
    let T;
    let w;
    if (b) {
      [M] = yield (0, c.getResizedThumbData)(b.mediaUrl, [{
        width: g,
        height: g,
        imageFormat: "image/jpeg",
        imageFormatOptions: 0.75
      }]);
    }
    if ((a = (0, f.getMaybeMeUser)()) === null || a === undefined ? undefined : a.equals(_)) {
      const e = l.ContactCollection.get(_);
      if (e == null) {
        return null;
      }
      S = (0, u.getDisplayName)(e);
    } else {
      var A;
      S = (A = (yield (0, s.getOrQueryUsyncInfo)(_)).bizInfo) === null || A === undefined ? undefined : A.verifiedName.name;
    }
    if (n) {
      T = h.fbt._("{productName} from {catalogOwnerName} on WhatsApp.", [h.fbt._param("productName", C.name), h.fbt._param("catalogOwnerName", S)], {
        hk: "1Avc3r"
      }).toString();
      if (C.description && C.priceAmount1000 != null && C.currency) {
        w = `${C.description} · ${(0, i.formatAmount1000)(C.currency, C.priceAmount1000)}`;
      } else if (C.description) {
        w = C.description;
      } else if (C.priceAmount1000 != null && C.currency) {
        w = (0, i.formatAmount1000)(C.currency, C.priceAmount1000);
      }
    } else {
      T = h.fbt._("View {catalogOwnerName}'s Catalog on WhatsApp", [h.fbt._param("catalogOwnerName", S)], {
        hk: "1IS0ge"
      }).toString();
      w = h.fbt._("Learn more about their products & services", null, {
        hk: "W8MSB"
      }).toString();
    }
    return {
      url: e,
      data: {
        title: T,
        description: w || undefined,
        canonicalUrl: e,
        matchedText: e,
        richPreviewType: d.Message$ExtendedTextMessage$PreviewType.NONE,
        thumbnail: (r = M) === null || r === undefined ? undefined : r.dataUrl,
        thumbnailHeight: (E = M) === null || E === undefined ? undefined : E.height,
        thumbnailWidth: (v = M) === null || v === undefined ? undefined : v.width,
        doNotPlayInline: true,
        isLoading: false
      }
    };
  })).apply(this, arguments);
}