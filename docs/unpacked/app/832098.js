Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoStreamingInfo = function (e) {
  const t = e.mediaObject;
  if (t) {
    return t.videoStreamingInfo(e.id.toString());
  } else {
    return null;
  }
};