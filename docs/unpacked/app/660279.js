Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphqlCatalogRequestWamEvent = undefined;
var r = require("./901032.js");
var i = require("./840235.js");
var a = require("./748962.js");
var o = require("./559242.js");
const {
  INTEGER: s,
  STRING: l
} = r.TYPES;
const u = (0, r.defineEvents)({
  GraphqlCatalogRequest: [3206, {
    businessJid: [4, l],
    businessType: [5, i.BUSINESS_TYPE],
    graphqlCatalogEndpoint: [1, a.GRAPHQL_CATALOG_ENDPOINT],
    graphqlErrorCode: [3, s],
    graphqlRequestResult: [2, o.GRAPHQL_REQUEST_RESULT]
  }, [1, 1, 1], "private", 0]
});
exports.GraphqlCatalogRequestWamEvent = u;