Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function* (e) {
  let t = 1;
  for (;;) {
    yield t;
    t *= e;
  }
};