Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return e.replace(/\//g, "_").replace(/\+/g, "-");
};