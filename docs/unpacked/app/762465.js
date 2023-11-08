Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castToNonce = function (e) {
  return e;
};
exports.fetchNonce = function (e) {
  return (0, i.promiseTimeout)(function (e) {
    if (!(0, l.adManagementEnabled)()) {
      return Promise.resolve({
        type: "not-enabled"
      });
    }
    if (p != null && e !== true) {
      return p.promise;
    }
    d.QPL.markerStart(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE);
    d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "request_nonce_start");
    const t = p = new o.Resolvable();
    return (0, s.sendRequestSilentNonceRPC)({}).then(e => {
      switch (e.name) {
        case "RequestSilentNonceResponseError":
          d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "request_nonce_end");
          d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, a.QuickLogActionType.FAIL);
          return {
            type: "error"
          };
        case "RequestSilentNonceResponseRecoveryRequired":
          d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "request_nonce_end");
          d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, a.QuickLogActionType.FAIL);
          return {
            type: "recovery-required"
          };
        default:
          e.name;
          d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "request_nonce_end");
          d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "push_nonce_start");
          return t.promise;
      }
    }).catch(e => {
      d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "request_nonce_end");
      d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, a.QuickLogActionType.FAIL);
      throw e;
    });
  }(e), u.MANAGE_ADS_FETCH_TIMEOUT_MS).catch(e => {
    if (e instanceof r.TimeoutError) {
      d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, a.QuickLogActionType.ABORTED);
    }
    throw e;
  });
};
exports.markNonceAsUsed = function () {
  p = null;
};
exports.setNonceFromPushNotification = function (e) {
  if (p == null) {
    __LOG__(3)`Received a biz token nonce without asking for it`;
    p = new o.Resolvable();
  }
  p.resolve({
    type: "success",
    nonce: e
  });
  d.QPL.markerPoint(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, "push_nonce_end");
  d.QPL.markerEnd(c.QuickLogMarkerId.MANAGE_ADS_FETCH_NONCE, a.QuickLogActionType.SUCCESS);
};
var r = require("./477689.js");
var i = require("./434517.js");
var a = require("./15842.js");
var o = require("./950376.js");
var s = require("./856882.js");
var l = require("./72696.js");
var u = require("./312158.js");
var c = require("./316348.js");
var d = require("./555622.js");
let p = null;