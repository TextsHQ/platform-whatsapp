var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./984330.js");
var s = require("./72696.js");
var l = require("./631991.js");
var u = require("./830944.js");
var c = require("./550866.js");
var d = r(require("./676427.js"));
var p = require("./535190.js");
var f = require("./694630.js");
var _ = require("./270658.js");
var g = require("./459857.js");
const m = function () {
  var e = (0, a.default)(function* (e) {
    if ((0, s.commerceFeaturesDisabledBySanctions)()) {
      throw new o.E451();
    }
    try {
      var t;
      const {
        catalogWid: r,
        collectionId: a,
        afterCursor: o,
        limit: s,
        width: c,
        height: d,
        directConnectionEncryptedInfo: p
      } = e;
      const g = yield (0, _.fetchQuery)(i !== undefined ? i : i = require("./477174.js"), {
        request: {
          collection: {
            biz_jid: r.toString(),
            id: a,
            limit: String(s),
            after: o,
            width: String(c),
            height: String(d),
            direct_connection_encrypted_info: p
          }
        }
      }, {
        eventLogger: (0, u.createCatalogEventLogger)(u.GRAPHQL_CATALOG_ENDPOINT.GET_SINGLE_COLLECTION)
      });
      const {
        collection: m,
        paging: h
      } = (g == null ? undefined : g.xwa_product_catalog_get_single_collection) || {};
      const {
        id: y,
        name: E,
        status_info: S,
        products: v
      } = m || {};
      const T = S == null ? undefined : S.status;
      const M = (t = T != null ? (0, f.asProductReviewType)(T) : undefined) !== null && t !== undefined ? t : "APPROVED";
      return {
        afterCursor: (h == null ? undefined : h.after) || "",
        collections: [{
          id: y || "",
          name: E || "",
          canAppeal: (S == null ? undefined : S.can_appeal) === "true",
          isHidden: false,
          reviewStatus: M,
          totalItemsCount: 0,
          products: v != null ? v.map(l.parseProductGraphQL) : [],
          rejectReason: S == null ? undefined : S.reject_reason,
          commerceUrl: S == null ? undefined : S.commerce_url
        }]
      };
    } catch (t) {
      if (t instanceof c.GraphQLServerError) {
        (0, d.default)(t);
      }
      __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_single_collection query. Falling back to IQ.`;
      return (0, p.querySingleCollectionIQ)(e);
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const h = e => {
  let {
    catalogWid: t
  } = e;
  return (0, s.graphQLForCollectionM2Enabled)() && !(0, g.getMaybeMeUser)().equals(t);
};
var y = function () {
  return (h(...arguments) ? m : p.querySingleCollectionIQ)(...arguments);
};
exports.default = y;