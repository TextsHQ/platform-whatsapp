Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./347387.js");
var i = require("./854379.js");
var a = require("./459857.js");
var o = new r.WapParser("retryRequestParser", e => {
  e.assertTag("receipt");
  e.assertAttr("type", "retry");
  if (e.hasAttr("to")) {
    e.assertAttr("to", (0, a.assertGetMe)().toJid());
  }
  const t = (0, i.jidWithTypeToWid)(e.attrJidWithType("from"));
  const n = e.hasAttr("participant") ? (0, i.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null;
  const r = e.hasAttr("recipient") ? (0, i.deviceJidToUserWid)(e.attrDeviceJid("recipient")) : null;
  const o = e.child("retry");
  const s = e.maybeChild("keys");
  let l = null;
  if (s != null) {
    var u;
    const e = s.child("skey");
    const t = s.child("key");
    l = {
      identity: s.child("identity").contentBytes(32),
      deviceIdentity: (u = s.maybeChild("device-identity")) === null || u === undefined ? undefined : u.contentBytes(),
      skey: {
        id: e.child("id").contentUint(3),
        pubkey: e.child("value").contentBytes(32),
        signature: e.child("signature").contentBytes(64)
      },
      key: {
        id: t.child("id").contentUint(3),
        pubkey: t.child("value").contentBytes(32)
      }
    };
  }
  return {
    stanzaId: e.attrString("id"),
    originalMsgId: o.attrString("id"),
    ts: e.attrTime("t"),
    retryCount: o.hasAttr("count") ? o.attrInt("count") : 0,
    regId: e.child("registration").contentUint(4),
    offline: e.hasAttr("offline"),
    from: t,
    participant: n,
    recipient: r,
    keyBundle: l
  };
});
exports.default = o;