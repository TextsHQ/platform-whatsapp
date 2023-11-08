var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQuery = function () {
  return p.apply(this, arguments);
};
Object.defineProperty(exports, "graphql", {
  enumerable: true,
  get: function () {
    return c.graphql;
  }
});
Object.defineProperty(exports, "graphqlWWWTODO", {
  enumerable: true,
  get: function () {
    return c.graphqlWWWTODO;
  }
});
var i = r(require("../vendor/506479.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./550866.js");
var s = require("./464139.js");
var l = require("./469044.js");
var u = require("./20211.js");
var c = require("./270658.js");
const d = ["eventLogger"];
function p() {
  return (p = (0, a.default)(function* (e, t) {
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let {
      eventLogger: a
    } = r;
    let c = (0, i.default)(r, d);
    const {
      fetchQuery: p
    } = yield (0, l.requireRelayRuntime)();
    try {
      const r = yield p(yield (0, l.getEnvironment)(n), e, t, c).toPromise();
      if (!(a == null)) {
        a.success();
      }
      const i = {
        result: r,
        query: e,
        variables: t
      };
      return new u.MexResponse(r);
    } catch (e) {
      if (e instanceof s.MexExtensionError) {
        return new u.MexResponse(e.data, e == null ? undefined : e.errors);
      }
      if (e.source.errors.find(e => e.isIQError)) {
        __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX] RelayClient IQ Error`;
        if (e instanceof o.GraphQLServerError) {
          if (!(a == null)) {
            a.failure(e.source.errors);
          }
        }
      }
      throw e;
    }
  })).apply(this, arguments);
}