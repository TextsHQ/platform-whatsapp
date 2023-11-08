Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseChatStatus = function (e) {
  let t;
  if (e.name === "Paused") {
    t = "idle";
  } else {
    e.name;
    t = e.value.composingMedia === "audio" ? "recording_audio" : "typing";
  }
  return t;
};