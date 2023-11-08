Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidPlaybackSequence = function (e) {
  let {
    currentMsg: t,
    nextMsg: n,
    playedBefore: o
  } = e;
  if ((0, a.getAsPttLike)(n.unsafe()) == null) {
    return false;
  }
  if (!(0, r.getIsSentByMe)(n)) {
    return true;
  }
  if ((0, r.getIsSentByMe)(t)) {
    return true;
  }
  return Boolean(o);
};
var a = require("../app/163755.js");
var r = require("../app/787742.js");