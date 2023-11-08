Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVoteKey = function (e) {
  return `${e.parentMsgKey.toString()},${e.sender.toString()}`;
};