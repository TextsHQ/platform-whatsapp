Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return (typeof BigInt == "function" ? BigInt : Number)(String(Date.now()) + Math.random().toFixed(4).slice(-4)).toString(36).toUpperCase();
};