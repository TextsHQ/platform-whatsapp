var n = {};
exports.default = function (e, t, r, i, a) {
  var o = n[t] || (n[t] = URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  })));
  var s = new Worker(o);
  s.onerror = function (e) {
    return a(e.error, null);
  };
  s.onmessage = function (e) {
    return a(null, e.data);
  };
  s.postMessage(r, i);
  return s;
};