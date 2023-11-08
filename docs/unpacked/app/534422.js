Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastReceivedMsg = function (e) {
  const t = (0, s.unproxy)(e);
  for (let e = t.msgs.length - 1; e >= 0; e--) {
    const n = t.msgs.at(e);
    if (n && (!n.local || n.ack > r.ACK.CLOCK)) {
      return n;
    }
  }
  return;
};
exports.getLastSentMsg = function (e) {
  const t = (0, s.unproxy)(e);
  for (let e = t.msgs.length - 1; e >= 0; e--) {
    const n = t.msgs.at(e);
    if (n != null && (0, o.getIsSentByMe)(n)) {
      return n;
    }
  }
  return;
};
exports.getLastTimestampMsg = function (e) {
  const t = (0, s.unproxy)(e);
  for (let e = t.msgs.length - 1; e >= 0; e--) {
    const n = t.msgs.at(e);
    if (n && (0, a.eventTypeFromMsgType)(n) !== i.EventType.IGNORE) {
      return n;
    }
  }
  return;
};
var r = require("./402994.js");
var i = require("./147980.js");
var a = require("./767961.js");
var o = require("./787742.js");
var s = require("./163139.js");