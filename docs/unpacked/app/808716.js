var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareKeepInChatMessages = p;
exports.getKicSender = f;
exports.isKept = function (e) {
  return e === a.KeepInChatState.KEPT;
};
exports.isUnkept = d;
exports.kicSenderSuperPowerActive = function (e) {
  return d(e.kicState) && u.default.equals(f(e), (0, o.getSender)(e));
};
exports.parseKeepTypeToKicState = function (e) {
  if (e != null && e === s.KeepType.KEEP_FOR_ALL) {
    return a.KeepInChatState.KEPT;
  }
  if (e != null && e === s.KeepType.UNDO_KEEP_FOR_ALL) {
    return a.KeepInChatState.UNKEPT;
  }
  return null;
};
exports.runKeepInChatTieBreaker = function (e) {
  let t;
  let n;
  e.forEach(e => {
    if (!(t && p(e, t) !== 1)) {
      n = t;
      t = e;
    }
  });
  if (n != null) {
    (0, i.frontendSendAndReceive)("logTieBreakIgnoredKicWam", {
      keepInChatMessage: n
    });
  }
  return t;
};
var i = require("./359987.js");
var a = require("./784427.js");
var o = require("./787742.js");
var s = require("./533494.js");
var l = require("./459857.js");
var u = r(require("./124928.js"));
var c = require("./669050.js");
function d(e) {
  return e === a.KeepInChatState.UNKEPT;
}
function p(e, t) {
  if (e.senderTimestampMs == null) {
    return -1;
  } else if (t.senderTimestampMs == null || e.senderTimestampMs > t.senderTimestampMs || e.senderTimestampMs === t.senderTimestampMs && e.id.id > t.id.id) {
    return 1;
  } else {
    return -1;
  }
}
function f(e) {
  if (e.kicKey != null) {
    var t;
    var n;
    var r;
    const i = (0, o.getIsGroupMsg)(e);
    if (((t = e.kicKey) === null || t === undefined ? undefined : t.fromMe) === true) {
      return (0, l.getMaybeMeUser)();
    }
    if (i && ((n = e.kicKey) === null || n === undefined ? undefined : n.participant) != null) {
      return (0, c.toUserWid)(e.kicKey.participant);
    }
    if (!i && ((r = e.kicKey) === null || r === undefined ? undefined : r.remote) != null) {
      return (0, c.toUserWid)(e.kicKey.remote);
    }
  }
}