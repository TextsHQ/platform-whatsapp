var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnvironment = function () {
  return f.apply(this, arguments);
};
exports.requireRelayRuntime = d;
var i = r(require("../vendor/348926.js"));
var a = require("./579473.js");
var o = require("./35011.js");
var s = require("./138990.js");
var l = require("./550866.js");
var u = r(require("./932325.js"));
var c = require("./97858.js");
function d() {
  return require.e(4815).then(require.t.bind(require, 244311, 23));
}
let p;
function f() {
  return (f = (0, i.default)(function* () {
    if (p != null) {
      return p;
    }
    const {
      Environment: e,
      Network: t,
      RecordSource: n,
      Store: r
    } = yield d();
    const f = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const _ = function () {
      var e = (0, i.default)(function* (e, t) {
        const n = {
          access_token: a.WHATSAPP_GRAPHQL_ACCESS_TOKEN,
          doc_id: o.PersistedQueries[e.name],
          variables: t,
          lang: (0, s.graphQLRemapLocale)(u.default.getFullLocale().replace("-", "_"), (0, c.getGraphqlLocaleRemapping)())
        };
        const r = yield self.fetch(a.WHATSAPP_GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: f,
          body: JSON.stringify(n)
        });
        if (!r.ok) {
          throw new l.GraphQLServerError({
            errors: [{
              code: r.status,
              message: r.statusText
            }]
          });
        }
        const i = yield r.json();
        if ((i == null ? undefined : i.errors) != null) {
          throw new l.GraphQLServerError({
            errors: i.errors
          });
        }
        return i;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    p = new e({
      network: t.create(_),
      store: new r(new n())
    });
    return p;
  })).apply(this, arguments);
}