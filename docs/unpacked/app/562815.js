Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  return e instanceof HTMLElement && e.tagName.toLowerCase() === t.toLowerCase();
};