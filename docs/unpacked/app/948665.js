var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToConcreteRequest = p;
exports.deprecatedFetchQuery = function () {
  return c.apply(this, arguments);
};
Object.defineProperty(exports, "graphql", {
  enumerable: true,
  get: function () {
    return u.graphql;
  }
});
exports.graphqlWWWTODO = function () {
  throw (0, l.default)("Invariant Violation");
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./159150.js");
var s = require("./561225.js");
var l = r(require("./556869.js"));
var u = require("./270658.js");
function c() {
  return (c = (0, a.default)(function* (e, t) {
    const n = new o.MexPerfTracker(true);
    n.start();
    try {
      const r = p(e);
      d(r, n);
      const {
        fetchQuery: i
      } = yield (0, s.requireRelayRuntime)();
      const a = yield i(yield (0, s.getEnvironment)(), f(r), t, {
        fetchPolicy: "network-only",
        networkCacheConfig: {
          force: true,
          metadata: {
            mexPerfTracker: n
          }
        }
      }).toPromise();
      n.setHasData(true);
      n.stop();
      n.logEvent();
      return a;
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX][v2] RelayClient Error:`;
      if (!(e instanceof s.MexIqError || e instanceof s.MexPayloadParsingError || e instanceof s.MexFatalExtensionError)) {
        n.setHasData(false);
        n.setErrors([(0, o.createLoggingClientError)(417, e.message)]);
      }
      n.stop();
      n.logEvent();
      throw e;
    }
  })).apply(this, arguments);
}
function d(e, t) {
  var n;
  var r;
  t.setQueryId((n = e.params) === null || n === undefined ? undefined : n.id);
  t.setOperationName((r = e.params) === null || r === undefined ? undefined : r.name);
}
function p(e) {
  var t;
  if (e.kind === "Request") {
    return e;
  }
  const n = new Error(`operation kind ${(t = JSON.stringify(e.kind)) !== null && t !== undefined ? t : ""} is not 'Request'`);
  n.stack;
  throw n;
}
function f(e) {
  return (0, i.default)((0, i.default)({}, e), {}, {
    params: (0, i.default)((0, i.default)({}, e.params), {}, {
      operationKind: "query"
    })
  });
}