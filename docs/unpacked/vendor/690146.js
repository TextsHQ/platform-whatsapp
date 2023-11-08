exports.__esModule = true;
exports.useMergeRefs = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return r.default.useMemo(function () {
    return i.default.apply(undefined, t);
  }, [].concat(t));
};
var r = a(require("./667294.js"));
var i = a(require("./366267.js"));
function a(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}