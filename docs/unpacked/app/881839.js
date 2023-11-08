Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestIdleCallback = exports.cancelIdleCallback = undefined;
const n = window.requestIdleCallback;
const r = window.cancelIdleCallback;
const i = "requestIdleCallback" in window ? n : function (e) {
  return self.setTimeout(() => {
    const t = Date.now();
    e({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    });
  }, 1);
};
exports.requestIdleCallback = i;
const a = "cancelIdleCallback" in window ? r : function (e) {
  self.clearTimeout(e);
};
exports.cancelIdleCallback = a;