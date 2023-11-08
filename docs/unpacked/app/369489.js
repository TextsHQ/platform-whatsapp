var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndStoreIdentityKeys = function () {
  return g.apply(this, arguments);
};
exports.getIdentityKeys = m;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./355813.js");
var u = require("./403206.js");
var c = require("./854379.js");
var d = require("./999821.js");
var p = require("./76256.js");
var f = r(require("./556869.js"));
const _ = new s.WapParser("identityKeysParser", e => e.child("list").mapChildren(e => {
  if (e.hasChild("error")) {
    const t = e.child("error");
    const n = t.attrInt("code");
    const r = t.attrString("text");
    throw (0, f.default)(`identityKeysParser bad response: ${n} ${r}`);
  }
  return {
    type: e.child("type").contentBytes(1),
    identity: e.child("identity").contentBytes(32),
    user: (0, c.deviceJidToDeviceWid)(e.attrDeviceJid("jid"))
  };
}));
function g() {
  return (g = (0, i.default)(function* (e) {
    const t = yield (0, p.getPersistSignalProtocolStore)().bulkLoadIdentityKey(e.map(e => String((0, d.createSignalAddress)(e))));
    const n = e.filter((e, n) => t[n] == null);
    if (n.length === 0) {
      return void __LOG__(2)`getAndStoreIdentityKeys: got 0 missing keys`;
    }
    __LOG__(2)`getAndStoreIdentityKeys: query ${n.length} missing keys for ${e.length} contacts`;
    const r = (yield m(n)).map(e => {
      const t = e.identity;
      const n = (0, u.toSignalCurvePubKey)(t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset));
      return {
        identityKey: (0, d.bufferToStr)(n),
        identifier: (0, d.createSignalAddress)(e.user).toString()
      };
    });
    return (0, p.getPersistSignalProtocolStore)().bulkCreateIdentity(r);
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = e.map(e => (0, o.wap)("user", {
      jid: (0, l.DEVICE_JID)(e)
    }));
    const n = (0, o.wap)("iq", {
      xmlns: "encrypt",
      type: "get",
      to: o.S_WHATSAPP_NET,
      id: (0, o.generateId)()
    }, (0, o.wap)("identity", null, t));
    const r = yield (0, a.deprecatedSendIq)(n, _);
    if (!r.success) {
      throw (0, f.default)(`getIdentityKeys bad response ${String(r)}`);
    }
    return r.result;
  })).apply(this, arguments);
}