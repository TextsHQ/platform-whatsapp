var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCryptoLibDebugHelperInstance = function () {
  if ((0, s.isCryptoLibraryVerificationEnabled)()) {
    return new f();
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./135781.js");
var o = require("./130309.js");
var s = require("./492917.js");
var l = require("./345487.js");
var u = require("./999821.js");
var c = require("./76256.js");
var d = require("./574819.js");
var p = r(require("../vendor/441143.js"));
class f {
  constructor() {
    this._failed = false;
  }
  loadCurrentCryptoGroupSession(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      try {
        __LOG__(2)`loadCurrentCryptoGroupSession: starting load group session`;
        const r = (0, u.createSignalLikeSenderKeyName)((0, d.widToGroupJid)(e), t);
        let i;
        try {
          i = yield (0, c.getSignalProtocolStore)().loadSenderKey(r);
          __LOG__(2)`loadCurrentCryptoGroupSession: load group session done`;
        } catch (e) {
          __LOG__(3)`loadCurrentCryptoGroupSession: failed with error ${e}`;
          return void (n._failed = true);
        }
        (0, p.default)(i != null, "loadCurrentCryptoGroupSession: sender key should not be null");
        try {
          n._groupCryptoSession = yield (0, l.toCryptoManagerSenderKeySession)(i);
          n._libsignalSession = i;
        } catch (e) {
          __LOG__(3)`loadCurrentCryptoGroupSession: failed with error ${e}`;
          n._failed = true;
        }
      } catch (e) {
        __LOG__(3)`loadCurrentCryptoGroupSession: failed with error ${e}`;
        n._failed = true;
      }
    })();
  }
  verifyCryptoGroupDecryption(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      try {
        if (r._failed) {
          __LOG__(3)`verifyCryptoGroupDecryption: failed before decryption with error`;
        }
        try {
          if (!(yield (0, o.getCryptoLibModule)().decryptGroupContent({
            loadSenderKeySession: () => r._groupCryptoSession == null ? Promise.resolve((0, a.makeError)("errLoadSenderKeySession")) : Promise.resolve((0, a.makeResult)(r._groupCryptoSession)),
            saveSenderKeySession: (s = (0, i.default)(function* () {}), function () {
              return s.apply(this, arguments);
            })
          }, (0, d.widToMulticastJid)(e), (0, d.widToDeviceJid)(t), n, function () {
            var e = (0, i.default)(function* () {});
            return function () {
              return e.apply(this, arguments);
            };
          }())).success) {
            __LOG__(3)`verifyCryptoGroupDecryption: decrypt fail`;
            r._failed = true;
          }
        } catch (e) {
          __LOG__(3)`verifyCryptoGroupDecryption: failed to decrypt group message ${e}`;
          r._failed = true;
        }
        r._maybeReportError();
      } catch (e) {
        __LOG__(3, undefined, undefined, true)`verifyCryptoGroupDecryption: failed with unexpected error ${e}`;
        SEND_LOGS("crypto-lib-verify-failed");
      }
      var s;
    })();
  }
  _maybeReportError() {
    if (this._failed) {
      __LOG__(3, undefined, undefined, true)`verifyCryptoGroupDecryption: verify failed`;
      SEND_LOGS("crypto-lib-verify-failed");
    } else {
      __LOG__(2)`verifyCryptoGroupDecryption: verify success`;
    }
  }
}