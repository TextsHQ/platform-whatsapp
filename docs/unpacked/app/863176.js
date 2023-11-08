var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = v.parse(e);
  if (t.error) {
    return function (e, t) {
      const n = T.parse(t);
      if (n.error) {
        return Promise.reject(e.error);
      }
      const {
        externalId: r,
        from: i,
        participant: a
      } = n.success;
      return Promise.resolve((0, d.sendAck)(r, i, null, a));
    }(t, e);
  }
  const n = t.success;
  const {
    msgMeta: r,
    msgInfo: o
  } = n;
  o.clientReceivedTsMillis = (0, a.unixTimeMs)();
  if (o.offline != null) {
    y.OfflineMessageHandler.addOfflinePendingMessage();
    y.OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
  }
  if (y.OfflineMessageHandler.isResumeFromRestartComplete()) {
    delete n.msgInfo.offline;
  }
  return (0, g.handleMessage)(o.chat.toString(), !!n.msgInfo.offline, (0, i.default)(function* () {
    var e;
    o.msgProcessStartTsMillis = (0, a.unixTimeMs)();
    if (r.isUnavailable) {
      return void __LOG__(2, undefined, undefined, undefined, ["appdata"])`handleAppdata: msgId::${o.externalId}, msgMeta is unavailable, also not showing placeholder for appdata`;
    }
    __LOG__(2, undefined, undefined, undefined, ["appdata"])`handleAppdata: msgId::${o.externalId}, start processing appdata, offline="${(e = o.offline) !== null && e !== undefined ? e : ""}"`;
    const t = yield (0, h.decryptE2EPayload)(n, E.processDecryptedAppdataProto);
    if (o.offline != null) {
      y.OfflineMessageHandler.processMessageDecryptResult(t.result);
      if (t.result !== f.E2EProcessResult.SUCCESS || o.category === u.CATEGORY_PEER) {
        (0, p.sendReceipt)(o, r, t);
      } else {
        (0, l.getMessageCache)().addMessages([{
          receiptInfo: {
            externalId: o.externalId,
            from: (0, m.getFrom)(o),
            author: o.author
          }
        }], false);
      }
    } else {
      (0, p.sendReceipt)(o, r, t);
    }
  }));
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./347387.js");
var s = require("./303754.js");
var l = require("./800321.js");
var u = require("./883310.js");
var c = require("./467302.js");
var d = require("./763961.js");
var p = require("./852694.js");
var f = require("./257845.js");
var _ = require("./854379.js");
var g = require("./412985.js");
var m = require("./267420.js");
var h = require("./881077.js");
var y = require("./359484.js");
var E = require("./680813.js");
var S = require("./459857.js");
const v = new o.WapParser("incomingAppdataParser", e => {
  var t;
  var n;
  e.assertTag("appdata");
  if (e.hasAttr("to")) {
    e.assertAttr("to", (0, S.assertGetMe)().toJid());
  }
  const r = e.mapChildrenWithTag("enc", e => ({
    e2eType: e.attrEnumValues("type", s.CiphertextType.members()),
    encMediaType: s.EncMediaType.cast(e.maybeAttrString("mediatype")),
    ciphertext: e.contentBytes(),
    retryCount: e.hasAttr("count") ? e.attrInt("count") : 0,
    hideFail: e.maybeAttrString("decrypt-fail") === "hide"
  }));
  const i = e.maybeChild("device-identity");
  const a = i ? i.contentBytes() : null;
  const o = (0, c.parseMessageInfo)(e, r);
  const l = (0, c.parseMessageMeta)(e, r);
  return {
    encs: r,
    bizInfo: (0, c.parseBizInfo)(e),
    msgInfo: o,
    msgMeta: l,
    deviceIdentity: a,
    rcat: (t = (n = e.maybeChild("rcat")) === null || n === undefined ? undefined : n.contentBytes()) !== null && t !== undefined ? t : null
  };
});
const T = new o.WapParser("incomingMsgParserForAckOnly", e => {
  e.assertTag("appdata");
  return {
    externalId: e.attrString("id"),
    from: (0, _.jidWithTypeToWid)(e.attrJidWithType("from")),
    participant: e.hasAttr("participant") ? (0, _.deviceJidToDeviceWid)(e.attrDeviceJid("participant")) : null
  };
});