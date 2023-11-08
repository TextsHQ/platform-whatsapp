var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromForReactionMessage = function (e) {
  var t;
  const n = Boolean((t = (0, l.getChat)(e).groupMetadata) === null || t === undefined ? undefined : t.isIncognitoCag);
  const r = (0, p.getMaybeMeLidUser)();
  if (n && r != null) {
    return r;
  } else {
    return (0, p.getMeUser)();
  }
};
exports.getMsgJson = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./402994.js");
var s = require("./344530.js");
var l = require("./163755.js");
var u = require("./787742.js");
var c = require("./430231.js");
var d = require("./373070.js");
var p = require("./459857.js");
var f = require("./669050.js");
function _() {
  return (_ = (0, i.default)(function* (e, t, n, r, i, p, _) {
    var g;
    if ((g = (0, l.getChat)(e).groupMetadata) === null || g === undefined ? undefined : g.isIncognitoCag) {
      const l = self.crypto.getRandomValues(new Uint8Array(12));
      const g = yield (0, s.encryptAddOn)({
        type: "reaction",
        encode: {
          text: t,
          senderTimestampMs: _
        }
      }, {
        messageSecret: (0, a.default)(e.messageSecret, "Parent message missing message secret"),
        iv: l,
        stanzaId: e.id.id,
        originalMessageSender: (0, u.getOriginalSender)(e.unsafe()),
        addOnSender: (0, f.toUserWid)(n)
      });
      return {
        id: r,
        type: d.MSG_TYPE.REACTION_ENC,
        t: i,
        from: n,
        to: p,
        self: "out",
        isNewMsg: true,
        local: true,
        ack: o.ACK.CLOCK,
        targetMessageKey: (0, c.getReferentialKey)(e),
        encPayload: g,
        encIv: l.buffer
      };
    }
    return {
      id: r,
      reactionParentKey: (0, c.getReferentialKey)(e),
      type: d.MSG_TYPE.REACTION,
      t: i,
      from: n,
      to: p,
      self: "out",
      isNewMsg: true,
      local: true,
      ack: o.ACK.CLOCK,
      reactionText: t,
      reactionTimestamp: _
    };
  })).apply(this, arguments);
}