function n(e, t) {
  return e === t;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
  if (e === t) {
    return true;
  }
  if (e.length !== t.length) {
    return false;
  }
  return e.every((e, n) => r(e, t[n]));
};