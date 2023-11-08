Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchToken = function () {
  if (l != null) {
    return Promise.resolve({
      type: "success",
      token: l
    });
  }
  return u(1);
};
exports.markTokenAsInvalid = function () {
  l = null;
};
var r = require("./15842.js");
var i = require("./838196.js");
var a = require("./762465.js");
var o = require("./316348.js");
var s = require("./555622.js");
let l = null;
function u(e) {
  return (0, a.fetchNonce)().then(t => {
    switch (t.type) {
      case "error":
      case "not-enabled":
      case "recovery-required":
        return t;
      default:
        t.type;
        return (n = t.nonce, (0, a.markNonceAsUsed)(), s.QPL.markerStart(o.QuickLogMarkerId.MANAGE_ADS_FETCH_TOKEN), s.QPL.markerPoint(o.QuickLogMarkerId.MANAGE_ADS_FETCH_TOKEN, "request_token_start"), (0, i.sendGetAccessTokenAndSessionCookiesRPC)({
          codeElementValue: n
        }).then(e => {
          switch (e.name) {
            case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
              d();
              return {
                type: "too-many-attempts"
              };
            case "GetAccessTokenAndSessionCookiesResponseIncorrectNonce":
              d();
              return {
                type: "incorrect-nonce"
              };
            case "GetAccessTokenAndSessionCookiesResponseError":
              d();
              return {
                type: "error"
              };
            default:
              e.name;
              c(r.QuickLogActionType.SUCCESS);
              l = e.value.accessTokenElementValue;
              return {
                type: "success",
                token: l
              };
          }
        }).catch(e => {
          d();
          throw e;
        })).then(t => t.type === "incorrect-nonce" && e > 0 ? u(e - 1) : t);
    }
    var n;
  });
}
function c(e) {
  s.QPL.markerPoint(o.QuickLogMarkerId.MANAGE_ADS_FETCH_TOKEN, "request_token_end");
  s.QPL.markerEnd(o.QuickLogMarkerId.MANAGE_ADS_FETCH_TOKEN, e);
}
function d() {
  c(r.QuickLogActionType.FAIL);
}