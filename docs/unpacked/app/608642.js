var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPrekeys = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./918019.js");
var o = require("./861095.js");
var s = require("./984330.js");
var l = require("./76833.js");
var u = require("./669050.js");
var c = require("./574819.js");
var d = r(require("./556869.js"));
function p() {
  return (p = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const n = yield (0, o.sendFetchKeyBundlesRPC)({
      userArgs: e.map(e => ({
        userJid: (0, c.widToDeviceJid)(e),
        hasUserReasonIdentity: t
      }))
    });
    if (n.name === "FetchKeyBundlesResponseServerError") {
      const e = n.value.errorServerErrors.value;
      throw new s.ServerStatusCodeError(Number(e.code), `fetchPrekeys: server error: ${e.code} ${e.text}`);
    }
    if (n.name === "FetchKeyBundlesResponseRequestError") {
      const e = n.value.errorRequestErrorsFetch.value;
      throw new s.ServerStatusCodeError(Number(e.code), `fetchPrekeys: request error: ${e.code} ${e.text}`);
    }
    const r = n.value.listUser.map(e => {
      const t = e.userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup;
      switch (t.name) {
        case "FetchKeyBundlesUserSuccess":
          {
            var n;
            var r;
            const {
              preKeyMixin: i,
              elementValue: o,
              deviceIdentityMixin: s,
              skeyIdKeyIDMixin: l,
              skeyValueKeyDataMixin: c,
              skeySignatureElementValue: d,
              registrationElementValue: p
            } = t.value;
            return {
              deviceIdentity: (n = s == null ? undefined : s.deviceIdentityElementValue) !== null && n !== undefined ? n : null,
              identity: o,
              skey: {
                id: (0, a.convertBytesToUint)(l.elementValue, 3),
                pubkey: c.elementValue,
                signature: d
              },
              key: i ? {
                id: (0, a.convertBytesToUint)(i.keyIdKeyIDMixin.elementValue, 3),
                pubkey: (r = i.keyValueKeyDataMixin) === null || r === undefined ? undefined : r.elementValue
              } : null,
              regId: (0, a.convertBytesToUint)(p, 4),
              wid: (0, u.createWid)(e.jid)
            };
          }
        case "FetchKeyBundlesUserErrorFallback":
        case "FetchKeyBundlesUserError":
          {
            const {
              errorCode: e,
              errorText: n
            } = t.value;
            return (0, d.default)(`fetchPrekeys: list item error: ${e} ${n}`);
          }
      }
    });
    if (r.length === 0) {
      throw (0, d.default)("fetchPrekeys: empty key info");
    }
    const {
      depletedPrekeyCount: i,
      processedPrekeyCount: p
    } = yield (0, l.processKeyBundles)(r);
    __LOG__(2)`fetchPrekeys: successfully established ${p} E2E sessions out of ${e.length} requested`;
    return {
      depletedPrekeyCount: i
    };
  })).apply(this, arguments);
}