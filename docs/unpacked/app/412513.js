var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendQueryReactions = function () {
  return f.apply(this, arguments);
};
exports.updateHasReactionInParent = d;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./402994.js");
var s = require("./364622.js");
var l = require("./891244.js");
var u = r(require("./565754.js"));
var c = require("./459857.js");
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, a.default)(function* (e, t) {
    const r = require("./61113.js").MsgCollection.get(e);
    if (r && r.hasReaction !== t) {
      const e = {
        hasReaction: t
      };
      yield (0, l.updateMessageTable)(r.id, e);
      r.set(e);
    }
    return Promise.resolve();
  })).apply(this, arguments);
}
function f() {
  return (f = (0, a.default)(function* (e) {
    let t;
    try {
      t = yield (0, s.getReactions)(e.id.toString());
    } catch (e) {
      __LOG__(4, true, new Error(), true)`getReactions: failed with error: ${e.name} message: ${e.message}`;
      SEND_LOGS("getReactions failed");
      throw e;
    }
    const n = t.reactions.map(e => {
      const t = e.senders.map(e => (0, i.default)((0, i.default)({}, e), {}, {
        id: u.default.fromString(e.msgKey),
        isSendFailure: (0, c.isSerializedWidMe)(e.senderUserJid) && e.ack === o.ACK.CLOCK
      }));
      return (0, i.default)((0, i.default)({}, e), {}, {
        hasReactionByMe: e.hasReactionByMe,
        id: e.aggregateEmoji,
        senders: t
      });
    });
    const r = n.length > 0;
    yield d(e.id.toString(), r);
    return (0, i.default)((0, i.default)({}, t), {}, {
      id: e.id,
      reactions: n
    });
  })).apply(this, arguments);
}