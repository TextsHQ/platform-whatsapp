Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/368170.js");
["webkitGetUserMedia"].forEach(function (e) {
  const t = Object.getPrototypeOf(navigator)[e];
  if (t && navigator[e] !== t) {
    navigator[e] = t;
  }
});
var r = function () {
  var e;
  if (a.UA.isBrokenGetUserMedia) {
    return null;
  }
  const t = (e = navigator.mediaDevices) === null || e === undefined ? undefined : e.getUserMedia;
  if (t) {
    return t.bind(navigator.mediaDevices);
  }
  const n = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
  if (n) {
    return function (e) {
      return new Promise(function (t, a) {
        n.call(navigator, e, t, a);
      });
    };
  } else {
    return null;
  }
}();
exports.default = r;