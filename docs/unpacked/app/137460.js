var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._test = undefined;
exports.deleteMessagesInMessageRange = function (e, t, n) {
  const {
    lastMessageTimestamp: r,
    lastSystemMessageTimestamp: a,
    messages: o
  } = t;
  return (0, d.getStorage)().lock(["message"], function () {
    var t = (0, i.default)(function* (t) {
      let [i] = t;
      let s = [];
      const l = [];
      if (r != null) {
        l.push(y(e, r, u.MessagePropertyType.IncomingChatMessage, n));
        l.push(y(e, r, u.MessagePropertyType.Outgoing, n));
      }
      const c = a != null ? a : r;
      if (c != null) {
        l.push(y(e, c, u.MessagePropertyType.SystemMessage, n));
      }
      l.push(function () {
        return S.apply(this, arguments);
      }(o, n));
      const d = yield Promise.all(l);
      s = s.concat(...d);
      const p = n == null ? undefined : n.skipMessages;
      if (p) {
        s = s.filter(e => !p.has(e));
      }
      yield i.bulkRemove(s);
      return s;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.fixMessageRange = function (e) {
  var t;
  var n;
  const r = e.messages;
  const i = {
    messages: r,
    lastMessageTimestamp: e.lastMessageTimestamp
  };
  __LOG__(2)`syncd: additionalMessages length: ${r.length}`;
  if (r.length > _) {
    const {
      messages: e,
      newLastMessageTimestamp: t
    } = m(r, _);
    if (t != null) {
      i.lastMessageTimestamp = t;
      v(i.lastMessageTimestamp, "resultantRange");
    }
    i.messages = e;
  }
  if ((0, a.numberOrThrowIfTooLarge)((t = e.lastSystemMessageTimestamp) !== null && t !== undefined ? t : 0) > (0, a.numberOrThrowIfTooLarge)((n = i.lastMessageTimestamp) !== null && n !== undefined ? n : 0)) {
    i.lastSystemMessageTimestamp = e.lastSystemMessageTimestamp;
  }
  return i;
};
exports.getAdditionalMessages = function () {
  return g.apply(this, arguments);
};
exports.getFirstSystemMessageTimestamp = function (e) {
  return (0, f.getMessageTable)().between(["messageRangeIndex"], (0, l.beginningOfMessageRange)(e, u.MessagePropertyType.SystemMessage), (0, l.endOfMessageRange)(e, u.MessagePropertyType.SystemMessage), {
    lowerInclusive: true,
    reverse: false,
    limit: 1,
    shouldDecrypt: false
  }).then(e => {
    var t;
    return (0, l.extractC2STimestampFromMessageRangeIndex)((t = e[0]) === null || t === undefined ? undefined : t.messageRangeIndex);
  });
};
exports.getLastMessageTimestamp = function (e) {
  return (0, f.getMessageTable)().between(["messageRangeIndex"], (0, l.beginningOfMessageRange)(e, u.MessagePropertyType.IncomingChatMessage), (0, l.endOfMessageRange)(e, u.MessagePropertyType.IncomingChatMessage), {
    lowerInclusive: true,
    reverse: true,
    limit: 1,
    shouldDecrypt: false
  }).then(e => {
    var t;
    return (0, l.extractC2STimestampFromMessageRangeIndex)((t = e[0]) === null || t === undefined ? undefined : t.messageRangeIndex);
  });
};
exports.getLastSystemMessageTimestamp = function (e) {
  return (0, f.getMessageTable)().between(["messageRangeIndex"], (0, l.beginningOfMessageRange)(e, u.MessagePropertyType.SystemMessage), (0, l.endOfMessageRange)(e, u.MessagePropertyType.SystemMessage), {
    lowerInclusive: true,
    reverse: true,
    limit: 1,
    shouldDecrypt: false
  }).then(e => {
    var t;
    return (0, l.extractC2STimestampFromMessageRangeIndex)((t = e[0]) === null || t === undefined ? undefined : t.messageRangeIndex);
  });
};
exports.logMaybeMillisecondTimestamp = v;
exports.timestampComparison = h;
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./632157.js");
var l = require("./702018.js");
var u = require("./878685.js");
var c = require("./974637.js");
var d = require("./732011.js");
var p = r(require("./565754.js"));
var f = require("./851698.js");
const _ = 1000;
function g() {
  return (g = (0, i.default)(function* (e, t, n) {
    const r = (0, f.getMessageTable)().between(["messageRangeIndex"], (0, l.beginningOfMessageRange)(e, u.MessagePropertyType.Outgoing, t), (0, l.endOfMessageRange)(e, u.MessagePropertyType.Outgoing), {
      reverse: true,
      shouldDecrypt: false
    });
    const i = (0, f.getMessageTable)().anyOf(["messageRangeIndex"], [(0, l.beginningOfMessageRange)(e, u.MessagePropertyType.IncomingChatMessage, t), (0, l.beginningOfMessageRange)(e, u.MessagePropertyType.Outgoing, t), (0, l.beginningOfMessageRange)(e, u.MessagePropertyType.Outgoing)], {
      reverse: true,
      shouldDecrypt: false
    });
    const a = yield Promise.all([r, i]).then(e => {
      let [t, r] = e;
      return t.concat(r).filter(e => e.ack !== -1 && !e.isSendFailure).filter(e => !((n == null ? undefined : n.excludeStarred) && e.isStarred)).map(e => {
        var t;
        const n = p.default.fromString(e.id);
        const r = (t = (0, l.extractC2STimestampFromMessageRangeIndex)(e.messageRangeIndex)) !== null && t !== undefined ? t : undefined;
        return {
          key: (0, c.msgKeyToProtobuf)(n),
          timestamp: r
        };
      });
    });
    const {
      messages: o,
      newLastMessageTimestamp: s
    } = m(a, (n == null ? undefined : n.limit) || _);
    return {
      messages: o,
      newLastMessageTimestamp: s
    };
  })).apply(this, arguments);
}
function m(e, t) {
  const n = [];
  const r = [];
  e.forEach(e => {
    if (e.timestamp != null) {
      n.push(e);
    } else {
      r.push(e);
    }
  });
  if (n.length < t) {
    return {
      messages: e
    };
  }
  const i = n.sort(h).slice(0, t);
  const s = i[i.length - 1];
  v(s.timestamp, "smallestTimestampMessage");
  return {
    messages: i.concat(r),
    newLastMessageTimestamp: (0, a.numberOrThrowIfTooLarge)((0, o.default)(s.timestamp, "smallestTimestampMessage.timestamp"))
  };
}
function h(e, t) {
  const [n, r] = [e, t].map(e => (0, a.numberOrThrowIfTooLarge)((0, o.default)(e.timestamp, "syncActionMessage.timestamp")));
  return r - n;
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t, n, r) {
    let i = yield (0, f.getMessageTable)().between(["messageRangeIndex"], (0, l.beginningOfMessageRange)(e, n), (0, l.beginningOfMessageRange)(e, n, (0, a.numberOrThrowIfTooLarge)(t)), {
      lowerInclusive: true,
      upperInclusive: true,
      shouldDecrypt: false
    });
    if ((r == null ? undefined : r.forceDeleteAllMessages) === true) {
      return i.map(e => e.id);
    }
    if (n === u.MessagePropertyType.SystemMessage && (r == null ? undefined : r.skipRecentSystemMessages) !== false) {
      i = i.filter(e => !((0, l.isSecuritySensitiveMessage)(e) && e.t > (0, s.unixTime)() - s.DAY_SECONDS));
    }
    if ((r == null ? undefined : r.skipStarred) !== false) {
      i = i.filter(e => e.isStarred === undefined);
    }
    if (n === u.MessagePropertyType.SystemMessage) {
      i = i.filter(e => !(0, l.isInitialEncryptionMessage)(e));
    }
    if (n === u.MessagePropertyType.SystemMessage) {
      let e;
      for (let t = i.length - 1; t >= 0; t--) {
        if ((0, l.isBizBotDisclosureMessage)(i[t])) {
          e = i[t].id;
          break;
        }
      }
      if (e != null) {
        i = i.filter(t => t.id !== e);
      }
    }
    return i.map(e => e.id);
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const n = e.map(e => (0, c.protobufToMsgKey)((0, o.default)(e.key, "syncActionMessage.key")).toString());
    const r = yield (0, f.getMessageTable)().bulkGet(n);
    const i = [];
    r.forEach(e => {
      if (e != null) {
        if (!((t == null ? undefined : t.skipStarred) !== false && e.isStarred != null)) {
          i.push(e.id);
        }
      }
    });
    return i;
  })).apply(this, arguments);
}
function v(e, t) {
  try {
    if ((0, a.numberOrThrowIfTooLarge)(e != null ? e : 0) / (0, s.unixTime)() > 10) {
      __LOG__(4, undefined, new Error(), true)`syncd: large timestamp: ${t} returned a large timestamp: ${e}`;
      SEND_LOGS(`syncd: ${t} returned a large timestamp`);
    }
  } catch (t) {
    __LOG__(4, undefined, new Error())`syncd: error reporting logMaybeMillisecondTimestamp for ${e}: ${t}`;
  }
}
const T = {
  limitAdditionalMessages: m
};
exports._test = T;