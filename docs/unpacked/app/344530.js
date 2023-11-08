var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptAddOn = function () {
  return y.apply(this, arguments);
};
exports.encryptAddOn = function () {
  return h.apply(this, arguments);
};
exports.getAddOnMessageSpec = _;
exports.getAdditionalAuthenticatedData = g;
exports.getMessageMediaType = m;
var i = r(require("../vendor/348926.js"));
var a = require("./122048.js");
var o = r(require("./670983.js"));
var s = require("./562754.js");
var l = require("./201650.js");
var u = require("./533494.js");
var c = require("./684290.js");
var d = require("./107443.js");
var p = require("./574819.js");
var f = require("./385914.js");
function _(e) {
  switch (e) {
    case "reaction":
      return {
        spec: u.Message$ReactionMessageSpec,
        usecase: s.UseCaseSecretModificationType.ENC_REACTION
      };
    case "poll_vote":
      return {
        spec: u.Message$PollVoteMessageSpec,
        usecase: s.UseCaseSecretModificationType.POLL_VOTE
      };
    case "comment":
      return {
        spec: u.MessageSpec,
        usecase: s.UseCaseSecretModificationType.ENC_COMMENT
      };
  }
}
function g(e, t) {
  switch (e) {
    case "poll_vote":
      return `${t.stanzaId}\0${t.addOnSenderJid}`;
  }
}
function m(e) {
  switch (e) {
    case "poll_vote":
      return c.MEDIA_TYPE.POLL_VOTE;
    case "reaction":
      return c.MEDIA_TYPE.REACTION;
    default:
      return c.MEDIA_TYPE.NONE;
  }
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    try {
      const {
        messageSecret: n,
        iv: r,
        stanzaId: i,
        originalMessageSender: l,
        addOnSender: u
      } = t;
      const c = (0, p.widToUserJid)(u);
      const {
        spec: d,
        usecase: m
      } = (0, o.default)(_(e.type), "getAddOnMessageSpec(addOn.type)");
      const h = yield (0, s.createUseCaseSecret)({
        messageSecret: n,
        stanzaId: i,
        parentMsgOriginalSender: (0, p.widToUserJid)(l),
        modificationSender: c,
        modificationType: m
      });
      const y = (0, f.encodeProtobuf)(d, e.encode).readBuffer();
      return yield (0, a.gcmEncrypt)(h, r, y, g(e.type, {
        stanzaId: i,
        addOnSenderJid: c
      }));
    } catch (t) {
      new l.MessageSecretErrorsWamEvent({
        messageSecretError: d.MESSAGE_SECRET_ERROR_TYPE.ENCRYPTION_ERROR,
        messageMediaType: m(e.type)
      }).commit();
      throw t;
    }
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t) {
    try {
      const {
        messageSecret: n,
        iv: r,
        stanzaId: i,
        originalMessageSender: l,
        addOnSender: u
      } = t;
      const c = (0, p.widToUserJid)(u);
      const {
        usecase: d
      } = (0, o.default)(_(e.type), "getAddOnMessageSpec(addOn.type)");
      const f = yield (0, s.createUseCaseSecret)({
        messageSecret: n,
        stanzaId: i,
        parentMsgOriginalSender: (0, p.widToUserJid)(l),
        modificationSender: c,
        modificationType: d
      });
      return yield (0, a.gcmDecrypt)(f, r, e.encryptedAddOn, g(e.type, {
        stanzaId: i,
        addOnSenderJid: c
      }));
    } catch (t) {
      new l.MessageSecretErrorsWamEvent({
        messageSecretError: d.MESSAGE_SECRET_ERROR_TYPE.DECRYPTION_ERROR,
        messageMediaType: m(e.type)
      }).commit();
      throw t;
    }
  })).apply(this, arguments);
}