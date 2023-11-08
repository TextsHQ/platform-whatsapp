function n(e) {
  if (typeof e == "function") {
    return e();
  } else {
    return e;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResult = undefined;
exports.thunk = n;
const a = n;
exports.getResult = a;