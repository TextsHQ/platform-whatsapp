Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msgComparator = function (e, t) {
  if (e.serverId == null || t.serverId == null) {
    return 0;
  }
  return e.serverId - t.serverId;
};