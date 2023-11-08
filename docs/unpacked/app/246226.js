var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleE2eIdentityChange = function (e) {
  const t = M.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  const {
    wid: n,
    stanzaId: r,
    displayName: s,
    delay: p,
    lid: A,
    offline: b
  } = t.success;
  const C = (0, o.wap)("ack", {
    to: (0, u.DEVICE_JID)(n),
    id: (0, o.CUSTOM_STRING)(r),
    class: "notification"
  });
  if (n.device != null && n.device !== a.DEFAULT_DEVICE_ID) {
    __LOG__(2)`handleNewIdentity: ignore identity change from companion device`;
    return Promise.resolve(C);
  }
  if ((0, v.isMePrimary)(n)) {
    (0, l.frontendFireAndForget)("handleSelfPrimaryIdentityChange", {});
    return Promise.resolve(C);
  }
  const P = !!b && !g.OfflineMessageHandler.isResumeFromRestartComplete();
  return (0, _.handleMessage)(String(n), P, (0, i.default)(function* () {
    yield (0, d.clearDeviceRecordForIdentityChange)(n, P);
    if (yield (0, S.getSignalProtocolStore)().loadIdentityKey((0, E.createSignalAddress)(n).toString())) {
      __LOG__(2)`handleE2eIdentityChange: ${n.toString()} has old identity, establishing new session`;
      yield y.Session.deleteRemoteInfo(n);
      (0, m.addSecurityCodeChangedNotifications)(n, P);
      (0, h.sendTcTokenWhenDeviceIdentityChange)(n);
      if (!P) {
        if (p != null) {
          (0, f.ensureE2ESessionsWithDelay)([n], p, true);
        } else {
          (0, f.ensureE2ESessions)([n], true);
        }
      }
      yield (0, c.createOrReplaceDisplayNamesAndLidPnMappings)([{
        id: (0, T.toUserWid)(n),
        lid: A ? (0, T.toUserWid)(A) : null,
        displayName: s
      }], !b);
    }
    return C;
  }));
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./359987.js");
var u = require("./355813.js");
var c = require("./588090.js");
var d = require("./74869.js");
var p = require("./854379.js");
var f = require("./917504.js");
var _ = require("./412985.js");
var g = require("./359484.js");
var m = require("./944641.js");
var h = require("./362327.js");
var y = require("./138706.js");
var E = require("./999821.js");
var S = require("./76256.js");
var v = require("./459857.js");
var T = require("./669050.js");
const M = new s.WapParser("identityChange", e => {
  e.assertTag("notification");
  e.assertAttr("type", "encrypt");
  e.child("identity");
  const t = parseInt(e.maybeAttrString("delay"), 10);
  return {
    wid: (0, p.deviceJidToDeviceWid)(e.attrDeviceJid("from")),
    stanzaId: e.attrString("id"),
    delay: isFinite(t) && t > 0 ? t : null,
    displayName: e.maybeAttrString("display_name"),
    lid: e.hasAttr("lid") ? (0, p.deviceJidToDeviceWid)(e.attrDeviceJid("lid")) : null,
    offline: e.hasAttr("offline") ? e.attrString("offline") : null
  };
});