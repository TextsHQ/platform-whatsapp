Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unproxy = function (e) {
  if (e == null ? undefined : e.$ProxyState$state) {
    return e.$ProxyState$state;
  }
  return e;
};