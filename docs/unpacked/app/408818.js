var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runWithBackoff = function (e) {
  let {
    retryableErrorCodes: t
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    retryableErrorCodes: c
  };
  const {
    signal: n
  } = new r();
  return (0, s.exponentialBackoff)((0, o.default)((0, o.default)({}, u), {}, {
    signal: n
  }), function () {
    var n = (0, a.default)(function* (n, r) {
      try {
        return yield e();
      } catch (e) {
        if (!(e instanceof l.ServerStatusCodeError)) {
          throw e;
        }
        if (t.has(e.statusCode) && r < u.retries) {
          return n(e);
        }
        throw e;
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }());
};
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/81109.js"));
var s = require("./672076.js");
var l = require("./984330.js");
const u = {
  minTimeout: 1000,
  retries: 3
};
const c = new Set([429, 500]);