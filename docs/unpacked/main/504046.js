var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSequentialMsg = function (e) {
  const t = e.id;
  const n = (0, r.default)((0, l.getChat)(e.unsafe()).msgs.toArray(), e => t.equals(e.id));
  if (!n) {
    return null;
  }
  const a = (0, l.getAsAudio)(n) || (0, l.getAsPtt)(n);
  if (!a) {
    return null;
  }
  if ((0, i.isValidPlaybackSequence)({
    currentMsg: e,
    nextMsg: a,
    playedBefore: e.ack === o.ACK.PLAYED
  })) {
    return a;
  } else {
    return null;
  }
};
exports.findSequentialPtv = function (e) {
  const t = e.id;
  const n = (0, r.default)((0, l.getChat)(e.unsafe()).msgs.toArray(), e => t.equals(e.id));
  if (!n) {
    return null;
  }
  return (0, l.getAsPtv)(n);
};
var r = a(require("./449015.js"));
var o = require("../app/402994.js");
var l = require("../app/163755.js");
var i = require("./147914.js");