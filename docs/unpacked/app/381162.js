Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWaitingForUpload = function () {
  return n;
};
exports.passesSampling = function (e) {
  if (e <= 0) {
    return false;
  }
  if (e >= 1) {
    return true;
  }
  return Math.random() < e;
};
exports.setWaitingForUpload = function (e) {
  n = e;
};
let n = false;