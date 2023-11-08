var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryCatalogHasCategories = undefined;
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./830944.js");
var s = require("./550866.js");
var l = r(require("./676427.js"));
var u = require("./270658.js");
r(require("./16563.js"));
const c = function () {
  var e = (0, a.default)(function* (e) {
    let {
      catalogWid: t,
      directConnectionEncryptedInfo: r,
      imageDimensions: a = {
        width: 100,
        height: 100
      },
      sessionId: c
    } = e;
    try {
      var d;
      const e = yield (0, u.fetchQuery)(i !== undefined ? i : i = require("./70649.js"), {
        request: {
          categories: {
            biz_jid: t.toString(),
            direct_connection_encrypted_info: r,
            image_dimensions: a,
            catalog_session_id: c
          }
        }
      }, {
        eventLogger: (0, o.createCatalogEventLogger)(o.GRAPHQL_CATALOG_ENDPOINT.GET_CATEGORIES)
      });
      return Boolean(e == null || (d = e.xwa_product_catalog_get_categories) === null || d === undefined ? undefined : d.categories.length);
    } catch (e) {
      if (e instanceof s.GraphQLServerError) {
        const [t] = e.source.errors || [];
        if ((t == null ? undefined : t.code) === 2498052) {
          return false;
        }
        (0, l.default)(e);
      }
      __LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_categories query.`;
      return false;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.queryCatalogHasCategories = c;