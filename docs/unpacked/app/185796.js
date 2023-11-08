var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeHandleNewsletterMsgAddOns = function (e, t) {
  switch (e.type) {
    case "reaction":
      return function () {
        return d.apply(this, arguments);
      }(e);
    case "poll_update":
      return function () {
        return p.apply(this, arguments);
      }(e, t);
    default:
      return Promise.resolve();
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./29797.js");
var o = require("./523172.js");
var s = require("./65013.js");
var l = require("./727615.js");
var u = require("./356067.js");
var c = require("./459857.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const {
      reactionText: t,
      id: n,
      serverId: r,
      from: i,
      t: o
    } = e;
    if (r == null || o == null || i == null || t == null) {
      return;
    }
    const u = {
      msgKey: n.toString(),
      parentMsgKey: (0, l.craftNewsletterMsgKeyFromServerId)(r, i).toString(),
      senderUserJid: (0, c.getMeUser)().toString(),
      reactionText: t,
      timestamp: o * 1000,
      orphan: 0,
      read: true,
      ack: a.ACK.SENT
    };
    yield (0, s.createOrUpdateReactions)([u]);
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const {
      id: n,
      serverId: r,
      from: i,
      t: a
    } = e;
    const s = t.pollVotes;
    if (r != null && a != null && i != null && s != null) {
      yield (0, o.createOrUpdateMyVote)({
        chatJid: n.remote.toJid(),
        msgServerId: r,
        msgKey: e.id.toString(),
        serverTimestampMs: a * 1000,
        t: a,
        votes: s.map(u.bufferToHex)
      });
    }
  })).apply(this, arguments);
}