function t() {
  module.exports = t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          e[r] = n[r];
        }
      }
    }
    return e;
  };
  module.exports.default = module.exports;
  module.exports.__esModule = true;
  return t.apply(this, arguments);
}
module.exports = t;
module.exports.default = module.exports;
module.exports.__esModule = true;