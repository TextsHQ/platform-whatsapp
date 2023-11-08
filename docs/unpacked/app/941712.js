var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptMsmsgBotMessage = function () {
  return S.apply(this, arguments);
};
exports.genBotMsgSecretFromMsgSecret = y;
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./122048.js");
var s = require("./562075.js");
var l = r(require("./670983.js"));
var u = require("./907539.js");
var c = r(require("./565754.js"));
var d = require("./326537.js");
var p = require("./533494.js");
var f = require("./851698.js");
var _ = require("./459857.js");
var g = require("./574819.js");
var m = require("./394629.js");
const h = "Bot Message";
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    const t = new a.Binary(e).readByteArray();
    return yield (0, s.extractAndExpand)(new Uint8Array(t), h, 32);
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const n = (0, m.decodeProtobuf)(p.MessageSecretMessageSpec, e);
    const r = n.encIv;
    const i = n.encPayload;
    const a = (0, _.assertGetMeUser)();
    const s = {
      fromMe: !t.msgMeta.targetSenderJid || t.msgMeta.targetSenderJid.isSameAccount(a),
      remote: t.msgMeta.targetChatJid ? (0, l.default)(t.msgMeta.targetChatJid, "parsedMsgPayload.msgMeta.targetChatJid") : t.msgInfo.chat,
      id: (0, l.default)(t.msgMeta.targetId, "parsedMsgPayload.msgMeta.targetId")
    };
    if (t.msgInfo.chat.isGroup()) {
      s.participant = t.msgMeta.targetSenderJid;
    }
    const h = new c.default(s);
    let E = d.msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(h.toString());
    if (E == null) {
      const e = yield (0, f.getMessageTable)().get(h.toString());
      E = (0, u.messageFromDbRow)((0, l.default)(e, "targetMsg")).messageSecret;
    }
    const S = yield y((0, l.default)(E, "decryptSecretBase"));
    let T = t.msgInfo.externalId;
    const M = t.msgMeta.targetSenderJid ? (0, g.widToUserJid)(t.msgMeta.targetSenderJid) : (0, g.widToUserJid)((0, _.assertGetMeUser)());
    const A = (0, g.widToUserJid)((0, l.default)(t.msgInfo.author, "parsedMsgPayload.msgInfo.author"));
    let b = null;
    try {
      const e = yield v(T, M, A, S);
      b = yield (0, o.gcmDecrypt)(e, (0, l.default)(r, "encryptionIv"), (0, l.default)(i, "encryptedCiphertext"), `${T}\0${A}`);
    } catch (e) {
      var C;
      T = (0, l.default)((C = t.msgBotInfo) === null || C === undefined ? undefined : C.botEditTargetId, "parsedMsgPayload.msgBotInfo?.botEditTargetId");
      const n = yield v(T, M, A, S);
      b = yield (0, o.gcmDecrypt)(n, (0, l.default)(r, "encryptionIv"), (0, l.default)(i, "encryptedCiphertext"), `${T}\0${A}`);
    }
    return b;
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t, n, r) {
    const i = a.Binary.build(e, t, n).readBuffer();
    return yield (0, s.extractAndExpand)(new Uint8Array((0, l.default)(r, "decryptSecret")), i, 32);
  })).apply(this, arguments);
}