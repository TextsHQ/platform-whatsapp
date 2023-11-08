var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQuery = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./159150.js");
var o = require("./948665.js");
var s = require("./561225.js");
var l = r(require("./556869.js"));
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = new a.MexPerfTracker(true);
    n.start();
    try {
      const r = (0, o.convertToConcreteRequest)(e);
      const i = r.params;
      n.setQueryId(i.id);
      n.setOperationName(i.name);
      const a = c(yield (0, s.fetchFunc)(r.params, t, {
        metadata: {
          mexPerfTracker: n
        }
      }), n);
      n.setHasData(true);
      n.stop();
      n.logEvent();
      return a.data;
    } catch (e) {
      if (e instanceof s.MexIqError || e instanceof s.MexPayloadParsingError || e instanceof s.MexFatalExtensionError) {
        if (!(e instanceof s.MexFatalExtensionError)) {
          __LOG__(4, undefined, new Error(), true, ["mex", "native-client"])`[mex][native-client] infra error: ${e.message}`;
          SEND_LOGS("mex-native-client-infra-error", 1, "mex", "native-client");
        }
      } else {
        __LOG__(4, undefined, new Error(), true, ["mex", "native-client"])`[mex][native-client] unexpected error: ${e.message}`;
        SEND_LOGS("mex-native-client-unexpected-error", 1, "mex", "native-client");
        n.setHasData(false);
        n.setErrors([(0, a.createLoggingClientError)(417, e.message)]);
      }
      n.stop();
      n.logEvent();
      throw e;
    }
  })).apply(this, arguments);
}
function c(e, t) {
  if (e.data != null) {
    return {
      data: e.data
    };
  }
  if (Array.isArray(e)) {
    const e = "mex response is an array";
    t.setErrors([(0, a.createLoggingClientError)(472, e)]);
    throw new s.MexPayloadParsingError((0, l.default)(e));
  }
  const n = "data is missing in mex response";
  t.setErrors([(0, a.createLoggingClientError)(472, n)]);
  throw new s.MexPayloadParsingError((0, l.default)(n));
}