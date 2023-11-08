var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preprocessNewsletterMsg = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./583464.js");
var s = require("./870366.js");
var l = require("./727615.js");
var u = require("./823980.js");
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const {
      serverId: n
    } = e;
    const r = d(t);
    const i = r && n != null ? yield (0, l.getMessageByServerId)(n, e.from.toJid()) : null;
    const u = yield f(i, e.pollVote);
    const c = (0, s.mapMsgStanzaToMsgData)({
      id: e.id,
      payload: e.payload,
      from: e.from,
      serverId: e.serverId,
      t: e.t,
      to: e.to,
      type: t,
      isNewMsg: !(e.offline || t === "revoke"),
      fromMe: e.isSender,
      reactionCode: e.reactionCode,
      addOnParentKey: r ? p({
        addOnParentMsg: i,
        serverId: n,
        remote: e.from
      }) : null,
      pollVotesAsLocalIds: u,
      latestEditSenderTimestampMs: e.msgEditT != null ? (0, a.castToMillisTime)(e.msgEditT) : null
    }, "relay");
    const [_] = yield (0, o.applyOrphanRevokes)([c]);
    return {
      msgData: _,
      isOrphan: r && i == null
    };
  })).apply(this, arguments);
}
function d(e) {
  return e === "reaction" || e === "pollVote";
}
function p(e) {
  let {
    addOnParentMsg: t,
    serverId: n,
    remote: r
  } = e;
  if (t != null) {
    return t.id;
  } else if (n != null) {
    return (0, l.craftNewsletterMsgKeyFromServerId)(n, r.toJid());
  } else {
    return undefined;
  }
}
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e, t) {
    const n = e == null ? undefined : e.pollOptions;
    if (n == null || t == null) {
      return;
    }
    const r = yield (0, u.createOptionLocalIdMap)(n);
    return t.map(e => r.getLocalIdForHash(e.slice().buffer));
  })).apply(this, arguments);
}