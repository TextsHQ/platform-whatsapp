var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEncReaction = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./344530.js");
var o = require("./533494.js");
var s = require("./394629.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = {
      type: "reaction",
      encryptedAddOn: e.encryptedReaction
    };
    const n = yield (0, a.decryptAddOn)(t, {
      messageSecret: e.messageSecret,
      iv: e.iv,
      stanzaId: e.stanzaId,
      originalMessageSender: e.originalMessageSender,
      addOnSender: e.reactionSender
    });
    return (0, s.decodeProtobuf)(o.Message$ReactionMessageSpec, n);
  })).apply(this, arguments);
}