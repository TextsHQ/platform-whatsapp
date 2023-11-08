var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = function (e) {
  return (0, p.redeemPrivateStatsToken)().then(t => t ? {
    result: t
  } : m(e).then(e => {
    const t = (0, i.default)({}, e);
    const {
      result: n
    } = e;
    if (n) {
      return (0, p.savePrivateStatsToken)(n).then(() => t);
    } else {
      return t;
    }
  }));
};
exports.issuePrivateStatsToken = m;
var i = r(require("../vendor/73982.js"));
var a = require("./904704.js");
var o = require("./250281.js");
var s = require("./194121.js");
var l = require("./34113.js");
var u = require("./721569.js");
var c = require("./632157.js");
var d = require("./919139.js");
var p = require("./975276.js");
var f = require("./716358.js");
var _ = require("./347387.js");
const g = new _.WapParser("issuePrivateStatsToken", e => {
  const t = e.child("sign_credential");
  return {
    signedCredential: t.child("signed_credential").contentBytes(),
    acsPublicKey: t.child("acs_public_key").contentBytes()
  };
});
function m(e) {
  const t = (0, c.monotonicTime)();
  const n = {
    overallStartTime: t,
    retryStartTime: t,
    retryAttemptsLeft: 3
  };
  const r = new Uint8Array(32);
  self.crypto.getRandomValues(r);
  const p = new Uint8Array(32);
  self.crypto.getRandomValues(p);
  const _ = (0, d.blindToken)(r, p);
  const m = new u.PromiseRetryLoop({
    name: "issuePrivateStatsToken",
    timer: {
      algo: {
        type: "exponential",
        first: 250
      },
      max: 1000
    },
    code: t => {
      if (n.retryAttemptsLeft < 3) {
        n.retryStartTime = (0, c.monotonicTime)();
      }
      const u = (0, f.wap)("iq", {
        xmlns: "privatestats",
        id: (0, f.generateId)(),
        type: "get",
        to: f.S_WHATSAPP_NET
      }, (0, f.wap)("sign_credential", {
        version: "1"
      }, (0, f.wap)("blinded_credential", null, _)));
      return (e || o.deprecatedSendIqWithoutRetry)(u, g).then(e => {
        if (!e.success) {
          const r = function (e) {
            switch (e.errorCode) {
              case 400:
                return "bad-request";
              case 500:
                return "internal-server-error";
              case 501:
                return "feature-not-implemented";
              case 503:
                return "service-unavailable";
              default:
                return "unknown";
            }
          }(e);
          __LOG__(3)`issuePrivateStatsToken: failed ${r}`;
          return void (r !== "internal-server-error" || n.retryAttemptsLeft <= 0 ? t({
            result: null,
            metric: (0, i.default)((0, i.default)({}, n), {}, {
              result: r
            })
          }) : n.retryAttemptsLeft--);
        }
        const {
          signedCredential: o,
          acsPublicKey: l
        } = e.result;
        const u = (0, d.unblindToken)(o, p, l);
        if (u == null) {
          __LOG__(3)`issuePrivateStatsToken: failed to unblind the signed token`;
          return void t({
            result: null,
            metric: (0, i.default)((0, i.default)({}, n), {}, {
              result: "decryption-error"
            })
          });
        }
        const c = a.Binary.build(r, u);
        const f = (0, s.hash)(c.readByteArray());
        t({
          result: {
            token: r,
            sharedSecret: f
          },
          metric: (0, i.default)((0, i.default)({}, n), {}, {
            result: "success"
          })
        });
      }).catch(e => {
        if (!(e instanceof l.Disconnected)) {
          return Promise.reject(e);
        }
        __LOG__(3)`issuePrivateStatsToken: Disconnected`;
        if (n.retryAttemptsLeft <= 0) {
          t({
            result: null,
            metric: (0, i.default)((0, i.default)({}, n), {}, {
              result: "disconnected"
            })
          });
        } else {
          n.retryAttemptsLeft--;
        }
      });
    }
  });
  m.start();
  return m.promise();
}