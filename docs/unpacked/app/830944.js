Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCatalogEventLogger = exports.GRAPHQL_CATALOG_ENDPOINT = undefined;
var r = require("./660279.js");
var i = require("./748962.js");
var a = require("./559242.js");
const o = i.GRAPHQL_CATALOG_ENDPOINT;
exports.GRAPHQL_CATALOG_ENDPOINT = o;
exports.createCatalogEventLogger = e => {
  const t = new r.GraphqlCatalogRequestWamEvent({
    graphqlCatalogEndpoint: e
  });
  return {
    success: () => {
      t.set({
        graphqlErrorCode: -1,
        graphqlRequestResult: a.GRAPHQL_REQUEST_RESULT.SUCCESS
      });
      t.commit();
    },
    failure: e => {
      let [n] = e;
      t.set({
        graphqlErrorCode: n.code,
        graphqlRequestResult: a.GRAPHQL_REQUEST_RESULT.FAILURE
      });
      t.commit();
    }
  };
};