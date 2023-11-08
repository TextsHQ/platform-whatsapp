var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQuery = function () {
  return c.apply(this, arguments);
};
exports.graphql = function () {
  throw (0, l.default)("Invariant Violation");
};
exports.graphqlWWWTODO = function () {
  throw (0, l.default)("Invariant Violation");
};
var i = r(require("../vendor/506479.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./550866.js");
var s = require("./725799.js");
var l = r(require("./556869.js"));
const u = ["eventLogger"];
function c() {
  return (c = (0, a.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let {
      eventLogger: r
    } = n;
    let a = (0, i.default)(n, u);
    const {
      fetchQuery: l
    } = yield (0, s.requireRelayRuntime)();
    try {
      const n = yield (0, s.getEnvironment)();
      const i = (yield l)(n, e, t, a).toPromise();
      if (!(r == null)) {
        r.success();
      }
      return i;
    } catch (e) {
      if (e instanceof o.GraphQLServerError) {
        if (!(r == null)) {
          r.failure(e.source.errors);
        }
      }
      throw e;
    }
  })).apply(this, arguments);
}