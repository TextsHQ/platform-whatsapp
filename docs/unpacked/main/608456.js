Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPhoneNumberLike = a;
exports.numberSearch = function (e) {
  if (a(e)) {
    return e.replace(/[^0-9]/g, "");
  } else {
    return null;
  }
};
const n = /^[0-9+()\- ]+$/;
function a(e) {
  return n.test(e);
}