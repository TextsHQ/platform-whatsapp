var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildInvocationPayload = function (e) {
  let {
    invocationId: t,
    method: n,
    args: r
  } = e;
  return {
    __id: t,
    __command: i.INVOCATION_COMMAND,
    __method: n,
    __args: r
  };
};
exports.unwrapInvocationPayload = function (e) {
  if (e != null && e.__command === i.INVOCATION_COMMAND) {
    (0, o.default)(e.__id, "Invocation ID missing");
    const t = (0, a.extractInvocationId)(e.__id);
    (0, o.default)(t != null && e.__method && typeof e.__method == "string" && e.__id && e.__args && Array.isArray(e.__args), "Malformed invocation message");
    const n = e;
    const r = n.__method;
    const i = n.__args;
    return {
      method: r,
      args: i,
      invocationId: t
    };
  }
};
var i = require("./270594.js");
var a = require("./826664.js");
var o = r(require("../vendor/441143.js"));