Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cachePath = function (e) {
  return Promise.resolve(e);
};
exports.playNotification = function () {
  r.play().catch(() => {});
};
const r = new window.Audio(require("./357895.js"));