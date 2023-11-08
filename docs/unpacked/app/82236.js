Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (e == null) {
    return null;
  }
  const t = e.replace(/\s+$/, "");
  if (e !== t && Math.random() < 0.00001) {
    __LOG__(3, undefined, undefined, true)`base64 sanitized due to extra whitespace`;
    SEND_LOGS("media-key-sanitize");
  }
  return t;
};