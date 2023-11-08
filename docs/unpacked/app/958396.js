var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildResponsePayload = function (e, t) {
  return {
    __id: e,
    __command: i.RESPONSE_COMMAND,
    __result: t
  };
};
exports.unwrapResponsePayload = function (e) {
  if (e != null && e.__command === i.RESPONSE_COMMAND) {
    (0, o.default)(e.__id != null, "Invocation ID missing");
    const t = (0, a.extractInvocationId)(e.__id);
    (0, o.default)(t != null && e.hasOwnProperty("__result"), "Malformed response message");
    return {
      result: e.__result,
      invocationId: t
    };
  }
};
var i = require("./270594.js");
var a = require("./826664.js");
var o = r(require("../vendor/441143.js"));