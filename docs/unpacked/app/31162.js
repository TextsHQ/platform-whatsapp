var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeUpdateAddOnAckForMsgAction = function (e, t) {
  const n = m(e);
  if (n == null) {
    return;
  }
  (0, o.maybeUpdateAddOnAcks)(new Map([[n, [{
    msgKey: e.id.toString(),
    ack: t
  }]]]));
};
exports.updateAddOnCollectionsSendStatesAction = g;
exports.updateAddOnSendStatesAction = f;
exports.updateAddOnSendStatesForMsgAction = function (e, t) {
  const n = m(e);
  if (n == null) {
    return Promise.resolve();
  }
  return f(new Map([[n, [(0, a.default)({
    msgKey: e.id.toString()
  }, t)]]]));
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./302947.js");
var s = require("./803328.js");
var l = r(require("./565754.js"));
var u = require("./373070.js");
var c = require("./722091.js");
var d = require("./344400.js");
var p = require("./762897.js");
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = new Map();
    for (const [n, r] of e) {
      const e = r.map(e => e.ack == null ? null : {
        msgKey: e.msgKey,
        ack: e.ack
      }).filter(Boolean);
      t.set(n, e);
    }
    yield (0, o.updateAddOnAcks)(t);
    g(e);
  })).apply(this, arguments);
}
function g(e) {
  for (const [t, n] of e) {
    for (const e of n) {
      const n = h(t, l.default.from(e.msgKey));
      if (n != null) {
        if (e.ack != null) {
          n.ack = e.ack;
        }
        if (e.isSendFailure != null) {
          n.isSendFailure = e.isSendFailure;
        }
      }
    }
  }
}
function m(e) {
  switch (e.type) {
    case u.MSG_TYPE.REACTION:
    case u.MSG_TYPE.REACTION_ENC:
      return s.MessageAddOnType.Reaction;
    case u.MSG_TYPE.POLL_UPDATE:
      if (e.subtype === "poll_vote") {
        return s.MessageAddOnType.PollVote;
      }
      break;
    case u.MSG_TYPE.PIN_MESSAGE:
      return s.MessageAddOnType.PinMessage;
  }
  return null;
}
function h(e, t) {
  switch (e) {
    case s.MessageAddOnType.Reaction:
      return p.ReactionsCollection.getSenderByMsgKey(t);
    case s.MessageAddOnType.PollVote:
      return d.PollVoteCollection.getByMsgKey(t);
    case s.MessageAddOnType.PinMessage:
      return c.PinInChatCollection.getByMsgKey(t);
    case s.MessageAddOnType.KeepInChat:
    case s.MessageAddOnType.MessageEdit:
    case s.MessageAddOnType.ReactionEnc:
    case s.MessageAddOnType.Unknown:
      return null;
  }
}