var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPollUpdateVoteMsg = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/402994.js");
var i = require("../app/344530.js");
var u = require("../app/787742.js");
var s = require("../app/430231.js");
var c = require("../app/373070.js");
var d = require("../app/705769.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    var n;
    const a = self.crypto.getRandomValues(new Uint8Array(12));
    const r = {
      type: "poll_vote",
      encode: yield (0, d.protobufFromVote)(e, t.pollOptions)
    };
    const f = yield (0, i.encryptAddOn)(r, {
      messageSecret: (0, o.default)(t.messageSecret, "Poll creation missing message secret"),
      iv: a,
      stanzaId: t.id.id,
      originalMessageSender: (0, u.getOriginalSender)(t.unsafe()),
      addOnSender: e.sender
    });
    return {
      id: e.msgKey,
      type: c.MSG_TYPE.POLL_UPDATE,
      subtype: "poll_vote",
      addonEncrypted: true,
      t: Math.floor(e.senderTimestampMs / 1000),
      from: e.sender,
      to: t.id.remote,
      self: "out",
      isNewMsg: true,
      local: true,
      ack: (n = e.ack) !== null && n !== undefined ? n : l.ACK.CLOCK,
      pollUpdateParentKey: (0, s.getReferentialKey)(t),
      encPollVote: {
        encPayload: f,
        encIv: a.buffer
      },
      senderTimestampMs: e.senderTimestampMs
    };
  })).apply(this, arguments);
}