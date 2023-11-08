Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFirstLeadingSpace = function (e) {
  const t = typeof e == "string" ? [e] : [...e];
  if (typeof t[0] == "string") {
    t[0] = t[0].replace(" ", "");
  }
  return t;
};