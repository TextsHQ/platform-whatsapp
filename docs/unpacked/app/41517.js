var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadPreKeys = function () {
  const e = new o.PromiseRetryLoop({
    name: "uploadPreKeys",
    timer: y,
    code: e => (0, i.default)(function* () {
      __LOG__(2)`uploadPreKeys: running`;
      const t = yield function () {
        return h.apply(this, arguments);
      }();
      if ((t == null ? undefined : t.success) === true) {
        __LOG__(2)`uploadPreKeys: done`;
        e();
      } else {
        __LOG__(2)`uploadPreKeys: retrying (after delay)`;
      }
    })()
  });
  e.start();
  return e.promise();
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./721569.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = r(require("./846870.js"));
var c = require("./937001.js");
var d = require("./431028.js");
var p = require("./326314.js");
var f = require("./732974.js");
var _ = r(require("./556869.js"));
const g = {
  error: false,
  result: true
};
const m = new l.WapParser("uploadPreKeyResParser", e => {
  e.assertTag("iq");
  e.assertFromServer();
  if (e.attrEnum("type", g)) {
    return {
      success: true
    };
  }
  const t = e.child("error");
  return {
    errorCode: t.attrInt("code"),
    errorText: t.hasAttr("text") ? t.attrString("text") : ""
  };
});
function h() {
  return (h = (0, i.default)(function* () {
    const e = c.ServerProps.maxKeys;
    const [t, n] = yield Promise.all([p.waSignalStore.getRegistrationInfo(), p.waSignalStore.getSignedPreKey()]);
    if (!t || !n) {
      throw (0, _.default)("No signal info is available");
    }
    const {
      registrationId: r,
      identityKeyPair: i
    } = t;
    const [o, l] = yield p.waSignalStore.getOrGenPreKeys(e, d.generatePreKeyPair).then(e => {
      if (e.length === 0) {
        throw (0, _.default)("No preKey is available");
      }
      return [(0, s.wap)("iq", {
        id: (0, s.generateId)(),
        xmlns: "encrypt",
        type: "set",
        to: s.S_WHATSAPP_NET
      }, (0, s.wap)("registration", null, (0, s.BIG_ENDIAN_CONTENT)(r)), (0, s.wap)("type", null, u.default.KEY_BUNDLE_TYPE), (0, s.wap)("identity", null, i.pubKey), (0, s.wap)("list", null, e.map(f.xmppPreKey)), (0, f.xmppSignedPreKey)(n)), e[e.length - 1].keyId];
    });
    try {
      const t = yield (0, a.waitForConnection)().then(() => p.waSignalStore.markKeyAsUploaded(l)).then(() => (0, a.deprecatedSendIqWithoutRetry)(o, m));
      if (t.success) {
        p.waSignalStore.setServerHasPreKeys(true);
        __LOG__(2)`_uploadPreKeys: ${e} keys uploaded, raw stanza size: ${o.toString().length}b`;
        return {
          success: true
        };
      }
      const n = t.errorCode;
      if (n >= 500) {
        __LOG__(3)`_uploadPreKeys: server requested backoff ${n} (count: ${e}, size: ${o.toString().length}b)`;
      } else if (n === 406) {
        __LOG__(3)`_uploadPreKeys: uploaded invalid keys (count: ${e}, size: ${o.toString().length}b)`;
      } else {
        __LOG__(3)`_uploadPreKeys: unrecognized error ${n} (count: ${e}, size: ${o.toString().length}b)`;
      }
      return {
        errorCode: t.errorCode,
        errorText: t.errorText
      };
    } catch (t) {
      __LOG__(3)`_uploadPreKeys: disconnected, unclear if on server: ${t} (count: ${e}, size: ${o.toString().length}b)`;
    }
  })).apply(this, arguments);
}
const y = {
  algo: {
    type: "fibonacci",
    first: 1000,
    second: 2000
  },
  max: 610000
};