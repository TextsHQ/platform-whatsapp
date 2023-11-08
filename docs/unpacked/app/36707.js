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
r(require("./16563.js"));
const m = function () {
  var e = (0, a.default)(function* (e) {
    if ((0, s.commerceFeaturesDisabledBySanctions)()) {
      throw new o.E451();
    }
    try {
      const {
        catalogWid: t,
        afterCursor: r,
        limit: a,
        productsCount: o,
        width: s,
        height: c,
        directConnectionEncryptedInfo: d
      } = e;
      const p = yield (0, _.fetchQuery)(i !== undefined ? i : i = require("./933644.js"), {
        request: {
          collections: {
            biz_jid: t.toString(),
            collection_limit: String(a),
            item_limit: String(o),
            after: r,
            width: String(s),
            height: String(c),
            direct_connection_encrypted_info: d
          }
        }
      }, {
        eventLogger: (0, u.createCatalogEventLogger)(u.GRAPHQL_CATALOG_ENDPOINT.GET_COLLECTIONS)
      });
      if ((p == null ? undefined : p.xwa_product_catalog_get_collections) == null) {
        return {
          afterCursor: "",
          collections: []
        };
      }
      const {
        collections: g,
        paging: m
      } = p.xwa_product_catalog_get_collections;
      return {
        afterCursor: (m == null ? undefined : m.after) || "",
        collections: g.map(e => {
          var t;
          let {
            id: n,
            name: r,
            status_info: i,
            products: a
          } = e;
          const o = i == null ? undefined : i.status;
          const s = (t = o != null ? (0, f.asProductReviewType)(o) : undefined) !== null && t !== undefined ? t : "APPROVED";
          return {
            id: n || "",
            name: r || "",
            canAppeal: (i == null ? undefined : i.can_appeal) === "true",
            isHidden: false,
            reviewStatus: s,
            totalItemsCount: 0,
            products: a.map(l.parseProductGraphQL),
            rejectReason: i == null ? undefined : i.reject_reason,
            commerceUrl: i == null ? undefined : i.commerce_url
          };
        })
      };
    } catch (n) {
      if (n instanceof c.GraphQLServerError) {
        var t;
        const [e] = ((t = n.source) === null || t === undefined ? undefined : t.errors) || [];
        if ((e == null ? undefined : e.code) === 2498052) {
          return {
            collections: [],
            afterCursor: ""
          };
        }
        (0, d.default)(n);
      }
      __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_collections query. Falling back to IQ.`;
      return (0, p.queryCollectionsIQ)(e);
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
  return (h(...arguments) ? m : p.queryCollectionsIQ)(...arguments);
};
exports.default = y;