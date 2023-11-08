Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAndRemoveActiveMessageRanges = function (e, t) {
  (0, i.getActiveMessageRanges)(e.remote.toString()).then(n => {
    n.forEach(n => {
      if ([o.ActiveRangeAction.Archive, o.ActiveRangeAction.MarkChatAsRead].includes(n.action) && l(n.actionValue.messageRange, {
        id: e,
        t
      }) === a.RangeContain.DOES_NOT_CONTAIN) {
        return (0, i.removeActiveMessageRange)(e.remote.toString(), n.action);
      }
    });
  });
};
exports.rangeContainsMessage = l;
var r = require("./229079.js");
var i = require("./791381.js");
var a = require("./989.js");
var o = require("./685907.js");
var s = require("./374740.js");
function l(e, t) {
  if (e == null) {
    __LOG__(3)`syncd: missing message range from row.`;
    return a.RangeContain.DOES_NOT_CONTAIN;
  }
  const {
    messages: n,
    lastMessageTimestamp: i
  } = e;
  const o = (0, s.maybeMillisecondsToSeconds)(i != null ? i : 0);
  if (o !== (i != null ? i : 0)) {
    __LOG__(2, undefined, undefined, true)`syncd: last message timestamp was converted to seconds from ${i}`;
    SEND_LOGS("syncd: last message timestamp was converted to seconds", 0.1);
  }
  if (t.t != null && t.t < (0, r.numberOrThrowIfTooLarge)(o)) {
    return a.RangeContain.CONTAINS_BY_TIMESTAMP;
  }
  const l = t.id;
  for (const {
    key: e
  } of n) {
    if (e != null && l != null && e.id === l.id) {
      return a.RangeContain.CONTAINS_BY_ADDITIONAL;
    }
  }
  return a.RangeContain.DOES_NOT_CONTAIN;
}