Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backendErrorParser = undefined;
exports.handleError = function (e) {
  a.parse(e);
  return Promise.resolve("NO_ACK");
};
var r = require("./347387.js");
const i = 479;
const a = new r.WapParser("errorParser", e => {
  e.assertTag("error");
  const t = e.attrInt("code");
  switch (t) {
    case i:
      __LOG__(4, undefined, new Error(), true)`Invalid stanza sent (smax-invalid)`;
      return void SEND_LOGS("smax-invalid");
    default:
      return function (e) {
        __LOG__(4, undefined, new Error(), true)`Unknown error code: ${e}`;
        SEND_LOGS("unknown-error-code");
      }(t);
  }
});
exports.backendErrorParser = a;