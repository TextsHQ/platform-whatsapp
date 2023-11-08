exports.__esModule = true;
exports.default = function () {
  return !(typeof window == "undefined" || !window.document || !window.document.createElement);
};
module.exports = exports.default;