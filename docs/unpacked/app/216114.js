Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (!(e instanceof HTMLElement)) {
    return false;
  }
  return n.call(e, t);
};
const n = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;