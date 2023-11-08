Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMsgDownloadMedia = function (e) {
  const t = (0, o.useCallback)(() => e.downloadMedia({
    downloadEvenIfExpensive: false,
    rmrReason: r.WEBC_RMR_REASON_CODE.MSG_RENDER,
    isUserInitiated: false
  }), [e]);
  (0, o.useEffect)(() => {
    if (!(0, a.getChat)(e.unsafe()).isSuspendedOrTerminated()) {
      t();
    }
  }, [t, e]);
  return t;
};
var a = require("../app/163755.js");
var r = require("../app/885313.js");
var o = require("../vendor/667294.js");