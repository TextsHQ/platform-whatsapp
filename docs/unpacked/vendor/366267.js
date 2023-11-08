exports.__esModule = true;
exports.default = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    t.forEach(function (t) {
      if (t != null) {
        if (typeof t != "function") {
          if (typeof t != "object") {
            console.error("mergeRefs cannot handle refs of type boolean, number, or string. Received ref " + String(t));
          } else {
            t.current = e;
          }
        } else {
          t(e);
        }
      }
    });
  };
};
module.exports = exports.default;