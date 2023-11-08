Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNoteToSelf = function (e) {
  return e.fromMe && (0, r.isMeAccount)(e.remote);
};
exports.msgKeyToTargetInfo = function (e) {
  const t = e.remote;
  const n = e.fromMe ? (0, r.getMeUser)() : t;
  const i = e.fromMe ? t : (0, r.getMeUser)();
  const a = t.isGroup() ? e.participant : undefined;
  return {
    from: n,
    to: i,
    author: a
  };
};
var r = require("./459857.js");