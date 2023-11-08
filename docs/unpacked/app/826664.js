Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractInvocationId = function (e) {
  if (e != null && typeof e == "number") {
    return e;
  }
};
exports.genInvocationId = function () {
  return n++;
};
let n = 1;